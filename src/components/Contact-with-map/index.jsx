import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Split from "../Split";

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    // alert(JSON.stringify(values, null, 2));
                    // show message
                    const formData = new FormData();

                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);

                    const res = await axios.post("/contact.php", formData);

                    if (!res) return;

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button
                          type="submit"
                          className={`btn-curve ${
                            theme === "dark" ? "btn-lit" : "btn-color"
                          } disabled`}
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a   >info@tradedge.com</a>
                  </h5>
                  <h5>XXXXXXXXXX</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    {/* S-1 Vision Residency Gut No 107, */}
                    <br />
                    metus ullamcorper vel tincidunt
                  </h6>
                </div>
                {/* <div> */}
                <br/>
                <br/>
                <img style={{ width: "150px", height: "150px" }} src="/img/tradedgelink.png" alt="" />
                {/* </div> */}
                <div className="social mt-50">
                  <a    className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a    className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a    className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a    className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="map" id="ieatmaps">
        <iframe
          src="https://maps.google.com/maps?q=S-1 Vision Residency Gut No 107, Beed Bypass Aurangabad - 431010 (MS)&t=&z=12&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
            © 2023, <span style={{ color:"#004b82" }}>Trad</span>
                  <span style={{ color:"#a40032" }}>E</span>
                  <span style={{ color:"#004b82" }}>dge</span>. 

            Driving International Trade Success
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
