import React from 'react'

import jindal from "../../Assets/Images/brands/jindal.png"
import preciseSeamless from "../../Assets/Images/brands/precise-seamless.png"
import joshiMemorial from "../../Assets/Images/brands/joshi-memorial.png"
import knitCraft from "../../Assets/Images/brands/knit-craft.png"
import modiDairy from "../../Assets/Images/brands/modi-dairy.png"
import sigma from "../../Assets/Images/brands/sigma.png"
import ayushman from "../../Assets/Images/brands/ayushman.png"
import bharatGears from "../../Assets/Images/brands/bharat-gears.png"
import blissImpax from "../../Assets/Images/brands/bliss-impax.png"
import jbr from "../../Assets/Images/brands/jbr.png"

const BrandsSection = () => {
  return (
    <div className="brands__container py-5">
    <div className="container-xxl px-3 px-sm-4">
      <div className="row d-flex align-items-center justify-content-center g-3 g-md-4">
        <div className="col-12 mb-3">
          <div className="d-flex align-itmes-center justify-content-center">
            <h1 className="bottom__heading">Our Clints</h1>
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={jindal} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={preciseSeamless} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={joshiMemorial} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={knitCraft} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={modiDairy} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={sigma} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={ayushman} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={bharatGears} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={blissImpax} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2">
          <div className="d-flex align-items-center justify-content-center bg-light p-3 p-mg-4 rounded-3 shadow">
            <img src={jbr} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default BrandsSection
