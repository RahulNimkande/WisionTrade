import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
    <section className="blc-sec section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb30">
              <div className="sub-title">
                <h6>Know Us Better</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title wow words chars splitting"
                  data-splitting
                >
                  {/* Trade without Boundaries
                Taking Businesses to New Frontiers */}
                  TradEdge<br />
                  Driving International Trade Success
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Welcome to TradEdge, a dynamic and forward-thinking export
                  company established in July 2023. We specialise in the global
                  export of high-quality stones, marbles, pharma products, and
                  fabrics. With our unwavering commitment to excellence and a
                  customer-centric approach, we are dedicated to unlocking the
                  global potential of businesses like yours.
                </p>
              </Split>
              <Split>
                <Link href="/about/about-light">
                  <a
                    className="simple-btn custom-font mt-20 wow words chars splitting"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlcSec;
