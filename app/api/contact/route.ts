export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'woodooalda@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'woodooalda@gmail.com',
            subject: `Nová poptávka od ${name}`,
            text: message,
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}