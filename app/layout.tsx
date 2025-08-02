import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "@/components/auth/session-wrapper";

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
        className="flex flex-col size-full min-h-screen"
        suppressHydrationWarning
        // style={{ fontFamily: 'Manrope, \"Noto Sans\", sans-serif' }}
      >
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
