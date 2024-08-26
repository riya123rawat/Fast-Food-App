import './App.css';
import Card from './components/Card';
import React, { useState } from 'react';
import OrderSummary from './components/OrderSummary';
import  ThemeToggle  from './components/ThemeToggle';




function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  
  const menuItems = [
    { name: 'Burger', description: 'A delicious burger with all the fixings', price:  79.99 },
    { name: 'Pizza', description: 'Classic pizza with your favourite toppings', price:  99.99 },
    { name: 'Fries', description: 'Crispy golden fries served hot and fresh', price:  59.99 },
  ];

  
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

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
    setTotalPrice(updatedOrderItems.reduce((total, orderItem) => total + orderItem.price * orderItem.quantity, 0));
  };

  const increaseQuantity = (index) => {
    let updatedOrderItems = [...orderItems];
    const item = updatedOrderItems[index];
    item.quantity += 1;
    setOrderItems(updatedOrderItems);
    setTotalPrice(updatedOrderItems.reduce((total, orderItem) => total + orderItem.price * orderItem.quantity, 0));
  };

  const decreaseQuantity = (index) => {
    let updatedOrderItems = [...orderItems];
    const item = updatedOrderItems[index];

    if (item.quantity > 0) {
      item.quantity -= 1;
      setOrderItems(updatedOrderItems);
      setTotalPrice(updatedOrderItems.reduce((total, orderItem) => total + orderItem.price * orderItem.quantity, 0));
    }
  };
  
  

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <h1>Fast Food Menu</h1>
      <ThemeToggle toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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