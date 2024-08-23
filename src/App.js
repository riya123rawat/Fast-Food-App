import './App.css';
import Card from './components/Card';
import React, { useState } from 'react';
import OrderSummary from './components/OrderSummary';



function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const menuItems = [
    { name: 'Burger', description: 'A delicious burger with all the fixings', price: "SEK 79.99" },
    { name: 'Pizza', description: 'Classic pizza with your favourite toppings', price: "SEK 99.99" },
    { name: 'Fries', description: 'Crispy golden fries served hot and fresh', price: "SEK 59.99" },
  ];

  const addToOrder = (item) => {
    const existingItemIndex = orderItems.findIndex(orderItem => orderItem.name === item.name);
    let updatedOrderItems;

    if (existingItemIndex >= 0) {
      updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].quantity += 1;
    } else {
      updatedOrderItems = [...orderItems, { ...item, quantity: 1 }];
    }

    setOrderItems(updatedOrderItems);

    const price = parseFloat(item.price.replace('SEK ', '').replace(',', '.'));
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  };

  const increaseQuantity = (index) => {
    let updatedOrderItems = [...orderItems];
    const price = parseFloat(updatedOrderItems[index].price.replace('SEK ', '').replace(',', '.'));
    updatedOrderItems[index].quantity += 1;
    setOrderItems(updatedOrderItems);
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  };

  const decreaseQuantity = (index) => {
    let updatedOrderItems = [...orderItems];
    const price = parseFloat(updatedOrderItems[index].price.replace('SEK ', '').replace(',', '.'));

    if (updatedOrderItems[index].quantity > 1) {
      updatedOrderItems[index].quantity -= 1;
      setOrderItems(updatedOrderItems);
      setTotalPrice(prevTotalPrice => prevTotalPrice - price);
    }
  };

  return (
    <div className="App">
      <h1>Fast Food Menu</h1>
      <Card menuItems={menuItems} onAddToOrder={addToOrder} />
      <OrderSummary
        orderItems={orderItems}
        totalPrice={totalPrice}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
      />
    </div>
  );
}

export default App;