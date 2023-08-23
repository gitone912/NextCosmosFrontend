import React from "react";
import background from "../../assets/images/contact/contact-page.jpg";
import Layouts from "../helpers/Layouts";

export default function Contact() {
  return (
    <>
      <Layouts
        pageTitle="Contact us"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "contact", path: "/contact" },
        ]}
      >
        <section className="contact-page py-120 rpy-100">
          <div className="container">
            <div className="contact-info-area mb-80">
              <div className="contact-info-item wow fadeInUp delay-0-2s">
                <i className="far fa-map"></i>
                <p>B-7, 1st Floor Sector-2, Noida, UP 201301</p>
              </div>
              <div className="contact-info-item wow fadeInUp delay-0-4s">
                <i className="far fa-envelope"></i>
                <p>
                  <a href="mailto:info@nextcosmostechnology.com">info@nextcosmostechnology.com</a>{" "}
                  <br />
                  <a href="#">www.nextcosmostechnology.com</a>
                </p>
              </div>
              <div className="contact-info-item wow fadeInUp delay-0-6s">
                <i className="fas fa-phone-alt"></i>
                <p>
                  <a href="callto:+91 8851373820">+91 8851373820</a> <br />
                  <a href="whatsappto:+91 8851373820">+91 8851373820</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="contact-form-left bgs-cover h-100 wow fadeInLeft delay-0-2s"
                  style={{ backgroundImage: `url(${background})` }}
                >
                  <h2>Leave A Message</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s">
                  <h3 className="comment-title mb-35">Send A Message</h3>
                  <p>
                    Avoids pleasure itself, because it is pleasure, but because
                    those who do not know how to pursue pleasure rationally
                    encounter
                  </p>
                  <form
                    id="comment-form"
                    className="comment-form mt-35"
                    name="comment-form"
                    action="#"
                    method="post"
                  >
                    <div className="row clearfix justify-content-center">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="full-name">
                            <i className="far fa-user"></i>
                          </label>
                          <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="form-control"
                            value=""
                            placeholder="Your Full Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="email">
                            <i className="far fa-envelope"></i>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value=""
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="comments">
                            <i className="fas fa-pencil-alt"></i>
                          </label>
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-control"
                            rows="4"
                            placeholder="Write Message"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-0">
                          <button type="submit" className="theme-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-page-map">
          <div className="our-location">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.178408989668!2d77.31073272939312!3d28.58511991465383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5fb027329d7%3A0x2428fd0d17538198!2sNext%20Cosmos%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1688669292849!5m2!1sen!2sin"
              height="650"
              style={{ border: "0", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Layouts>
    </>
  );
}