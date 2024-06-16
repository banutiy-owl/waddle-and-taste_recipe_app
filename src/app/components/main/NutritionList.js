import React from "react";

export default function NutritionList() {
  return (
    <section className="bg-secondary py-28 text-black">
      <div className="container mx-auto">
        <h2 className="text-h2 font-bold text-center text-white mb-10">
          Nutrition Facts
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <NutritionFact
            image="./assets/protein.jpg"
            alt="Protein"
            title="Protein"
            description="Protein isn't just for bodybuilders! It's essential for muscle repair and growth. Sources include meat, dairy, beans, and nuts. Did you know? The amount of protein needed varies by individual and activity level. For example, athletes may require more protein to support performance and recovery."
          />
          <NutritionFact
            image="./assets/fats.jpg"
            alt="Fats"
            title="Fats"
            description="Healthy fats like omega-3s are superheroes for your brain and heart! Found in avocados, nuts, and fish, these fats are 'essential' because your body can't produce them on its own. Omega-3s also have anti-inflammatory properties, contributing to overall well-being."
          />
          <NutritionFact
            image="./assets/carbs.jpg"
            alt="Carbs"
            title="Carbs"
            description="Carbs are your body's fuel! They come in two forms: simple sugars and complex starches. Simple carbs, like those in fruits, provide quick energy bursts. Complex carbs, found in whole grains and veggies, offer sustained energy and fiber for digestive health."
          />
          <NutritionFact
            image="./assets/fiber.jpg"
            alt="Fiber"
            title="Fiber"
            description="Fiber is your gut's best friend! Found in fruits, veggies, and whole grains, fiber keeps things moving smoothly and helps you feel full longer. Fun fact: Some types of fiber even feed the good bacteria in your gut, promoting a healthy digestive system."
          />
          <NutritionFact
            image="./assets/sugar.jpg"
            alt="Sugar"
            title="Sugar"
            description="Sugar can be sneaky! While it adds sweetness to foods, too much can lead to energy crashes and weight gain. Keep an eye out for hidden sugars in processed foods and opt for natural sugars found in fruits and dairy products for a healthier choice."
          />
          <NutritionFact
            image="./assets/salt.jpg"
            alt="Salt"
            title="Salt"
            description="Salt adds flavor, but moderation is key! Too much sodium can raise blood pressure and contribute to heart disease. Opt for herbs and spices to season your meals and reduce reliance on salt. Fun fact: Your taste buds can adapt to lower salt levels over time, so give it a try!"
          />
          <NutritionFact
            image="./assets/calories.jpg"
            alt="Calories"
            title="Calories"
            description="Calories are units of energy! Balancing calorie intake with physical activity is key to maintaining a healthy weight. Choose nutrient-dense foods like fruits, vegetables, lean proteins, and whole grains to get the most out of your calories."
          />
        </div>
      </div>
    </section>
  );
}

function NutritionFact({ image, alt, title, description }) {
  return (
    <div className="bg-white p-4 m-8 w-11/12 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
        <img
          src={image}
          alt={alt}
          className="w-full lg:mx-auto  h-auto rounded-lg"
        />
      </div>
      <div className="w-full lg:w-2/3 lg:pl-6">
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}
