import nodemailer from 'nodemailer';

type ContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactNotificationEmail(
  submission: ContactSubmission
): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: '8d950b001@smtp-brevo.com',
        pass: 'yK6dQjtgv7XzTF1E' 
      }
    });

    await transporter.sendMail({
      from: `"TheHPortfolio" <hussainengineer2025@gmail.com>`,
      to: 'hussainimam78621@gmail.com',
      subject: `New Contact Form Submission: ${submission.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#4f46e5;">New Contact Message</h2>
          <p><strong>Name:</strong> ${submission.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
          <p><strong>Subject:</strong> ${submission.subject}</p>
          <p><strong>Message:</strong><br>${submission.message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    });

    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}
