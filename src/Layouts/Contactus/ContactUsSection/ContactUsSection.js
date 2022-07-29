import React, { useRef } from "react";
import "./ContactUsSection.css";
import clockSvg from "../../../Assets/Images/contact-page/clock-svgrepo-com.png";
import phoneSvg from "../../../Assets/Images/contact-page/mobile-svgrepo-com.png";
import mailSvg from "../../../Assets/Images/contact-page/mail-svgrepo-com.png";
import locationSvg from "../../../Assets/Images/contact-page/location-svgrepo-com.png";
import checkSvg from "../../../Assets/Images/contact-page/check-svgrepo-com.png";
import cancelSvg from "../../../Assets/Images/contact-page/cancel-svgrepo-com.png";


const ContactUsSection = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userMobile = useRef();
  const userProduct = useRef();
  const userMessage = useRef();

  const handleSubmit = async function (e) {
    e.preventDefault();
    const response = await fetch(
      "https://envirozone-2a268-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName:  userName.current.value,
          userEmail: userEmail.current.value,
          userMobile: userMobile.current.value,
          userProduct: userProduct.current.value,
          userMessage: userMessage.current.value,
        })
      }
    );
    if(response){
      alert("submited")
    }else{
      alert("somthing went wrong")
    }
  };

  return (
    <div className="container-xxl px-3 px-sm-4  mt-sm-4  mb-4">
      <div className="row">
        <div className="col-12 col-md-6 order-1 order-md-0">
          <form className="row g-2 g-sm-3" onSubmit={handleSubmit}>
            <div className="col-12 d-md-none">
              <div className="d-flex align-items-center mt-4">
                <h2 className="heading247">Have Any Query</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <label htmlFor="nameInput" className="form-label fw-bold">
                  {"Name (required)"}
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter your name ..."
                  ref={userName}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <label htmlFor="mobileInput" className="form-label fw-bold">
                  {"Mobile (required)"}
                </label>
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  className="form-control"
                  id="mobileInput"
                  placeholder="Enter your 10 digit mobile number ..."
                  ref={userMobile}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <label htmlFor="emailInput" className="form-label fw-bold">
                  {"Email (Optional)"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter your email ..."
                  ref={userEmail}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100 d-flex justify-content-end flex-column">
                <label
                  htmlFor="productSelectionInput"
                  className="form-label fw-bold"
                >
                 {" Select Product  (Optional)"}
                </label>
                <select
                  id="productSelectionInput"
                  className="form-select mb-3"
                  aria-label="Default select example"
                  ref={userProduct}
                >
                  <option value="none">Product list</option>
                  <option value="Wastewater treatment plant">
                    Wastewater monitoring system
                  </option>
                  <option value="Air pollution monitoring system">
                    Air pollution monitoring system
                  </option>
                  <option value="Emission monitoring syste">
                    Emission monitoring system
                  </option>
                  <option value="Effluent monitoring syste">
                    Effluent monitoring system
                  </option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div>
                <label htmlFor="textareaInput" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="textareaInput"
                  placeholder="Drop your message"
                  rows="5"
                  ref={userMessage}
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <p className="p-0">
                submit your query our team will contact you as soon as possible
              </p>
            </div>
            <div className="col-12">
              <div>
                <button type="submit" className="sumbit__btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <div className="bg-white p-3">
            <div className="row g-2 g-sm-3">
              <div className="col-12 ">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={clockSvg}
                    style={{ width: "60px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <h3 className="heading247">
                    24 <i className="bi bi-x-lg fw-bolder fs-5"></i> 7 Support
                  </h3>
                </div>
                <h4 className="mt-3 fs-5 fw-bold">
                  Talk to our brilliant and knowledgeable support team
                </h4>
              </div>
              <div className="col-sm-6 ">
                <div>
                  <div
                    className="d-flex p-2 "
                    style={{ backgroundColor: "var(--bodybg)" }}
                  >
                    <div className="me-3">
                      <img width="35px" src={phoneSvg} alt="" />
                    </div>
                    <div>
                      <h6 className="m-0">Call Us</h6>
                      <p className="m-0" style={{ color: "var(--green)" }}>
                        +91 9871888359
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div>
                  <div
                    className="d-flex  p-2 "
                    style={{ backgroundColor: "var(--bodybg)" }}
                  >
                    <div className="me-3">
                      <img width="35px" src={mailSvg} alt="" />
                    </div>
                    <div>
                      <h6 className="m-0">Mail Us</h6>
                      <p className="m-0" style={{ color: "var(--green)" }}>
                        info@e2i.co.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div
                    className="d-flex  p-2 "
                    style={{ backgroundColor: "var(--bodybg)" }}
                  >
                    <div className="me-3">
                      <img width="35px" src={locationSvg} alt="" />
                    </div>
                    <div>
                      <h6 className="m-0">Location</h6>
                      <p className="m-0" style={{ color: "var(--green)" }}>
                        WZ-3500/1, Raja Park Rd, Rani Bagh, New Delhi, Delhi
                        110034
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <h4 className="mt-3 fs-5 fw-bold">Office Opening Hours</h4>
              </div>
              <div className="col-12">
                <p className="m-0 mb-2">
                  <img
                    src={checkSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Monday: </span>10:00 Am to 6:00 Pm
                </p>
                <p className="m-0 mb-2">
                  <img
                    src={checkSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Tuesday: </span>10:00 Am to 6:00 Pm
                </p>
                <p className="m-0 mb-2">
                  <img
                    src={checkSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Wednesday: </span>10:00 Am to 6:00 Pm
                </p>
                <p className="m-0 mb-2">
                  <img
                    src={checkSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Thursday: </span>10:00 Am to 6:00 Pm
                </p>
                <p className="m-0 mb-2">
                  <img
                    src={checkSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Friday: </span>10:00 Am to 6:00 Pm
                </p>
                <p className="m-0 mb-2">
                  <img
                    src={checkSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Saturday: </span>10:00 Am to 6:00 Pm
                </p>
                <p className="m-0 mb-2">
                  <img
                    src={cancelSvg}
                    style={{ width: "20px" }}
                    className="me-1 me-sm-3"
                    alt=""
                  />
                  <span>Sunday: </span>Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
