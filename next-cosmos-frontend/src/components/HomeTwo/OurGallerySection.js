import React from "react";

export default function OurGallerySection() {
  return (
    <section className="gallery-section-two overlay pt-115 rpt-95 pb-85 rpb-65 px-60 rpx-0">
      <div className="container-fluid">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Our Gallery</span>
          <h2>
            Offer The Latest Software And <br />
            Solutions To Our customers!
          </h2>
        </div>
        <div className="row text-white justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="gallery-item style-two wow fadeInUp delay-0-2s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-two-1.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <h5>
                    <a href="#">Cyber Security Services</a>
                  </h5>
                  <a href="#" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="gallery-item style-two wow fadeInUp delay-0-4s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-two-2.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <h5>
                    <a href="#">Software License Management</a>
                  </h5>
                  <a href="#" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="gallery-item style-two wow fadeInUp delay-0-6s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-two-3.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <h5>
                    <a href="#">Knowledge Base & Live Chat</a>
                  </h5>
                  <a href="#" className="learn-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
