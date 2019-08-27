import React, { Component } from "react";
import team2 from "../images/team/team2.jpg";
import team3 from "../images/team/team3.jpg";
import team4 from "../images/team/team4.jpg";
import team5 from "../images/team/team5.jpg";
import SectionTitle from "./SectionTitle";

export default class TeamSection extends Component {
  render() {
    return (
      <section id="team" className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Dedicated Team">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo
                </p>
              </SectionTitle>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="team-section">
                <div className="col-md-4">
                  <div className="team-member-3">
                    <div className="team-member-img">
                      <img className="img-responsive" src={team2} alt="" />
                    </div>
                    <div className="team-info">
                      <span className="team-name">Jon Snow</span>
                      <span className="team-designation">CEO</span>
                    </div>
                    <div className="social-icon">
                      <ul className="icon">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="team-member-3">
                    <div className="team-member-img">
                      <img className="img-responsive" src={team3} alt="" />
                    </div>
                    <div className="team-info">
                      <span className="team-name">Jon Snow</span>
                      <span className="team-designation">CEO</span>
                    </div>
                    <div className="social-icon">
                      <ul className="icon">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="team-member-3">
                    <div className="team-member-img">
                      <img className="img-responsive" src={team5} alt="" />
                    </div>
                    <div className="team-info">
                      <span className="team-name">Jon Snow</span>
                      <span className="team-designation">CEO</span>
                    </div>
                    <div className="social-icon">
                      <ul className="icon">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-4">
                  <div className="team-member-3">
                    <div className="team-member-img">
                      <img className="img-responsive" src={team4} alt="" />
                    </div>
                    <div className="team-info">
                      <span className="team-name">Jon Snow</span>
                      <span className="team-designation">CEO</span>
                    </div>
                    <div className="social-icon">
                      <ul className="icon">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
