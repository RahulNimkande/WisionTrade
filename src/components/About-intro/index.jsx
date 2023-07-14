import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Why Choose Us ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  <b>Expertise and Experience: </b> With a team of seasoned
                  professionals, we bring a wealth of expertise and knowledge to
                  the table. Our experience in the export industry allows us to
                  navigate the complexities of international trade with
                  precision and efficiency.
                  <br /> <br />
                  <b>Tailored Export Solutions: </b> We understand that every
                  business has unique requirements. That &apos;s why we offer
                  customised export solutions that are tailored to your specific
                  needs. Whether you&apos;re looking to export stones and
                  marbles for construction projects we have the expertise to
                  meet your demands.
                  <br /> <br />
                  <b>Global Network: </b> Our extensive network spans across
                  different countries and regions, enabling us to connect
                  businesses worldwide. Through strategic partnerships and
                  robust logistics, we ensure smooth and reliable export
                  operations, facilitating seamless trade between you and your
                  international counterparts.
                  <br /> <br />
                  <b>Quality Assurance: </b> At{" "}
                  <span style={{ color: "#004b82" }}>Trad</span>
                  <span style={{ color: "#a40032" }}>E</span>
                  <span style={{ color: "#004b82" }}>dge</span>, quality is our
                  top priority. We meticulously select our export products,
                  ensuring they meet the highest industry standards. From the
                  sourcing process to the final delivery, we maintain stringent
                  quality control measures, guaranteeing that you receive
                  products of exceptional quality.
                  <br /> <br />
                  <b>Customer Satisfaction: </b> We firmly believe that our
                  success is rooted in the success of our clients. We strive to
                  build long-lasting relationships based on trust, reliability,
                  and exceptional service. Your satisfaction is our driving
                  force, and we go the extra mile to exceed your expectations at
                  every step of the export journey.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
