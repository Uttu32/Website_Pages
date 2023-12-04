import React from "react";

const PurposeTable = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="table__background flex items-center  font__secondary text-white">
        <div className="w-[50%] border-r border-r-white text-center py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold">
            {" "}
            TRADEMARK EXAMPLES
          </h6>
        </div>
        <div className="w-[50%] text-center py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold">
            PURPOSE
          </h6>
        </div>
      </div>
      {/* 2nd */}
      <div className="border rounded-lg rounded-t-none border-t-0 border-[#6931AA] font__primary text-black ">
        <div className=" border-b border-[#6931AA] flex items-stretch">
          <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6 underline  border-r border-[#6931AA]">
            Chromodiversity™ for Families
            <br /> Chromodiversity™ for Clinics
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
            Gold standard tools to help families, clinics and researchers
            support children with genetic diversity
          </p>
        </div>
        <div className=" border-b border-[#6931AA] flex items-stretch">
          <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6 underline  border-r border-[#6931AA] align-middle">
            Chromodiversity™ Podcast
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
            The science and lived experience of genetic diversity
          </p>
        </div>
        <div className=" flex items-stretch">
          <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6 underline  border-r border-[#6931AA]">
            Chromodiversity™ Ambassadors
          </p>
          <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
            Global movement for positive awareness
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurposeTable;
