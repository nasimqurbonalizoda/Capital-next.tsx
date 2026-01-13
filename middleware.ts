import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Танҳо ин масирҳоро коркард мекунад
  matcher: ['/', '/(tg|en|ru)/:path*']
};