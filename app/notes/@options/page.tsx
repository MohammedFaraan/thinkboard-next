// app/notes/@options/page.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="flex flex-col space-y-4">
      <Link href="/notes">Home</Link>
      <Link href="/notes/shared">Shared</Link>
      <Link href="/notes/tags">Tags</Link>
      <Link href="/notes/settings">Settings</Link>
    </nav>
  );
}
