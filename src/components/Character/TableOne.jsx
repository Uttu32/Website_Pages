import React from "react";

const TableOne = () => {
  return (
    <div className="overflow-hidden py-10 sm:max-w-[710px] m-auto">
      <div className="border  border-t-0 border-[#6931AA] font__primary text-[#6931AA] ">
        <div className=" border-b border-t border-[#6931AA] flex items-stretch">
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6  border-r border-[#6931AA]">
            “Heart of gold”
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6">
            “Eager to please”
          </p>
        </div>
        <div className=" border-b border-[#6931AA] flex items-stretch">
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6  border-r border-[#6931AA]">
            “Amazing imagination”
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6">
            “Very curious mind”
          </p>
        </div>
        <div className=" flex items-stretch border-b border-[#6931AA]">
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6  border-r border-[#6931AA]">
            “Loves learning”
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6">
            “Absorbs information like a sponge”
          </p>
        </div>
        <div className=" flex items-stretch border-b border-[#6931AA]">
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6  border-r border-[#6931AA]">
            “Incredibly hard working”
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[14px] sm:text-[18px] font-normal px-2 min-[500px]:px-4  py-2 sm:py-6">
            “Persistent problem solver”
          </p>
        </div>

        <p className="text-center text-[12px] min-[500px]:text-[14px] sm:text-[16px] font-semibold px-2 min-[500px]:px-4  py-2 sm:py-6  text-[#3E0085]">
          Parent Reported Strengths of Youth Diagnosed with a ‘SCA’ (Thompson et
          al., 2022)
        </p>
      </div>
    </div>
  );
};

export default TableOne;
