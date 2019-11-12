# ab_dropdown
react dropdown component

## Screenshot
![](https://p63.f2.n0.cdn.getcloudapp.com/items/geuYKDyN/Screenshot+2019-11-12+at+23.22.32.png?v=53f61c98b9bb20e1024241fa30207dca)

## Usage

```js
import Dropdown from 'ab-dropdown-react';

listItemRender = (item) => (
  <div className="list_item">{item.name}</div>
);

render() {
  return (
    <Dropdown 
      source={SOURCE}
      listItemRender={this.listItemRender}
    />
  );
}
```

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
    </tbody>
</table>