import React, { Component } from "react";

export default class FeaturesItem1 extends Component {
  render() {
    return (
      <div className="feature-post">
        <div className="feature-post-content">
          <a href="/">
            <i className="icon-mobile"></i>
          </a>
          <h2>RESPONSIVE DESIGN</h2>
          <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
        </div>
        <div className="hover-feature">
          <h2>Branding Strategies</h2>
          <h1>Creative Design</h1>
          <span></span>
          <p>
            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
            consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
            gravida non, commodo a, sodales sit amet, nisi. Donec nec justo eget
            felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
            Aenean dignissim pellentesque felis.
          </p>
        </div>
      </div>
    );
  }
}
