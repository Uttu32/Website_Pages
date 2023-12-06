import React from "react";

const NormalLinkText = ({ Style, children, animate }) => {
  return (
    <>
      {animate ? (
        <p
          data-aos="flip-left"
          data-aos-duration="1000"
          className={`font__primary text-black py-2 ${Style}`}
        >
          {children}
        </p>
      ) : (
        <p className={`font__primary text-black py-2 ${Style}`}>{children}</p>
      )}
    </>
  );
};

export default NormalLinkText;
