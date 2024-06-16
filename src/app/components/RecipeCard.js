import React, { useState } from "react";
import Link from "next/link";
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

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i <= rating ? faStarSolid : faStar}
        className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        style={{ fontSize: "14px", marginRight: "2px" }}
      />
    );
  }
  return stars;
};

const RecipeCard = ({ recipe, liked }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(liked);  

  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled); 
  };

  return (
    <div className="bg-white max-h-128 p-6 rounded-lg shadow-lg mb-8">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h3 className="text-xl text-black font-bold mb-2">{recipe.name}</h3>
      <p className="text-gray-600 mb-2">{recipe.description}</p>
      <div className="flex items-center text-gray-700 mb-2">
        <FontAwesomeIcon icon={faClock} className="mr-2 w-6" />
        <span>{recipe.time}</span>
      </div>
      <div className="flex items-center text-gray-700 mb-2">
        <FontAwesomeIcon icon={faListAlt} className="mr-2 w-6" />
        <span>{recipe.ingredients}</span>
      </div>
      <div className="flex items-center text-gray-700 mb-2">
        {renderStars(recipe.rating)}
        <span className="ml-2">{recipe.rating} rating</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link href={`/recipes/${recipe.id}`}>
          <p className="text-blue-600 hover:text-blue-700 transition duration-300 cursor-pointer">
            View Recipe
          </p>
        </Link>
        <button
          className="text-red-500 hover:text-red-600 transition duration-300"
          onClick={toggleHeart}
        >
          <FontAwesomeIcon
            icon={isHeartFilled ? faHeartSolid : faHeartRegular}
            style={{ fontSize: "2.25rem" }}
            className="mr-2 w-12"
          />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
