import React from 'react'
import HeroContainer from '../Layouts/Services/HeroContainer/HeroContainer'
import ServicesHeadingSection from '../Layouts/Services/ServicesHeadingSection/ServicesHeadingSection'
import ServicesSection from '../Layouts/Services/ServicesSection/ServicesSection'
import InformationSection from '../Layouts/Home/InformationSection'
// import MapSection from '../Layouts/Home/MapSection'

const Services = () => {
  return (
    <>
    <HeroContainer />
    <ServicesHeadingSection />
    <ServicesSection />
    <InformationSection />
    {/* <MapSection /> */}
    </>
  )
}

export default Services
