import React from "react";

function Footer() {
  return (
    <footer className="footer h-16 sm:footer-horizontal footer-center  shadow-black shadow-2xl text-base-content p-4">
      <aside>
        <p className="font-bold text-md">
          Copyright © {new Date().getFullYear()} - All right reserved by ThinkBoard
         
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
