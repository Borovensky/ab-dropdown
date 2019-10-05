import classNamesUtil from 'ab-class-names';
import List from 'components/list';
import React, { cloneElement, Component } from 'react';
import { string, array, func } from 'prop-types';
import './styles.sass';

export default class InteractiveList extends Component {
  /* static --------------------------------------------------------------------- */

  static defaultProps = {
    className: null,
  }

  static propTypes = {
    className: string,
    source: array.isRequired,
    listItemRenderer: func.isRequired,
    onItemSelection: func.isRequired,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor() {
    super();
    this.state = {};
  }
  /* callbacks ------------------------------------------------------------------ */

  /* utils ---------------------------------------------------------------------- */

  /* rendering ------------------------------------------------------------------ */

  renderItem(item) {
    const { listItemRenderer, onItemSelection } = this.props;
    const renderedItem = listItemRenderer(item);

    return (cloneElement(
      renderedItem,
      {
        ...item.props,
        onClick: (event) => onItemSelection(item, event),
      },
    ));
  }

  render() {
    const { source, className } = this.props;

    return (
      <div className={classNamesUtil('ab-list-interactive', className)}>
        <List
          source={source}
          listItemRenderer={(item) => this.renderItem(item)}
        />
      </div>
    );
  }
}
