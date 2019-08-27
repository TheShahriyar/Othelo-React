import React, { Component } from "react";

export default class SectionTitle extends Component {
  render() {
    const { title, style, children } = this.props;
    return (
      <div className={`section-title ${style}`}>
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}

SectionTitle.defaultProps = {
  style: "text-center"
};
