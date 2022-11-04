import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-pink text-center">
        <div className="container col-lg-8 col-md-12">
          <p className="fs-1 fw-normal text-center py-5 text-white">
            We at siteSquad are dedicate to every customer's success. we operate
            with professionalism and integrity. We innovate to help our clients
            improve and grow their business
          </p>
        </div>
      </div>
      <div className="container-fluid px-lg-5 mt-5">
        <span className="contact-info-top fs-3 px-5 py-2">
          Contact Information:
        </span>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="mt-5">
              <h2 className="text-pink fw-semibold m-0">Phone</h2>
              <p className="fs-3 contact-info">(213) 291-8896</p>
            </div>
            <div className="mt-4">
              <h2 className="text-pink fw-semibold m-0">Email</h2>
              <p className="fs-3 contact-info">contact@sitesquad.com</p>
            </div>
            <div className="mt-4">
              <h2 className="text-pink fw-semibold m-0">Address</h2>
              <p className="fs-3 contact-info">
                421 PARK PL #1A BROOKL YN, <br />
                NY 11238
              </p>
            </div>
            <div className="mt-4">
              <a className="contact-icon" href="">
                <i className="fa-brands fa-facebook-f "></i>
              </a>
              <a className="contact-icon" href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="contact-icon" href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 className="fw-bold lg-text">
              Prepare, <br /> Protect, <br /> Profit
            </h1>
            <h1 className="lg-text mt-5">
              Site<span className="text-pink">Squads</span>
            </h1>
            <p className="fs-3">
              The Only Comprehensive <br />
              Website Audit and <br />
              Solution Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
