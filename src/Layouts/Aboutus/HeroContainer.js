import React from "react";
import aboutRelatedImg from "../../Assets/Images/about-page/about-related.jpeg"
const HeroContainer = () => {
  return (
    <div>
      <div className="container-xxl px-3 px-sm-4 py-4">
        <div
          className="d-flex align-items-center flex-column mx-auto"
          style={{ width: "100%", maxWidth: "900px" }}
        >
            <h1 className="text-center main__txt display-5 mb-2">About Us</h1>
            <p className="text-center fs-5">{"Envirozone Equipments & Instruments was founded in the year 2018. E2I is one of the best service-providing companies for the study of Environmental Impact Assessment (EIA) for large, medium & small scale industrial units."}</p>
            <p className="text-center fs-5">{"We are the boss in providing all kinds of pollution control equipments & instruments subduing Air, Water and noise pollution also in pollution control consultancy and fabricate & manufacture. We are the leading supplier for Online Effluent & Emission Monitoring Analyzers. We are specialized in providing Data to CPCB/SPCB of multi analyzer (Systea, Xylem, S:can, Horiba, Tethys, HNL, Bhoomi, Shreetech, Fuji, Hemera etc)."}</p>
            <div className="row mb-3 g-3 g-sm-4">
              <div className="col-6 col-sm-3">
                <div><img className="w-100 rounded " src={aboutRelatedImg}/></div>
              </div>
              <div className="col-6 col-sm-3">
                <div><img className="w-100 rounded " src={aboutRelatedImg}/></div>
              </div>
              <div className="col-6 col-sm-3">
                <div><img className="w-100 rounded " src={aboutRelatedImg}/></div>
              </div>
              <div className="col-6 col-sm-3">
                <div><img className="w-100 rounded " src={aboutRelatedImg}/></div>
              </div>
            </div>
            <p className="text-center fs-5">{"Envirozone Equipments & Instruments (E2I) is a group of innovative and experienced people who look towards wastewater in a different prospect and work relentlessly to offer specialized solutions with a solid optimism and positive approach. We are accepting challenging tasks every day and take them through offering high-quality, effective wastewater and water treatment solutions is our specialty."}</p>
            <p className="text-center fs-5">{"It describes the processes and activities that need to take place to characterize and monitor the quality of the environmental monitoring system."}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
