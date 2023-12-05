import React from "react";
import Img1 from "../assets/needs/img-1.png";
import Img2 from "../assets/needs/img-2.png";
import PurpleImg1 from "../assets/needs/purpleimg1.png";
import PurpleImg2 from "../assets/needs/purpleimg2.png";
import BlockTitle from "../components/global/BlockTitle";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import NormalLinkText from "../components/global/NormalLinkText";
import PageTitle from "../components/global/PageTitle";
import PurpleBoxText from "../components/global/PurpleBoxText";
import SubTitle from "../components/global/SubTitle";

const EducationalNeeds = () => {
  return (
    <div>
      <PageTitle title="Educational Needs" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] ">
        <SubTitle
          title="Information for parents and caregivers who use the Chromodiversity™ for Families tool."
          size="text-base sm:text-[25px] sm:leading-[35px] mb-4"
        />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24 mt-6">
          <NormalLinkText Style="text-base sm:text-2xl font-light sm:leading-[34px]">
            Adapted by Chromodiversity™ from{" "}
            <span className="text-[#0F78C3] underline cursor-pointer">
              ‘I Wish the School Had a Better Understanding of the Diagnosis’:
              Parent Perspectives on Educational Needs of Students with Sex
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
          title="Even when there are no outward signs of differences, children with genetic variations often require a range of services within multiple systems of support, including but not limited to:"
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px] my-4"
        />
        <ListText text="Practical accommodations" Style="font-light" />
        <ListText text="Special education" Style="font-light" />
        <ListText text="Speech and occupational therapies" Style="font-light" />
        <ListText text="Behavioral health supports" Style="font-light" />
        <ListText text="Medical interventions" Style="font-light" />
        <Normal
          title="However, the first study to explore parent perspectives and priorities on the educational experiences of children with X and Y chromosome variations in the USA found that:"
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px] my-4"
        />
        <ListText
          text="Factors such as lack of knowledge about genetic variations act as barriers to learning."
          Style="font-light"
        />
        <ListText
          text="There is a strong need for school-based social and emotional support."
          Style="font-light"
        />
        <ListText
          text="Many educational support plans are elusive or incomplete."
          Style="font-light"
        />
        <NormalLinkText Style="text-base sm:text-2xl font-medium sm:leading-[34px]">
          <span className="font-semibold underline cursor-pointer">
            Chromodiversity™ Podcast
          </span>{" "}
          interviews also suggest that parents of children with other types of
          genetic differences around the world may face similar challenges,
          especially regarding learning, social inclusion and ‘fitting in’ with
          peers.
        </NormalLinkText>
        <Normal
          title="For instance, in one episode, Jodi Samuels, an author and parent of a daughter with Down’s (Trisomy 21), pushes back against what she perceives as well-intentioned but misguided “token kindness” at school. Instead, she advocates for what she calls “radical inclusion”."
          Style="text-base sm:text-[23px] font-light sm:leading-[34px] my-4"
        />
      </div>
      <PurpleBoxText
        title="“Kindness kills.”"
        subtitle="PODCAST: RADICAL INCLUSION WITH JODI"
        img={PurpleImg1}
      />
      <BlockTitle title="WHY THIS MATTERS" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Many parents and caregivers of children are concerned about school and play a major role in the development of successful support plans for students with developmental differences or disabilities (Barger et al., 2019; Nokali et al., 2010; Eskow et al., 2018)."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px] my-4"
        />
        <Normal
          title="While cultural practices and legal systems vary globally, it’s not unusual for schools to be required by special education laws to involve parents as active participants in the education process (Fish, 2008)."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px] my-4"
        />
        <Normal
          title="Despite these expectations, parents of children with disabilities frequently report:"
          Style="text-base sm:text-2xl font-medium sm:leading-[34px] my-4"
        />
        <ListText
          text="Educators lack knowledge about their child’s genetic difference."
          Style="font-light"
        />
        <ListText
          text="Their opinions and expertise are ignored."
          Style="font-light"
        />
        <ListText
          text="Feeling excluded from the educational decision-making process (Elbaum et al., 2016; Paz-   Lourido et al., 2020; Starr & Foy, 2012; Tucher & Schwartz, 2013)."
          Style="font-light"
        />
      </div>
      <BlockTitle title="WHAT TO DO" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] ">
        <Normal
          title="Parent-school collaboration is especially important for children with a genetic diagnosis, particularly when a host of potential medical and neurodevelopmental features can impact a student’s wellbeing and success in school."
          Style="text-base sm:text-[23px] font-medium sm:leading-[34px] my-4"
        />
        <NormalLinkText Style="text-base sm:text-2xl font-medium sm:leading-[34px]">
          Parents are not only experts on the unique patterns of strengths and
          needs in their own children (
          <span className=" underline cursor-pointer">
            see Character and Signature Strengths
          </span>
          ) but also often possess a more nuanced understanding of the diagnosis
          than professionals (Richardson et al., 2021).
        </NormalLinkText>
      </div>
      <BlockTitle title="3 RECOMMENDATIONS FOR TEACHERS" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] ">
        <NormalLinkText Style="text-base sm:text-2xl font-normal sm:leading-[34px]">
          1.{" "}
          <span className="font-semibold ">
            Develop a robust family-school partnership.
          </span>{" "}
          Parents often bear an undue burden of service coordination due to
          genetic differences (Richardson et al., 2021). Medical and education
          teams can alleviate this burden by offering families a release of
          information document, allowing open communication as needed, and to
          the level of parent comfort.
        </NormalLinkText>

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24 mt-6">
          <div>
            <NormalLinkText Style="text-base sm:text-2xl font-normal sm:leading-[34px]">
              2.{" "}
              <span className="font-semibold ">
                Increase the collaboration between the school and the child’s
                medical team.
              </span>{" "}
              Whenever possible, educators should partner and collaborate with
              medical providers as part of the educational assessment process.
              Both parties possess valuable information that could help inform a
              child’s programming. School nurses and school psychologists can
              act as liaisons, bridging the educational and medical systems to
              enhance quality of care (Sheridan et al., 2009).
            </NormalLinkText>
            <NormalLinkText Style="text-base sm:text-2xl font-normal sm:leading-[34px]">
              3.{" "}
              <span className="font-semibold ">
                Acknowledge the significant role genetic differences play in
                educational experiences.
              </span>{" "}
              Schools may benefit from qualifying a child for special education
              with an educational diagnosis that reflects the genetic diagnosis
              - an underlying lifelong difference that will likely require
              lifelong, ongoing support (Hodge & Asoela, 2019).
            </NormalLinkText>
          </div>
          <div className="min-w-[306px]">
            <img src={Img2} alt="home-1" width={306} height={440} />
          </div>
        </div>

        <div className="sm:ml-5 ml-0">
          <ListText
            text="Research shows that children with learning differences such as dyslexia or ADHD are often labeled by teachers and parents as ‘lazy’ or ‘unintelligent’, especially prior to a diagnosis (Glazzard, 2010; Lundin, 2020; Thompson et al., 2015)."
            Style="text-light"
          />
          <ListText
            text="Specifying the genetic diagnosis in the special education plan might encourage a team to consider a student’s inattention, cognitive rigidity, fatigue, or trouble learning as part of a medical problem that warrants interventions and accommodations, rather than disobedience or a lack of motivation."
            Style="text-light"
          />
          <ListText
            text="Highlighting the medical diagnosis on a child’s educational support plan could help qualify younger students for early preventative support and dissuade educational teams from discontinuing support when the student makes progress."
            Style="text-light"
          />
        </div>
      </div>
      <PurpleBoxText
        subtitle="PODCAST: 'I WISH THE SCHOOL HAD A BETTER UNDERSTANDING OF THE DIAGNOSIS'"
        img={PurpleImg2}
      />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px]">
        <LightPinkBox />
        <GradientText />
      </div>
    </div>
  );
};

export default EducationalNeeds;
