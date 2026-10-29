// Novedades del servidor, de la más reciente a la más antigua. El texto completo de cada una está en
// src/pages/novedades.astro (sección con id = slug); aquí va lo que usan la portada y el índice de la página.
// La portada es bilingüe, así que el título y el resumen van también en inglés.
export interface NewsItem {
  slug: string;
  /** Fecha ISO, para <time datetime>. */
  date: string;
  dateLabel: string;
  dateLabelEn: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
}

export const NEWS: NewsItem[] = [
  {
    slug: 'mapas-octubre',
    date: '2026-10-28',
    dateLabel: 'Octubre de 2026',
    dateLabelEn: 'October 2026',
    title: '26 mapas nuevos en Minigames',
    titleEn: '26 new maps on Minigames',
    summary: 'Deathrun, minigolf, mapas de Halloween y una tanda de courses portados de CS:GO.',
    summaryEn: 'Deathrun, minigolf, Halloween maps and a batch of courses ported from CS:GO.',
  },
  {
    slug: 'logros',
    date: '2026-10-23',
    dateLabel: '23 de octubre de 2026',
    dateLabelEn: 'October 23, 2026',
    title: 'Logros en los dos servidores',
    titleEn: 'Achievements on both servers',
    summary: '38 logros por terminar recorridos, batir récords o simplemente jugar. Cuentan también tus tiempos anteriores.',
    summaryEn: '38 achievements for finishing runs, beating records or just playing. Your previous times count too.',
  },
  {
    slug: 'tienda',
    date: '2026-10-23',
    dateLabel: '23 de octubre de 2026',
    dateLabelEn: 'October 23, 2026',
    title: 'Tienda nueva dentro del HUD',
    titleEn: 'New in-HUD store',
    summary: 'La tienda se abre en pantalla con pestañas, categorías y vista previa de cada skin.',
    summaryEn: 'The store now opens on screen with tabs, categories and a preview of every skin.',
  },
  {
    slug: 'hud-y-votaciones',
    date: '2026-10-12',
    dateLabel: '12 de octubre de 2026',
    dateLabelEn: 'October 12, 2026',
    title: 'HUD propio, menú de ayuda y nuevas votaciones',
    titleEn: 'Custom HUD, help menu and new map votes',
    summary: 'Un HUD con menús que no tapa el chat, todos los comandos en !help y votaciones de mapa más variadas.',
    summaryEn: 'A HUD with menus that does not cover the chat, every command in !help and more varied map votes.',
  },
  {
    slug: 'halloween',
    date: '2026-10-05',
    dateLabel: '5 de octubre de 2026',
    dateLabelEn: 'October 5, 2026',
    title: 'Evento de Halloween',
    titleEn: 'Halloween event',
    summary: 'Sonidos de miedo durante las partidas y mapas temáticos de Halloween en la rotación.',
    summaryEn: 'Spooky sounds during matches and Halloween-themed maps in the rotation.',
  },
];
