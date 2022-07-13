import React from 'react'


// layouts 
import HeroContainer from '../Layouts/Aboutus/HeroContainer'
import GallerySection from '../Layouts/Aboutus/gallerysection/GallerySection'
import KnowOurMerils from '../Layouts/Aboutus/knowOurMerils/KnowOurMerils'
import TeamSection from '../Layouts/Aboutus/TeamSection/TeamSection'

import InformationSection from "../Layouts/Home/InformationSection"
import MapSection from "../Layouts/Home/MapSection"

const AboutUs = () => {
  return (
    <div>
      <HeroContainer />
      <GallerySection />
      <KnowOurMerils />
      <TeamSection/>
      <InformationSection />
      {/* <MapSection /> */}
    </div>
  )
}

export default AboutUs
