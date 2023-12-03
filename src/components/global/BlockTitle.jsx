import React from "react";

const BlockTitle = ({ id, title }) => {
  return (
    <h3 className="font__primary font-black font-medium text-4xl w-[600px] border border-[#6931AA] bg-[#FDF5FF] rounded-r-md overflow-hidden pl-[70px]">
      <span className="pr-3">{id}.</span>
      {title}
    </h3>
  );
};

export default BlockTitle;
