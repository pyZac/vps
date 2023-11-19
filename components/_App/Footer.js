import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
               
               
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
              
              
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li>
                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:it4infinite@gmail.com">it4infinite@gmail.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li>
                </ul>
               
               
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} designed by{" "}
                  <a href="/" target="_blank">
                  it4infinite
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/map.png" className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.png" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
