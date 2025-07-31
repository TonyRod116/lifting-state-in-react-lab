import React from 'react';

const Ingredient = ({ ingredient, onAdd, onRemove, showAddButton = true }) => {
  return (
    <li 
      style={{ backgroundColor: ingredient.color }}
    >
      {ingredient.name}
      {showAddButton ? (
        <button 
          onClick={() => onAdd(ingredient)}
          style={{ marginLeft: '10px' }}
        >
          +
        </button>
      ) : (
        <button 
          onClick={() => onRemove(ingredient)}
          style={{ marginLeft: '10px' }}
        >
          X
        </button>
      )}
    </li>
  );
};

export default Ingredient; 