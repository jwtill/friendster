import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    <React.Fragment>
      <h3>{props.name} | {props.location}</h3>
    </React.Fragment>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired 
};

export default Friend;