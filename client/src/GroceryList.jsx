import React from 'react';
import GroceryItem from './GroceryItem.jsx';
function GroceryList({groceries}) {
  return (
    <div>
      {groceries.map(item => <GroceryItem item={item}/>)}
    </div>
  )
}
export default GroceryList;