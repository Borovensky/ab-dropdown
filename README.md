# ab_dropdown
react dropdown component

## Screenshot
wip -

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
        <td>listItemRender: (item) => {item[Object.keys(item)[0]]}</td>
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
        <td>function</td>
        <td>!!!WIP!!!</td>
        <td>!!!WIP!!!</td>
      </tr>
      <tr>
        <td>onChange</td>
        <td>function</td>
        <td>onChange: () => null</td>
        <td>Called when you change the value</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>boolean</td>
        <td>false</td>
        <td>Disabled trigger button</td>
      </tr>
    </tbody>
</table>