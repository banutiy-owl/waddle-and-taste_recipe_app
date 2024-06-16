"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import RecipeCard from "../components/RecipeCard";

import { recipes } from "../data/recipesData";

export default function Recipes() {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    lowCalories: false,
    moderateCalories: false,
    highCalories: false,
    hot: false,
    cold: false,
    quick: false,
    lowIngredients: false,
    tomatoes: false,
    bananas: false,
    chicken: false,
    cheese: false,
  });
  const [currentTab, setCurrentTab] = useState("All");

  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      currentTab === "All" || recipe.type.includes(currentTab.toLowerCase());

    const matchesCalories =
      (!filters.lowCalories || parseInt(recipe.calories) <= 400) &&
      (!filters.moderateCalories ||
        (parseInt(recipe.calories) > 400 &&
          parseInt(recipe.calories) <= 600)) &&
      (!filters.highCalories || parseInt(recipe.calories) > 600);

    const matchesTemperature =
      (!filters.hot || recipe.temperature === "hot") &&
      (!filters.cold || recipe.temperature === "cold");

    const matchesIngredients =
      !filters.lowIngredients || parseInt(recipe.ingredients) <= 5;

    const matchesIngredientsList =
      (!filters.tomatoes || recipe.ingredientsList.includes("Tomatoes")) &&
      (!filters.bananas || recipe.ingredientsList.includes("Bananas")) &&
      (!filters.chicken || recipe.ingredientsList.includes("Chicken")) &&
      (!filters.cheese || recipe.ingredientsList.includes("Cheese"));

    const matchesQuick = !filters.quick || parseInt(recipe.time) <= 20;

    return (
      matchesSearch &&
      matchesType &&
      matchesCalories &&
      matchesTemperature &&
      matchesIngredients &&
      matchesIngredientsList &&
      matchesQuick
    );
  });

  return (
    <div className="bg-primary text-white min-h-screen font-custom">
      <Header />
      <section className="bg-yellow-300 text-black py-14">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold">Recipes</h2>
        </div>
      </section>
      <div className="bg-secondary text-lg flex justify-center mt-12 py-4">
            {["All", "Breakfast", "Lunch", "Dinner", "Dessert"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`mx-2 px-6 py-2 rounded ${
                  currentTab === tab
                    ? "bg-yellow-400 text-black"
                    : "bg-secondary text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
      <section className="container mx-auto py-16 px-4 flex">
        <Sidebar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <div className="w-3/4 pl-4 grid lg:grid-cols-2 sm:grid-cols-1 sm:w-full gap-10">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              toggleHeart={toggleHeart}
              isHeartFilled={isHeartFilled}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
