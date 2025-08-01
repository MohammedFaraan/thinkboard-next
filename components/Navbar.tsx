import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar bg-base-100 shadow-sm px-5">
        <div className="navbar-start gap-x-1.5">
            <img src="/logo.png" alt="logo" />
          <Link href={"/"} className="font-bold text-xl ">ThinkBoard</Link>
        </div>

        <div className="navbar-end">
          <Link href={"/login"} className="btn btn-info  rounded-xl ">Get Started</Link>
        </div>
      </nav>
      
    </header>
  );
}

export default Navbar;
