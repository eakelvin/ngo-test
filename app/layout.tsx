import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";

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
    default: "Essential Aid",
  },
  description: "At Essential Aid, we are committed to providing immediate and impactful support to communities in need. Our mission is to deliver essential resources, including food, healthcare, education, and disaster relief, to vulnerable populations worldwide.",
  // icons: {
  //   icon: "https://i.ibb.co/17kpK6P/E7-B6-C8-A3-CE77-4-DF1-9-B43-66316-C319396.png",
  // },
  openGraph: {
    title: "Essential Aid",
    description: "At Essential Aid, we are committed to providing immediate and impactful support to communities in need. Our mission is to deliver essential resources, including food, healthcare, education, and disaster relief, to vulnerable populations worldwide.",
    type: "website",
    // images: main.src,
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Aid",
    description: "At Essential Aid, we are committed to providing immediate and impactful support to communities in need. Our mission is to deliver essential resources, including food, healthcare, education, and disaster relief, to vulnerable populations worldwide.",
    site: "@CediRates",
    // images: main.src,
  },
  alternates: {
    canonical: "https://cedirates.com/",
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
