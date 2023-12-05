import React from "react";

const NormalLinkText = ({ Style, children }) => {
  return <p className={`font__primary text-black py-2 ${Style}`}>{children}</p>;
};

export default NormalLinkText;
