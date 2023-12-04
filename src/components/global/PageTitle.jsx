import React from "react";

const PageTitle = ({ title }) => {
  return (
    <h2 className="font__primary text-[#6931AA] font-semibold text-3xl sm:text-4xl md:text-5xl py-14 text-center">
      {title}
    </h2>
  );
};

export default PageTitle;
