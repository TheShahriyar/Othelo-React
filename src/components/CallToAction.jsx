import React, { Component } from "react";

export default class CallToAction extends Component {
  render() {
    return (
      <section className="call-to-action">
        <div className="container">
          <div className="row">
            <h2>
              Modern And Clead Design
              <a href="/" className="btn btn-primary white-border">
                Explore ABout Us
              </a>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
