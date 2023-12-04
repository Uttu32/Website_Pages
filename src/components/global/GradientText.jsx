import React from "react";

const GradientText = ({ title }) => {
  return (
    <p className="gradient__background font__secondary text-base sm:text-2xl font-medium text-white py-3 px-4 sm:px-6 text-center mb-4 md:mb-0">
      {title}
    </p>
  );
};

export default GradientText;
