'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getEmailHtml(name, email, message) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
                <td style="padding: 20px 0; text-align: center; background-color: #008000;">
                    <h1 style="color: #ffffff; font-size: 24px; margin: 0;">New Contact Form Submission</h1>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                        <tr>
                            <td style="padding: 20px;">
                                <h2 style="color: #333333; font-size: 25px; margin-top: 0;">Contact Details:</h2>
                                <p style="margin-bottom: 10px; font-size: 18px;"><strong>Name:</strong> ${name}</p>
                                <p style="margin-bottom: 10px; font-size: 18px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></p>
                                <h3 style="color: #333333; font-size: 18px; margin-top: 20px;">Message:</h3>
                                <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px; font-size: 16px;">${message}</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px; text-align: center; color: #888888; font-size: 14px;">
                    <p>This email was sent from your DataHaul's contact form.</p>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;
}

export async function sendEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const htmlContent = getEmailHtml(name, email, message);

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'info@datahaulinc.com',
      subject: 'New Contact Form Submission',
      html: htmlContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
}