import React from "react";
import Img1 from "../assets/home/image1.png";
import BlockTitle from "../components/global/BlockTitle";
import ListText from "../components/global/ListText";
import Normal from "../components/global/Normal";
import PageTitle from "../components/global/PageTitle";
import SubTitle from "../components/global/SubTitle";
import Table from "../components/global/Table";

const Home = () => {
  return (
    <div>
      <PageTitle title="The ABCs of Chromodiversity" />
      <BlockTitle id="A" title="What is Chromodiversity?" />
      <div className="mx-[70px] rounded-[10px]  p-[90px] bg-[#fff4f6db]">
        <div className="flex justify-center items-center gap-24">
          <div>
            <SubTitle
              title="FROM DEFICIT TO DIFFERENCE "
              size={"text-[28px]"}
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
            size={"text-[31px] text-center"}
          />
          <Normal
            title="Chromodiversity refers to genetic differences, while neurodiversity refers to brain functioning differences (which may or may not be due to genetic factors)."
            Style={"text-[22px] font-light"}
          />
          <Normal
            title="However, the two often overlap; for instance, many types of genetic differences, such as Klinefelter, 22q deletion or Fragile X, are associated with a somewhat increased likelihood of ADHD and autism (Grimm et al., 2020)."
            Style={"text-[22px] font-light"}
          />
        </div>

        <Table />
        <Normal
          title="For more information about usage of the chromodiversity trademark see below"
          Style={"text-[20px] font-normal text-center"}
        />
      </div>
    </div>
  );
};

export default Home;
