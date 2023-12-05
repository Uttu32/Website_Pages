import React from "react";

const SubTitle = ({ title, size }) => {
  return (
    <h4 className={` font__primary text-black font-semibold ${size}`}>
      {title}
    </h4>
  );
};

export default SubTitle;
