import {connectToDatabase} from "../../utils/mongodb"
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end() // Method Not Allowed
  }

  const {email, password} = req.body

  // Validate email and password (add more validation as needed)

  const {db} = await connectToDatabase()

  const user = await db.collection("users").findOne({email})

  if (!user) {
    return res.status(401).json({error: "Invalid email or password"})
  }

  // Check if the provided password matches the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return res.status(401).json({error: "Invalid email or password"})
  }

  // Authentication successful
  return res.status(200).json({message: "Login successful"})
}
