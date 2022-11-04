import React from "react";
import "./MiddlePart.css";

const MiddlePart = () => {
  return (
    <div className="container-fluid px-lg-5 mt-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="lg-text">
            Why is <span className="text-pink">Local SEO</span> Important for
          </h1>
          <h1 className="lg-text text-pink">Increasing sales?</h1>
        </div>
        <br />
        <br />
        <div className="col-lg-11 col-md-12 d-flex align-items-end mb-5">
          <div className="local-seo-cercle bg-pink text-center me-5">
            <h2 className="fw-bold text-white">2.3</h2>
            <h3>MILLON</h3>
          </div>
          <div>
            <h1 className="fw-normal">
              Every minute, more then 2.3 million searched are made on Google.
              And the figure is always rising
            </h1>
            <p className="text-pink fs-5">Sourse: Internet Live Stats</p>
          </div>
        </div>
        <div className="col-lg-11 col-md-12 d-flex align-items-end mb-5">
          <div className="local-seo-cercle bg-pink text-center me-5">
            <h2 className="fw-bold text-white">78</h2>
            <h3>PRECENT</h3>
          </div>
          <div>
            <h1 className="fw-normal">
              78% of local mobile searches lead to and in store sale.
            </h1>
            <p className="text-pink fs-5">Sourse: Searches Engine Lead</p>
          </div>
        </div>

        <div className="col-lg-11 col-md-12 d-flex align-items-end">
          <div className="local-seo-cercle bg-pink text-center me-5">
            <h2 className="fw-bold text-white">94</h2>
            <h3>PRECENT</h3>
          </div>
          <div>
            <h1 className="fw-normal">
              94% of the time, people prioritize organic results over paid ads
              at the top of the page.
            </h1>
            <p className="text-pink fs-5">Sourse: Search engine Watch</p>
          </div>
        </div>

        <div className="col-12 mt-5 pt-4">
          <h1 className="lg-text">Are you ready to increase your traffic</h1>
          <h1 className="lg-text">and grow your revenue</h1>
          <h1 className="lg-text mt-4 text-pink">
            Request a FREE proposal now!
          </h1>
        </div>
        <div className=" col-lg-10 col-md-12 mt-5">
          <form action="">
            <div className="row">
              <div className="col-lg-5 col-md-12 me-lg-4 mb-5">
                <label htmlFor="" className="fs-4 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0 border border-2 border-secondary"
                ></input>
              </div>
              <div className="col-lg-5 col-md-12 mb-5">
                <label htmlFor="" className="fs-4 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0 border border-2 border-secondary"
                ></input>
              </div>
              <div className="col-lg-5 col-md-12 me-lg-4 mb-5">
                <label htmlFor="" className="fs-4 mb-3">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0 border border-2 border-secondary"
                ></input>
              </div>
              <div className="col-lg-5 col-md-12 mb-5">
                <label htmlFor="" className="fs-4 mb-3">
                  Websites
                </label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0 border border-2 border-secondary"
                ></input>
              </div>
              <div className="col-lg-5 col-md-12 me-lg-4 mb-5">
                <label htmlFor="" className="fs-4 mb-3">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0 border border-2 border-secondary"
                ></input>
              </div>
              <div className="col-lg-5 col-md-12 mb-5 mt-lg-5 text-center">
                <button className="btn form-btn text-white fs-3">
                  Send me a personal
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
