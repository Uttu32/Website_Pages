import React from "react";

const listData = [
  {
    title: "XXY (Klinefelter)",
    subtitle: " XXX (Trisomy X)",
    list: [
      " 1. Klindness",
      "2. Perseverance",
      "3. Love of learning",
      "4. Creativity",
      "5. Social intelligence",
    ],
  },

  {
    title: "XXY (Double Y)",
    subtitle: "",
    list: [
      " 1. Love of learning",
      "2. Perseverance",
      "3. Teamwork",
      "4. Curiosity",
      "5. Kindness",
      "6. Social intelligence",
      "7. Humor",
    ],
  },
];

const TableThree = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="table__background flex items-center  font__secondary text-white">
        <div className="w-[50%] md:w-[45%] px-2 min-[500px]:px-4 sm:px-8  border-r border-r-white  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold text-center">
            {" "}
            GENETIC VARIATION (‘SCA’)
          </h6>
        </div>
        <div className="w-[50%] md:w-[55%] px-2 min-[500px]:px-4 sm:px-8  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold text-center">
            GREATEST CHARACTER STRENGTHS
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
            <p className="w-[50%] md:w-[45%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6   border-r border-[#6931AA]">
              <span className="font-semibold">{item.title}</span>
              <br />
              {item.subtitle}
            </p>
            <div className="w-[50%] md:w-[55%] text-[12px] min-[500px]:text-[15px] sm:text-[24px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
              {item.list.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableThree;
