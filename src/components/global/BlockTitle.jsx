import React from "react";

const BlockTitle = ({ id, title }) => {
  return (
    <h3 className=" font__primary text-black font-medium inline text-xl sm:text-4xl border-l-0 border border-[#6931AA] bg-[#FDF5FF] rounded-r-md pl-[20px] sm:pl-[70px] pr-2 sm:pr-8 overflow-hidden">
      <span className="pr-3">{id}</span>
      {title}
    </h3>
  );
};

export default BlockTitle;
