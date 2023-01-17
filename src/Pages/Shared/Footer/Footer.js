import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logoBrinedtow.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <img height={100} width={200} src={logo} alt="" />
          <p>
            mahmudhossain919@gmail.com
            <br />
            Sutrapur, Dhala-1100, Bangladesh
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>

        <div>
          <span className="footer-title">Social</span>
          <Link to="/" className="link link-hover">
            Twitter
          </Link>
          <Link to="/" className="link link-hover">
            Instagram
          </Link>
          <Link to="/" className="link link-hover">
            Facebook
          </Link>
          <Link to="/" className="link link-hover">
            Github
          </Link>
        </div>
        <div>
          <span className="footer-title">Explore</span>
          <Link to="/" className="link link-hover">
            Features
          </Link>
          <Link to="/" className="link link-hover">
            Enterprise
          </Link>
          <Link to="/" className="link link-hover">
            Security
          </Link>
          <Link to="/" className="link link-hover">
            Pricing
          </Link>
        </div>
        <div>
          <span className="footer-title">Apps</span>
          <Link to="/" className="link link-hover">
            Mac
          </Link>
          <Link to="/" className="link link-hover">
            Windows
          </Link>
          <Link to="/" className="link link-hover">
            iPhone
          </Link>
          <Link to="/" className="link link-hover">
            Android
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
