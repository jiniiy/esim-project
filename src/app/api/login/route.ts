import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  try {
    const decoded = await adminAuth.verifyIdToken(idToken);

    const cookieStore = await cookies();
    cookieStore.set("firebaseToken", idToken, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ uid: decoded.uid });
  } catch (error) {
    console.error("Token verify failed:", error);
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
