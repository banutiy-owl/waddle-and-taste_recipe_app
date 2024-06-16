import React from "react";

const Sidebar = ({
  searchQuery,
  handleSearchChange,
  filters,
  handleFilterChange,
}) => {
  return (
    <div className="w-1/4 sm:min-w-max pr-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl text-black font-bold mb-4">Search</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="text-black w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Search recipes..."
        />
        <h3 className="text-xl text-black font-bold my-4 mt-8">Filters</h3>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="lowCalories"
              checked={filters.lowCalories}
              onChange={handleFilterChange}
              className="mr-2"
            />
            Low Calories
          </label>
        </div>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="moderateCalories"
              checked={filters.moderateCalories}
              onChange={handleFilterChange}
              className="mr-2"
            />
            Moderate Calories
          </label>
        </div>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="highCalories"
              checked={filters.highCalories}
              onChange={handleFilterChange}
              className="mr-2"
            />
            High Calories
          </label>
        </div>

        <h3 className="text-xl text-black font-bold my-4 mt-8">Temperature</h3>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="hot"
              checked={filters.hot}
              onChange={handleFilterChange}
              className="mr-2"
            />
            Hot
          </label>
        </div>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="cold"
              checked={filters.cold}
              onChange={handleFilterChange}
              className="mr-2"
            />
            Cold
          </label>
        </div>
        <h3 className="text-xl text-black font-bold my-4 mt-8">
          Additional Filters
        </h3>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="quick"
              checked={filters.quick}
              onChange={handleFilterChange}
              className="mr-2"
            />
            Quick Recipes
          </label>
        </div>
        <div className="mb-2">
          <label className="text-gray-700">
            <input
              type="checkbox"
              name="lowIngredients"
              checked={filters.lowIngredients}
              onChange={handleFilterChange}
              className="mr-2"
            />
            Few Ingredients
          </label>
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
