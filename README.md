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
        <td>source</td>
        <td>array</td>
        <td></td>
        <td>List what you want to display. It should be an array of objects.</td>
      </tr>
      <tr>
        <td>listItemRender</td>
        <td>function</td>
        <td> listItemRender: (item) => <div>{item[Object.keys(item)[0]]}</div> </td>
        <td></td>
      </tr>
    </tbody>
</table>