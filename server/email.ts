import { MailService } from '@sendgrid/mail';
import type { ContactSubmission } from "../shared/schema";

// Create mail service instance
const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will not work.");
}

/**
 * Sends an email notification when a new contact form is submitted
 * @param submission The contact form submission data
 * @returns Promise<boolean> - True if email was sent successfully, false otherwise
 */
export async function sendContactNotificationEmail(
  submission: ContactSubmission
): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("Email not sent: SENDGRID_API_KEY is missing");
    return false;
  }
  
  try {
    // Create the email content
    const msg = {
      to: "hussainimam78621@gmail.com", // Your email address
      from: "hussainimam78621@gmail.com", // Must be a verified sender in your SendGrid account
      subject: `New Contact Form Submission from ${submission.name}`,
      content: [
        {
          type: "text/html",
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Subject:</strong> ${submission.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${submission.message.replace(/\n/g, '<br>')}</p>
          `
        }
      ]
    };
    
    await mailService.send(msg);
    console.log(`Contact notification email sent to ${msg.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}