import type { APIRoute } from 'astro';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: import.meta.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: import.meta.env.MAIL_USER,
    pass: import.meta.env.MAIL_PASSWORD,
  },
});

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  try {
    await transporter.sendMail({
      from: `"srodier contact form" <${import.meta.env.MAIL_USER}>`,
      to: import.meta.env.MAIL_TO,
      subject: 'Contact request',
      text: 'Success! Email successfully sent',
      html: `
        <div>Message: ${formData.get('message')}</div>
      `,
    });

    return new Response(
      JSON.stringify({
        message: 'Success!',
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        message: error,
      }),
      { status: 200 },
    );
  }
};
