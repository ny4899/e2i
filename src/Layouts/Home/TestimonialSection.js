import React from 'react'
import person from "../../Assets/Images/home/person.jpg"
import quoteLeft from "../../Assets/Images/home/Group 2.svg"
import quoteRight from "../../Assets/Images/home/Group 1.svg"

const TestimonialSection = () => {
  return (
    <div className="services__container py-5">
    <div className="container-xxl px-3 px-sm-4">
      <div className="row g-3 g-sm-4">
        <div className="col-12 mb-3">
          <div className="d-flex align-itmes-center justify-content-center">
            <h1 className="bottom__heading">Testimonial</h1>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-4 rounded-3 testimonial__bg1 h-100">
            <div className="d-flex ">
              <div className="p-1 testimonial__photo__bg rounded-3">
                <img src={person} width="60px" className="rounded-3" alt="" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0 fw-bold fs-4 ms-3">Nikita</p>
                <p className="m-0 ms-3"><span>-</span> ABC PVT LTD</p>
              </div>
            </div>
            <div className="mt-3">
              <img src={quoteLeft} width="25px" alt="" />
              <span className="mx-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minus illo ullam ipsum inventore
                modi, illum repellat fugiat unde tempore quam ea voluptatibus libero id quae quas, iusto numquam placeat
                voluptas earum, rerum sequi soluta vero. Dignissimos ullam voluptatibus, nam et quas, nesciunt!</span>
              <img src={quoteRight} className="" width="25px" alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="p-4 rounded-3 testimonial__bg2 h-100">
            <div className="d-flex ">
              <div className="p-1 testimonial__photo__bg rounded-3">
                <img src={person} width="60px" className="rounded-3" alt="" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0 fw-bold fs-4 ms-3">Nikita</p>
                <p className="m-0 ms-3"><span>-</span> ABC PVT LTD</p>
              </div>
            </div>
            <div className="mt-3">
              <img src={quoteLeft} width="25px" alt="" />
              <span className="mx-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minus illo ullam ipsum inventore
                modi, illum repellat fugiat unde tempore quam ea voluptatibus libero id quae quas, iusto numquam placeat
                voluptas earum, rerum sequi soluta vero. Dignissimos ullam voluptatibus, nam et quas, nesciunt!</span>
              <img src={quoteRight} className="" width="25px" alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="p-4 rounded-3 testimonial__bg3 h-100">
            <div className="d-flex ">
              <div className="p-1 testimonial__photo__bg rounded-3">
                <img src={person} width="60px" className="rounded-3" alt="" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0 fw-bold fs-4 ms-3">Nikita</p>
                <p className="m-0 ms-3"><span>-</span> ABC PVT LTD</p>
              </div>
            </div>
            <div className="mt-3">
              <img src={quoteLeft} width="25px" alt="" />
              <span className="mx-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minus illo ullam ipsum inventore
                modi, illum repellat fugiat unde tempore quam ea voluptatibus libero id quae quas, iusto numquam placeat
                voluptas earum, rerum sequi soluta vero. Dignissimos ullam voluptatibus, nam et quas, nesciunt!</span>
              <img src={quoteRight} className="" width="25px" alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-4 rounded-3 testimonial__bg4 h-100">
            <div className="d-flex ">
              <div className="p-1 testimonial__photo__bg rounded-3">
                <img src={person} width="60px" className="rounded-3" alt="" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0 fw-bold fs-4 ms-3">Nikita</p>
                <p className="m-0 ms-3"><span>-</span> ABC PVT LTD</p>
              </div>
            </div>
            <div className="mt-3">
              <img src={quoteLeft} width="25px" alt="" />
              <span className="mx-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minus illo ullam ipsum inventore
                modi, illum repellat fugiat unde tempore quam ea voluptatibus libero id quae quas, iusto numquam placeat
                voluptas earum, rerum sequi soluta vero. Dignissimos ullam voluptatibus, nam et quas, nesciunt!</span>
              <img src={quoteRight} className="" width="25px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TestimonialSection
