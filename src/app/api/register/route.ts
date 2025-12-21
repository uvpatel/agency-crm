// app/api/register/route.ts
import bcrypt from "bcryptjs"
import crypto from "crypto"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import Token from "@/models/VerificationToken"
import { resend } from "@/lib/resend"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  await connectDB()

  const exists = await User.findOne({ email })
  if (exists)
    return Response.json({ error: "User exists" }, { status: 400 })

  const hashed = await bcrypt.hash(password, 10)
  const token = crypto.randomUUID()

  await User.create({
    email,
    password: hashed,
  })

  await Token.create({
    email,
    token,
    expires: new Date(Date.now() + 3600000),
  })

  const verifyUrl = `${process.env.NEXT_PUBLIC_URL}/api/verify-email?token=${token}`

  await resend.emails.send({
    from: "Auth <onboarding@resend.dev>",
    to: email,
    subject: "Verify your email",
    html: `<p>Click to verify:</p><a href="${verifyUrl}">Verify Email</a>`,
  })

  return Response.json({ success: true })
}
