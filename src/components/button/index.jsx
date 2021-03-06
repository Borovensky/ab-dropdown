import autobind from 'autobind-decorator';
import classNamesUtil from 'ab-class-names';
import React, { Component } from 'react';
import { object, func, bool, string } from 'prop-types';
import './styles.sass';

export default class Button extends Component {
  /* static --------------------------------------------------------------------- */

  static defaultProps = {
    autoFocus: false,
    className: null,
    disabled: false,
    style: null,
  }

  static propTypes = {
    autoFocus: bool,
    className: string,
    disabled: bool,
    id: string.isRequired,
    onClick: func.isRequired,
    style: object,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor() {
    super();
    this.state = {};
  }
  /* callbacks ------------------------------------------------------------------ */

  @autobind
  onClick(event) {
    const { onClick } = this.props;
    onClick(event);
  }

  /* utils ---------------------------------------------------------------------- */

  /* rendering ------------------------------------------------------------------ */

  render() {
    const { children, autoFocus, id, className, style, disabled } = this.props;

    return (
      <button
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        onClick={this.onClick}
        disabled={!!disabled}
        id={id}
        className={classNamesUtil('button', className)}
        type="button"
        style={style}
      >
        {children}
      </button>
    );
  }
}
