import React from "react";
const listData = [
  "ADHD",
  "Autism",
  "Dyslexia",
  "Dyspraxia",
  "OCD",
  "Hyperlexia",
  "Meares-Irlen",
  "Sensory Processing (SPD)",
  "Synesthesia",
  "Tourette",
];

const Table = () => {
  return (
    <div className="overflow-x-scroll min-[500px]:overflow-hidden">
      <div className="table__background flex items-center  font__secondary text-white">
        <div className="w-[50%] border-r border-r-white text-center py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold">
            {" "}
            CHROMODIVERSITY EXAMPLES
          </h6>
          <p className="text-[12px] min-[500px]:text-[15px] sm:text-[23px] font-normal">
            Unique DNA patterns
          </p>
        </div>
        <div className="w-[50%] text-center py-4">
          <h6 className="text-[13px] min-[500px]:text-base sm:text-2xl font-bold">
            NEURODIVERSITY EXAMPLES
          </h6>
          <p className="text-[12px] min-[500px]:text-[15px] sm:text-[23px] font-normal">
            Unique ways brains work
          </p>
        </div>
      </div>
      {/* 2nd */}
      <div className="border rounded-lg rounded-t-none border-t-0 border-[#6931AA]  flex items-center  font__primary text-black ">
        <div className="w-[50%] px-2 min-[500px]:px-4 sm:px-8 pt-2 sm:pt-6 pb-2">
          <p className="text-[13px] min-[500px]:text-base sm:text-2xl font-normal py-2">
            <span className="font-semibold">More than 1 in 1000 people</span>
            <br /> X&Y chromosome variations, such as: Klinefelter, Turner,
            Trisomy X, Double Y
          </p>
          <p className="text-[13px] min-[500px]:text-base sm:text-2xl font-normal py-2">
            <span className="font-semibold">1 in 1000 to 10,000 people </span>
            <br />
            22q deletion, Fragile X, Ehler-Danlos, Marfans, mitochondrial
            conditions
          </p>
          <p className="text-[13px] min-[500px]:text-base sm:text-2xl font-normal py-2">
            <span className="font-semibold">
              {" "}
              1 in 10,000 to 20,000 people{" "}
            </span>
            <br />
            Angelman, Prader-Willi, Rett, Williams
          </p>
        </div>
        <div className="w-[50%] px-2 min-[500px]:px-4 sm:px-8 pt-2 sm:pt-6 pb-2 border-l border-[#6931AA] ">
          {listData.map((item, index) => (
            <p
              key={index}
              className={`font__primary  text-black text-[14px] sm:text-2xl before:w-[5px] before:h-[5px] leading-[34px] py-[2px] pl-6 relative before:absolute before:content-[''] sm:before:w-[7px] sm:before:h-[7px] before:top-[15px] sm:before:top-[13px] before:left-0 before:bg-black before:rounded-full  
               "font-light" 
            `}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
