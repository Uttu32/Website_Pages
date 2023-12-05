import React from "react";
import Img1 from "../assets/character/img1.png";
import PurpleImg1 from "../assets/character/purpleimg1.png";
import PurpleImg2 from "../assets/character/purpleimg2.png";
import PurpleImg3 from "../assets/character/purpleimg3.png";
import BlockTitle from "../components/global/BlockTitle";
import BoldList from "../components/global/BoldList";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import Normal from "../components/global/Normal";
import NormalLinkText from "../components/global/NormalLinkText";
import PageTitle from "../components/global/PageTitle";
import PurpleBoxText from "../components/global/PurpleBoxText";
import SubTitle from "../components/global/SubTitle";

const Character = () => {
  return (
    <div>
      <PageTitle title="Character and Signature Strengths" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <SubTitle
          title="Information for parents and caregivers who use the Chromodiversity™ for Families tool."
          size="text-base sm:text-[25px] sm:leading-[35px] mb-4"
        />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24 mt-6">
          <NormalLinkText Style="text-base sm:text-2xl font-light sm:leading-[34px]">
            Information for parents and caregivers who have completed the
            Character and Signature Strengths Survey. Adapted by
            Chromodiversity™ from{" "}
            <span className="text-[#0F78C3] underline cursor-pointer">
              Exploring Academic and Character Strengths in Students with Sex
              Chromosome Aneuploidies
            </span>{" "}
            (SCAs) by Thompson et al. (2022). Please keep in mind that
            observations might not match your own experience or child’s genetic
            variation.
          </NormalLinkText>
          <div className="min-w-[443px]">
            <img src={Img1} alt="home-1" width={443} height={283} />
          </div>
        </div>
        <Normal
          title="Children with genetic differences are often characterized by limitations and pathologies, and much of the current available information is deficit focused. Such focus obscures the importance of strengths."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px] my-4"
        />
        {/* table-1 */}
      </div>
      <BlockTitle
        title="POSITIVE PSYCHOLOGY AND CHARACTER STRENGTHS"
        Style="text-[13px]"
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]0">
        <Normal
          title="Positive psychology provides a way to understand the positive traits of humans, including 6 virtues shown to be valued worldwide: wisdom, courage, humanity, justice, temperance, and transcendence. Each one includes character strengths that represent the best aspects of an individual’s personality (Niemiec & McGrath, 2019; Peterson & Seligman, 2004). ‘Signature strengths’ are those that are most essential to one’s identity. The application of signature strengths in daily life has been shown to improve overall wellbeing (Shutte & Malouff, 2019)."
          Style="text-base sm:text-[22px] font-normal sm:leading-[34px] my-4"
        />
        {/* table-2 */}
      </div>
      <PurpleBoxText
        title="“For a long time, I believed that everything was my fault. And it crushed me. But it also built my resilience. Because I refused to be crushed.”"
        subtitle="GROWING UP WITH RIC IN SCOTLAND"
        img={PurpleImg1}
        height="sm:h-[162px]"
      />
      <BlockTitle
        title="STRENGTHS IN YOUTH WITH A GENETIC DIFFERENCE"
        Style="text-[13px]"
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] ">
        <Normal
          title="In the first international study on parent reported strengths in youth from 3 to 21 years old with SCAs (X&Y chromosome variations), parents describe an overwhelming number of strengths corresponding to the virtues of humanity and wisdom, such as ‘extraordinary kindness’, ‘creative thinking’, ‘love of learning’, and ‘courageous persistence’ (Thompson et al., 2022). Prior research also suggests they have relatively higher visual-spatial skills (Leggett et al., 2010)."
          Style="text-base sm:text-[22px] font-medium sm:leading-[34px] my-4"
        />
        {/* table-3 */}
        <p className="font__primary text-[#3E0085] text-[14px] sm:text-xl font-normal py-2 text-center">
          Although research is lacking due to the focus on limitations and
          pathologies, it is likely that many other genetic differences -
          including more visible ones - can be associated with strengths, as
          suggested by lived experience
        </p>
      </div>
      <PurpleBoxText
        title="“Your child is a person first, not a medical condition”"
        subtitle="HOW TO PARENT A CHILD WITH DOWN'S"
        img={PurpleImg2}
        height="sm:h-[162px]"
      />
      <BlockTitle title="WHY STRENGTHS MATTER" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Promotion of a child’s strengths through positive parenting and teaching is especially important for young children with genetic differences."
          Style="text-base sm:text-[24px] font-medium sm:leading-[29px] my-4"
        />
        <div className="sm:ml-5 ml-0">
          <BoldList Style="text-light">
            Promoting strengths in young children with certain types of genetic
            differences may{" "}
            <span className="font-semibold">
              protect against future educational failure
            </span>{" "}
            and psychosocial problems such as social anxiety, depression, and
            cognitive or behavioral issues (Thompson et al., 2022).{" "}
          </BoldList>
          <BoldList Style="text-light">
            Promoting ‘signature strengths’{" "}
            <span className="font-semibold">
              improves the wellbeing and social relationships of children,
            </span>{" "}
            as well as the quality of life of their parents (Schutte & Malouff,
            2019).
          </BoldList>
          <BoldList Style="text-light">
            <span className="font-semibold">
              Sole focus on problems after a diagnosis negatively impacts child
              self-esteem,
            </span>{" "}
            parent perceptions, and teacher expectancies (Riggan et al., 2020;
            Rosenthal, 1991).
          </BoldList>
        </div>
      </div>
      <BlockTitle title="HOW TO PROMOTE STRENGTHS: 5 EXAMPLES" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        {/* table-4 */}
      </div>
      <BlockTitle title="WHAT TEACHERS NEED TO KNOW" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Supportive school environments, positive relationships with parents, and intrinsically motivating tasks that encourage students to apply their strengths may assist them in overcoming challenges related to their genetic differences."
          Style="text-base sm:text-[24px] font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <BoldList Style="text-light">
            <span className="font-semibold">
              Strengths-based approaches improve overall student wellbeing,
            </span>{" "}
            enhance academic achievement, and build student capacity
            (Tejada-Gallardo et al., 2020).
          </BoldList>
          <BoldList Style="text-light">
            Strengths-based assessments (Buckley & Epstein, 2004) have{" "}
            <span className="font-semibold">
              proven validity and reliability
            </span>{" "}
            for students with and without learning disabilities (Shogren et al.,
            2018).
          </BoldList>
          <BoldList Style="text-light">
            Documenting strengths in a standardized manner predicts{" "}
            <span className="font-semibold">
              higher levels of student success.
            </span>{" "}
            Educators presented with psycho-educational reports with an added
            section on child strengths have been shown to have a more hopeful
            attitude about a student’s future, resulting in better outcomes
            (Donvan & Nickerson, 2007).
          </BoldList>
        </div>

        <Normal
          title="For example, prioritizing hands-on science experiments or creative projects for students with corresponding strengths but who struggle with language or short-term memory may boost overall performance. The reason for this is that the application of strengths is ultimately more energizing & fulfilling than the remediation of weaknesses (Niemiec, 2017)."
          Style="text-[14px] sm:text-[20px] font-normal sm:leading-[29px] my-4"
        />
      </div>
      <BlockTitle title="TAKEAWAY" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Promotion of strengths is particularly important in the case of children with neurodevelopmental and/or genetic differences to help avoid educational failure and psychosocial problems, improving quality of life for both children and their families. You can start today by finding out your child’s strengths and working to promote them."
          Style="text-base sm:text-[24px] font-normal sm:leading-[29px] my-4"
        />

        <LightPinkBox />
        <GradientText />
      </div>
      <PurpleBoxText
        title="“Embrace difference, celebrate strengths!”"
        subtitle="GROWING UP WITH TURNER'S (MOSAIC)"
        img={PurpleImg3}
      />
    </div>
  );
};

export default Character;
