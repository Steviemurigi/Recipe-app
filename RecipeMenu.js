mport React, { useState } from 'react';
const recipes = [
  { id: 1, name: 'Spaghetti Bolognese', category: 'Dinner' },
  { id: 2, name: 'Chicken Caesar Salad', category: 'Lunch' },
  { id: 3, name: 'Pancakes', category: 'Breakfast' },
  { id: 4, name: 'Chicken Curry', category: 'Dinner' },
  { id: 5, name: 'Vegetable Stir-fry ', category: 'Dinner' },
  { id: 6, name: ' Chocolate Cake', category: 'Lunch' },
  { id: 7, name: 'Grilled Cheese Sandwich', category: 'Breakfast' },
  { id: 8, name: 'Tacos', category: 'Dinner' },
  { id: 9, name: ' Blueberry Muffins- ', category: 'Desert' },
  { id: 10, name: 'Omelette', category: 'Lunch' },
  { id: 11, name: 'Beef Stew', category: 'Dinner' },
  { id: 12, name: 'Banana Smoothie ', category: 'Desert' },
  { id: 13, name: 'Caesar Wrap', category: 'Lunch' },
  { id: 14, name: 'Beef Stew', category: 'Dinner' },
  { id: 15, name: 'French Toast', category: 'Desert' },
];


const categories = ['Breakfast', 'Lunch', 'Dinner', 'Desert'];

const RecipeMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredRecipes = selectedCategory === 'All'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div>
      <h1>Recipe Menu</h1>
      <div>
        <button onClick={() => handleCategoryChange('All')}>All</button>
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeMenu;