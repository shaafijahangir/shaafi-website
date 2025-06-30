import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import dotenv from "dotenv";

// Load .env only in local dev -------------------------------------------
if (process.env.NODE_ENV !== "production") dotenv.config();
// ------------------------------------------------------------------------

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  try {
    console.log(name, email, message);
    await resend.emails.send({
      from: "Portfolio <hi@shaafi.dev>",
      to:   "mshaafijahangir@gmail.com",
      subject: `📬 New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
      // correct snake-case key expected by Resend
      reply_to: email,
    } as any);            // cast so TypeScript stops complaining

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Email failed" });
  }
}
