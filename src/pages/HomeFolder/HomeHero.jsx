import React from "react";
import "./HomeHero.css";
import emlBannerLogo from "../../Images/brandKit/eml-banner-logo.png";
import Typewriter from "typewriter-effect";

export default function HomeHero() {
  return (
    <div>
      <section id="home">
        <div className="container-fluid px-0 top-banner fixedElement">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-1 order-2" data-aos="fade-in">
                <h1>Welcome to EXTRA MURAL LECTURES</h1>


                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("<h2>The Offcial Lec-Dem Body of IIT Madras</h2>")

                      .start();
                  }}
                />


                <div className="home-buttons mt-5">
                  <button className="btn btn-lg main-btn">Speakers</button>
                  <button className="btn btn-lg fill-btn ms-4">
                    Contact Us
                  </button>
                </div>
              </div>
              <div
                className=" col-md-6 order-md-2 order-1 "
                data-aos="fade" data-aos-offset="0" data-aos-duration="1500"
              >
                <img
                  className="logo-img img-fluid"
                  src={emlBannerLogo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
