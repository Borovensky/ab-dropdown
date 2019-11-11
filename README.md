# ab_dropdown
react dropdown component

## Screenshot
 - wip -

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
        <td></td>
        <td>List what you want to display. It should be an array of objects.</td>
      </tr>
      <tr>
        <td>listItemRender</td>
        <td>function</td>
        <td>listItemRender: (item) => {item[Object.keys(item)[0]]}</td>
        <td>Define and customize what parameter(s) (list items) you want to display. By default will be displayed the first value in the object of the array that you pass via source prop. </td>
      </tr>
    </tbody>
</table>