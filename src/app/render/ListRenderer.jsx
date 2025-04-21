import React from 'react';

const ListRenderer = ({ items, render}) => {
  return (
    <ul className={"list-renderer"}>
      {items.map((item, index) => {
        return (
          <li key={item.id}>
            {render(item)}
          </li>
        )
      })}
    </ul>
  );
};

export default ListRenderer;