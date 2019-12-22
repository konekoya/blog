import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext;

  if (tags) {
    return (
      <div>
        <Tags>
          {tags.map(tag => {
            return (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            );
          })}
        </Tags>
      </div>
    );
  }
};

AllTags.propTypes = {
  pathContext: PropTypes.object.isRequired
};

export default AllTags;
