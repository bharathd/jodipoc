import React from 'react'
import imagewhite from '../../Assets/Images/logo-white.png'
import '../../index.css'

function footer() {
  return (
    <footer id="rs-footer" className="rs-footer footer-date footer-data">
      <div className="container">
        <div className="footer-content pt-32 pb-0 md-pb-34 sm-pt-28">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 footer-widget md-mb-39">
              <div className="about-widget pr-15">
                <div className="logo-part">
                  <span><img src={imagewhite} alt="Footer Logo" /></span>
                </div>
                <p className="desc">Jodi Banao Matrimony strives to bring a paradigm shift in the Online Matrimonial Service. Lakhs of choices of profiles are sourced from across the globe. </p>

                <p className="desc">Website is designed with ease of use for searching and communicating with other members. Built with an Intuitive Compatibility Algorithm, Jodi Banao Matrimony strives to make it easier to find potential matches.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 md-mb-32 footer-widget">
              <h4 className="widget-title">Contact Info</h4>
              <ul className="address-widget pr-40">
                <li>
                  <i className="flaticon-location"></i>
                  <div className="desc">Hyderabad, Telangana, India</div>
                </li>
                <li>
                  <i className="flaticon-call"></i>
                  <div className="desc">
                    <span>(+91)173-9753105</span>
                  </div>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <div className="desc">
                    <span >support@jodibanaomatrimony.in</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-32 footer-widget">
              <h4 className="widget-title">Information</h4>
              <ul className="address-widget pr-40">
                <li>
                  <div className="desc"><span >About Us</span></div>
                </li>
                <li>
                  <div className="desc"><span >Contact Us</span></div>
                </li>
                <li>
                  <div className="desc"><span >Terms &amp; Conditions</span></div>
                </li>
                <li>
                  <div className="desc"><span >Privacy Policy</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row y-middle">
            <div className="col-lg-6 col-md-8 sm-mb-21">
              <div className="copyright">
                <p>© Copyright 2021 Jodi Banao Matrimony. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 text-right sm-text-center">
              <ul className="footer-social">
                <li><span><i className="fa fa-facebook"></i></span></li>
                <li><span><i className="fa fa-twitter"></i></span></li>
                <li><span><i className="fa fa-pinterest-p"></i></span></li>
                <li><span><i className="fa fa-linkedin"></i></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer