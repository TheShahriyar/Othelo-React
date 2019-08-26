import React, { Component } from "react";
import img from "../images/slideshow/banner-1.jpg";

export default class Banner extends Component {
  render() {
    return (
      <section
        id="hero-banner"
        className="parallax"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner text-center white">
                <h1>
                  The Way of <span>Success</span>
                </h1>
                <p>
                  Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
                  magna justo, lacinia eget
                  <br /> consectetur sed, convallis at tellus. Donec rutrum
                  congue leo eget malesuada.
                </p>
                <a
                  href="#about-section"
                  className="btn btn-primary page-scroll"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
