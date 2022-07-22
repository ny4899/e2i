import React from 'react'
import "./HeroContainer.css"
const HeroContainer = () => {
  return (
    <div>
    <div className="container-xxl px-3 px-sm-4 pt-4">
      <div className="row">
        <div className="col-md-6">
          <div>
            <h1 className="main__txt display-5 mb-2">We Provide --- with Complete Cost Control</h1>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum soluta quisquam, voluptates maiores sed dolorem est, dolore omnis assumenda fugit! Soluta dolorem error quas obcaecati vero. Officiis quisquam laudantium, quis blanditiis non soluta voluptate.</p>
            <div className="mt-4">
              <a href="#" className="services__hero__btn services__hero__contact__btn">Contact Us </a>
              <a href="#" className="services__hero__btn services__hero__product__btn">View Products</a>
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
