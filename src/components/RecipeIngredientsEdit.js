import React from "react";

export default function RecipeIngredientsEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.Name}
        onChange={(e) => handleChange({ Name: e.target.value })}
      ></input>
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      ></input>
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
