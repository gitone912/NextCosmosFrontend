import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo-three.png"
import "../assets/css/style.css";

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      if (item !== value) {
        setSize(`${50 * getItems}px`);
        setItem(value);
      } else {
        setItem("");
      }
    }
  };
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <a
                  href="/"
                  className="offcanvas-brand text-center mb-40 d-block"
                >
                  <img src={logo} alt="" />
                </a>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "service")}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Our Service</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "service" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <a href="#">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="#">SEO Marketing</a>
                        </li>
                        <li>
                          <a href="#">Mobile Development</a>
                        </li>
                        <li>
                          <a href="#">Graphic Designing</a>
                        </li>
                        <li>
                          <a href="#">Cloud Services</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "training")}
                      id="training"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Training</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "training" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <a href="#">Industrial Training</a>
                        </li>
                        <li>
                          <a href="#">Corporate Training</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "courses")}
                      id="courses"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Online Courses</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "courses" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <a href="#">MERN Stack</a>
                        </li>
                        <li>
                          <a href="#">React JS</a>
                        </li>
                        <li>
                          <a href="#">Node JS</a>
                        </li>
                        <li>
                          <a href="#">HTML5/CSS3</a>
                        </li>
                        <li>
                          <a href="#">CSS Framework</a>
                        </li>
                        <li>
                          <a href="#">Javascript/ES6</a>
                        </li>
                        <li>
                          <a href="#">Typescript</a>
                        </li>
                        <li>
                          <a href="#">Database</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i> info@nextcosmostechnology.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i> +(91) 8851373823
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker-alt"></i> B-7, 1st Floor Sector-2
                        Noida, Uttar Pradesh 201301
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
