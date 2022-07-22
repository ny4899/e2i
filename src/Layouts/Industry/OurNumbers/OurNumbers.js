import React from 'react'
import "./OurNumbers.css"

const OurNumbers = () => {
  return (
    <div>
      <div className="container-xxl px-3 px-sm-4 pt-sm-3  pb-5">
        <div className="row g-3 g-sm-4">
          <div className="col-6 col-sm-3">
            <div className="p-3 shadow  ourNumber__card py-4">
              <h1 className="text-center m-0 p-0 main__txt display-6 my-2">200+</h1>
              <p className="text-center m-0 p-0 ourNumber__card__txt">Industries</p>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="p-3 shadow  ourNumber__card py-4">
              <h1 className="text-center m-0 p-0 main__txt display-6 my-2">300+</h1>
              <p className="text-center m-0 p-0 ourNumber__card__txt">Monitoring <br /> Stations</p>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="p-3 shadow  ourNumber__card py-4">
              <h1 className="text-center m-0 p-0 main__txt display-6 my-2">190+</h1>
              <p className="text-center m-0 p-0 ourNumber__card__txt">Happy <br /> Clients</p>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="p-3 shadow  ourNumber__card py-4">
              <h1 className="text-center m-0 p-0 main__txt display-6 my-2">300+</h1>
              <p className="text-center m-0 p-0 ourNumber__card__txt">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurNumbers
