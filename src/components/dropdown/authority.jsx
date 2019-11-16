import React, { Component } from 'react';
import { bool, string, object } from 'prop-types';

export default (DecoratedComponent) => class DropdownAuthority extends Component {
  /* static --------------------------------------------------------------------- */

  static defaultProps = {
    align: 'top left',
    anchor: 'bottom left',
    isExpanded: null,
    style: null,
  }

  static propTypes = {
    align: string,
    anchor: string,
    isExpanded: bool,
    style: object,
    triggerId: string.isRequired,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor(props, context) {
    super(props, context);

    this.state = { bottom: null, left: null, right: null, top: null };
  }

  componentDidMount() {
    const { triggerId, isExpanded } = this.props;
    this.triggerNode = document.getElementById(triggerId);

    if (isExpanded) this.displayDropdownPosition();
  }

  componentDidUpdate(prevProps) {
    const { isExpanded } = this.props;
    if (!prevProps.isExpanded && isExpanded) this.displayDropdownPosition();
  }

  /* utils ---------------------------------------------------------------------- */

  displayDropdownPosition() {
    const { align, anchor } = this.props;
    const [yAlign, xAlign] = align.split(' ');
    const [yAnchore, xAnchore] = anchor.split(' ');
    const parentNode = this.triggerNode.parentNode.getBoundingClientRect();
    const trigger = this.triggerNode.getBoundingClientRect();

    this.setState({
      [xAlign]: `${Math.abs(parentNode[xAlign] - trigger[xAnchore])}px`,
      [yAlign]: `${Math.abs(parentNode[yAlign] - trigger[yAnchore])}px`,
    });
  }

  /* rendering ------------------------------------------------------------------ */
  render() {
    const { style, ...props } = this.props;
    const { bottom, left, right, top } = this.state;

    return (
      <DecoratedComponent
        {...props}
        style={{ bottom, left, right, top, ...style }}
      />
    );
  }
};
