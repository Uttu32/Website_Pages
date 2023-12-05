import React from "react";

const listData = [
  {
    title: "Kindness",
    subtitle:
      "Encourage your child or student to purposely conduct daily prosocial acts (Nelson et al., 2016) or journal and reflect on their own kind behaviors at the end of each day (Ko et al., 2021).",
  },
  {
    title: "Love of learning",
    subtitle:
      "Encourage your child or student to dig deep into topics of interest at home and at school, for instance, through “student centered, project based” learning (Kokotsaki et al., 2016).",
  },
  {
    title: "Creativity",
    subtitle:
      "Involve your child or student in extracurricular creative clubs (Greenberg, 2016; Missett et al., 2013); give explicit encouragement to ‘be creative’ with school work and other tasks (Nusbaum et al., 2014).",
  },
  {
    title: "Perseverance",
    subtitle:
      "Celebrate a growth mindset in your child or student: focus positive feedback on effort and energy rather than final accomplishments or grades (Haimovtiez & Dweck, 2016; Paunesku et al., 2015).",
  },
  {
    title: "Social intelligence",
    subtitle:
      "Help your child think about and practice their social skills with others. Consider ‘mindfulness’, as it can improve social contacts and mood in children (Lindsay et al., 2019; Teal et al., 2019).",
  },
];

const TableFour = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="table__background flex items-center  font__secondary text-white">
        <div className="w-[30%] px-2 min-[500px]:px-4 sm:px-8  border-r border-r-white  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold text-center">
            {" "}
            GENETIC VARIATION (‘SCA’)
          </h6>
        </div>
        <div className="w-[70%] px-2 min-[500px]:px-4 sm:px-8  py-4">
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
              index === 4 ? "" : "border-b border-[#6931AA]"
            } flex items-stretch"`}
          >
            <p className="w-[30%] text-[14px] min-[500px]:text-[16px] sm:text-[25px] font-semibold px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6   border-r border-[#6931AA]">
              <span className="font-semibold">{item.title}</span>
            </p>
            <div className="w-[70%] text-[12px] min-[500px]:text-[15px] sm:text-[24px] font-light px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableFour;
