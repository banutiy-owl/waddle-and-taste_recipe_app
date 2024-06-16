"use client";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRegular,
  faClock,
  faListAlt,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

import NutritionTile from "../components/NutritionTile";
import Header from "../components/Header";
import Footer from "../components/Footer";

const recipes = [
  {
    id: 1,
    name: "Pasta with Tomatoes",
    description:
      "A delicious pasta dish made with fresh tomatoes, garlic, and basil.",
    image: "/assets/recipe1.jpg",
    time: "30 min",
    ingredientsList: [
      "200g Pasta",
      "400g Tomatoes",
      "3 cloves Garlic",
      "1 bunch Basil",
      "2 tbsp Olive oil",
      "Salt to taste",
    ],
    rating: 4.5,
    type: ["dinner"],
    temperature: "hot",
    instructions: [
      "Cook the pasta according to package instructions.",
      "In a large pan, heat the olive oil over medium heat.",
      "Add the garlic and cook until fragrant.",
      "Add the tomatoes and cook until they start to soften.",
      "Mix in the basil and season with salt.",
      "Drain the pasta and add it to the pan. Toss to combine.",
    ],
    nutrition: {
      calories: 450,
      fat: 15,
      saturates: 2,
      carbs: 65,
      sugars: 8,
      fibre: 4,
      protein: 10,
      salt: 0.8,
    },
  },
];

const RecipeDetail = () => {
  const { id } = { id: "1" };
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const {
    name,
    description,
    image,
    time,
    ingredientsList,
    rating,
    type,
    temperature,
    instructions,
    nutrition,
  } = recipe;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStarSolid : faStar}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
          style={{ fontSize: "20px", marginRight: "2px" }}
        />
      );
    }
    return stars;
  };

  const renderInstructions = () => {
    return instructions.map((instruction, index) => (
      <div key={index} className="mb-4">
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-700 font-bold mr-2">
            {index + 1}
          </div>
          <div>{instruction}</div>
        </div>
      </div>
    ));
  };

  const renderNutritionTiles = () => {
    return (
      <div className="grid sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {Object.entries(nutrition).map(([key, value]) => (
          <NutritionTile key={key} label={key} value={value} />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-primary text-white min-h-screen font-custom flex-cols">
      <Header />

      <section className="bg-primary mt-20">
        <div className="container mx-auto sm:max-w-3xl lg:max-w-5xl">
          <h2 className="text-h2 bg-yellow-400 font-bold text-center text-black py-2 mb-10">
            {name}
          </h2>
        </div>
      </section>

      <div className="bg-secondary container flex flex-1 gap-12 mx-auto p-12 sm:max-w-3xl lg:max-w-max ">
        <div className="flex-shrink-0 overflow-hidden w-72 h-72 rounded-lg">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <div className="flex items-center  mb-4">
            {renderStars(recipe.rating)}
            <span className="ml-2">{recipe.rating} rating</span>
          </div>
          <div className=" mb-4">
            <span className="font-bold text-orange-300">Time:</span> {time}
          </div>
          <div className="mb-4">
            <span className="font-bold text-orange-300">Type:</span>{" "}
            {type.join(", ")}
          </div>
          <div className="mb-4">
            <span className="font-bold text-lg text-orange-300 mb-2">
              Description
            </span>

            <p className="text-md mt-2">{description} </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4 text-orange-300">
              Nutrition:
            </h3>
            {renderNutritionTiles()}
          </div>
        </div>
      </div>
      <div className=" py-16 flex-1">
        <div className="container mx-auto sm:max-w-3xl lg:max-w-5xl flex flex-cols-2 gap-32">
          <div className="mt-8">
            <h3 className="text-3xl font-bold mb-4">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {ingredientsList.map((ingredient, index) => (
                <li key={index} className="text-lg">
                  {ingredient}
                </li>
              ))}
            </ul>
            <div className="text-center py-10">
              <button className="bg-yellow-400 hover:bg-purple-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Shopping List
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-3xl font-bold mb-4">Instructions:</h3>
            {renderInstructions()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetail;
