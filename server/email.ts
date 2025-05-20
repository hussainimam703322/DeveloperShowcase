import { MailService } from '@sendgrid/mail';
import { ContactSubmission } from '@/shared/schema';

const mailService = new MailService();

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will not work.");
} else {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendContactNotificationEmail(
  submission: ContactSubmission
): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("Email not sent: SENDGRID_API_KEY is missing");
    return false;
  }
  
  try {
    const params: EmailParams = {
      to: "hussainimam78621@gmail.com", // Your email address
      from: "portfolio@ascenthub.com", // This should be a verified sender in your SendGrid account
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Subject:</strong> ${submission.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${submission.name}
        Email: ${submission.email}
        Subject: ${submission.subject}
        Message: ${submission.message}
      `
    };
    
    await mailService.send(params);
    console.log(`Contact notification email sent to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}