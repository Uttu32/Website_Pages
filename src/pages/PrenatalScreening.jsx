import React from "react";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import ListText from "../components/global/ListText";
import PageTitle from "../components/global/PageTitle";
import SubTitle from "../components/global/SubTitle";

const PrenatalScreening = () => {
  return (
    <div>
      <PageTitle title="Prenatal Screening" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <SubTitle
          title="Information for parents and caregivers who use the Chromodiversity™ for Families tool."
          size="text-base sm:text-[25px] sm:leading-[35px] mb-4"
        />
        <p className="font__primary text-black sm:text-2xl sm:leading-[34px] text-[15px] font-medium">
          As prenatal screening surges, more expectant parents are being
          confronted with unexpected diagnoses, often leaving them ill-equipped
          for the emotional challenges that can follow (Thompson et al., 2023).
          Such challenges are compounded by a number of factors.
        </p>
        <ListText text=" Low healthcare provider awareness and/or public misunderstanding of modern genetics." />
      </div>

      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px]">
        <LightPinkBox />
        <GradientText />
      </div>
    </div>
  );
};

export default PrenatalScreening;
