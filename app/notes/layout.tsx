// app/notes/layout.tsx
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 flex flex-col w-full ">
      <Navbar />
      {children}
    </div>
  );
}
