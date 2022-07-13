import React from 'react'

const InformationSection = () => {
  return (
    <div className="information__container">
    <div className="container-xxl px-2 px-sm-4">
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="d-flex flex-column align-items-center justify-content-center p-4">
            <i className="bi bi-alarm display-6 fw-bold"></i>
            <h4 className="fw-bold my-2 text-center">Opening Hours</h4>
            <p className="m-0 text-center">Monday to Saturday</p>
            <p className="m-0 text-center">10 AM to 6 PM</p>
          </div>
        </div>
        <div className="col-12 col-sm-4 border__lines__rl">
          <div className="d-flex flex-column align-items-center justify-content-center p-4">
            <i className="bi bi-telephone display-6 fw-bold"></i>
            <h4 className="fw-bold my-2 text-center">Call Us Anytime</h4>
            <p className="m-0 text-center">+91 9871888359</p>
            <p className="m-0 text-center">+91 8527867569</p>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="d-flex flex-column align-items-center justify-content-center p-4">
            <i className="bi bi-envelope display-6 fw-bold"></i>
            <h4 className="fw-bold my-2 text-center">Email Us</h4>
            <p className="m-0 text-center">mktg.eei@e2i.co.in</p>
            <p className="m-0 text-center">info@e2i.co.in</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default InformationSection
