import React from "react";

const SubTitle = ({ title, size }) => {
  return (
    <h4 className={`font__primary text-black font-semibold ${size}  underline`}>
      {title}
    </h4>
  );
};

export default SubTitle;
