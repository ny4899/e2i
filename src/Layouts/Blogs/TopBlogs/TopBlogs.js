import React from 'react'
import "../blogpage.css"
import drop from "../../../Assets/Images/home/drop.webp"

const TopBlogs = () => {
  return (
    <div>
    <div className="container-xxl px-3 px-sm-4 mt-4">
      <div className="row">
        <div className="col-sm-6 mb-4 mb-sm-0">
          <div className="d-flex flex-column ">
            <div className="blogCard__img__box">
              <img src={drop} className="w-100 rounded-3" alt="" />
              <div className="card__badge rounded-3">
                <p className="m-0 px-2 py-1 ">NEW</p>
              </div>
            </div>
            <h3 className="fs-4 fw-bold mt-3 mb-0">Yamuna – A River Or A Drain</h3>
            <p className="blog__date__txt">March 20, 2022</p>
            <p className="">{"Yamuna had been a great historical and cultural value in India since a great time. This holy river originates from Yamunotri in Himalayas and flows downwards to Haryana  where it enters into Delhi through Wazirabad Barrage below which it is no more a river below it. A 22 km stretch that"}</p>
            <div className="">
              <a href="#" className="blog__readmore__btn d-inline-block">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex flex-column ">
            <div className="blogCard__img__box">
              <img src={drop} className="w-100 rounded-3" alt="" />
              <div className="card__badge rounded-3">
                <p className="m-0 px-2 py-1 ">NEW</p>
              </div>
            </div>
            <h3 className="fs-4 fw-bold mt-3 mb-0">Yamuna – A River Or A Drain</h3>
            <p className="blog__date__txt">March 20, 2022</p>
            <p className="">{"Yamuna had been a great historical and cultural value in India since a great time. This holy river originates from Yamunotri in Himalayas and flows downwards to Haryana  where it enters into Delhi through Wazirabad Barrage below which it is no more a river below it. A 22 km stretch that"}</p>
            <div className="">
              <a href="#" className="blog__readmore__btn d-inline-block">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopBlogs
