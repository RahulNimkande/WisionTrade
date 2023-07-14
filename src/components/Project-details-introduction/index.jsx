import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = ({ prod }) => {
  const prodTitle = prod ? prod.title : "";
  const imgsrc = prod ? prod.image : " ";
  const desc = prod ? prod.desc : " ";
  const cate = prod ? prod.filterCategory : " ";
  
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4">
            <div className="item-img" data-wow-delay=".4s">
              <a>
                <img src={imgsrc} alt="image" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <h4>
                {prodTitle}
                <br />
              </h4>
              <p className="extra-text">
                <br />
               {desc}
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Category</h6>
              <p>
              {cate}
              </p>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>6 August 2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="/works/works-dark">Web Design </Link> ,
                <Link href="/works/works-dark">WordPress</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="/works/works-dark">Minimal</Link> ,
                <Link href="/works/works-dark">Modern</Link> ,
                <Link href="/works/works-dark">Design</Link>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
