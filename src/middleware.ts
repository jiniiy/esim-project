import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/country", "/cart", "/checkout", "/thank-you"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const token = request.cookies.get("firebaseToken")?.value;

  if (isProtected && !token) {
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("redirect", encodeURIComponent(pathname));
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: protectedRoutes.map((route) => `${route}/:path*`),
};
