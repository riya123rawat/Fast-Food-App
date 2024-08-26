import React from 'react';

function OrderSummary({ orderItems, totalPrice, onIncreaseQuantity, onDecreaseQuantity }) {
  return (
    <div className="order-summary">
      <h2>Your Order</h2>
      <table border="1">
        
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
       
        
          {orderItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>SEK {item.price.toFixed(1)}</td>
              <td>{item.quantity}</td>
              <td>SEK {(item.price * item.quantity).toFixed(1)}</td>
              <td>
              <button onClick={() => onDecreaseQuantity(index)}style={{ backgroundColor: 'red', color: 'white' }}>- </button>
                <button onClick={() => onIncreaseQuantity(index)} style={{ backgroundColor: 'green', color: 'white' }}>+ </button>
                
              </td>
            </tr>
          ))}
    
      </table>
      <h3>Total Price: SEK {totalPrice.toFixed(1)}</h3>
    </div>
  );
}

export default OrderSummary;
