"use client";
// src/pages/ShoppingListPage.js

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IngredientsCard from "../components/IngredientsCard";


const mockShoppingList = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: [
      "Spaghetti",
      "Ground Beef",
      "Tomato Sauce",
      "Onion",
      "Garlic",
      "Olive Oil",
    ],
  },
  {
    id: 2,
    name: "Chicken Curry",
    ingredients: [
      "Chicken",
      "Coconut Milk",
      "Curry Powder",
      "Onion",
      "Garlic",
      "Ginger",
    ],
  },

];

const ShoppingListPage = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (recipeName, ingredient) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [recipeName]: {
        ...prevState[recipeName],
        [ingredient]: !prevState[recipeName]?.[ingredient],
      },
    }));
  };

  return (
    <div className="bg-primary text-white min-h-screen font-custom flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold mb-12 text-center">Shopping List</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {mockShoppingList.map((recipe, index) => (
            <IngredientsCard
              key={index}
              recipe={recipe}
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShoppingListPage;
