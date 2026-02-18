import nodemailer from "nodemailer";

import { NextResponse } from "next/server"

//ENV VARIABLES
const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = Number(process.env.SMTP_PORT!);
const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASS!;
const TO_EMAIL = process.env.TO_EMAIL!;

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      service,
      details,
    } = await req.json();

    if (!firstName || !lastName || !email || !phoneNumber || !service || !details) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      service: "gmail",
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Buildsafe Enquiry Form" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: "Buildsafe Enquiry Form",
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone number:</strong> ${phoneNumber}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Project Details </strong></p>
        <p>${details}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}