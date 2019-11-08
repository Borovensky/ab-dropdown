import autobind from 'autobind-decorator';
import Button from 'components/button';
import classNamesUtil from 'ab-class-names';
import Dropdown from 'components/dropdown';
import Icon from 'components/icon';
import List from 'components/list';
import uuidv4 from 'uuid/v4';
import React, { Component } from 'react';
import { node, bool, shape, string, object, array, func } from 'prop-types';
import './styles.sass';

export default class Entity extends Component {
  /* static --------------------------------------------------------------------- */

  static defaultProps = {
    autoFocus: false,
    classNames: { dropdown: null, trigger: null },
    disabled: false,
    label: null,
    labelRenderer: () => null,
    onChange: () => null,
    styles: { dropdown: null, trigger: null },
    triggerIcon: true,
  }

  static propTypes = {
    autoFocus: bool,
    classNames: shape({
      dropdown: string,
      trigger: string,
    }),
    disabled: bool,
    label: node,
    labelRenderer: func,
    listItemRender: func.isRequired,
    onChange: func,
    styles: shape({
      dropdown: object,
      trigger: object,
    }),
    source: array.isRequired,
    triggerIcon: bool,
  }

  /* lifecycle ------------------------------------------------------------------ */
  constructor() {
    super();
    this.uuid = uuidv4();
    this.state = {
      isExpanded: false,
      value: null,
    };
  }
  /* callbacks ------------------------------------------------------------------ */

  @autobind
  onItemSelection(item) {
    const { onChange } = this.props;

    this.setState({
      value: item,
      isExpanded: false,
    }, () => onChange(item));
  }

  @autobind
  onClick() {
    const { isExpanded } = this.state;

    this.setState({ isExpanded: !isExpanded });
  }

  /* utils ---------------------------------------------------------------------- */

  /* rendering ------------------------------------------------------------------ */

  render() {
    const { label, triggerIcon, autoFocus, classNames, styles, source,
      listItemRender, labelRenderer, disabled } = this.props;
    const { isExpanded, value } = this.state;

    return (
      <span className="ab_entity">
        <Button
          autoFocus={autoFocus}
          className={classNames.trigger}
          disabled={disabled}
          id={this.uuid}
          onClick={this.onClick}
          style={styles.trigger}
        >
          <span
            className={
              classNamesUtil(
                'ab_label__placeholder',
                { 'ab_label__placeholder-min-margin': triggerIcon },
              )
            }
          >
            {
              !value
                ? label || this.onItemSelection(source[0])
                : labelRenderer(value)
            }
          </span>
          {triggerIcon ? <Icon name="arrow-down" /> : null}
        </Button>

        <Dropdown
          className={classNames.dropdown}
          isExpanded={isExpanded}
          style={styles.dropdown}
          triggerId={this.uuid}
        >
          <List
            activeItem={value}
            isInteractive
            listItemRenderer={listItemRender}
            onItemSelection={this.onItemSelection}
            source={source}
            focusTarget={this.uuid}
          />
        </Dropdown>
      </span>
    );
  }
}
