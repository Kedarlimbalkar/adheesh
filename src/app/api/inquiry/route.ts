import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { getProductById } from "@/data/products";

const inquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  country: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  productId: z.string().min(1),
  volume: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const values = parsed.data;
  const product = getProductById(values.productId);

  // If RESEND_API_KEY is not configured, log the inquiry and return success
  // so the form still works in local/dev environments without email set up.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("New inquiry (email not configured):", { ...values, product: product?.name });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Adheesh Overseas <inquiries@adheeshoverseas.in>",
      to: "sales@adheeshoverseas.in",
      reply_to: values.email,
      subject: `New Export Inquiry: ${product?.name ?? "General"} from ${values.name}`,
      text: `
Name: ${values.name}
Company: ${values.company ?? "-"}
Country: ${values.country}
Email: ${values.email}
Phone: ${values.phone ?? "-"}
Product: ${product?.name ?? values.productId}
Estimated Volume: ${values.volume ?? "-"}

Message:
${values.message}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
