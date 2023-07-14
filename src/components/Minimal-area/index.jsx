/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/slideimg/roman.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  TradEdge :
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Welcome to TradEdge, a dynamic and forward-thinking export
                  company established in July 2023. We specialise in the global
                  export of high-quality Stone and Marbles. With our unwavering
                  commitment to excellence and a customer-centric approach, we
                  are dedicated to unlocking the global potential of businesses
                  like yours.
                  {/* Vision: To become a global leader in export services, driving
                  growth and prosperity for our clients, employees, and
                  stakeholders. */}
                  {/* Our creative Ad agency is ranked among the finest in the US.
                  We cultivate smart ideas for start-ups and seasoned players. */}
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Vision
                  </h6>
                  <p>
                    Vision: To become a global leader in export services,
                    driving growth and prosperity for our clients, employees,
                    and stakeholders.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>2</span> Our Mission
                  </h6>
                  <p>
                    Mission: Our mission is to provide reliable, efficient, and
                    innovative export solutions that empower businesses to
                    expand their global reach. By leveraging our expertise and
                    global network, we aim to create opportunities, foster
                    economic growth, and contribute to the development of the
                    industries we serve.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>3</span> Our Goals
                  </h6>
                  <p>
                    Join us on this exciting journey of international trade
                    expansion. Together, let&apos;s explore new horizons, forge
                    valuable partnerships, and elevate your business to new
                    heights.
                  </p>
                </li>
                {/* <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
