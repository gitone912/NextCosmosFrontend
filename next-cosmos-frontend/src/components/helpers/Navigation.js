import { Link } from "react-router-dom";

function Navigation({ className }) {
  return (
    <>
      <div className={`restly-header-main-menu ${className || ""}`}>
        <ul>
        <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/about-seven">
              About 
            </Link>
          </li>
          <li>
            <Link to="">
              Services <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
            <li>
                <Link to="/service-seven">Web Development</Link>
              </li>
              <li>
                <Link to="/service-seven">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/service-seven">SEO Marketing</Link>
              </li>
              <li>
                <Link to="/service-seven">Mobile Development</Link>
              </li>
              <li>
                <Link to="/service-seven">Graphic Designing</Link>
              </li>
              <li>
                <Link to="/service-seven">Cloud Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
            Training<i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
            <li>
                <Link to="/portfolio-details">Industrial Training</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Corporate Training</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
            Online Courses<i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
            <li>
                <Link to="/service-details">MERN Stack</Link>
              </li>
              <li>
                <Link to="/service-details">React JS</Link>
              </li>
              <li>
                <Link to="/service-details">Node JS</Link>
              </li>
              <li>
                <Link to="/service-details">HTML5/CSS3</Link>
              </li>
              <li>
                <Link to="/service-details">CSS Framework</Link>
              </li>
              <li>
                <Link to="/service-details">Javascript/ES6</Link>
              </li>
              <li>
                <Link to="/service-details">Typescript</Link>
              </li>
              <li>
                <Link to="/service-details">Database</Link>
              </li>
            </ul>
          </li>
          <li>
                <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
