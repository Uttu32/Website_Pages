import React from "react";

const Normal = ({ title, Style }) => {
  return <p className={`font__primary text-black py-2 ${Style}`}>{title}</p>;
};

export default Normal;
