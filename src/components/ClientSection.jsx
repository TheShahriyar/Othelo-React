import React, { Component } from "react";
import client1 from "../images/clients/client1.png";
import client2 from "../images/clients/client2.png";
import client3 from "../images/clients/client3.png";
import client4 from "../images/clients/client4.png";
import client5 from "../images/clients/client5.png";
import client6 from "../images/clients/client6.png";
import clientbg from "../images/bg/bg2.jpg";

import TestimonialSection from "./TestimonialSection";

export default class ClientSection extends Component {
  render() {
    return (
      <section
        id="client"
        className="pad80 parallax"
        style={{ backgroundImage: `url(${clientbg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="section-title text-center white">
              <h3>Clients & Review</h3>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "80px" }}>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="client-logo">
                <img src={client1} alt="" />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="client-logo">
                <img src={client2} alt="" />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="client-logo">
                <img src={client3} alt="" />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="client-logo">
                <img src={client4} alt="" />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="client-logo">
                <img src={client5} alt="" />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="client-logo">
                <img src={client6} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TestimonialSection />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
