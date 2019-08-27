import React, { Component } from "react";
import blog4 from "../images/blog/img-4.jpg";
import blog8 from "../images/blog/img-8.jpg";
import blog9 from "../images/blog/img-9.jpg";
import blog5 from "../images/blog/img-5.jpg";

export default class NewsSection extends Component {
  render() {
    return (
      <section
        id="blog"
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3>News & Events</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="blog-section">
              <div className="col-md-4">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img
                      src={blog4}
                      className="img-responsive"
                      alt="blog-post"
                    />
                    <div>
                      <span>Aug</span>
                      <span>07</span>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      Posted In: <span>Business, Blog</span>
                    </p>
                    <p>
                      <span>
                        <a href="#">
                          <i className="fa fa-comments"></i>
                        </a>{" "}
                        15
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-eye"></i>
                        </a>{" "}
                        11
                      </span>
                    </p>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img
                      src={blog8}
                      className="img-responsive"
                      alt="blog-post"
                    />
                    <div>
                      <span>Aug</span>
                      <span>07</span>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      Posted In: <span>Business, Blog</span>
                    </p>
                    <p>
                      <span>
                        <a href="#">
                          <i className="fa fa-comments"></i>
                        </a>{" "}
                        15
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-eye"></i>
                        </a>{" "}
                        11
                      </span>
                    </p>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img
                      src={blog9}
                      className="img-responsive"
                      alt="blog-post"
                    />
                    <div>
                      <span>Aug</span>
                      <span>07</span>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      Posted In: <span>Business, Blog</span>
                    </p>
                    <p>
                      <span>
                        <a href="#">
                          <i className="fa fa-comments"></i>
                        </a>{" "}
                        15
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-eye"></i>
                        </a>{" "}
                        11
                      </span>
                    </p>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
