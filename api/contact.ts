// api/contacts.ts
import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  try {
    const data = await resend.emails.send({
      // 👉 use your verified sender or the sandbox address:
      from: "onboarding@resend.dev",
      to: ["mshaafijahangir@gmail.com"],
      subject: `📬 New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: email,
    });

    /* Resend returns { data, error } */
    if (data.error) {
      console.error("Resend error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ ok: true });
    
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Email failed server-side" });
  }
}
