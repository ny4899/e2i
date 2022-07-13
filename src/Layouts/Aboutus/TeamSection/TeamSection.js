import React from 'react'
import "./Teamsection.css"
const TeamSection = () => {
  return (
    <div>
    <div className="container-xxl px-3 px-sm-4 mb-5">
      <div className="row  ">
        <div className="col-12 col-md-6 ">
          <div className="row g-0 h-100">
            <div className="col-6 h-100">
              <div className=" h-100" style={{backgroundColor: "var(--darkwhite)", minHeight:"300px"}}></div>
            </div>
            <div className="col-6 h-100">
              <div className="p-2 p-sm-3 p-md-2 p-lg-3">
                <h3>ABC KUMAR</h3>
                <p>-CEO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row g-0 h-100">
            <div className="col-6 h-auto order-1 order-md-0">
              <div className=" h-100" style={{backgroundColor: "var(--darkwhite)", minHeight:"300px"}}></div>
            </div>
            <div className="col-6 h-100">
              <div className="p-2 p-sm-3 p-md-2 p-lg-3">
                <h3>ABC KUMAR</h3>
                <p>-CEO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="my-4 mx-2">
            <h2 className="fs-1 fw-bold position-relative">Our Team
              <div className="team__heading__bg"></div>
            </h2>
            <h6 className="fs-4">Driven by story, Guided by heart</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rerum veritatis a saepe tempore libero ea nisi nesciunt distinctio minus laboriosam nihil mollitia ipsa dolorum perspiciatis voluptates, eius pariatur non sed. Voluptatibus recusandae quasi, consectetur asperiores eveniet sunt ex quas iure cupiditate voluptatum autem vero ab tempore fugit ipsa facere!</p>
          </div>
        </div>
      </div>
      <div className="row g-2">
        <div className="col-6 col-sm-4 col-md-3">
          <div>
            <div style={{backgroundColor: "var(--darkwhite)", height:"200px"}}></div>
          </div>
          <div className="p-2 bg-light">
            <h6 className="text-center fs-4 fw-bold">Xyz Kumar</h6>
            <p className="text-center">Frontend Developer</p>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div>
            <div style={{backgroundColor: "var(--darkwhite)", height:"200px"}}></div>
          </div>
          <div className="p-2 bg-light">
            <h6 className="text-center fs-4 fw-bold">Xyz Kumar</h6>
            <p className="text-center">Frontend Developer</p>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div>
            <div style={{backgroundColor: "var(--darkwhite)", height:"200px"}}></div>
          </div>
          <div className="p-2 bg-light">
            <h6 className="text-center fs-4 fw-bold">Xyz Kumar</h6>
            <p className="text-center">Frontend Developer</p>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div>
            <div style={{backgroundColor: "var(--darkwhite)", height:"200px"}}></div>
          </div>
          <div className="p-2 bg-light">
            <h6 className="text-center fs-4 fw-bold">Xyz Kumar</h6>
            <p className="text-center">Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamSection
