import React from 'react';
import Card from './Card';

function Menu({ menuItems, onAddToOrder }) {
  return (
    <div className="menu">
      {menuItems.map(item => (
        <Card key={item.id} item={item} onAddToOrder={onAddToOrder} />
      ))}
    </div>
  );
}

export default Menu;