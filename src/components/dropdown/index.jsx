import classNamesUtil from 'ab-class-names';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { string, bool, object } from 'prop-types';
import './styles.sass';

export default class Dropdown extends Component {
  /* static --------------------------------------------------------------------- */

  static defaultProps = {
    isExpanded: null,
    className: null,
    style: null,
  }

  static propTypes = {
    className: string,
    isExpanded: bool,
    style: object,
    triggerId: string.isRequired,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor(props, context) {
    super(props, context);
    this.state = { isExpanded: props.isExpanded };
  }

  componentDidMount() {
    const { triggerId } = this.props;
    this.triggerNode = document.getElementById(triggerId);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { isExpanded } = this.props;

    if (!isExpanded && nextProps.isExpanded) {
      this.setState({ isExpanded: true });
    } else if (isExpanded && !nextProps.isExpanded) {
      this.setState({ isExpanded: false });
    }
  }
  /* callbacks ------------------------------------------------------------------ */

  /* utils ---------------------------------------------------------------------- */

  /* rendering ------------------------------------------------------------------ */
  renderDropdown() {
    const { children, isExpanded, className, style } = this.props;

    return (
      <div
        aria-hidden={!isExpanded}
        className={classNamesUtil('ab-dropdown', className)}
        ref={(node) => { this.dropdownNode = node; }}
        // onBlur={this.onFocusOut}
        // onKeyDown={this.onKeyDown}
        role="dialog"
        style={style}
        tabIndex="-1"
      >
        {children}
      </div>
    );
  }

  render() {
    const { isExpanded } = this.state;
    const { triggerId } = this.props;

    if (!isExpanded) return null;
    return createPortal(
      this.renderDropdown(),
      document.getElementById(triggerId).parentNode,
    );
  }
}
