import React from "react";

const ListText = ({ text }) => {
  return (
    <p className="font__primary font-normal text-black text-[22px] leading-[34px] py-4 pl-6 relative before:absolute before:content-[''] before:w-[11px] before:h-[11px] before:top-[25px] before:left-0 before:bg-black before:rounded-full">
      {text}
    </p>
  );
};

export default ListText;
