import autobind from 'autobind-decorator';
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
    focusTarget: null,
  }

  static propTypes = {
    activeItem: object,
    className: string,
    focusTarget: string,
    listItemRenderer: func.isRequired,
    onItemSelection: func.isRequired,
    source: array.isRequired,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor(props, context) {
    super(props, context);
    const { activeItem, source } = this.props;
    this.state = {
      hoveredItem: activeItem || source[0],
      sortedSource: source,
    };
  }

  componentDidMount() {
    const { focusTarget } = this.props;
    const { hoveredItem } = this.state;

    if (focusTarget) {
      document.getElementById(focusTarget)
        .addEventListener('keydown', this.onKeyDown);
    }

    this.scrollToItem(hoveredItem, true);
  }

  componentWillUnmount() {
    const { focusTarget } = this.props;

    if (focusTarget) {
      document.getElementById(focusTarget)
        .removeEventListener('keydown', this.onKeyDown);
    }
  }
  /* callbacks ------------------------------------------------------------------ */

  @autobind
  onKeyDown(event) {
    const [DOWN, UP] = [1, -1];
    const { onItemSelection } = this.props;
    const { hoveredItem } = this.state;

    if (event.keyCode === 13) {
      event.preventDefault();
      onItemSelection(hoveredItem);
    }

    switch (event.keyCode) {
      case 38: // up arrow
        event.preventDefault();
        this.focusNextItem(UP);
        break;

      case 40: // down arrow
        event.preventDefault();
        this.focusNextItem(DOWN);
        break;

      default:
    }
  }

  /* utils ---------------------------------------------------------------------- */

  focusNextItem(direction) {
    const { hoveredItem, sortedSource } = this.state;

    let nextIndex = sortedSource.indexOf(hoveredItem) + direction;
    nextIndex = ((nextIndex % sortedSource.length) + sortedSource.length) % sortedSource.length;

    this.setState({ hoveredItem: sortedSource[nextIndex] });
    this.scrollToItem(sortedSource[nextIndex]);
  }

  scrollToItem(item, centered) {
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

    if (centered) {
      this.listNode.scrollTop = itemParams.top
        - (dropdownParams.height / 2)
        + (itemParams.height / 2);
    } else {
      if (itemParams.bottom > dropdownParams.visibleTop) {
        this.listNode.scrollTop = itemParams.bottom - dropdownParams.height;
      }
      if (itemParams.top < dropdownParams.scroll) {
        this.listNode.scrollTop = Object.is(item, sortedSource[0])
          ? itemParams.bottom - dropdownParams.height
          : itemParams.top;
      }
    }
  }

  /* rendering ------------------------------------------------------------------ */

  renderItem(item) {
    const { activeItem, listItemRenderer, onItemSelection } = this.props;
    const { hoveredItem } = this.state;
    const renderedItem = listItemRenderer(item);

    // if (!renderedItem) return null;

    return (cloneElement(
      renderedItem,
      {
        ...item.props,
        className: classNamesUtil(
          'ab_list--interactive__item',
          renderedItem.props.className,
        ),
        'data-active': Object.is(activeItem, item),
        'data-hover': Object.is(item, hoveredItem),
        'data-menuitem': true,
        onClick: (event) => onItemSelection(item, event),
        onMouseEnter: () => this.setState({ hoveredItem: item }),
        tabIndex: -1,
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
