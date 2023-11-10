import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {MongoDBAdapter} from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackUrl: "http://localhost:3000/",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
    }),
  ],
})
