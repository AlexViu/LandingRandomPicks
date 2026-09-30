// Ranking de SharpTimer (bhop/surf), vía la ranking API
// (https://github.com/josesilvaruiz/sharptimer-ranking-api), que es la única que toca
// la base de datos MariaDB de SharpTimer — el mismo bot de Discord (sharptimer-bot)
// la consume igual, para que la web y Discord muestren siempre lo mismo.
//
// Configuración por variables de entorno (en runtime, no en build):
//   RANKING_API_URL (p.ej. http://ranking-api.ranking-api.svc.cluster.local:8088)
//   RANKING_API_KEY

export interface TopRow { steamId: string; name: string; points: number; }
export interface PlayerRow extends TopRow { position: number; }
export interface MapTimeRow { name: string; time: string; finishes: number; }
export interface MapRow { map: string; players: number; }
export interface PbRow { name: string; steamId: string; time: string; finishes: number; position: number; total: number; }

const API_URL = process.env.RANKING_API_URL ?? 'http://127.0.0.1:8088';
const API_KEY = process.env.RANKING_API_KEY ?? '';

async function get<T>(path: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(path, API_URL);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));
  const res = await fetch(url, { headers: { 'X-Api-Key': API_KEY } });
  if (!res.ok) throw new Error(`ranking API ${path}: HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export function fetchGlobalTop(limit: number): Promise<TopRow[]> {
  return get<TopRow[]>('/top', { limit });
}

export function fetchPlayerRank(search: string): Promise<PlayerRow[]> {
  return get<PlayerRow[]>('/rank', { q: search });
}

export function fetchMapTop(map: string, limit: number): Promise<MapTimeRow[]> {
  return get<MapTimeRow[]>('/maptop', { map, limit });
}

// Igual que /pb del bot: PB de un jugador en un mapa y su puesto en ese mapa.
export function fetchPlayerPbOnMap(map: string, search: string): Promise<PbRow[]> {
  return get<PbRow[]>('/pb', { map, q: search });
}

export function fetchMaps(): Promise<MapRow[]> {
  return get<MapRow[]>('/maps');
}
