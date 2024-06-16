// src/components/IngredientsCard.js

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const IngredientsCard = ({ recipe, checkedItems, handleCheckboxChange }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-yellow-400"
            style={{ fontSize: "20px", marginRight: "15px" }}
          />
          <h3 className="text-2xl font-bold">{recipe.name}</h3>
        </div>
      </div>
      <ul className="list-none mb-4 space-y-2">
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i} className="text-lg">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-400 checked:border-transparent"
                checked={checkedItems[recipe.name]?.[ingredient] || false}
                onChange={() => handleCheckboxChange(recipe.name, ingredient)}
              />
              <span
                className={`ml-2 ${
                  checkedItems[recipe.name]?.[ingredient]
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {ingredient}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientsCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  checkedItems: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default IngredientsCard;
