import React from 'react'
import product1 from "../../Assets/Images/home/product-1.png"

import cpcbImg from "../../Assets/Images/home/real-time-data1.jpg"

const ServicesSection = () => {
  return (
    <div className="services__container py-5 mt-md-5">
    <div className="container-xxl px-2 px-sm-4">
      <div className="row g-3 g-sm-4">
        <div className="col-12">
          <div className="d-flex align-itmes-center justify-content-center">
            <h1 className="bottom__heading">{"Our Services & Products"}</h1>
          </div>
        </div>

        <div className="col-12">
          <h2 className="text-center ">
            We Are Providing Best Monitoring System
          </h2>
        </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-light shadow rounded-3 p-2">
              <div className="rounded-3 p-3 d-flex align-itmes-center justify-content-center service__card__imgbg">
                <img src={product1} className="w-75" alt="" />
              </div>
              <h3 className="text-center mt-3">
                Environmental Monitoring System
              </h3>
              <p className="text-center">
                It describes the processes and activities that need to take
                place to characterize and monitor the quality of environment.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__read" href="#">READ MORE</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__view main__contact__btn my-3" href="#">VIEW PRODUCTS</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-light shadow rounded-3 p-2">
              <div className="rounded-3 p-3 d-flex align-itmes-center justify-content-center service__card__imgbg">
                <img src={product1} className="w-75" alt="" />
              </div>
              <h3 className="text-center mt-3">
                Environmental Monitoring System
              </h3>
              <p className="text-center">
                It describes the processes and activities that need to take
                place to characterize and monitor the quality of environment.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__read" href="#">READ MORE</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__view main__contact__btn my-3" href="#">VIEW PRODUCTS</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-light shadow rounded-3 p-2">
              <div className="rounded-3 p-3 d-flex align-itmes-center justify-content-center service__card__imgbg">
                <img src={product1} className="w-75" alt="" />
              </div>
              <h3 className="text-center mt-3">
                Environmental Monitoring System
              </h3>
              <p className="text-center">
                It describes the processes and activities that need to take
                place to characterize and monitor the quality of environment.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__read" href="#">READ MORE</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__view main__contact__btn my-3" href="#">VIEW PRODUCTS</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-light shadow rounded-3 p-2">
              <div className="rounded-3 p-3 d-flex align-itmes-center justify-content-center service__card__imgbg">
                <img src={product1} className="w-75" alt="" />
              </div>
              <h3 className="text-center mt-3">
                Environmental Monitoring System
              </h3>
              <p className="text-center">
                It describes the processes and activities that need to take
                place to characterize and monitor the quality of environment.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__read" href="#">READ MORE</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a className="services__btn__view main__contact__btn my-3" href="#">VIEW PRODUCTS</a>
              </div>
            </div>
          </div>
        <div className="col-12 ">
          <div className="d-flex align-itmes-center justify-content-center">
            <h1 className="bottom__heading">Real Time Data Monitoring</h1>
          </div>
        </div>
          <div className="col-12 col-md-4">
            <div className="shadow">
              <img src={cpcbImg} className="w-100 rounded-3" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shadow">
              <img src={cpcbImg} className="w-100 rounded-3" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shadow">
              <img src={cpcbImg} className="w-100 rounded-3" alt="" />
            </div>
          </div>
        
      </div>
    </div>
  </div>
  )
}

export default ServicesSection
