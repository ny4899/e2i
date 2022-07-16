import React from 'react'

import HeroContainer from '../Layouts/Industry/HeroContainer/HeroContainer'
import OurNumbers from '../Layouts/Industry/OurNumbers/OurNumbers'
import WeAreInHeading from '../Layouts/Industry/WeAreInHeading/WeAreInHeading'
import IndustryWeWorkWithSection from '../Layouts/Industry/IndustryWeWorkWithSection/IndustryWeWorkWithSection'
import InformationSection from '../Layouts/Home/InformationSection'
import BrandsSection from '../Layouts/Home/BrandsSection'
// import MapSection from '../Layouts/Home/MapSection'

const Industry = () => {
  return (
    <>
    <HeroContainer />
    <OurNumbers />
    <WeAreInHeading />
    <IndustryWeWorkWithSection />
    <BrandsSection />
    <InformationSection />
    {/* <MapSection /> */}
    </>
  )
}

export default Industry
