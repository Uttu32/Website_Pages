import React from "react";
import Img1 from "../assets/social/img1.png";
import PurpleImg1 from "../assets/social/purple-1.png";
import PurpleImg2 from "../assets/social/purple-2.png";
import SocialTable from "../components/Social/Table";
import BlockTitle from "../components/global/BlockTitle";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import PageTitle from "../components/global/PageTitle";
import PurpleBoxText from "../components/global/PurpleBoxText";
import SubTitle from "../components/global/SubTitle";

const Social = () => {
  return (
    <div>
      <PageTitle title="Social and Emotional Development" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <SubTitle
          title="Information for parents and caregivers who use the Chromodiversity™ for Families tool."
          size="text-base sm:text-[25px] sm:leading-[35px] "
        />

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 py-4">
          <p className="font__primary text-black sm:text-2xl sm:leading-[34px] text-[15px] font-light  pl-0 sm:pl-10">
            Information for parents and caregivers who have completed the Social
            Emotional Development Survey. Adapted from{" "}
            <a href="#!">
              Exploring Academic and Character Strengths in Students with Sex
              Chromosome Aneuploidies
            </a>
            (SCAs) by Thompson et al., 2022. Please keep in mind that
            observations might not match your own experience or child’s genetic
            variation.
          </p>
          <div className="min-w-[467px]">
            <img src={Img1} alt="home-1" width={467} height={263} />
          </div>
        </div>

        <Normal
          title="Developmental monitoring is recommended as a routine part of ‘well-child’ care visits for all infants, even in the absence of current concerns or genetic differences. For example, the American Association of Pediatrics (AAP) recommends monitoring for developmental delays at every well-child care visit, including using standardized screening tools at 9, 18, and 30 months, as well as autism screening at 18 and 24 months."
          Style="sm:text-[23px] sm:leading-[34px] text-[15px]"
        />
        <SubTitle
          title="While guidelines vary around the world, the principle is the same: early monitoring allows for early intervention and results in better health and quality of life (World Health Organization, 2023)."
          size="text-base sm:text-2xl sm:leading-[35px] py-4"
        />
        <div className="sm:ml-8 ml-0 ">
          <ListText
            text="Early monitoring of social and emotional development is especially important for children with a genetic variation associated with somewhat greater likelihoods of sensory and social emotional differences such as ADHD or autism. "
            Style="font-light"
          />
          <ListText
            text=" For example, difficulties in acquiring social and emotional milestones were found in some 1-year-old children with an extra X or Y chromosome, with 44% having vulnerabilities in the borderline or extremely low range, compared to typically developing children (Bouw et al., 2022)."
            Style="font-light"
          />
        </div>
      </div>
      <PurpleBoxText
        title="“Is it one floor you will build or is it twenty? Early diagnosis is the foundation”"
        subtitle="GROWING UP WITH ALFRED IN THE NETHERLANDS"
        img={PurpleImg1}
        height="sm:max-h-[162px]"
      />
      <BlockTitle title="WHY THIS MATTERS" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Unaddressed social emotional development challenges in early childhood can result in a “domino” effect, leading to potentially avoidable, compounding lifelong issues. Early age monitoring and preventative support may protect against future social, emotional, behavioral, and cognitive challenges, even when there are no obvious signs of issues."
          Style="sm:text-[23px] sm:leading-[34px] text-[15px]"
        />
        <Normal
          title="For example, research suggests that some young children with X&Y variations tend to struggle more than their peers with facial emotion recognition. However, 15 minutes of neurocognitive training using a therapy program over a period of one month resulted in a reversion to the general population baseline (Bouw et al., 2022)."
          Style="sm:text-[23px] sm:leading-[34px] text-[15px]"
        />
        <SocialTable />
      </div>
      <BlockTitle title="TAKEAWAY" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Schedule regular well-child care visits with your doctor and, if available, track milestones typical of your child’s genetic variation. Screen in particular for self-regulation, executive function, and social development differences. Consult a child psychologist or developmental pediatrician, preferably with experience of your child’s genetic variation, to discuss prevention and set a developmental plan if necessary."
          Style="sm:text-[24px] sm:leading-[34px] text-[16px]"
        />
      </div>
      <PurpleBoxText
        subtitle="PODCAST: FACIAL EMOTIONAL RECOGNITION IN YOUNG CHILDREN WITH SCAs If"
        img={PurpleImg2}
        height="sm:max-h-[162px]"
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px]">
        <LightPinkBox />
        <GradientText />
      </div>
    </div>
  );
};

export default Social;
