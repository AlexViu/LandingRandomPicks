import type { APIRoute } from 'astro';
import { ADSENSE_CLIENT } from '../lib/ads';

// /ads.txt: declara a Google como vendedor autorizado del inventario del sitio.
export const GET: APIRoute = () => {
  const body = ADSENSE_CLIENT
    ? `google.com, ${ADSENSE_CLIENT.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`
    : '# Sin vendedores de publicidad autorizados.\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
