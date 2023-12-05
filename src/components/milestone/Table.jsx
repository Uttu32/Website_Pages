import React from "react";

const listData = [
  {
    Ftitle: "2-48 months",
    Stitle: [
      "eXtraordinary Babies Study",
      " Children’s Hospital Colorodo, USA",
    ],
    Ttitle:
      "Creating developmental growth curves and milestone charts for infants with sex chromososme trisomy (Tartaglia et al., 2023)",
  },
  {
    Ftitle: "1-7 years",
    Stitle: [
      "The TRIXY Early Childhood Study",
      " Leiden University, The Netherlands",
    ],
    Ttitle:
      "Neurocognitive and behavioral development in young children (1–7 years) with sex chromosome trisomy (Van Rijn et al., 2023)",
  },
];

const MiletoneTable = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="table__background flex items-stretch  font__primary text-white">
        <div className="w-[20%] px-2 min-[500px]:px-4 sm:px-8  border-r border-r-white  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-semibold ">
            {" "}
            AGE
          </h6>
        </div>
        <div className="border-r border-r-white w-[35%] px-2 min-[500px]:px-4 sm:px-8  py-4 flex justify-center flex-col">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-semibold ">
            STUDY IN PROGRESS
          </h6>
        </div>
        <div className="w-[45%] px-2 min-[500px]:px-4 sm:px-8  py-4 flex justify-center flex-col">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-semibold ">
            SAMPLE GUIDANCE
          </h6>
        </div>
      </div>
      {/* 2nd */}
      <div className="border rounded-lg rounded-t-none border-t-0 border-[#6931AA] font__primary text-black ">
        {listData.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 1 ? "" : "border-b border-[#6931AA]"
            } flex items-stretch"`}
          >
            <p className="w-[20%] text-[14px] min-[500px]:text-[16px] sm:text-[22px] font-semibold px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6   border-r border-[#6931AA] flex flex-col  justify-center ">
              {item.Ftitle}
            </p>
            <div className="w-[35%] text-[12px] min-[500px]:text-[15px] sm:text-[24px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6 border-r border-[#6931AA]">
              {item.Stitle.map((data, index) => (
                <span
                  key={index}
                  className={`${index === 1 ? "italic font-medium" : ""}`}
                >
                  {data}
                </span>
              ))}
            </div>
            <div className="w-[45%] text-[12px] min-[500px]:text-[15px] sm:text-[24px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6 underline text-[#1A5BBC]">
              {item.Ttitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiletoneTable;
