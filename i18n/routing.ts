import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Забонҳое, ки дастгирӣ мешаванд
  locales: ['en', 'tg', 'ru'],
  // Забони пешфарз (default)
  defaultLocale: 'tg'
});

// Барои он ки Link-ҳо автоматӣ забонро илова кунанд
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);