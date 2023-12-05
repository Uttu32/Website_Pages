import React from "react";
import PurpleImg1 from "../assets/screen/PurpleImg1.png";
import Img2 from "../assets/screen/ball.png";
import Img1 from "../assets/screen/img1.png";
import BlockTitle from "../components/global/BlockTitle";
import BoldList from "../components/global/BoldList";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import PageTitle from "../components/global/PageTitle";
import PurpleBoxText from "../components/global/PurpleBoxText";
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
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24 mt-6">
          <div>
            <ListText text="Low healthcare provider awareness and/or public misunderstanding of modern genetics." />
            <ListText text="Exposure to confusing, misleading, or “worst case scenario” online information." />
            <ListText text="Persistence of myths, like the belief that “genetics is destiny” and “nothing can be done.”" />
            <ListText text="Shortage of genetic and psychological counselors for professional guidance and support." />
            <ListText text="Lack of understanding about the role such professionals play in the “diagnostic journey.”" />
          </div>
          <div className="min-w-[399px]">
            <img src={Img1} alt="home-1" width={399} height={472} />
          </div>
        </div>
      </div>

      <BlockTitle title="WHY THIS MATTERS" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Expectant parents often struggle with the unexpected news of a diagnosis and lack support to cope effectively. As a result, they may find themselves at a loss to make well-informed decisions and/or prepare for the future."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px]"
        />
      </div>
      <BlockTitle
        title="WHAT EXPECTANT PARENTS NEED TO KNOW"
        Style="text-[15px]"
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="False positives are common following a positive result from a non-invasive prenatal test (NIPT or NIPS) conducted via maternal blood test."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px]"
        />
        <BoldList Style="font-light">
          <span className="font-semibold">Seeking immediate consultation</span>{" "}
          with a physician is{" "}
          <span className="font-semibold">very important</span> in obtaining
          accurate confirmation testing before making any further decisions.
        </BoldList>
        <Normal
          title="In the event of confirmation, it is strongly recommended to get support."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px]"
        />
        <BoldList Style="font-light">
          <span className="font-semibold"> Consult a genetic counselor.</span>{" "}
          Seek professional guidance from a genetic provider to share your
          concerns, and learn about potential strengths and needs.
        </BoldList>
        <BoldList Style="font-light">
          <span className="font-semibold">Contact an association.</span> Connect
          with an organization of families with children who share the same kind
          of genetic variation.
        </BoldList>
        <BoldList Style="font-light">
          <span className="font-semibold">Listen to lived experiences.</span>{" "}
          Hear the perspectives and experiences of adults who grew up with the
          same genetic variation.
        </BoldList>
        <BoldList Style="font-light">
          <span className="font-semibold">Acknowledge your emotions.</span>{" "}
          Consider consulting a professional therapist to address your feelings
          about the diagnosis.
        </BoldList>
        <BoldList Style="font-light">
          <span className="font-semibold">Reality check.</span> Keep in mind
          that the majority of today’s diagnoses involve “non-visible” genetic
          variations, previously undetected in most people. Many live fulfilling
          lives, particularly when they grew up in a healthy, supportive
          environment.
        </BoldList>
      </div>

      <BlockTitle
        title="WHAT HEALTHCARE PROFESSIONALS NEED TO KNOW"
        Style="text-[13px]"
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="The way in which genetic differences are discussed by medical professionals is of great importance. The choice of words and timing in delivering the prenatal diagnosis can have significant emotional repercussions. It is crucial that such information is accompanied by support and follow-ups, starting with a consultation with a qualified genetic counselor."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px]"
        />
        <div className="flex justify-center items-center">
          <img
            src={Img2}
            alt="health care"
            className="sm:w-[579px] sm:h-[529px] w-full h-full"
          />
        </div>

        <p className="font__primary text-black text-base sm:text-[22px] sm:leading-[34px] text-center font-medium">
          Surge in screening and diagnoses results in uncertainty for an
          increasing number of expectant parents
          <br />
          <span className="text-[#1E56AB] underline cursor-pointer">
            The emotional journey of adapting to a prenatal diagnosis,
          </span>{" "}
          Thompson et al., 2023
        </p>
      </div>
      <BlockTitle title="TAKEWAY" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="There is no “perfect baby” and no “ideal DNA”. At least 65% of the population has some kind of health problem as a result of their genetic code (Kumar et al., 2001), and many children without a positive genetic diagnosis also face challenges. Strive to learn as much as you can, and remember not to ignore your own feelings."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px]"
        />
      </div>
      <PurpleBoxText
        title="“Early intervention is the absolute key.”"
        subtitle="PODCAST: ANITA & HER 3 ‘EXTRA X’ BOYS"
        img={PurpleImg1}
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px]">
        <LightPinkBox />
        <GradientText />
      </div>
    </div>
  );
};

export default PrenatalScreening;
