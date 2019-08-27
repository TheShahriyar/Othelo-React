import React, { Component } from "react";
import mapbg from "../images/others/mapbg.jpg";

export default class ContactSection extends Component {
  render() {
    return (
      <section id="contact" className="form-map">
        <div id="map" style={{ height: "690px" }}>
          <img src={mapbg} alt="Map location" />
        </div>
        <div className="container">
          <div className="row">
            <div className="form-section">
              <div className="col-md-6 col-xs-12 pull-right black full-height">
                <h4 style={{ marginBottom: "30px", color: "#fff" }}>
                  Fill The Form
                </h4>
                <form name="sentMessage" id="contactForm" novalidate>
                  <div className="contact-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        id="name"
                        required
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        id="email"
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Phone *"
                        id="phone"
                        required
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Message Subject *"
                        id="msg_subject"
                        required
                        data-validation-required-message="Please write message subject."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Your Message *"
                        id="message"
                        required
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="clearfix"></div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
