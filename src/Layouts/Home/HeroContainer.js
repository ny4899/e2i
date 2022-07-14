import React from "react";
// images 
import heroBg from "../../Assets/Images/main-bg.jpg"

//components

const HeroContainer = () => {
  return (
    <>
      <div className="hero__container" style={{backgroundImage : `url(${heroBg})`}}>
        <div className="container-xxl px-3 px-sm-4">
          <div className="">
            <div
              className="hero__content__container d-flex align-items-center flex-column mx-auto p-4"
              style= {{width:"100%",maxWidth: "900px"}}
            >
              <h1 className="text-center main__txt display-5">Serving Planet For Better Living</h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt, cum obcaecati ad incidunt beatae eveniet deleniti
                veritatis quasi ipsam esse blanditiis aut consectetur sit fugit
                alias.
              </p>
              <div className="row g-2">
                <div className="col-6 col-sm-3">
                  <div className="bg__green h-100 p-2 rounded-3">
                    <p className="text-center m-0 fs-4 fw-bold">151+</p>
                    <p className="text-center m-0">Industries</p>
                  </div>
                </div>
                <div className="col-6 col-sm-3">
                  <div className="bg__green h-100 p-2 rounded-3">
                    <p className="text-center m-0 fs-4 fw-bold">300+</p>
                    <p className="text-center m-0">Monitoring Stations</p>
                  </div>
                </div>
                <div className="col-6 col-sm-3">
                  <div className="bg__green h-100 p-2 rounded-3">
                    <p className="text-center m-0 fs-4 fw-bold">300+</p>
                    <p className="text-center m-0">Projects</p>
                  </div>
                </div>
                <div className="col-6 col-sm-3">
                  <div className="bg__green h-100 p-2 rounded-3">
                    <p className="text-center m-0 fs-4 fw-bold">190+</p>
                    <p className="text-center m-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div
                className="input-group my-4"
                style={{width: "100%", maxWidth: "500px"}}
              >
                <input
                  type="number"
                  className="form-control"
                  placeholder="Submit your mobile no. Our team will Contact you"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary fw-bolder"
                  type="button"
                  id="button-addon2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
