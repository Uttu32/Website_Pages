import React from "react";

const Footer = () => {
  return (
    <div className="footer__gradient  py-4 px-6 text-center">
      <div className="flex text-white font-medium font__primary text-[14px]  md:text-[16px] lg:text-[23px] justify-center  gap-2 sm:flex-row flex-col">
        <a href="#!" className="underline">
          Donate through the Paypal Giving Fund
        </a>
        <span className="sm:block hidden">|</span>
        <a href="#!" className="underline">
          Donate $5 per month
        </a>
        <span className="sm:block hidden">|</span>
        <a href="#!" className="underline">
          Donate any amount
        </a>
      </div>
      <p className="text-white font-medium font__primary text-[10px]  md:text-[14px] lg:text-[16px] mt-1">
        © 2023 My XXY | Chromodiversity™ Foundation. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
