# ab_dropdown
react dropdown component

## Usage
### example 1
```js
import Dropdown from 'ab-dropdown-react';

const SOURCE = [
  { key: 'edit', label: 'Edit' },
  { key: 'snooze', label: 'Snooze' },
  { key: 'delete', label: 'Delete' },
];

export default class Example1 extends Component {

  //==========

  onChange = item => {
    // onChange
  }

  render() {
    return (
      <Dropdown
        autoFocus
        label="More"
        onChange={(item) => this.onChange(item)}
        source={SOURCE}
        listItemRender={(item) => <div>{item.label}</div>}
      />
    );
  }
}
```
![](https://p63.f2.n0.cdn.getcloudapp.com/items/geuYKDyN/Screenshot+2019-11-12+at+23.22.32.png?v=53f61c98b9bb20e1024241fa30207dca)

### example 2
```js
import Dropdown from 'ab-dropdown-react';
import EntityAvatar from './entityAvatar';
import './styles.sass';

const SOURCE = [
  { id: '5383130f646', name: 'Artem', lastName: 'Sherman', img: null },
  { id: '5d4988fff91', name: 'Xavier', lastName: 'Suire', img: null },
  /*.........*/
];

export default class Example2 extends Component {
  constructor(props, context) {
    super(props, context);
    const { user } = props;

    this.state = {
      value: user, // { id: '53835603646', name: 'Stephen', lastName: 'Leguillon', img: null },
    };
  }

  onChange = (item) => {
    // do what you need
  }

  listItemRender = (item) => (
    <span className="list_item">
      <EntityAvatar {...item} />
      <span>{item.name}</span>
      <span style={{ marginLeft: '5px' }}>{item.lastName}</span>
    </span>
  );

  render() {
    const { value } = this.state;

    return (
      <Dropdown
        label="Select"
        classNames={{
          dropdown: 'custom-db',
          trigger: 'custom-tg',
        }}
        styles={{
          dropdown: { minWidth: '200px' },
          trigger: { minWidth: '200px' },
        }}
        disabled={!SOURCE}
        onChange={(item) => this.onChange(item)}
        source={SOURCE}
        labelRenderer={(item) => `${item.name} ${item.lastName}`}
        listItemRender={this.listItemRender}
        value={SOURCE.find((i) => i.name === value.name)}
      />
    );
  }
}
```
![](https://p63.f2.n0.cdn.getcloudapp.com/items/NQuenryw/Screenshot+2019-11-13+at+17.34.39.png?v=67274b61c337de699a8cceb350355544)

## API
### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>source (required)</td>
        <td>array</td>
        <td>(required)</td>
        <td>List what you want to display. It should be an array of objects.</td>
      </tr>
      <tr>
        <td>listItemRender</td>
        <td>function</td>
        <td>listItemRender: (item) => <div>{item[Object.keys(item)[0]]}</div></td>
        <td>Define and customize what parameter(s) (list items) you want to display in dropdown list. By default will be displayed the first value in the object of the array that you pass via source prop.</td>
      </tr>
      <tr>
        <td>label</td>
        <td>node</td>
        <td>null</td>
        <td>The value which will be displayed on the trigger button until no item is selected from the list.</td>
      </tr>
      <tr>
        <td>labelRenderer</td>
        <td>function</td>
        <td>labelRenderer: () => null</td>
        <td>Specify which value of the source object you want to display on a trigger button after selection.</td>
      </tr>
      <tr>
        <td>value</td>
        <td>object</td>
        <td>null</td>
        <td>dynamically set the value for the trigger. Note that the object that you want to pass via this prop you should take from the SOURCE array. Example: SOURCE.find((i) => i.name === value.name)</td>
      </tr>
      <tr>
        <td>onChange</td>
        <td>function</td>
        <td>onChange: () => null</td>
        <td>Called when you change the value.</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>boolean</td>
        <td>false</td>
        <td>Disabled trigger button.</td>
      </tr>
      <tr>
        <td>triggerIcon</td>
        <td>boolean</td>
        <td>true</td>
        <td>Displayed the arrow icon on the trigger button.</td>
      </tr>
        <td>classNames</td>
        <td>shape. shape({ dropdown: string, trigger: string })</td>
        <td>classNames: { dropdown: null, trigger: null },</td>
        <td>Specify the class names for the trigger button and dropdown list.</td>
      </tr>
      <tr>
        <td>styles</td>
        <td>shape. shape({ dropdown: object, trigger: object })</td>
        <td>styles: { dropdown: null, trigger: null },</td>
        <td>Specify styles for the trigger button and dropdown list.</td>
      </tr>
      <tr>
        <td>autoFocus</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>
      <tr>
        <td>dropdownPossition</td>
        <td>array</td>
        <td>['bottom', 'left']</td>
        <td>Define the position of the dropdown list.
            [0](yAxis) - if 'top' the dropdown will be displayed above the trigger. If 'bottom' the dropdown will be displayed under the trigger.
            [1](xAxis) - could be 'right' or 'left'. The same principle.</td>
      </tr>
    </tbody>
</table>