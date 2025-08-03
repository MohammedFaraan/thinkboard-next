// app/notes/layout.tsx
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';

export default function Layout({
  options,
  usernotes,
}: {
  options: ReactNode;
  usernotes: ReactNode;
}) {
  return (
    <div className="">
        <Navbar />
      <div className='flex h-full'>
        {/* Sidebar */}
      {/* <aside className="w-64 border-r border-amber-700 shadow-2xl p-4">
        {options}
      </aside> */}

      {/* Main Content */}
      <main className="flex-1  p-6 overflow-auto">
        {usernotes}
      </main>
      </div>
    </div>
  );
}
