import React from 'react'
import TextileImg from "../../Assets/Images/industries/textile.png"
import ChemicalImg from "../../Assets/Images/industries/chemistry.png"
import AutomationImg from "../../Assets/Images/industries/engineering.png"
import HospitalImg from "../../Assets/Images/industries/hospital.png"
import AgricultureImg from "../../Assets/Images/industries/tractor.png"
import FactoriesImg from "../../Assets/Images/industries/factory.png"

const IndustriesWeWorkSection = () => {
  return (
    <div className="industries__container py-4 py-sm-5 skew__nagitive">
    <div className="container-xxl px-3 px-sm-4 skew__positive py-4">
      <div className="row g-3 g-sm-4">
        <div className="col-12">
          <div className="d-flex align-itmes-center justify-content-center">
            <h1 className="bottom__heading">Industries We Serve</h1>
          </div>
          <div className="mt-3">
            <p className="text-center">{"We are continuously serving to around 200 industries. E2I maintain a healthy and fruitful relation with our clients. With decades of experience in water and waste water treatment, Envirozone Equipments & Instruments personnel are dedicated to providing customized engineering solutions to clients while minimizing overall project cost and surpassing extreme quality expectations."}</p>
          </div>
        </div>
        
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="d-flex flex-column align-items-center justify-content-center rounded-3 shadow p-4 bg-light">
            <img src={TextileImg} className="w-100" alt="" />
            <h4 className="mt-3 ">Textile</h4>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="d-flex flex-column align-items-center justify-content-center rounded-3 shadow p-4 bg-light">
            <img src={ChemicalImg} className="w-100" alt="" /> 
            <h4 className="mt-3">Chemical</h4>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="d-flex flex-column align-items-center justify-content-center rounded-3 shadow p-4 bg-light">
            <img src={AutomationImg} className="w-100" alt="" />
            <h4 className="mt-3">Automation</h4>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="d-flex flex-column align-items-center justify-content-center rounded-3 shadow p-4 bg-light">
            <img src={HospitalImg} className="w-100" alt="" />
            <h4 className="mt-3">Hospital</h4>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="d-flex flex-column align-items-center justify-content-center rounded-3 shadow p-4 bg-light">
            <img src={AgricultureImg} className="w-100" alt="" />
            <h4 className="mt-3">Agriculture</h4>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="d-flex flex-column align-items-center justify-content-center rounded-3 shadow p-4 bg-light">
            <img src={FactoriesImg} className="w-100" alt="" />
            <h4 className="mt-3">Factories</h4>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default IndustriesWeWorkSection
