import React from "react";

const listData = [
  {
    Ftitle: "Frequency",
    Stitle: ["Frequency"],
    Ttitle: ["1 in 5 children (XXY, XXX)", "1 in 3 children (XYY)"],
  },
  {
    Ftitle: "Age of possible presentation",
    Stitle: ["1 to 6 years old"],
    Ttitle: ["1 to 8 years old"],
  },
  {
    Ftitle: "Strengths",
    Stitle: ["• Creativity", "• Enthusiasm", "• Energy"],
    Ttitle: [
      "• Honesty",
      "• Independent constructive play",
      "• Visual & pattern thinking",
    ],
  },
  {
    Ftitle: "Trajectory",
    Stitle: [
      "• Severe inattentiveness/ distraction",
      "• Predicts self-regulation challenges and/or sensation seeking behaviors (XXY, XXX, XYY)",
      "• Predicts hyperactivity (XYY)",
      "• May evolve over time",
    ],
    Ttitle: [
      "• Little eye contact or social play",
      "• Predicts sensory overload, social anxiety, and/or communication challenges, especially expressive language",
      "• Repetitive behaviors less likely than in other autistic children",
      "• May evolve over time",
    ],
  },
  {
    Ftitle: "Early Intervention",
    Stitle: [
      "• Routine monitoring from age 1 for attention and regulatory challenges",
      "• Professional evaluation and evidence-based support if challenges are present",
      "• Fidget toys, outdoor breaks, and assistive tech e.g., reminder apps",
      "• Promote strengths",
    ],
    Ttitle: [
      "• Routine monitoring from age 1 for sensory, social and emotional challenges",
      "• Professional evaluation and evidence-based support if challenges are present",
      "• Quiet spaces, squeeze toys, visual aids, augmentative communication (AAC) devices",
      "• Promote strengths",
    ],
  },
];

const SocialTable = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="table__background flex items-stretch  font__primary text-white">
        <div className="w-[30%] px-2 min-[500px]:px-4 sm:px-8  border-r border-r-white  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold ">
            {" "}
            EXAMPLE
            <p className="text-sm font-bold">
              Klinefelter (XXY)
              <br /> Trisomy X (XXX)
              <br /> Double Y (XYY)
            </p>
          </h6>
        </div>
        <div className="border-r border-r-white w-[35%] px-2 min-[500px]:px-4 sm:px-8  py-4 flex justify-center flex-col">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold text-center ">
            EARLY IMPACT ON ADHD
          </h6>
        </div>
        <div className="w-[35%] px-2 min-[500px]:px-4 sm:px-8  py-4 flex justify-center flex-col">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold text-center">
            EARLY IMPACT ON AUTISM
          </h6>
        </div>
      </div>
      {/* 2nd */}
      <div className="border rounded-lg rounded-t-none border-t-0 border-[#6931AA] font__primary text-black ">
        {listData.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 4 ? "" : "border-b border-[#6931AA]"
            } flex items-stretch"`}
          >
            <p className="w-[30%] text-[14px] min-[500px]:text-[16px] sm:text-[24px] font-medium px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6   border-r border-[#6931AA] flex flex-col  justify-center ">
              {item.Ftitle}
            </p>
            <div className="w-[35%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6 border-r border-[#6931AA]">
              {item.Stitle.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
            <div className="w-[35%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
              {item.Ttitle.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTable;
