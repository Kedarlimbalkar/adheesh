import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import { InquiryModalProvider } from "@/context/inquiry-modal-context";
import { GlobalInquirySheet } from "@/components/shared/global-inquiry-sheet";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adheesh Overseas | Premium Indian Spice & Agro Exporter",
  description:
    "Adheesh Overseas exports premium Indian turmeric, spices, oil seeds, pulses and grains to B2B buyers worldwide. ISO, FSSAI, APEDA & Spices Board certified.",
  metadataBase: new URL("https://adheeshoverseas.in"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <InquiryModalProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <GlobalInquirySheet />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
