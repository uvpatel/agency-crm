import { Schema, model, models } from "mongoose"

const VerificationTokenSchema = new Schema({
  email: String,
  token: String,
  expires: Date,
})

export default models.VerificationToken ||
  model("VerificationToken", VerificationTokenSchema)