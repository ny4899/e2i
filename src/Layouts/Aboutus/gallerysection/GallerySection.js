import React from 'react'
import "./gallery.css"

const GallerySection = () => {
  return (
    <>
      <div className="mt-5">
      <div className="container-xxl px-3 px-sm-4">
        <div className="row g-4">
          <div className="col-12 mb-3">
            <div className="d-flex align-itmes-center justify-content-center">
              <h1 className="bottom__heading">Our Gallery</h1>
            </div>
            <div className="d-flex align-itmes-center justify-content-center flex-column">
              <p className="text-center mt-4 mx-auto" style={{width: "100%" , maxWidth: "900px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                libero voluptates blanditiis impedit! Voluptates obcaecati vel
                minus repudiandae vero quis ratione!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center">
                <a className="main__link mx-2 active" href="#">Sites</a>
                <a className="main__link mx-2" href="#">Manufacture</a>
                <a className="main__link mx-2" href="#">Office</a>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="grid__container">
              <div className="img1">1</div>
              <div className="img2 gallery__img__height">2</div>
              <div className="img3">3</div>
              <div className="img4 gallery__img__height">4</div>
              <div className="img5">5</div>
              <div className="img6">6</div>
              <div className="img7 gallery__img__height">7</div>
              <div className="img8 gallery__img__height768">8</div>
              <div className="img9">9</div>
              <div className="img10 gallery__img__height">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GallerySection
