// app/api/verify-email/route.ts
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import Token from "@/models/VerificationToken"

export async function GET(req: Request) {
  const token = new URL(req.url).searchParams.get("token")

  await connectDB()

  const record = await Token.findOne({ token })
  if (!record || record.expires < new Date())
    return new Response("Invalid token", { status: 400 })

  await User.updateOne(
    { email: record.email },
    { emailVerified: new Date() }
  )

  await Token.deleteOne({ token })

  return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/login`)
}
