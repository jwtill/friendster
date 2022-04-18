import React from "react";
import PropTypes from "prop-types";

function FeedItem(props) {
  return (
    <React.Fragment>
      <div id="feed-item">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.body}</p>
      </div>
    </React.Fragment>
  )
}

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default FeedItem;