import React from "react";

const Liked = ({ liked, onLiked, id }) => {
  return (
    <button className="btn" onClick={() => onLiked(id)}>
      {liked && <i className="fa fa-heart"></i>}
      {!liked && <i className="fa fa-heart-o"></i>}
    </button>
  );
};

export default Liked;

// Could make these turn cursor into a hand on hover
// eg, style= {{ cursor: "pointer" }}
// alt + up arrow to move selected text up
