import React from "react";
import { Link } from "react-router-dom";

import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime}</p>
            <div>{recipe.method.substring(0, 10)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook Recipe</Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
