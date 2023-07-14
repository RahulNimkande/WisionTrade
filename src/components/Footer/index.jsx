/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer
      className={`footer-half ${noSubBG ? "" : "sub-bg"} section-padding pb-0`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a  >
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> info@tradedge.com
                  </li>
                  <li>
                    <span>Address : </span> metus ullamcorper vel tincidunt
                  </li>
                  <li>
                    <span>Phone : </span> (+91) XXXXXXXXXX
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>

                <img style={{ padding:"0px 0px 10px 25px", width: "fit-content", height: "125px" }} src="/img/tradedgelink.png" alt="" />

                <div className="social">
                  <a   className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a   className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a   className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a   className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a  >
                  <img src="/img/products/marbles/Golden-Crystal.jpg" alt="Golden" />
                </a>
                <a  >
                  <img src="/img/products/marbles/Spider-Green.jpg" alt="" />
                </a>
                <a  >
                  <img src="/img/products/marbles/Z-Mercury.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2023, <span style={{ color:"#004b82" }}>Trad</span>
                  <span style={{ color:"#a40032" }}>E</span>
                  <span style={{ color:"#004b82" }}>dge</span>. 

            Driving International Trade Success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
