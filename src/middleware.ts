import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/country", "/cart", "/checkout", "/thank-you"];

export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const token = request.cookies.get("firebaseToken")?.value;

  if (isProtected && !token) {
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/country/:path*",
    "/cart/:path*",
    "/checkout/:path*",
    "/thank-you/:path*",
  ],
};
