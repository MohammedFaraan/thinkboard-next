import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/auth/session-wrapper";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "ThinkBoard",
  description: "Platform to take notes",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
        style={{ fontFamily: 'Manrope, \"Noto Sans\", sans-serif' }}
      >
        {" "}
        <SessionWrapper>{children}</SessionWrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
