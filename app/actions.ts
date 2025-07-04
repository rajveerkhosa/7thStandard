"use server"

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Here you would typically integrate with an email service like SendGrid, Resend, etc.
  // For now, we'll simulate the email sending

  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would send the email here
    // Example with a service like Resend:
    // await resend.emails.send({
    //   from: 'contact@fueluptruckstop.com',
    //   to: 'rajveerskhosa@outlook.com',
    //   subject: `New Contact Form Message from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    console.log("Email would be sent to rajveerskhosa@outlook.com:", {
      name,
      email,
      message,
    })

    return { success: true, message: "Thank you! Your message has been sent successfully." }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, message: "Sorry, there was an error sending your message. Please try again." }
  }
}
