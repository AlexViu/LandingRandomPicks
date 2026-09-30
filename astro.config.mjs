// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    // La web sigue siendo estática; solo las páginas con `prerender = false`
    // (p. ej. /ranking) se renderizan en el servidor en cada petición.
    output: 'static',
    adapter: node({ mode: 'standalone' }),
    vite: {
        server: {
            allowedHosts: ['randompicks.es', 'www.randompicks.es'],
            watch: {
                ignored: [
                    '**/.vs/**',
                    '**/.git/**',
                    '**/node_modules/**',
                ],
            },
        },
    },
});
