import React from "react";
import "./TopPart.css";

const TopPart = () => {
  return (
    <div className="container-fluid px-lg-5 mt-5">
      <div className="col-12">
        <button className="btn seo-button fs-1 fw-semibold text-dark rounded-0">
          Local Business SEO
        </button>
      </div>
      <br />
      <div className="row mt-5">
        <div className="col-lg-7 col-md-12">
          <h1 className="fw-normal">
            Capture More of the market with our local Business our SEO Service
          </h1>
          <h1 className="fw-normal mt-5">
            Drive people in your area to find your business. with the help of
            our tech- enabled local SEO plan, you are sure to receive more
            organic traffic to your website from searched performed by your
            customer.
          </h1>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="div-container d-flex  align-items-center">
            <i className="fa-solid fa-arrow-up-right-dots social-icons me-4"></i>
            <p className="p-0 ms-2">Increase Traffick for your website</p>
          </div>
          <div className="div-container d-flex align-items-center mt-4">
            <i className="fa-solid fa-arrow-up-right-dots social-icons me-4"></i>
            <p className="p-0 ms-2">
              Start Getting more attention from your local market
            </p>
          </div>
          <div className="div-container d-flex align-items-center mt-4">
            <i className="fa-solid fa-chart-line social-icons me-4"></i>
            <p className="p-0 ms-2">
              Accelerate from your return on investment
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div>
            <h1 className="lg-text">
              What happens if i don't optimize my local presence?
            </h1>
            <br />
            <br />
            <p className="fw-normal fs-1 m-0">
              Losing visible for "near me" searches and reverting to the
            </p>
            <p className="fw-normal fs-1 m-0">
              previous untraceable, unreliable of being located are two
              consequences of giving up your local presence
            </p>
            <br />
            <br />
            <p className="fw-normal fs-1">
              Without local SEO, your business number will surely dwindle
            </p>
          </div>
          <br />
          <br />
          <div>
            <img
              className="img-fluid"
              src="https://www.investopedia.com/thmb/WnJN2H3tdnfFyCbabvnmS8PB0iA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_INV_Final_Line_Chart_Jan_2021-01-d2dc4eb9a59c43468e48c03e15501ebe.jpg"
              alt=""
            />
            <br />
            <br />
            <p className="fw-normal fs-1 mt-5">
              With local optimization , you have{" "}
              <span className="fw-semibold">Clear results</span> on the increase
              of users finding you through searching your products and services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
