import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URL);
const db = client.db("better-auth-project");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true, 
    sendResetPassword: async ({user, url, token}, request) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    }
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify Email",
        html: `<p>Click the link to verify your email: ${url}</p>`,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification:true,
    expiresIn: 60 * 5

  },
  database: mongodbAdapter(db, {
    client,
  }),
});
