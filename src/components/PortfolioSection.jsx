import React, { Component } from "react";

import img1 from "../images/portfolio/massonry/1.jpg";
import img2 from "../images/portfolio/massonry/2.jpg";
import img3 from "../images/portfolio/massonry/3.jpg";
import img5 from "../images/portfolio/massonry/5.jpg";
import img6 from "../images/portfolio/massonry/6.jpg";
import img7 from "../images/portfolio/massonry/7.jpg";
import img8 from "../images/portfolio/massonry/8.jpg";
import SectionTitle from "./SectionTitle";

export default class PortfolioSection extends Component {
  render() {
    return (
      <section
        id="portfolio"
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Awarded Work">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo
                </p>
              </SectionTitle>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="filter">
                <li>
                  <a className="active" href="#" data-filter="*">
                    Show All
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".html">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".wordpress">
                    WordPress
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".joomla">
                    Joomla
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="portfolio-box">
              <div class="col-md-4 col-sm-6 html">
                <div class="portfolio-post mb30">
                  <img src={img1} alt="" />
                  <div class="hover-box">
                    <div class="inner-hover">
                      <div class="middle">
                        <div class="portfolio-post-btn">
                          <a href="#" class="link">
                            View
                          </a>
                        </div>
                        <h4>
                          <a href="#">Another Portfolio 1</a>
                        </h4>
                        <p>HTML, Joomla</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 wordpress">
                <div class="portfolio-post mb30">
                  <img src={img2} alt="" />
                  <div class="hover-box">
                    <div class="inner-hover">
                      <div class="middle">
                        <div class="portfolio-post-btn">
                          <a href="#" class="link">
                            View
                          </a>
                        </div>
                        <h4>
                          <a href="#">Another Portfolio 1</a>
                        </h4>
                        <p>WordPress, Joomla</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 joomla">
                <div class="portfolio-post mb30">
                  <img src={img3} alt="" />
                  <div class="hover-box">
                    <div class="inner-hover">
                      <div class="middle">
                        <div class="portfolio-post-btn">
                          <a href="#" class="link">
                            View
                          </a>
                        </div>
                        <h4>
                          <a href="#">Another Portfolio 1</a>
                        </h4>
                        <p>Joomla, WordPress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 html joomla">
                <div class="portfolio-post mb30">
                  <img src={img6} alt="" />
                  <div class="hover-box">
                    <div class="inner-hover">
                      <div class="middle">
                        <div class="portfolio-post-btn">
                          <a href="#" class="link">
                            View
                          </a>
                        </div>
                        <h4>
                          <a href="#">Another Portfolio 1</a>
                        </h4>
                        <p>HTML, Joomla</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 joomla wordpress">
                <div class="portfolio-post mb30">
                  <img src={img5} alt="" />
                  <div class="hover-box">
                    <div class="inner-hover">
                      <div class="middle">
                        <div class="portfolio-post-btn">
                          <a href="#" class="link">
                            View
                          </a>
                        </div>
                        <h4>
                          <a href="#">Another Portfolio 1</a>
                        </h4>
                        <p>Joomla, WordPress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
