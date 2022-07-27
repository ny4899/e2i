import React from 'react'
import aboutImage from '../../Assets/Images/home/home-about.jpg'

const AboutUsSection = () => {
  return (
<div className="aboutus__container my-md-5 py-4">
    <div className="container-xxl px-3 px-sm-4">
      <div className="row">
        <div className="col-12 col-md-6">
          <div>
            <img src={aboutImage} className="home__about__img__box rounded-3 shadow-lg w-100" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <div className="d-flex align-itmes-center">
            <h1 className="leftAlign__bottomHeading__bar">About Us</h1>
          </div>
          <h2 className="mt-3">We Provide You</h2>
          <h2>Sustainable Future</h2>
          <p>
            {"Envirozone Equipments & Instruments is India's one of the leading services providing companies for Wastewater Treatment Systems and Wastewater Treatment Equipment & Chemicals."}
          </p>
          <p>
            {"Envirozone Equipments & Instruments is India's one of the leading services providing companies for Wastewater Treatment Systems and Wastewater Treatment Equipment & Chemicals."}
          </p>
          <a className="main__contact__btn mt-2 d-inline-block" href="#">Read more</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUsSection
