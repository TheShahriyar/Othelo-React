import React from "react";
import PropTypes from "prop-types";

const ProgressBar = props => {
  return (
    <div className="skill-shortcode">
      <div className="skill">
        <span className="skill-name">{props.title}</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${props.width}%` }}
          >
            <span className="progress-bar-percentage pull-right">
              <span className="count"></span> {props.width}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default ProgressBar;
