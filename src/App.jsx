import React from 'react';
import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';


const App = () => {
  const [stack, setStack] = useState([]);
  
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (index) => {
    const newStack = stack.filter((_, i) => i !== index);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <div>
          <h2 className='ingredient-burguer-titles'>Available Ingredients</h2>
          <IngredientList ingredients={availableIngredients} onAdd={addToBurger} />
        </div>
        <div>
          <h2 className='ingredient-burguer-titles'>Your Burger</h2>
          <BurgerStack ingredients={stack} onRemove={removeFromBurger} />
        </div>
      </section>
    </main>
  );
};

export default App;

