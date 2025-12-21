import { Schema, model, models } from "mongoose"

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    emailVerified: Date,
    image: String,
    provider: String,
  },
  { timestamps: true }
)

export default models.User || model("User", UserSchema)