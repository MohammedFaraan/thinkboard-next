// app/notes/@options/page.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="h-full flex-1 flex flex-col  text-base-content space-y-4 p-4 bg-base-200 " >
      <Link href="/notes" className=''>Home</Link>
      <Link href="/notes/shared">Shared</Link>
      {/* <Link href="/notes/tags">Tags</Link> */}
      <Link href="/notes/settings">Settings</Link>
    </nav>
    
  );
}
