import React from "react";
import Icon1 from "../assets/home/icon-1.png";
import Icon2 from "../assets/home/icon-2.png";
import Icon3 from "../assets/home/icon-3.png";
import Img1 from "../assets/home/image1.png";
import Img2 from "../assets/home/image2.png";
import Img3 from "../assets/home/image3.png";
import PurpleImg1 from "../assets/home/purple-1.png";
import PurpleImg2 from "../assets/home/purple-2.png";
import PurpleImg3 from "../assets/home/purple-3.png";
import PurposeTable from "../components/Home/PurposeTable";
import BlockTitle from "../components/global/BlockTitle";
import Footer from "../components/global/Footer";
import GradientText from "../components/global/GradientText";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import PageTitle from "../components/global/PageTitle";
import PurpleBoxText from "../components/global/PurpleBoxText";
import SubTitle from "../components/global/SubTitle";
import Table from "../components/global/Table";

const missionData = [
  { title: "Raise awareness", img: Icon1 },
  { title: "Change lives", img: Icon2 },
  { title: "Change lives", img: Icon3 },
];

const Home = () => {
  return (
    <div>
      <PageTitle title="The ABCs of Chromodiversity" />
      <BlockTitle id="A" title="What is Chromodiversity?" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24">
          <div>
            <SubTitle
              title="FROM DEFICIT TO DIFFERENCE "
              size={"text-[20px] sm:text-[28px] underline"}
            />
            <ListText text="Chromodiversity refers to genetic code differences. The term was introduced in 2022 as a way to depathologize the language of genetics at a time of increased prenatal screening and early diagnoses." />
            <ListText text="Just as ‘biodiversity’ refers to the diversity of life and ‘neurodiversity’ to the diversity of brains, chromodiversity is a way to talk about the diversity of human genetic codes in a natural way." />
          </div>
          <div className="min-w-[307px]">
            <img src={Img1} alt="home-1" width={307} height={415} />
          </div>
        </div>

        <div className="pt-14">
          <SubTitle
            title="CHROMODIVERSITY VERSUS NEURODIVERSITY"
            size={"text-[23px] sm:text-[31px] text-center underline"}
          />
          <Normal
            title="Chromodiversity refers to genetic differences, while neurodiversity refers to brain functioning differences (which may or may not be due to genetic factors)."
            Style={"text-[15px] sm:text-[22px] font-light"}
          />
          <Normal
            title="However, the two often overlap; for instance, many types of genetic differences, such as Klinefelter, 22q deletion or Fragile X, are associated with a somewhat increased likelihood of ADHD and autism (Grimm et al., 2020)."
            Style={"text-[15px] sm:text-[22px] font-light"}
          />
        </div>

        <Table />
        <Normal
          title="For more information about usage of the chromodiversity trademark see below"
          Style={
            "text-[12px] min-[500px]:text-[14px] sm:text-[20px] font-normal text-center"
          }
        />
      </div>
      <PurpleBoxText
        title="“We’re not a disorder. We’re not a syndrome. We’re people.”"
        subtitle="GROWING UP WITH TOBY IN AUSTRALIA"
        img={PurpleImg1}
      />
      <BlockTitle id="B" title="Chromodiversity™ for Families" />

      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-24">
          <div>
            <SubTitle
              title="A SCALABLE PLATFORM WHERE EVERYONE CAN SUCCEED"
              size={"text-[20px] sm:text-[28px]"}
            />
            <p className="text-[15px] sm:text-[22px] font-normal font__primary text-black py-2">
              A genetic diagnosis can bring about significant benefits at any
              stage of life. This experimental version of{" "}
              <b>Chromodiversity™ for Families</b> is designed to help families
              & medical professionals support children with genetic differences.
              It is focused on the critical early months and years of childhood
              development for three reasons.
            </p>
          </div>
          <div className="min-w-[307px]">
            <img src={Img2} alt="home-1" width={307} height={415} />
          </div>
        </div>
        <div className="flex justify-between items-start flex-col lg:flex-row py-12 lg:gap-0 gap-4">
          <p className="text-[13px] sm:text-[18px] font-light font__primary text-black py-2 lg:pr-6">
            <span className=" font-semibold">
              Early childhood is the period of maximum 'brain plasticity'
            </span>{" "}
            and sensitivity when support may have the greatest lifelong impact
            (WHO 2022). However, many parents receive inaccurate information,
            often portraying the worst-case scenario for their child, and
            healthcare provider awareness remains low (Bourke et al., 2014).
          </p>
          <p className="text-[13px] sm:text-[18px] font-light font__primary text-black py-4 lg:py-2 border-b border-t lg:border-l lg:border-r border-[#6931AA] lg:px-6">
            <span className=" font-semibold ">
              Multidisciplinary care is the preferred choice
            </span>{" "}
            for researchers, clinicians, and families (Tartaglia et al., 2015).
            Yet parents often face a bewildering array of medical,
            neurocognitive, and social questions, with little access to
            coordinated care between specialists (Close et al., 2016).
          </p>
          <p className="text-[13px] sm:text-[18px] font-light font__primary text-black py-2 lg:pl-6">
            <span className=" font-semibold">
              Surging rates of prenatal diagnosis,
            </span>{" "}
            while offering the promise of better lives, mean that already scarce
            guidance and multidisciplinary care are increasingly inaccessible.
            Even countries with advanced healthcare systems are unequipped to
            face mounting demand..
          </p>
        </div>

        <p className="bg-[#F4E8FF] text-[#3E0085] font__primary text-base sm:text-xl font-medium rounded-xl text-center px-4 sm:px-20 py-4 mb-5">
          The goal of{" "}
          <span className="font-bold">Chromodiversity™ for Families</span> is to
          deliver gold standard tools to parents and professionals in a smarter,
          faster, and more accessible way
        </p>

        <GradientText title="If you are not already a Chromodiversity™ user, click here to join waitlist (free for families)" />
      </div>

      <PurpleBoxText
        title="“Early intervention is the absolute key.”"
        subtitle="PODCAST: ANITA & HER 3 ‘EXTRA X’ BOYS"
        img={PurpleImg2}
      />

      <BlockTitle id="C" title="Who We Are" />
      <div className="mx-0 min-[500px]:mx-[20px] md:mx-[70px] rounded-[10px] p-[20px] min-[500px]:p-[35px] sm:p-[50px] md:p-[90px] bg-[#fff4f6db]">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-[50%] bg-white rounded-lg border border-[#6931AA] py-2 px-4 sm:px-10">
            <p className="text-center font__primary text-base sm:text-2xl font-normal text-black overflow-hidden">
              <span className="font-semibold">VISION</span>
              <br /> Change the way the world considers and supports genetic
              diversity
            </p>
          </div>
          <div className="w-full sm:w-[50%] bg-white rounded-lg border border-[#6931AA] py-2 px-4 sm:px-10">
            <p className="text-center font__primary text-base sm:text-2xl font-normal text-black overflow-hidden">
              <span className="font-semibold">ACTION</span>
              <br /> Close the gap between genetic screening and coordinated
              care
            </p>
          </div>
        </div>

        <p className="text-center font__primary text-base sm:text-2xl font-semibold text-black overflow-hidden pt-11 pb-2">
          MISSION
        </p>

        <div className="flex justify-center items-center gap-6 md:gap-12 sm:flex-row flex-col">
          {missionData.map((mission, index) => (
            <div
              key={index}
              className="pt-8 pb-2 px-7 rounded-xl border border-[#6931AA] bg-white w-[218px] h-[176px] flex flex-col justify-center items-center"
            >
              <img src={mission.img} alt={mission.title} />
              <Normal
                title={mission.title}
                Style="overflow-hidden text-center"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 pt-10 pb-20">
          <div className="min-w-[307px]">
            <img src={Img3} alt="home-1" width={307} height={415} />
          </div>

          <p className="font__primary text-black text-[15px] sm:text-[22px]  font-light">
            <span className="font-semibold">Chromodiversity™</span> is a
            trademark of the nonprofit
            <br />{" "}
            <span className="font-semibold underline">
              My XXY | Chromodiversity™ Foundation.
            </span>{" "}
            Founded in 2020 in Arizona, USA, we have rapidly become one of the
            most trusted and effective charitable foundations dedicated to
            changing the way the world considers and supports genetic diversity.
            Guided by an{" "}
            <span className="font-semibold underline"> Advisory Board</span> of
            visionary leaders & a global team of{" "}
            <span className="font-semibold underline">Brand Ambassadors,</span>{" "}
            the foundation is represented in over 20 countries & 10 US states.
          </p>
        </div>

        <SubTitle
          title="CHROMODIVERSITY USAGE"
          size="text-[21px] sm:text-[29px] text-center"
        />
        <Normal
          title="The term chromodiversity is intended for open medical, educational, and general public use. Chromodiversity is free for non-commercial use without the trademark sign (™), provided it is not used in a discriminatory way. The Chromodiversity™ trademark exists to protect against discriminatory and/or unauthorized commercial use."
          Style="text-base sm:text-xl"
        />

        <PurposeTable />
      </div>
      <PurpleBoxText
        title="“I’m a thunderstorm kind of guy.”"
        subtitle="PODCAST: LAST WORDS WITH GARY GLISSMAN"
        img={PurpleImg3}
      />

      <p className="font__primary text-[13px] sm:text-xl text-[#3E0085] font-normal px-[25px] sm:px-[40px] md:px-[70px] text-center pb-8 sm:pb-24">
        The urgent, brutally honest words of a remarkable man who changed many
        thousands of lives & inspired our work. His commitment, passion &
        humanity live on. In loving memory of Gary and his treasured son
        Michael.
      </p>

      <Footer />
    </div>
  );
};

export default Home;
