import React from 'react'
import "./HeroContainer.css"

const HeroContainer = () => {
  return (
    <div>
    <div className="container-xxl px-3 px-sm-4 py-5">
      <div className="row">
        <div className="col-md-6">
          <div>
            <h1 className="main__txt display-5">E2I Has More Than 200 Satisfied Clients</h1>
            <p className='fs-5 mt-2'>{"We are continuously serving to around 200 industries. E2I maintain a healthy and fruitful relation with our clients. With decades of experience in water and waste water treatment, Envirozone Equipments & Instruments personnel are dedicated to providing customized engineering solutions to clients while minimizing overall project cost and surpassing extreme quality expectations."}</p>
            <div className="mt-4">
              <a className="industry__hero__btn industry__hero__contact__btn">Contact Us </a>
              <a className="industry__hero__btn industry__hero__product__btn">View Products</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="h-100 rounded" style={{backgroundColor: "var(--darkwhite)",minHeight: "200px"}}></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroContainer
