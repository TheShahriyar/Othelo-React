import React, { Component } from "react";
import testi1 from "../images/testimonials/1.jpg";
import testi2 from "../images/testimonials/2.jpg";
import testi3 from "../images/testimonials/3.jpg";

export default class TestimonialSection extends Component {
  render() {
    return (
      <div
        id="carousel-example-generic"
        class="carousel slide testimonial-slide"
        data-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            class="active"
          >
            <img class="img-responsive" src={testi1} alt="" />
          </li>
          <li data-target="#carousel-example-generic" data-slide-to="1">
            <img class="img-responsive" src={testi2} alt="" />
          </li>
          <li data-target="#carousel-example-generic" data-slide-to="2">
            <img class="img-responsive" src={testi3} alt="" />
          </li>
        </ol>
        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner white" role="listbox">
          <div class="item active">
            <div class="testimonial-speech">
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
          <div class="item">
            <div class="testimonial-speech">
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
          <div class="item">
            <div class="testimonial-speech">
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
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span class="fa fa-long-arrow-left" aria-hidden="true"></span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span class="fa fa-long-arrow-right" aria-hidden="true"></span>
        </a>
      </div>
    );
  }
}
