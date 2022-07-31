import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./components/RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "recipeList.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
  useEffect(() => {
    // console.log(JSON.parse(recipeJSON))
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      recipe: "",
      servings: "",
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          Name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      selectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    recipe: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1.Put salt on chicken\n2.Put chicken in oven\n3.Eat the chicken",
    ingredients: [
      {
        id: 1,
        Name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        Name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    recipe: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1.Put paprika on pork\n2.Put pork in oven\n3.Eat pork",
    ingredients: [
      {
        id: 1,
        Name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        Name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
