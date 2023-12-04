import React from "react";

const ListText = ({ text }) => {
  return (
    <p className="font__primary font-normal text-black text-base sm:text-[22px] before:w-[8px] before:h-[8px] leading-[34px] py-4 pl-6 relative before:absolute before:content-[''] sm:before:w-[11px] sm:before:h-[11px] before:top-[28px] sm:before:top-[25px] before:left-0 before:bg-black before:rounded-full">
      {text}
    </p>
  );
};

export default ListText;
