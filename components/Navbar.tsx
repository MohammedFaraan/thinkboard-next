"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const { data: session } = useSession({ required: true });
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };
  return (
    <header className="w-full">
      <nav className="navbar shadow-sm px-3 sm:px-5 ">
        <Link href={"/"} className="navbar-start gap-x-1">
          <Image src="/favicon.ico" alt="logo" width={25} height={25} />
          <span className="font-bold text-xl my-auto">ThinkBoard</span>
        </Link>

        <div className="navbar-end">
          {session?.user ? (
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 ">
                <li>
                  <details>
                    <summary className="font-bold btn">
                      <span className="text-[12px] text-md ">{`Welcome ${session?.user?.name}`}</span>
                    </summary>

                    <ul className="bg-base-100 top-9 right-2 z-1 w-40 p-2">
                      <li>
                        <Link href={"/notes"}>Notes</Link>
                      </li>
                      <div className="w-full h-0.5 bg-slate-500 my-1"></div>
                      <li>
                        <button onClick={handleSignOut}>Logout</button>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href={"/login"}
              // onClick={() => signIn("github")}
              className="btn rounded-xl"
            >
              Get Started
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
