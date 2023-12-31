import React from "react";

const ListText = ({ text, Style, smallSize }) => {
  return (
    <p
      className={`font__primary  text-black text-base sm:text-[22px]  leading-[34px] py-4 pl-6 relative before:absolute before:content-[''] ${
        smallSize
          ? "before:w-[7px] before:h-[7px] before:top-[28px] sm:before:top-[30px]"
          : "before:w-[8px] before:h-[8px] sm:before:w-[11px] sm:before:h-[11px] before:top-[28px] sm:before:top-[25px]"
      }  before:left-0 before:bg-black before:rounded-full  ${
        Style ? "font-light" : "font-normal"
      }`}
    >
      {text}
    </p>
  );
};

export default ListText;
