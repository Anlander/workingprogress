import { Resend } from "resend";

const usermail = process.env.MARKNAD_EMAIL;
const resend = new Resend("re_Kj5o8m5t_DDUhMTapehHYojfacuggugKz");

export async function POST(req: Request) {
  const { name, email, message, phone } = await req.json();

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${email}</h3>
      <p>Tel: ${phone}</p>
      <p>Meddelande: ${message}</p>
    </div>
  `;
  try {
    const { data, error } = await resend.emails.send({
      from: "Notifikation: Kontakt Form <onboarding@resend.dev>",
      to: [`${usermail}`],
      subject: `Notifikation: Kund ${name}`,
      html: messageBody,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
