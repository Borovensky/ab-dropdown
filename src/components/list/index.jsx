import React from 'react';
import PropTypes from 'prop-types';
import BasicList from './basicList';
import InteractiveList from './interactiveList';

const List = ({ isInteractive, ...props }) => (
  isInteractive
    ? <InteractiveList {...props} />
    : <BasicList {...props} />
);

List.defaultProps = {
  isInteractive: false,
};

List.propTypes = {
  isInteractive: PropTypes.bool,
};

export default List;
