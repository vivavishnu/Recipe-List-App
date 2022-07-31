import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "../App";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  return (
    <div className="recipe">
      <div className="recipe-header">
        <h3 className="recipe-title">{props.recipe.recipe}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(props.recipe.id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(props.recipe.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Cooking Time:</span>
        <span className="recipe-value">{props.recipe.cookTime}</span>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Servings:</span>
        <span className="recipe-value">{props.recipe.servings}</span>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Instructions:</span>
        <div className="recipe-value recipe-value-indent recipe-value-ul">
          {props.recipe.instructions}
        </div>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Ingredients:</span>
        <div className="recipe-value recipe-value-indent recipe-value">
          <IngredientList ingredients={props.recipe.ingredients} />
        </div>
      </div>
    </div>
  );
}
