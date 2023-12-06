import React from "react";
import BlockTitle from "../components/global/BlockTitle";
import BoldList from "../components/global/BoldList";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import PageTitle from "../components/global/PageTitle";
import SubTitle from "../components/global/SubTitle";
import MiletoneTable from "../components/milestone/Table";

const Milestone = () => {
  return (
    <div>
      <PageTitle title="Growth Curves & Milestone Charts" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <SubTitle
          title="Information for parents and caregivers who use the Chromodiversity™ for Families tool."
          size="text-base sm:text-[25px] sm:leading-[35px] mb-4"
        />

        <p className="font__primary text-black sm:text-2xl sm:leading-[34px] text-[15px] font-light w-full sm:w-[60%]">
          Parents are often concerned about their child facing early age
          developmental differences and want to know what to expect. However,
          genetic providers and counselors sometimes struggle to quantify the
          likelihood of delays in terms of spectrum and severity, and reliable
          data is scarce (Tartaglia et al., 2023).
        </p>

        <ListText
          smallSize
          text="Physical growth curve studies about chromosomal variations such as Down, Edward and Patau syndromes do exist (see for instance Anthropometric Charts for Infants with Trisomies 21, 18, or 13 Born between 22 Weeks Gestation and Term: The VON Charts (Boghossian et al., 2012). "
        />
        <ListText
          smallSize
          text="However for most genetic differences, including both rare (e.g., Angelman, Prader-Willi, and DiGeorge) and common ones (e.g., Klinefelter and other X&Y variations), evidencebased neurodevelopment and behavior milestone charts are missing or incomplete. "
        />
      </div>

      <BlockTitle title="WHY THIS MATTERS" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Guidance on early developmental trajectories and milestone acquisition is important to guide expectations and referrals for therapies. Growth curves and milestones charts can:"
          Style="text-base sm:text-[23px] font-medium"
        />
        <div className="ml-0 sm:ml-8">
          <BoldList Style="font-light">
            <span className="font-semibold">
              Equip genetic & primary care providers
            </span>{" "}
            with visual tools to share information for new diagnoses.
          </BoldList>
          <BoldList Style="font-light">
            Help{" "}
            <span className="font-semibold">
              monitor development & guide treatments
            </span>{" "}
            for the growing population of prenatally diagnosed infants.
          </BoldList>
          <BoldList Style="font-light">
            <span className="font-semibold">Allow parents to keep track</span>{" "}
            of cut-off points in time when a therapy may be most beneficial.
          </BoldList>
        </div>
      </div>

      <BlockTitle title="WHAT NEXT" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Fortunately, top-rated research on common X&Y variations is underway in the United States and the Netherlands, and guidance is starting to emerge in scientific publications."
          Style="text-base sm:text-[24px] font-medium"
        />
        {/* table */}
        <MiletoneTable />
        <Normal
          title="Chromodiversity™ is currently evaluating research in order to develop an easy-to-use milestones tool for parents and professionals."
          Style={
            "text-[14px] min-[500px]:text-[16px] sm:text-[24px] font-normal"
          }
        />
      </div>
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px]">
        <LightPinkBox />
        <GradientText />
      </div>
    </div>
  );
};

export default Milestone;
