import React from 'react'
import target1 from "../../Assets/Images/home/target-1.jpg"

const OurMissionSection = () => {
  return (
    <div className="ourmission__container skew__nagitive my-5">
    <div className="container-xxl px-2 px-sm-4 skew__positive">
      <div className="row g-3 g-sm-4">
        <div className="col-12 mb-3">
          <div className="d-flex align-itmes-center justify-content-center ">
            <h1 className="bottom__heading">Why Choose Us</h1>
          </div>
        </div>
        <div className="col-12 col-md-4 ">
          <h3 className="fw-bold">We Are Here To Give You The Best</h3>
          <p className="fs-5">
            Envirozone Equipments and Instruments is providing water treatment
            systems, wastewater management, pollution control consultancy,
            fabricates and manufactures all kinds of pollution control
            equipment and instruments (effluent and emission) subduing air,
            water and noise pollution. <a href="#"> Check Our Services</a>
          </p>
        </div>
        <div className="col-12 col-md-4 ">
          <div>
            <div className="d-flex align-items-center">
              <img src={target1} width="50x" alt="" />

              <h3 className="ms-3">Our Missison</h3>
            </div>
            <p className="fs-5 mt-3">
              cffering the most efficient services that exceed the
              expectations of our esteemed customers and building a lifelong
              fruitful relationship with our clients by providing them trusted
              products and after-sales services.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 ">
          <div>
            <div className="d-flex align-items-center">
              <img src={target1} width="50x" alt="" />

              <h3 className="ms-3">Our Missison</h3>
            </div>
            <p className="fs-5 mt-3">
              cffering the most efficient services that exceed the
              expectations of our esteemed customers and building a lifelong
              fruitful relationship with our clients by providing them trusted
              products and after-sales services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OurMissionSection
