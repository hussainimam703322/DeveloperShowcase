import nodemailer from 'nodemailer';
import type { ContactSubmission } from "../shared/schema";

// Zoho Mail configuration
const ZOHO_HOST = 'smtp.zoho.com';
const ZOHO_PORT = 465;
const ZOHO_USER = 'hussainimam78621@gmail.com'; // Your Zoho email
// Note: Using app-specific password instead of API key for Zoho Mail
// You'll need to generate an app-specific password in your Zoho Mail account
const ZOHO_PASSWORD = '1c976dfd7cd7154c7b5d4d740e6e0d9e';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: ZOHO_HOST,
  port: ZOHO_PORT,
  secure: true, // true for port 465
  auth: {
    user: ZOHO_USER,
    pass: ZOHO_PASSWORD
  }
});

/**
 * Sends an email notification when a new contact form is submitted
 * @param submission The contact form submission data
 * @returns Promise<boolean> - True if email was sent successfully, false otherwise
 */
export async function sendContactNotificationEmail(
  submission: ContactSubmission
): Promise<boolean> {
  try {
    // Create mail options
    const mailOptions = {
      from: ZOHO_USER,
      to: ZOHO_USER, // Send to yourself
      subject: `AscentHub: New Contact from ${submission.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #4f46e5; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${submission.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
          <p><strong>Subject:</strong> ${submission.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${submission.message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">This message was sent from your AscentHub portfolio website.</p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${submission.name}
Email: ${submission.email}
Subject: ${submission.subject}

Message:
${submission.message}

This message was sent from your AscentHub portfolio website.
      `
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}