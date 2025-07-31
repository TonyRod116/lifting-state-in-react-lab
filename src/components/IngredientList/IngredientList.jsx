import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients = [], onAdd }) => {
  return (
    <div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient 
            key={index}
            ingredient={ingredient}
            onAdd={onAdd}
            showAddButton={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
