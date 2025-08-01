import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThinkBoard",
  description: "Platform to take notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className="flex flex-colsize-full min-h-screen"
        suppressHydrationWarning
        style={{ fontFamily: 'Manrope, \"Noto Sans\", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
