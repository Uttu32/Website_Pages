import React from "react";

const BoldList = ({ children, Style }) => {
  return (
    <p
      className={`font__primary  text-black text-base sm:text-[22px] before:w-[8px] before:h-[7px] leading-[34px] py-4 pl-6 relative before:absolute before:content-['']   before:top-[28px] sm:before:top-[30px] before:left-0 before:bg-black before:rounded-full  ${
        Style ? "font-light" : "font-normal"
      }`}
    >
      {children}
    </p>
  );
};

export default BoldList;
