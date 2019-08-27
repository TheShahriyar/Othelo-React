import React, { Component } from "react";
import pbg1 from "../images/others/pricing-bg-1.jpg";
import pbg2 from "../images/others/pricing-bg-2.jpg";
import pbg3 from "../images/others/pricing-bg-3.jpg";
import SectionTitle from "./SectionTitle";

export default class PricingSection extends Component {
  render() {
    return (
      <section id="pricing" className="pad-t80 pad-b80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Featured Packages">
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
            <div className="col-md-4">
              <div className="pricing-box">
                <div
                  className="pricing-head white"
                  style={{
                    backgroundImage: `url(${pbg1})`,
                    backgroundPosition: "50% 50%"
                  }}
                >
                  <span className="previous-price">$10.00</span>
                  <h4>Free</h4>
                  <h5>Basic</h5>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li>
                      Basic Feature{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>
                      One User{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>
                      10 Records{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>Basic Feature</li>
                    <li>One User</li>
                    <li>More Records</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-box">
                <div
                  className="pricing-head white"
                  style={{
                    backgroundImage: `url(${pbg2})`,
                    backgroundPosition: "50% 50%"
                  }}
                >
                  <span className="previous-price">$66.00</span>
                  <h4>$33.00</h4>
                  <h5>Professional</h5>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li>
                      Basic Feature{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>
                      One User{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>
                      10 Records{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>Basic Feature</li>
                    <li>One User</li>
                    <li>More Records</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-box">
                <div
                  className="pricing-head white"
                  style={{
                    backgroundImage: `url(${pbg3})`,
                    backgroundPosition: "50% 50%"
                  }}
                >
                  <span className="previous-price">$99.00</span>
                  <h4>$66.00</h4>
                  <h5>Business</h5>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li>
                      Basic Feature{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>
                      One User{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>
                      10 Records{" "}
                      <i
                        className="fa fa-question-circle"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Something more about this"
                      ></i>
                    </li>
                    <li>Basic Feature</li>
                    <li>One User</li>
                    <li>More Records</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
