import React from 'react';

function GroceryItem({item}) {
  return (
    <div>
      Name: {item.itemName}, Quantity: {item.quantity}
    </div>
  )
}



export default GroceryItem;