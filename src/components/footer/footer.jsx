import React from 'react';
import './footer.scss';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import calendar from '../../assets/icons/calendar.png';
import clock from '../../assets/icons/clock.png';
import mail from '../../assets/icons/email.png';
import logo from '../../assets/katsin-logo-white.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-3 mb-5 mb-md-0">
            <div className="col1">
              <div className="site-link">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="img"
                />
              </div>
              <div className="row flex-md-column flex-row mb-3">
                <div className="col-6 col-md-12">
                  <div className="hours">
                    <div className="mb-3">
                      <img src={calendar} alt="img" />
                      <p>Tuesday-Sunday</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-12">
                  <div className="hours">
                    <div>
                      <img src={clock} alt="img" />
                      <p>5:00PM - 0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex d-none mt-4">
                <div className="hours">
                  <div className="mb-3">
                    <img src={calendar} alt="img" />
                    <p>Monday - Closed</p>
                  </div>
                </div>
              </div>
              <div className="row mt-4 d-flex d-md-none">
                <div className="col-6">
                  <div className="hours">
                    <div className="mb-3">
                      <img src={calendar} alt="img" />
                      <p>Monday</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="hours">
                    <div className="mx-auto">
                      <p className="closed">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-wrap-reverse justify-content-between">
              <div className="col-md-7 col-12 mb-5 mb-md-0">
                <div className="logo-wrapper mb-4">
                  <img src={logo} alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="col1 info-col">
                  <div className="email mb-3">
                    <a href="mailto:info@katsinusa.com">
                      <img src={mail} alt="img" />
                      <p>info@katsinusa.com</p>
                    </a>
                  </div>
                  <a href="tel:+18188693030" className="phone-link">
                    <img src={phone} alt="img" />
                    <span>+1 (818) - 869 - 3030</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/515+W+Broadway,+Glendale,+CA+91204/@34.1469975,-118.2658522,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c059cd1794bf:0xa2e2eb7f04a67441!8m2!3d34.1469975!4d-118.2658522!16s%2Fg%2F11csksbsjl?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="location-link mb-5"
                  >
                    <div>
                      <img src={location} alt="img" />
                      <span>515 W Broadway Ave, Unit 111, Glendale, CA, 91204</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <ul className="footer-links">
            <li>
              <NavLink to={'/jobs'}>Jobs</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/terms-of-services'}>Terms of Services</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/accessibility'}>Accessibility</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="poweredBy mb-0">
        Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
      </p>
    </div>
  );
};

export default Footer;
