import React, { Component } from "react";

export default class FeaturesItem1 extends Component {
  render() {
    const { iconName, title1, subtitle, title2, title3, children } = this.props;
    return (
      <div className="feature-post">
        <div className="feature-post-content">
          <a href="/">
            <i className={iconName}></i>
          </a>
          <h2>{title1}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="hover-feature">
          <h2>{title2}</h2>
          <h1>{title3}</h1>
          <span></span>
          {children}
        </div>
      </div>
    );
  }
}
