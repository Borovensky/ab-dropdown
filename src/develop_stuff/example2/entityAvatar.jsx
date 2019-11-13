import React from 'react';
/* eslint-disable */
const EntityAvatar = (props) => {
  return (
    <span className="entity-avatar">
      <span className="entity-letter">{props.name.charAt(0)}</span>
    </span>
  );
};

export default EntityAvatar;
