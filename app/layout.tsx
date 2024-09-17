import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";
import main from '@/assets/images/aid.webp'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Essential Aid",
    default: "Essential Aid | Empowering Communities, Delivering Hope",
  },
  description: "Essential Aid provides support to communities in need. Our mission is to deliver resources to vulnerable populations worldwide.",
  openGraph: {
    title: "Essential Aid | Empowering Communities, Delivering Hope",
    description: "At Essential Aid, we are committed to providing immediate and impactful support to communities in need. Our mission is to deliver essential resources to vulnerable populations worldwide.",
    type: "website",
    images: main.src,
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Aid | Empowering Communities, Delivering Hope",
    description: "At Essential Aid, we are committed to providing immediate and impactful support to communities in need. Our mission is to deliver essential resources, including food, healthcare, education, and disaster relief, to vulnerable populations worldwide.",
    images: main.src,
  },
  alternates: {
    canonical: "https://ngo-test-six.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
