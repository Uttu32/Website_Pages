import React from "react";

const PurpleBoxText = ({ img, title, subtitle, Style, height }) => {
  return (
    <div
      className={`bg-[#6931AA] px-5 md:px-[70px] flex-col sm:flex-row flex items-center ${
        height ? height : "sm:max-h-[145px]"
      }  py-4 sm:py-0 mb-8 sm:mb-40  sm:overflow-visible gap-5 ${Style}`}
    >
      <div className="pl-2 md:pl-10">
        <img src={img} alt="purple-1" width={244} height={244} />
      </div>
      <div className="font__secondary text-white text-center sm:text-left">
        <h2 className="text-lg lg:text-xl min-[1100px]:text-2xl xl:text-3xl min-[1368px]:text-[33px] font-medium overflow-hidden">
          {title}
        </h2>
        <p className="text-xl lg:text-2xl min-[1100px]:text-3xl xl:text-4xl min-[1368px]:text-[40px] font-bold underline uppercase overflow-hidden">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PurpleBoxText;
