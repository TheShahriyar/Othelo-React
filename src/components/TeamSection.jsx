import React, { Component } from "react";
import Slider from "react-slick";
import team2 from "../images/team/team2.jpg";
import team3 from "../images/team/team3.jpg";
import team4 from "../images/team/team4.jpg";
import team5 from "../images/team/team5.jpg";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class TeamSection extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
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
                <Slider {...sliderSettings}>
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
