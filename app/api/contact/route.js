import nodemailer from 'nodemailer'

export async function POST(request){
  try {
    const body = await request.json()
    const {name, email, message} = body
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      text: message,
      html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    })
  
    return new Response(
      JSON.stringify({success: true, message: "Email sent successfully"}),
      {status: 200}
    )
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email" }),
      { status: 500 }
    );
  }
}