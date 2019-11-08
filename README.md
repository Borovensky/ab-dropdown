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
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
      </tr>
    </tbody>
</table>