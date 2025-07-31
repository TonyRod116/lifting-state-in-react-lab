import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ ingredients = [], onRemove }) => {
  return (
    <div>
      {ingredients.length === 0 ? (
        <div style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
          <p>No Ingredients</p>
        </div>
      ) : (
        <ul>
          {ingredients.map((ingredient, index) => (
            <Ingredient 
              key={index}
              ingredient={ingredient}
              onRemove={() => onRemove(index)}
              showAddButton={false}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;
