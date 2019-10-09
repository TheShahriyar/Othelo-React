import React from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";

import img2 from "../images/others/img-2.jpg";
import img3 from "../images/others/img-3.jpg";
import img4 from "../images/others/img-4.jpg";
import img5 from "../images/others/img-5.jpg";
import img6 from "../images/others/img-6.jpg";
import img7 from "../images/others/img-7.jpg";
import SectionTitle from "./SectionTitle";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <li className={cn("tab", isActive && "active")} onClick={onClick}>
      {children}
    </li>
  );
};

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="pad-t80"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionTitle title="Our Services">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo
              </p>
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="othelo-tab" id="othelo-tab">
              <Tabs>
                <ul className="react-tabs">
                  <Tab>
                    <a>
                      <i className="fa fa-joomla"></i> Joomla <br />
                      Template
                    </a>
                  </Tab>
                  <Tab>
                    <a>
                      <i className="fa fa-wordpress"></i> Wordpress <br />
                      Theme
                    </a>
                  </Tab>
                  <Tab>
                    <a>
                      <i className="fa fa-codepen"></i> Web <br />
                      Application
                    </a>
                  </Tab>
                  <Tab>
                    <a>
                      <i className="fa fa-desktop"></i> Website <br />
                      Design
                    </a>
                  </Tab>
                  <Tab>
                    <a>
                      <i className="fa fa-file-code-o"></i> Software <br />
                      Developement
                    </a>
                  </Tab>
                  <Tab>
                    <a>
                      <i className="fa fa-cubes"></i> Graphic <br />
                      Design
                    </a>
                  </Tab>
                </ul>

                <div className="tab-content">
                  <Panel>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <img
                          src={img3}
                          className="img-responsive"
                          alt="Revenue"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <span className="dropcap bg circle">M</span>
                            aecenas volutpat, diam enim sagittis quam, id porta
                            quam. Sed id dolor consectetur fermentum volutpat
                            nibh, accumsan purus. Lorem sit ipsum dolor semper
                            consectetur amet, adipiscing elit. In maximus ligula
                            metus pellen tesque mattis. volutpat nibh
                          </div>
                          <div className="col-md-6 col-sm-6 mbl-margin-20">
                            <h4 style={{ marginBottom: "20px" }}>
                              Feature of Company
                            </h4>
                            <ul className="fa-ul">
                              <li>
                                <i className="fa-li fa fa-check-circle"></i>
                                Interdum malesuada fames
                              </li>
                              <li>
                                <i className="fa-li fa fa-check-circle"></i>
                                Malesuada fames ante
                              </li>
                              <li>
                                <i className="fa-li fa fa-check-circle"></i>
                                Nam blandit fermentum
                              </li>
                              <li>
                                <i className="fa-li fa fa-check-circle"></i>
                                Interdum fames ac ante
                              </li>
                              <li>
                                <i className="fa-li fa fa-check-circle"></i>
                                Malesuada fames ipsum
                              </li>
                              <li>
                                <i className="fa-li fa fa-check-circle"></i>
                                Nam at fermentum
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-12">
                            <p style={{ marginTop: "17px" }}>
                              Cras ultricies ligula sed magna dictum porta.
                              Vivamus magna justo, lacinia eget consectetur sed,
                              convallis at tellus. Sed porttitor lectus nibh.
                              Quisque velit nisi, pretium ut lacinia in,
                              elementum id enim. Vivamus magna justo, lacinia
                              eget consectetur sed, convallis at tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Panel>
                  <Panel>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <span className="dropcap bg circle">M</span>
                        aecenas volutpat, diam enim sagittis quam, id porta
                        quam. Sed id dolor consectetur fermentum volutpat nibh,
                        accumsan purus. Lorem ipsum dolor sit semper amet,
                        consectetur adipiscing elit. In maximus ligula metus
                        pellentesque mattis.Praesent sed nisi eleifend,
                        fermentum orci amet, iaculis libero fugiat nulla
                        pariatur. Excepteur .
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <img
                          src={img4}
                          className="img-responsive"
                          alt="Revenue"
                        />
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <ul className="fa-ul">
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Panel>
                  <Panel>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <span className="dropcap bg circle">M</span>
                        aecenas volutpat, diam enim sagittis quam, id porta
                        quam. Sed id dolor consectetur fermentum volutpat nibh,
                        accumsan purus. Lorem ipsum dolor sit semper amet,
                        consectetur adipiscing elit. In maximus ligula metus
                        pellentesque mattis.Praesent sed nisi eleifend,
                        fermentum orci amet, iaculis libero fugiat nulla
                        pariatur. Excepteur .
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <ul className="fa-ul">
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <img
                          src={img5}
                          className="img-responsive"
                          alt="Revenue"
                        />
                      </div>
                    </div>
                  </Panel>
                  <Panel>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <img
                          src={img3}
                          className="img-responsive"
                          alt="Revenue"
                        />
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <span className="dropcap bg circle">M</span>
                        aecenas volutpat, diam enim sagittis quam, id porta
                        quam. Sed id dolor consectetur fermentum volutpat nibh,
                        accumsan purus. Lorem ipsum dolor sit semper amet,
                        consectetur adipiscing elit. In maximus ligula metus
                        pellentesque mattis.Praesent sed nisi eleifend,
                        fermentum orci amet, iaculis libero fugiat nulla
                        pariatur. Excepteur .
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <ul className="fa-ul">
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Panel>
                  <Panel>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <span className="dropcap bg circle">M</span>
                        aecenas volutpat, diam enim sagittis quam, id porta
                        quam. Sed id dolor consectetur fermentum volutpat nibh,
                        accumsan purus. Lorem ipsum dolor sit semper amet,
                        consectetur adipiscing elit. In maximus ligula metus
                        pellentesque mattis.Praesent sed nisi eleifend,
                        fermentum orci amet, iaculis libero fugiat nulla
                        pariatur. Excepteur .
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <img
                          src={img2}
                          className="img-responsive"
                          alt="Revenue"
                        />
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <ul className="fa-ul">
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Panel>
                  <Panel>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <span className="dropcap bg circle">M</span>
                        aecenas volutpat, diam enim sagittis quam, id porta
                        quam. Sed id dolor consectetur fermentum volutpat nibh,
                        accumsan purus. Lorem ipsum dolor sit semper amet,
                        consectetur adipiscing elit. In maximus ligula metus
                        pellentesque mattis.Praesent sed nisi eleifend,
                        fermentum orci amet, iaculis libero fugiat nulla
                        pariatur. Excepteur .
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <ul className="fa-ul">
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Malesuada fames ac ante ipsum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>Nam
                            blandit quam nibh, at fermentum
                          </li>
                          <li>
                            <i className="fa-li fa fa-check-circle"></i>
                            Interdum et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <img
                          src={img4}
                          className="img-responsive"
                          alt="Revenue"
                        />
                      </div>
                    </div>
                  </Panel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
