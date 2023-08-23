import React from "react";
import banner from "../../assets/images/hero/hero-two.jpg";

function Hero() {
  return (
    <section className="hero-section bg-dark-blue pt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">
              <span className="sub-title d-block wow fadeInUp delay-0-2s">
                EMPOWER YOUR BUSINESS
              </span>
              <h1 className="wow fadeInUp delay-0-4s mt-20">
                Excellent IT services for your success
              </h1>
              <div className="hero-btn mt-35 wow fadeInUp delay-0-6s">
                <a href="/contact" className="theme-btn">
                  meet with us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <div className="hero-image">
              <img src={banner} alt="Hero" />
              <div className="circle-one"></div>
              <div className="circle-two"></div>
            </div> */}
            <div className="hero-section-form bg-blue-tran p-50 wow fadeInRight delay-0-4s">
              {/* <div className="section-title">
                <h2 className="mb-0  text-white"> Consultation</h2>
              </div> */}
              <form
                id="hero-form"
                className="hero-form mt-20 form-row"
                name="hero-form"
                action="#"
                method="post"
              >
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="name" className="text-white">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control-sm"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="email" className="text-white">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control-sm"
                    placeholder="support@gmail.com"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="mobile" className="text-white">Mobile Number</label>
                  <input
                    type="mobile"
                    id="mobile"
                    name="mobile"
                    className="form-control-sm"
                    placeholder="+xx- xxxx xxx xxx"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="purpose" className="text-white">Purpose</label>
                  <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    className="form-control-sm"
                    placeholder="Grow my busness"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="address" className="text-white">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control-sm"
                    placeholder="B7, 1st floor, sector 2, Noida, UP"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="pincode" className="text-white">Pin Code</label>
                  <input
                    type="number"
                    id="pincode"
                    name="pincode"
                    className="form-control-sm"
                    placeholder="201301"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="country" className="text-white">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-control-sm"
                    placeholder="India"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mb-20">
                  <label htmlFor="country" className="text-white">How soon plan to start</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-control-sm"
                    placeholder="1 Week or 1 Month"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="description" className="text-white">Bussness Description</label>
                  {/* <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-control-sm"
                    placeholder="India"
                    required
                  /> */}
                  <textarea 
                    type="textarea"
                    id="description" 
                    className="form-control-sm h-auto"
                    name="description"
                    rows="2" 
                    placeholder="Bussness Description"
                    required></textarea>
                </div>
                
                {/* <div className="form-group col-md-6">
                  <label htmlFor="service" className="text-white">Subject</label>
                  <select id="service" name="service" className="form-control-sm">
                    <option value="">I Would Like to Discuss</option>
                    <option value="">About</option>
                    <option value="">Contact</option>
                    <option value="">Team</option>
                  </select>
                </div> */}
                <div className="col-md-12">
                  <button type="submit" className="theme-btn">
                    Get Free Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="left-circle"></div>
    </section>
  );
}

export default Hero;
