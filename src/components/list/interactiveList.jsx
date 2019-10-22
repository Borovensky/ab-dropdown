import classNamesUtil from 'ab-class-names';
import List from 'components/list';
import React, { cloneElement, Component } from 'react';
import { string, array, func, object } from 'prop-types';
import './styles.sass';

export default class InteractiveList extends Component {
  /* static --------------------------------------------------------------------- */

  static defaultProps = {
    activeItem: null,
    className: null,
  }

  static propTypes = {
    activeItem: object,
    className: string,
    listItemRenderer: func.isRequired,
    onItemSelection: func.isRequired,
    source: array.isRequired,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor(props, context) {
    super(props, context);
    const { activeItem, source } = this.props;
    this.state = {
      hoveredItem: activeItem,
      sortedSource: source,
    };
  }

  componentDidMount() {
    const { hoveredItem } = this.state;

    this.scrollToItem(hoveredItem);
  }

  /* callbacks ------------------------------------------------------------------ */

  /* utils ---------------------------------------------------------------------- */

  scrollToItem(item) {
    const { sortedSource } = this.state;
    const index = sortedSource.indexOf(item);
    const node = this.listNode.querySelectorAll('[data-menuitem]')[index];

    if (!node) return;

    const dropdownParams = {
      height: this.listNode.clientHeight,
      scroll: this.listNode.scrollTop,
      visibleTop: this.listNode.clientHeight + this.listNode.scrollTop,
    };

    const itemParams = {
      bottom: node.offsetTop + node.clientHeight,
      height: node.clientHeight,
      top: node.offsetTop,
    };

    if (itemParams.bottom > dropdownParams.visibleTop) {
      this.listNode.scrollTop = itemParams.bottom - dropdownParams.height;
    }
    if (itemParams.top < dropdownParams.scroll) {
      this.listNode.scrollTop = item.equals(sortedSource.first())
        ? itemParams.bottom - dropdownParams.height
        : itemParams.top;
    }
  }

  /* rendering ------------------------------------------------------------------ */

  renderItem(item) {
    const { activeItem, listItemRenderer, onItemSelection } = this.props;
    const renderedItem = listItemRenderer(item);

    return (cloneElement(
      renderedItem,
      {
        ...item.props,
        className: classNamesUtil(
          'ab_list--interactive__item',
          renderedItem.props.className,
        ),
        'data-active': Object.is(activeItem, item),
        'data-menuitem': true,
        onClick: (event) => onItemSelection(item, event),
      },
    ));
  }

  render() {
    const { source, className } = this.props;

    return (
      <div
        className={classNamesUtil('ab-list-interactive', className)}
        ref={(node) => { this.listNode = node; }}
      >
        <List
          listItemRenderer={(item) => this.renderItem(item)}
          source={source}
        />
      </div>
    );
  }
}
