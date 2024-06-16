import React from "react";

const NutritionTile = ({ label, value }) => {
  return (
    <div className="py-2 px-1 max-w-24 border border-gray-200 rounded-md text-center">
      <div className="text-sm font-bold italic">{label}</div>
      <div className="text-sm italic">{value}</div>
    </div>
  );
};

export default NutritionTile;
