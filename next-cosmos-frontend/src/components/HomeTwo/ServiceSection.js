import React from "react";

function ServiceSection() {
  return (
    <section className="services-three bg-light-black text-white pt-115 rpt-95 pb-180 rpb-150">
      <div className="container">
        <div className="section-title-with-btn mb-55">
          <div className="section-title">
            <span className="sub-title">Let's collaborate and build the future together</span>
            <h2>Our services for your Business</h2>
          </div>
          <a href="#" className="theme-btn style-four mt-15">
            view all services
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon flaticon-web"></i>
              </div>
              <h4>
                <a href="#">Software Testing & QA (Quality Assurance)</a>
              </h4>
              <p>
                Next Cosmos Technology will competently manage all phases of an effective QA process, from setting up the 
                procedures, constructing an internal testing environment, and continually testing throughout the entire software cycle.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon flaticon-cloud-network-1"></i>
              </div>
              <h4>
                <a href="#">UI/UX Design Services</a>
              </h4>
              <p>
              We specialize in developing elegant and seamless UI/UX designs that improve user experience by integrating efficient collaboration, 
              streamlined projects, and initiatives that aim for better outcomes.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon flaticon-website"></i>
              </div>
              <h4>
                <a href="#">Web Application Development</a>
              </h4>
              <p>
              We have a top-notch staff of web application developers who can design sophisticated websites that are both creative and high-performing.
              No matter how big, how little, or in between your company is, our web development services company is here to help.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon flaticon-contract"></i>
              </div>
              <h4>
                <a href="#">Custom Software Development</a>
              </h4>
              <p>
              Our Specialization in developing software for the web and mobile platforms. From ideation to delivery and 
              maintenance, our custom software development services cover the whole software development lifecycle. 
              Investing in a future where your technology works for you, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
