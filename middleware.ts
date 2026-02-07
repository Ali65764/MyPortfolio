import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'az', 'ru']
const defaultLocale = "en"

function getLocale(request: Request) {
    const negotiatorHeaders: Record<string, string> = {
        'accept-language': request.headers.get("accept-language") || '',
    }
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    const matchedLocale = match(languages, locales, defaultLocale);
    return matchedLocale
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    
    // Static faylları (şəkilləri) yoxla və keç
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|css|js|pdf)$/)
    ) {
        return NextResponse.next()
    }
    
    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and static files
        '/((?!_next|api|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.ico|.*\\.webp|.*\\.pdf).*)',
    ],
}