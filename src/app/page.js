import React from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";
import NutritionList from "./components/main/NutritionList";
import FeaturedRecipes from './components/main/FeaturedRecipes';

export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen font-custom">
      <Header />

      <section className="bg-yellow-300 text-black py-28">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Welcome to Waddle and Taste</h1>
          <p className="text-2xl mt-4">
            Discover, Cook, and Enjoy Delicious Recipes
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
          <img
            src="./assets/dish-main.jpg"
            alt="Dish Image"
            className="w-[300px] max-w-lg rounded-lg lg:mr-8 shadow-lg"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mt-4 lg:mt-0">
              Featured Recipe: Delicious and Easy Tomato Pasta
            </h2>
            <p className="text-lg mt-2">
              Enjoy the comforting flavors of our Tomato and Cheese Pasta. This
              delicious and filling dish is budget-friendly and perfect for
              supper. Made with basic pantry staples, it’s a great way to use up
              ingredients you already have. Quick to prepare and full of savory
              goodness, it’s sure to become a family favorite!
            </p>
            <a
              href="/recipes"
              className="mt-4 inline-block bg-yellow-400 text-black py-2 px-4 rounded shadow hover:bg-yellow-500 transition duration-300"
            >
              Explore Recipes
            </a>
          </div>
        </div>
      </section>

      <FeaturedRecipes />

      <NutritionList />

      <Footer />
    </div>
  );
}
