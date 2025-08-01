import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
      <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
        <a
          className="text-[#5c738a] text-base font-normal leading-normal min-w-40"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-[#5c738a] text-base font-normal leading-normal min-w-40"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-[#5c738a] text-base font-normal leading-normal min-w-40"
          href="#"
        >
          Contact Us
        </a>
      </div>
      <p className="text-[#5c738a] text-base font-normal leading-normal">
        © 2023 ThinkBoard. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
