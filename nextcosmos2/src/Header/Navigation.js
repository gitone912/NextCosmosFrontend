import React from "react";
import { Link } from "react-router-dom";

function Navigation({ className }) {
  return (
    <div className={`restly-header-main-menu ${className || ""}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-seven">About</a>
        </li>
        <li>
          <a href="#">
            Services <i className="fa fa-angle-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/service-seven">Web Development</a>
            </li>
            <li>
              <a href="/service-seven">Digital Marketing</a>
            </li>
            <li>
              <a href="/service-seven">SEO Marketing</a>
            </li>
            <li>
              <a href="/service-seven">Mobile Development</a>
            </li>
            <li>
              <a href="/service-seven">Graphic Designing</a>
            </li>
            <li>
              <a href="/service-seven">Cloud Services</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Training <i className="fa fa-angle-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/portfolio-details">Industrial Training</a>
            </li>
            <li>
              <a href="/portfolio-details">Corporate Training</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Online Courses <i className="fa fa-angle-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/service-details">MERN Stack</a>
            </li>
            <li>
              <a href="/service-details">React JS</a>
            </li>
            <li>
              <a href="/service-details">Node JS</a>
            </li>
            <li>
              <a href="/service-details">HTML5/CSS3</a>
            </li>
            <li>
              <a href="/service-details">CSS Framework</a>
            </li>
            <li>
              <a href="/service-details">Javascript/ES6</a>
            </li>
            <li>
              <a href="/service-details">Typescript</a>
            </li>
            <li>
              <a href="/service-details">Database</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
