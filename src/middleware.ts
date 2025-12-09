import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "./constants/locales";
import { i18n } from "./i18n.config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, etc.
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.startsWith('/robots.txt')
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with any supported locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If it's the default locale, redirect to remove it from URL
    if (
      pathname.startsWith(`/${defaultLocale}/`) ||
      pathname === `/${defaultLocale}`
    ) {
      const newPathname = pathname.replace(
        `/${defaultLocale}`,
        pathname === `/${defaultLocale}` ? "/" : ""
      );

      return NextResponse.redirect(
        new URL(newPathname + request.nextUrl.search, request.url)
      );
    }

    // For non-default locales, continue normally
    return NextResponse.next();
  }

  // If no locale in pathname, check if we need to add one
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Check for locale preference from cookie
    const localeCookie = request.cookies.get('NEXT_LOCALE');
    const preferredLocale = localeCookie?.value;

    // If preferred locale is not default and is supported, rewrite to that locale
    if (
      preferredLocale &&
      preferredLocale !== defaultLocale &&
      i18n.locales.includes(preferredLocale)
    ) {
      return NextResponse.rewrite(
        new URL(
          `/${preferredLocale}${pathname}${request.nextUrl.search}`,
          request.url
        )
      );
    }

    // Otherwise, rewrite to default locale
    return NextResponse.rewrite(
      new URL(
        `/${defaultLocale}${pathname}${request.nextUrl.search}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|fonts.scss|\\.well-known).*)",
  ],
};
