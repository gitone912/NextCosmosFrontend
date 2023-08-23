import React from "react";

function AboutSection() {
  return (
    <section className="about-two pt-100 rpt-80 pb-195 rpb-100">
      <div className="container">
        <div className="about-wrap pt-20">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s">
                <img
                  src={
                    require(`../../assets/images/about/about-two.jpg`).default
                  }
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title">It Support For Business</span>
                  <h2>
                    Why choose Next Cosmos Technology
                  </h2>
                </div>
                <p>
                Whether you are a startup with an innovative idea or an established enterprise seeking to optimize 
                your operations, Next Cosmos Technology is your ideal partner for exceptional software solutions.
                </p>
                <ul className="list-style-three mt-15">
                  <li>Future-ready Products & services</li>
                  <li>Smart Applications</li>
                  <li>CX (Customer Experience)</li>
                  <li>Agile Development</li>
                </ul>
                <a href="#" className="theme-btn style-three mt-25">
                  View details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
