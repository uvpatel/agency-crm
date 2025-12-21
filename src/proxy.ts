// proxy.ts
import { auth } from "@/lib/auth"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export default auth((req: NextRequest) => {
  const isLoggedIn = !!req.auth
  const isDashboardRoute = req.nextUrl.pathname.startsWith("/dashboard")

  if (!isLoggedIn && isDashboardRoute) {
    const loginUrl = new URL("/login", req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})
