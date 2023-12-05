import React from "react";

const listData = [
  {
    title: "WISDOM ",
    subtitle: "Strengths that help to acquire and apply knowledge",
    list: [
      "Creativity",
      "Curiosity",
      "Judgement",
      "Love of learning",
      "Perspective",
    ],
  },
  {
    title: "COURAGE",
    subtitle: "Strengths that help to exert will and meet adversity",
    list: ["Bravery", "Perseverance", "Honesty", "Zest"],
  },
  {
    title: "HUMANITY ",
    subtitle:
      "Strengths that help to connect with children in one-on-one relationships",
    list: ["Love", "Kindness Social", "intelligence"],
  },
  {
    title: "JUSTICE  ",
    subtitle:
      "Strengths that help to succeed in the community and work in groups",
    list: ["Teamwork", "Fairness", "Leadership"],
  },
  {
    title: "TEMPERANCE  ",
    subtitle:
      " Strengths that help to protect against excess and manage behavior",
    list: ["Forgiveness", "Humility", "Prudence", "Self-regulation"],
  },
  {
    title: "TRANSCENDENCE",
    subtitle:
      " Strengths that help to provide meaning and connection with the wider world",
    list: [
      "Appreciation of beauty & excellence",
      "Gratitude",
      "Spirituality",
      "Hope",
      "Humor",
    ],
  },
];

const TableTwo = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="table__background flex items-center  font__secondary text-white">
        <div className="w-[50%] px-2 min-[500px]:px-4 sm:px-8  border-r border-r-white  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold">
            {" "}
            VIRTUES
          </h6>
        </div>
        <div className="w-[50%] px-2 min-[500px]:px-4 sm:px-8  py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold">
            STRENGTHS
          </h6>
        </div>
      </div>
      {/* 2nd */}
      <div className="border rounded-lg rounded-t-none border-t-0 border-[#6931AA] font__primary text-black ">
        {listData.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 5 ? "" : "border-b border-[#6931AA]"
            } flex items-stretch"`}
          >
            <p className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[22px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6   border-r border-[#6931AA]">
              <span className="font-semibold">{item.title}</span>
              <br />
              {item.subtitle}
            </p>
            <div className="w-[50%] text-[12px] min-[500px]:text-[15px] sm:text-[24px] font-normal px-2 min-[500px]:px-4 sm:px-8 py-2 sm:py-6">
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

export default TableTwo;
