import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logos/logo-three.png";
import "./style.css";

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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="#">About Us</Link>
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
                          <Link to="#">Web Development</Link>
                        </li>
                        <li>
                          <Link to="#">Digital Marketing</Link>
                        </li>
                        <li>
                          <Link to="#">SEO Marketing</Link>
                        </li>
                        <li>
                          <Link to="#">Mobile Development</Link>
                        </li>
                        <li>
                          <Link to="#">Graphic Designing</Link>
                        </li>
                        <li>
                          <Link to="#">Cloud Services</Link>
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
                          <Link to="#">Industrial Training</Link>
                        </li>
                        <li>
                          <Link to="#">Corporate Training</Link>
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
                          <Link to="#">MERN Stack</Link>
                        </li>
                        <li>
                          <Link to="#">React JS</Link>
                        </li>
                        <li>
                          <Link to="#">Node JS</Link>
                        </li>
                        <li>
                          <Link to="#">HTML5/CSS3</Link>
                        </li>
                        <li>
                          <Link to="#">CSS Framework</Link>
                        </li>
                        <li>
                          <Link to="#">Javascript/ES6</Link>
                        </li>
                        <li>
                          <Link to="#">Typescript</Link>
                        </li>
                        <li>
                          <Link to="#">Database</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">Contact</Link>
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
