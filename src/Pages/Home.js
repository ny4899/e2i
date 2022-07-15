import React from "react";
import HeroContainer from "../Layouts/Home/HeroContainer";
import AboutUsSection from "../Layouts/Home/AboutUsSection";
import IndustriesWeWorkSection from "../Layouts/Home/IndustriesWeWorkSection";
import ServicesSection from "../Layouts/Home/ServicesSection";
import OurMissionSection from "../Layouts/Home/OurMissionSection";
import BrandsSection from "../Layouts/Home/BrandsSection";
import TestimonialSection from "../Layouts/Home/TestimonialSection";
import InformationSection from "../Layouts/Home/InformationSection";
// import MapSection from "../Layouts/Home/MapSection";
const Home = () => {
  return (
    <>
      <HeroContainer />
      <AboutUsSection />
      <IndustriesWeWorkSection />
      <ServicesSection />
      <OurMissionSection />
      <BrandsSection />
      <TestimonialSection />
      <InformationSection />
      {/* <MapSection /> */}
    </>
  );
};

export default Home;
