import React from 'react';
import FastFood from './Burger/FastFood.jpg'; 


function Card({ menuItems, onAddToOrder }) {
    return (
        <div className='Card'>
           {menuItems.map((item, index) => (
                <div key={index} className="Card-item">
                    <img src={FastFood} className="App-Image" alt="Food item" />
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <p>Price: SEK {item.price}</p>
                    <button onClick={() => onAddToOrder(item)}>Add to Order</button>
                    
                </div>
            ))}
        
        </div>
    );
}

export default Card;
       