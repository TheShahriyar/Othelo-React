import React, { Component } from "react";

import img2 from "../images/others/img-2.jpg";
import img3 from "../images/others/img-3.jpg";
import img4 from "../images/others/img-4.jpg";
import img5 from "../images/others/img-5.jpg";
import img6 from "../images/others/img-6.jpg";
import img7 from "../images/others/img-7.jpg";
import SectionTitle from "./SectionTitle";

export default class ServiceSection extends Component {
  render() {
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
              <div className="othelo-tab" id="othelo-tab">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li role="presentation" className="active">
                    <a
                      href="#tab1"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-joomla"></i> Joomla <br />
                      Template
                    </a>
                  </li>
                  <li role="presentation" className="">
                    <a
                      href="#tab2"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-wordpress"></i> Wordpress <br />
                      Theme
                    </a>
                  </li>
                  <li role="presentation" className="">
                    <a
                      href="#tab3"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-codepen"></i> Web <br />
                      Application
                    </a>
                  </li>
                  <li role="presentation" className="">
                    <a
                      href="#tab4"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-desktop"></i> Website <br />
                      Design
                    </a>
                  </li>
                  <li role="presentation" className="">
                    <a
                      href="#tab5"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-file-code-o"></i> Software <br />
                      Developement
                    </a>
                  </li>
                  <li role="presentation" className="">
                    <a
                      href="#tab6"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      <i className="fa fa-cubes"></i> Graphic <br />
                      Design
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="tab1">
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
                                <i className="fa-li fa fa-check-circle"></i>Nam
                                blandit fermentum
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
                                <i className="fa-li fa fa-check-circle"></i>Nam
                                at fermentum
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
                  </div>
                  <div role="tabpanel" className="tab-pane" id="tab2">
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="tab3">
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                  </div>
                  <div role="tabpanel" className="tab-pane" id="tab4">
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="tab5">
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="tab6">
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
                            <i className="fa-li fa fa-check-circle"></i>Interdum
                            et malesuada fames ac ante
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
