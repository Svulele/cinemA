import { NextResponse, type NextRequest } from "next/server";

// This concept has no authenticated admin or API surface. Deny those paths
// explicitly so a future route cannot accidentally be exposed without review.
export function proxy(_request: NextRequest) {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export const config = { matcher: ["/admin/:path*", "/api/:path*"] };
