import React from 'react';

function OrderSummary({ orderItems, totalPrice, onIncreaseQuantity, onDecreaseQuantity }) {
  return (
    <div className="order-summary">
       
      <h2>Your Order</h2>
      <table border ="1px">
        <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quanity</th><br></br>
                <th>Total</th>
            </tr>
    
        <tbody>
            { orderItems.map((item, index) => (
                 <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                   
                    <button onClick={() => onIncreaseQuantity(index)}style={{backgroundColor:'green',color:'white',marginRight:'px'}}>+</button>
                    <button onClick={() => onDecreaseQuantity(index)}style={{backgroundColor:'red',color:'white'}}>-</button>
                    <td>{totalPrice.toFixed(2)} SEK</td>
                    </tr>
              ))}
          </tbody>
          </table>
         
    </div>
  );
}

export default OrderSummary;