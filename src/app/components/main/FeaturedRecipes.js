import React from "react";

export default function FeaturedRecipes() {
  return (
    <section className="bg-primary mt-20 mb-36">
      <div className="container mx-auto">
        <h2 className="text-h2 bg-yellow-400 font-bold text-center text-black py-2 mb-20">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <FeaturedRecipe
            image="./assets/recipe1.jpg"
            alt="Recipe 1"
            title="Recipe Name 1"
            description="A brief description of Recipe 1."
            link="/recipes/1"
          />
          <FeaturedRecipe
            image="./assets/recipe2.jpg"
            alt="Recipe 2"
            title="Recipe Name 2"
            description="A brief description of Recipe 2."
            link="/recipes/2"
          />
          <FeaturedRecipe
            image="./assets/recipe3.jpg"
            alt="Recipe 3"
            title="Recipe Name 3"
            description="A brief description of Recipe 3."
            link="/recipes/3"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedRecipe({ image, alt, title, description, link }) {
  return (
    <div className="bg-white border-8 border-yellow-400 text-black p-4 rounded-lg shadow-lg">
      <img
        src={image}
        alt={alt}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        className="hover:text-orange-800 hover:underline transition duration-300 mt-4 inline-block text-yellow-600"
      >
        View Recipe
      </a>
    </div>
  );
}
