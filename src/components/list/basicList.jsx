import classNamesUtil from 'ab-class-names';
import React from 'react';
import { string, array, func } from 'prop-types';
import './styles.sass';

const BasicList = ({ className, source, listItemRenderer }) => (
  <div className={classNamesUtil('ab_list', className)}>
    <ul className="ab_list__items">
      {source.map((item) => (
        <li
          className="ab_list__item"
          key={item.key}
        >
          {listItemRenderer(item)}
        </li>
      ))}
    </ul>
  </div>
);

BasicList.defaultProps = {
  className: null,
};

BasicList.propTypes = {
  className: string,
  source: array.isRequired,
  listItemRenderer: func.isRequired,
};

export default BasicList;
