import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connectDB } from "./lib/db";
import { User } from "./models/User";

export const { handlers, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    // Google({
    //   clientId: process.env.AUTH_GOOGLE_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET,
    // }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login", // Use our custom login page
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("Signing in...");
      if (account?.provider === "github") {
        await connectDB();

        const u = await User.findOneAndUpdate(
          { email: user.email! },
          {
            name: user.name!,
            email: user.email!,
            profilePic: user.image!,
          },
          { upsert: true }
        );
        return true;
      }
      return false;
    },
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.id = dbUser._id!;
      session.user.name = dbUser.name!;
      session.user.email = dbUser.email!;
      return session;
    },
  },
});
