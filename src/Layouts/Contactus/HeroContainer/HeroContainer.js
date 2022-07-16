import React from "react";

const HeroContainer = () => {
  return (
    <div className="container-xxl px-3 px-sm-4 py-4">
      <div style={{ width: "100%", maxWidth: "900px" }} className="mx-auto" >
        <div className="row">
          <div className="col-12">
            <div>
              <h1 className="text-center main__txt display-5 mt-2">Contact Us</h1>
              <p className="fs-5 text-center">
                Please get in touch our expert support team will answer all your
                questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
