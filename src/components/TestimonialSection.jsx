import React, { Component } from "react";
import testi1 from "../images/testimonials/1.jpg";
import testi2 from "../images/testimonials/2.jpg";
import testi3 from "../images/testimonials/3.jpg";

export default class TestimonialSection extends Component {
  render() {
    return (
      <div
        id="carousel-example-generic"
        className="carousel slide testimonial-slide"
        data-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          >
            <img className="img-responsive" src={testi1} alt="" />
          </li>
          <li data-target="#carousel-example-generic" data-slide-to="1">
            <img className="img-responsive" src={testi2} alt="" />
          </li>
          <li data-target="#carousel-example-generic" data-slide-to="2">
            <img className="img-responsive" src={testi3} alt="" />
          </li>
        </ol>
        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner white" role="listbox">
          <div className="item active">
            <div className="testimonial-speech">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur..
              </p>
            </div>
            <span>- David Millar</span>
          </div>
          <div className="item">
            <div className="testimonial-speech">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur..
              </p>
            </div>
            <span>- Mike Hussy</span>
          </div>
          <div className="item">
            <div className="testimonial-speech">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur..
              </p>
            </div>
            <span>- Robert Bruce</span>
          </div>
        </div>
        {/* <!-- Controls --> */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-long-arrow-left" aria-hidden="true"></span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-long-arrow-right" aria-hidden="true"></span>
        </a>
      </div>
    );
  }
}
