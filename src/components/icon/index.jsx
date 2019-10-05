import classNames from 'ab-class-names';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.sass';

const importAll = (r) => r.keys().map(r);
importAll(require.context('icons', false, /.*\.svg$/));

const icon = ({ className, name, style }) => (
  <svg className={classNames('ab-icon', className)} style={style}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

icon.defaultProps = {
  className: '',
  style: {},
};

icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default icon;
