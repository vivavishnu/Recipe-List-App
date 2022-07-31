import React from "react";

export default function Ingredient(props) {
  return (
    <>
      <span>{props.ingredient.Name}</span>
      <span>{props.ingredient.amount}</span>
    </>
  );
}
