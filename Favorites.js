import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(recipe => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name} width="150" />
              <p><strong>Category:</strong> {recipe.category}</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              <p>{recipe.instructions}</p>
              <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default Favorites;