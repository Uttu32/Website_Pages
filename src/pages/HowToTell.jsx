import React from "react";
import Img1 from "../assets/how/img1.png";
import Img2 from "../assets/how/img2.png";
import PurpleImg1 from "../assets/how/purpleimg1.png";
import PurpleImg2 from "../assets/how/purpleimg2.png";
import BlockTitle from "../components/global/BlockTitle";
import GradientText from "../components/global/GradientText";
import LightPinkBox from "../components/global/LightPinkBox";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import PageTitle from "../components/global/PageTitle";
import PurpleBoxText from "../components/global/PurpleBoxText";
import SubTitle from "../components/global/SubTitle";

const HowToTell = () => {
  return (
    <div>
      <PageTitle title="How and When to Tell Your Child" />

      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <SubTitle
          title="Information for parents and caregivers who use the Chromodiversity™ for Families tool."
          size="text-base sm:text-[25px] sm:leading-[35px] mb-4"
        />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24 mt-6">
          <div>
            <Normal
              title="Adapted from Talking with Your Child about His Diagnosis of XXY (Klinefelter) Syndrome. © 2013 eXtraordinarY Kids Clinic, Children’s Hospital Colorodo. Tartaglia et al. (2010); ACT Government Parentlink, Donor Conception (Telling Your Child) Australia (see parentlink.act.gov.au). Please keep in mind that observations might not match your own experience or child’s genetic variation."
              Style="text-base sm:text-[24px] font-light sm:leading-[34px] my-2"
            />
            <SubTitle
              title="Many parents and caregivers wonder how and when to tell their child about a diagnosis."
              size="text-[15px] sm:text-[23px] sm:leading-[35px] my-2"
            />
            <SubTitle
              title="Even when there are no obvious outward signs of genetic difference, having information from an early age can help your child accept themselves"
              size="text-[15px] sm:text-[23px] sm:leading-[35px] my-2"
            />
          </div>
          <div className="min-w-[433px]">
            <img src={Img1} alt="home-1" width={433} height={433} />
          </div>
        </div>
        <SubTitle
          title="Your child should hear the diagnosis from you or from a support professional with you there to allow them to ask questions."
          size="text-[15px] sm:text-[23px] sm:leading-[35px] my-2"
        />
        <SubTitle
          title="Secrecy or reluctance to talk about it may make your child feel shameful, leading them to seek information from unreliable or unsafe sources or to learn about the diagnosis incidentally and feel betrayed."
          size="text-[15px] sm:text-[23px] sm:leading-[35px] my-2"
        />
      </div>

      <BlockTitle title="PRESCHOOL" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Explain that your child’s body and brain are made a little differently than other children. This means they might need more help in certain areas or that some things might be harder than for other children."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />
        <div className="sm:ml-5 ml-0">
          <ListText
            text=" For instance, learning how to ride a bike, to write, to read, to connect with peers, or to handle difficult situations."
            Style="font-light"
          />
          <ListText
            text=" They may need therapies or treatments for physical challenges that not all children face, such as daily injections or mobility accommodations."
            Style="font-light"
          />
        </div>
      </div>
      <BlockTitle title="SCHOOL AGE" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Begin talking about chromosomes & genes, providing more details as your child learns about these topics in school."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24 mt-6">
          <div className="sm:ml-5 ml-0">
            <ListText
              text=" Remind them that some information learned at school may be wrong and to talk to you if your child has any questions."
              Style="font-light"
            />
            <ListText
              text="Introduce the most common potential future challenges, and accommodations. For instance, if fertility might be a issue, begin explaining that not all parents have children with their own DNA; some seek medical help and/or use donor DNA, while others choose to adopt."
              Style="font-light"
            />
          </div>
          <div className="min-w-[230px]">
            <img src={Img2} alt="home-1" width={230} height={295} />
          </div>
        </div>
      </div>
      <BlockTitle title="ADOLESCENCE TO ADULTHOOD" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] ">
        <Normal
          title="Talk about your child’s feelings and about sharing their diagnosis with friends and/or romantic partners."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />
        <ListText
          text=" Discuss ways for your child to become proactive and involved in their health care. Encourage them to ask questions during doctor visits and to express their needs without hesitation."
          Style="font-light"
        />
        <ListText
          text="Let them know that information on social media or the internet regarding the genetic difference may not always be accurate, and often focus on ‘worst case scenarios’."
          Style="font-light"
        />
      </div>
      <PurpleBoxText
        title="“You’re enough… just as you are.”"
        subtitle="PODCAST: GROWING UP WITH BROCK IN THE USA"
        img={PurpleImg1}
      />

      <BlockTitle title="KEEP IT SIMPLE" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Keep the discussion light and simple; most children need minimal information at the start."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText
            text="For instance, genes may be explained as “instructions” or “messages” for the body or as “pages in an instruction book”. Chromosomes may be explained as “books in a library”. Differences might be attributed to “different instructions”, ”extra pages” or “an extra book on the shelf”.
              "
            Style="font-light"
          />
          <ListText
            text=" Emphasize that while “instructions” are important, they are only part of who you are. For example, eye color is determined by your genes, but the language you speak is not."
            Style="font-light"
          />
          <ListText
            text=" You do not need to talk about everything at once. The topics you discuss and the words that you use will depend on your child's age and experiences."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="BE POSITIVE" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="It is important to emphasize that a genetic difference is something that “just happens”, and no one caused your child to have it."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText
            text="Avoid using the words “mistake,” “accident”, or “mutation”."
            Style="font-light"
          />
          <ListText
            text=" Identify and promote your child’s strengths. Acknowledge any positive aspects of the diagnosis, such as how being well informed means being well prepared."
            Style="font-light"
          />
          <ListText
            text=" Don’t hesitate to reassure your child “whatever the challenges, we’ll get through them together”."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="BE HONEST" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Be honest about potential challenges."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText
            text=" Inform your child that there are many other children who share the same kind of genetic difference as them."
            Style="font-light"
          />
          <ListText
            text="Explain that many children, with or without a genetic diagnosis, may encounter physical, social, emotional, or learning difficulties at different stages of life."
            Style="font-light"
          />
          <ListText
            text="Be comfortable answering “I don’t know, but we can find out together”."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="MAKE IT RELATABLE" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db] mb-20">
        <Normal
          title="Relate your child’s differences to other people’s differences and challenges, with examples relevant to your child and your family."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText text=" For example, hormonal therapy may be likened to a friend who requires insulin for diabetes." />
          <ListText
            text="Use pictures or visual aids when talking about complex topics."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="GIVE IT TIME" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Your child may have varied reactions to the information, and feelings can change over time. They may appear disinterested one day and distressed the next, feel sad, angry, confused, or even find it ‘cool’."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText text="Your child may want to know who else is aware of the diagnosis, when it was made, why this has happened to them, what it means for the future." />
          <ListText
            text=" They might act out or have have a delayed reaction, feel anxious about potential treatments, or find relief in understanding why they struggle socially or in school."
            Style="font-light"
          />
          <ListText
            text=" Let your child know that it’s always okay to ask about anything they see, hear, or wonder about."
            Style="font-light"
          />
        </div>
      </div>

      <PurpleBoxText
        title="“You’re going to be ok. It’s going to be tough. But at the end of this, you’re going to come out a much stronger and wiser person.”"
        subtitle="PODCAST: GROWING UP WITH STEPHEN IN SOUTH AFRICA"
        img={PurpleImg1}
        height="sm:h-[162px]"
      />

      <BlockTitle title="RESPECT PRIVACY" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Discuss with your child who is appropriate to tell and who might not need to know."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText text=" Emphasize that sharing the diagnosis is a personal decision to be made by them and their parents." />
          <ListText
            text="Explain that most people will not immediately understand what it means to have a genetic difference and that some may have unexpected reactions."
            Style="font-light"
          />
          <ListText
            text="In many countries, physicians are restricted from disclosing a diagnosis to schools or employers. A letter mentioning the existence of an underlying condition and the resulting need for accommodations may be enough."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="START EARLY" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="There may not be a ‘perfect moment’ to introduce a diagnosis for the first time."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText
            text="Even if your child is young, it can be helpful to discuss it a little at a time, considering their age and any symptoms they might be experiencing.
"
          />
          <ListText
            text=" Rather than making it a formal event, try to find a casual time for the disclosure conversation or take advantage of a moment of opportunity to bring it up."
            Style="font-light"
          />
          <ListText
            text="Every child is different, and while sooner might be better, there is no “right age” to start."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="GET SUPPORT" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Consider seeking help for talking with your child from their physician and an association of parents with children who have the same genetic variation."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />

        <div className="sm:ml-5 ml-0">
          <ListText
            text="Pay attention to your feelings while discussing the topic with your child.
"
          />
          <ListText
            text=" You may wish to consider working through your feelings with a therapist first."
            Style="font-light"
          />
        </div>
      </div>

      <BlockTitle title="TAKEAWAY" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <Normal
          title="Talking about the diagnosis is not a one-time event. It is a process that will happen over time, and your child’s feelings may change. Every child is different in terms of their needs, comprehension, communication, and coping skills. You, as a parent, know your child best."
          Style="text-base sm:text-2xl font-medium sm:leading-[29px] my-4"
        />
      </div>

      <PurpleBoxText
        subtitle="PODCAST: HOW AND WHEN TO TELL YOUR CHILD"
        img={PurpleImg2}
      />

      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px]">
        <LightPinkBox />
        <GradientText />
      </div>
    </div>
  );
};

export default HowToTell;
