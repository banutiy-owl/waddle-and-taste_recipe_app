"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipesData"


const FavoritesPage = () => {
  const likedRecipes = recipes.filter(recipe => recipe.liked);

  return (
    <div className="bg-primary text-white min-h-screen font-custom">
      <Header />
      <section className="bg-primary mt-20 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">My Favorite Recipes</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:px-0 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {likedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} liked={recipe.liked}/>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
