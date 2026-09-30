// Ranking de SharpTimer (bhop/surf), leído en SOLO LECTURA de la misma base de
// datos MariaDB que usa el plugin y el bot de Discord (sharptimer-bot).
// Las consultas y el sistema de puntos son exactamente los del bot (/top, /maptop,
// /pb, /rank, /maps), para que la web y Discord muestren siempre lo mismo.
//
// Configuración por variables de entorno (en runtime, no en build):
//   RANKING_DB_HOST, RANKING_DB_PORT, RANKING_DB_USER, RANKING_DB_PASSWORD, RANKING_DB_NAME

import mysql from 'mysql2/promise';
import type { Pool, RowDataPacket } from 'mysql2/promise';

export interface TopRow { steamId: string; name: string; points: number; }
export interface PlayerRow extends TopRow { position: number; }
export interface MapTimeRow { name: string; time: string; finishes: number; }
export interface MapRow { map: string; players: number; }
export interface PbRow { name: string; steamId: string; time: string; finishes: number; position: number; total: number; }

const CACHE_MS = 60_000;

let pool: Pool | null = null;
function getPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.RANKING_DB_HOST ?? '127.0.0.1',
      port: Number(process.env.RANKING_DB_PORT ?? 3306),
      user: process.env.RANKING_DB_USER ?? 'sharptimer_user',
      password: process.env.RANKING_DB_PASSWORD,
      database: process.env.RANKING_DB_NAME ?? 'sharptimer_db',
      connectionLimit: 4,
      connectTimeout: 5_000,
      supportBigNumbers: true,
      bigNumberStrings: true,
    });
  }
  return pool;
}

const cache = new Map<string, { at: number; value: unknown }>();
async function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.value as T;
  const value = await load();
  cache.set(key, { at: Date.now(), value });
  return value;
}

async function query(sql: string, params: unknown[] = []): Promise<RowDataPacket[]> {
  const [rows] = await getPool().query<RowDataPacket[]>(sql, params);
  return rows;
}

// Puntos por jugador: en cada mapa+modo, 1000 * (total - puesto + 1) / total, sumado.
const TOTALS_CTE = `
  WITH ranked AS (
    SELECT SteamID, PlayerName, MapName, Mode,
           RANK() OVER (PARTITION BY MapName, Mode ORDER BY TimerTicks ASC) AS rnk,
           COUNT(*) OVER (PARTITION BY MapName, Mode) AS total
    FROM PlayerRecords
  ),
  totals AS (
    SELECT SteamID, MAX(PlayerName) AS PlayerName,
           ROUND(SUM(1000.0 * (total - rnk + 1) / total)) AS Points
    FROM ranked
    GROUP BY SteamID
  )`;

export function fetchGlobalTop(limit: number): Promise<TopRow[]> {
  return cached(`top:${limit}`, async () => {
    const rows = await query(
      `${TOTALS_CTE}
       SELECT SteamID, PlayerName, Points FROM totals ORDER BY Points DESC LIMIT ?`,
      [limit],
    );
    return rows.map((r) => ({ steamId: String(r.SteamID), name: r.PlayerName, points: Number(r.Points) }));
  });
}

export function fetchPlayerRank(search: string): Promise<PlayerRow[]> {
  const bySteamId = /^\d{15,}$/.test(search);
  return cached(`rank:${search.toLowerCase()}`, async () => {
    const rows = await query(
      `${TOTALS_CTE}
       SELECT PlayerName, Points, SteamID,
              (SELECT COUNT(*) + 1 FROM totals AS t2 WHERE t2.Points > t1.Points) AS Position
       FROM totals AS t1
       WHERE ${bySteamId ? 'SteamID = ?' : 'PlayerName LIKE ?'}
       ORDER BY Points DESC
       LIMIT 10`,
      [bySteamId ? search : `%${search}%`],
    );
    return rows.map((r) => ({
      steamId: String(r.SteamID), name: r.PlayerName, points: Number(r.Points), position: Number(r.Position),
    }));
  });
}

export function fetchMapTop(map: string, limit: number): Promise<MapTimeRow[]> {
  return cached(`map:${map}:${limit}`, async () => {
    const rows = await query(
      `SELECT PlayerName, FormattedTime, TimesFinished
       FROM PlayerRecords
       WHERE MapName = ?
       ORDER BY TimerTicks ASC
       LIMIT ?`,
      [map, limit],
    );
    return rows.map((r) => ({ name: r.PlayerName, time: r.FormattedTime, finishes: Number(r.TimesFinished) }));
  });
}

// Igual que /pb del bot: PB de un jugador en un mapa y su puesto en ese mapa.
export function fetchPlayerPbOnMap(map: string, search: string): Promise<PbRow[]> {
  const bySteamId = /^\d{15,}$/.test(search);
  return cached(`pb:${map}:${search.toLowerCase()}`, async () => {
    const rows = await query(
      `WITH ranked AS (
         SELECT SteamID, PlayerName, FormattedTime, TimesFinished,
                RANK() OVER (ORDER BY TimerTicks ASC) AS Position,
                COUNT(*) OVER () AS TotalPlayers
         FROM PlayerRecords
         WHERE MapName = ?
       )
       SELECT PlayerName, SteamID, FormattedTime, TimesFinished, Position, TotalPlayers
       FROM ranked
       WHERE ${bySteamId ? 'SteamID = ?' : 'PlayerName LIKE ?'}
       ORDER BY Position ASC
       LIMIT 10`,
      [map, bySteamId ? search : `%${search}%`],
    );
    return rows.map((r) => ({
      name: r.PlayerName, steamId: String(r.SteamID), time: r.FormattedTime,
      finishes: Number(r.TimesFinished), position: Number(r.Position), total: Number(r.TotalPlayers),
    }));
  });
}

export function fetchMaps(): Promise<MapRow[]> {
  return cached('maps', async () => {
    const rows = await query(
      `SELECT MapName, COUNT(DISTINCT SteamID) AS Jugadores
       FROM PlayerRecords
       GROUP BY MapName
       ORDER BY MapName ASC`,
    );
    return rows.map((r) => ({ map: r.MapName, players: Number(r.Jugadores) }));
  });
}
