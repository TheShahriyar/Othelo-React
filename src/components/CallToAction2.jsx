import React, { Component } from "react";
import bgimg from "../images/bg/bg10.jpg";

export default class CallToAction2 extends Component {
  render() {
    return (
      <section
        className="pad80 parallax"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-to-action-2 text-center white">
                <h3>Design. Develope. Dedicate</h3>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi.
                </p>
                <a href="#" className="btn btn-primary">
                  Buy This Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
