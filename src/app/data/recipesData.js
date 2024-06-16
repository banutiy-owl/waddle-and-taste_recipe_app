export const recipes = [
  {
    id: 1,
    name: "Pasta with Tomatoes",
    description:
      "A delicious pasta dish made with fresh tomatoes, garlic, and basil. Perfect for a quick and easy dinner.",
    image: "/assets/recipe1.jpg",
    time: "30 min",
    ingredients: "6 ingredients",
    rating: 4.5,
    type: ["dinner"],
    temperature: "hot",
    ingredientsList: [
      { name: "Pasta", quantity: "200g" },
      { name: "Tomatoes", quantity: "400g" },
      { name: "Garlic", quantity: "3 cloves" },
      { name: "Basil", quantity: "1 bunch" },
      { name: "Olive oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
    ],
    calories: 450,
    fat: 15,
    saturates: 2,
    carbs: 65,
    sugars: 8,
    fibre: 4,
    protein: 10,
    salt: 0.8,
    instructions: [
      "Cook the pasta according to package instructions.",
      "In a large pan, heat the olive oil over medium heat.",
      "Add the garlic and cook until fragrant.",
      "Add the tomatoes and cook until they start to soften.",
      "Mix in the basil and season with salt.",
      "Drain the pasta and add it to the pan. Toss to combine.",
    ],
    liked: true,
  },
  {
    id: 2,
    name: "Chicken Curry",
    description:
      "A flavorful chicken curry with a blend of spices and creamy coconut milk.",
    image: "/assets/recipe2.jpg",
    time: "45 min",
    ingredients: "12 ingredients",
    rating: 3,
    type: ["dinner"],
    temperature: "hot",
    ingredientsList: [
      { name: "Chicken", quantity: "500g" },
      { name: "Curry paste", quantity: "3 tbsp" },
      { name: "Coconut milk", quantity: "400ml" },
      { name: "Onion", quantity: "1 large" },
      { name: "Garlic", quantity: "3 cloves" },
      { name: "Ginger", quantity: "1 tbsp grated" },
      { name: "Tomato", quantity: "1 large" },
      { name: "Potatoes", quantity: "2" },
      { name: "Carrots", quantity: "2" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" },
    ],
    calories: 620,
    fat: 30,
    saturates: 15,
    carbs: 40,
    sugars: 10,
    fibre: 5,
    protein: 40,
    salt: 1.2,
    instructions: [
      "Heat the oil in a large pot over medium heat.",
      "Add the onions and cook until soft.",
      "Add the garlic and ginger and cook for another minute.",
      "Add the curry paste and cook for 2 minutes.",
      "Add the chicken and cook until browned.",
      "Add the coconut milk, tomatoes, potatoes, and carrots.",
      "Bring to a boil, then reduce the heat and simmer for 30 minutes.",
      "Season with salt and pepper to taste. Serve hot.",
    ],
    liked: false,
  },
  {
    id: 3,
    name: "Vegetable Stir Fry",
    description:
      "A quick and healthy vegetable stir fry with a savory soy sauce.",
    image: "/assets/recipe3.jpg",
    time: "20 min",
    ingredients: "8 ingredients",
    rating: 4.3,
    type: ["lunch"],
    temperature: "hot",
    ingredientsList: [
      { name: "Broccoli", quantity: "200g" },
      { name: "Bell pepper", quantity: "1" },
      { name: "Carrot", quantity: "1" },
      { name: "Snap peas", quantity: "100g" },
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "3 cloves" },
      { name: "Ginger", quantity: "1 tbsp grated" },
      { name: "Soy sauce", quantity: "3 tbsp" },
    ],
    calories: 280,
    fat: 10,
    saturates: 1,
    carbs: 35,
    sugars: 15,
    fibre: 8,
    protein: 8,
    salt: 1.5,
    instructions: [
      "Heat oil in a large pan over medium-high heat.",
      "Add garlic and ginger and cook until fragrant.",
      "Add onions and cook until they start to soften.",
      "Add bell pepper, carrot, and snap peas. Stir fry for 5 minutes.",
      "Add broccoli and stir fry for another 3-4 minutes.",
      "Pour soy sauce over the vegetables and stir to coat.",
      "Cook for another 2-3 minutes until all vegetables are tender.",
      "Serve hot.",
    ],
    liked: true,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake topped with chocolate ganache.",
    image: "/assets/recipe4.jpg",
    time: "1 hr",
    ingredients: "10 ingredients",
    rating: 4.7,
    type: ["dessert"],
    temperature: "cold",
    ingredientsList: [
      { name: "Flour", quantity: "250g" },
      { name: "Sugar", quantity: "300g" },
      { name: "Cocoa powder", quantity: "75g" },
      { name: "Baking powder", quantity: "1.5 tsp" },
      { name: "Baking soda", quantity: "1.5 tsp" },
      { name: "Salt", quantity: "1 tsp" },
      { name: "Eggs", quantity: "2" },
      { name: "Milk", quantity: "240ml" },
      { name: "Vegetable oil", quantity: "120ml" },
      { name: "Hot water", quantity: "240ml" },
    ],
    calories: 400,
    fat: 20,
    saturates: 10,
    carbs: 55,
    sugars: 35,
    fibre: 4,
    protein: 5,
    salt: 0.6,
    instructions: [
      "Preheat the oven to 350°F (175°C).",
      "Grease and flour two 9-inch round baking pans.",
      "In a large bowl, combine the flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
      "Add the eggs, milk, oil, and hot water. Beat on medium speed for 2 minutes.",
      "Pour the batter evenly into the prepared pans.",
      "Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
      "Cool in the pans for 10 minutes, then remove to wire racks to cool completely.",
      "Frost with chocolate ganache and serve.",
    ],
    liked: true,
  },
  {
    id: 5,
    name: "Tiramisu",
    description:
      "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
    image: "/assets/recipe5.jpg",
    time: "45 min",
    ingredients: "7 ingredients",
    rating: 4.6,
    type: ["dessert"],
    temperature: "cold",
    ingredientsList: [
      { name: "Ladyfingers", quantity: "200g" },
      { name: "Mascarpone cheese", quantity: "500g" },
      { name: "Eggs", quantity: "4" },
      { name: "Sugar", quantity: "150g" },
      { name: "Coffee", quantity: "240ml" },
      { name: "Cocoa powder", quantity: "2 tbsp" },
      { name: "Marsala wine", quantity: "2 tbsp" },
    ],
    calories: 320,
    fat: 18,
    saturates: 10,
    carbs: 35,
    sugars: 18,
    fibre: 1,
    protein: 6,
    salt: 0.2,
    instructions: [
      "Brew a strong cup of coffee and let it cool.",
      "In a large bowl, beat the egg yolks and sugar until pale and thick.",
      "Add the mascarpone cheese and Marsala wine, and mix until smooth.",
      "In another bowl, beat the egg whites until stiff peaks form.",
      "Fold the egg whites into the mascarpone mixture.",
      "Dip the ladyfingers into the coffee and layer them in a dish.",
      "Spread half of the mascarpone mixture over the ladyfingers.",
      "Repeat with another layer of coffee-dipped ladyfingers and the remaining mascarpone mixture.",
      "Dust the top with cocoa powder.",
      "Refrigerate for at least 4 hours before serving.",
    ],
    liked: false,
  },
  {
    id: 6,
    name: "Caprese Salad",
    description:
      "Simple and refreshing salad made with fresh tomatoes, mozzarella, basil, and balsamic glaze.",
    image: "/assets/recipe6.jpg",
    time: "15 min",
    ingredients: "5 ingredients",
    rating: 4.2,
    type: ["appetizer", "lunch"],
    temperature: "cold",
    ingredientsList: [
      { name: "Tomatoes", quantity: "3" },
      { name: "Mozzarella cheese", quantity: "250g" },
      { name: "Basil", quantity: "1 bunch" },
      { name: "Balsamic glaze", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
    ],
    calories: 180,
    fat: 12,
    saturates: 6,
    carbs: 8,
    sugars: 6,
    fibre: 2,
    protein: 8,
    salt: 0.5,
    instructions: [
      "Slice the tomatoes and mozzarella cheese.",
      "Arrange the tomato and mozzarella slices on a plate, alternating them.",
      "Tuck basil leaves between the slices.",
      "Drizzle with balsamic glaze.",
      "Sprinkle with salt to taste.",
      "Serve immediately.",
    ],
    liked: false,
  },

  {
    id: 7,
    name: "Scrambled Eggs",
    description:
      "Fluffy scrambled eggs seasoned to perfection, served with toast.",
    image: "/assets/recipe7.jpg",
    time: "15 min",
    ingredients: "4 ingredients",
    rating: 4.0,
    type: ["breakfast"],
    temperature: "hot",
    ingredientsList: [
      { name: "Eggs", quantity: "4" },
      { name: "Milk", quantity: "2 tbsp" },
      { name: "Butter", quantity: "1 tbsp" },
      { name: "Salt", quantity: "1/4 tsp" },
    ],
    calories: 250,
    fat: 18,
    saturates: 8,
    carbs: 2,
    sugars: 1,
    fibre: 0,
    protein: 18,
    salt: 0.7,
    instructions: [
      "Crack the eggs into a bowl and whisk with the milk and salt.",
      "Heat the butter in a non-stick pan over medium heat.",
      "Pour the egg mixture into the pan.",
      "Stir gently with a spatula until the eggs are just set.",
      "Remove from heat and serve immediately with toast.",
    ],
    liked: false,
  },
  {
    id: 8,
    name: "Caesar Salad",
    description:
      "Classic Caesar salad with crisp romaine lettuce, croutons, and parmesan cheese.",
    image: "/assets/recipe8.jpg",
    time: "20 min",
    ingredients: "7 ingredients",
    rating: 4.4,
    type: ["lunch"],
    temperature: "cold",
    ingredientsList: [
      { name: "Romaine lettuce", quantity: "1 head" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Parmesan cheese", quantity: "1/2 cup grated" },
      { name: "Caesar dressing", quantity: "1/4 cup" },
      { name: "Salt", quantity: "1/4 tsp" },
      { name: "Pepper", quantity: "1/4 tsp" },
      { name: "Olive oil", quantity: "1 tbsp" },
    ],
    calories: 320,
    fat: 22,
    saturates: 6,
    carbs: 15,
    sugars: 2,
    fibre: 5,
    protein: 10,
    salt: 1.5,
    instructions: [
      "Wash and chop the romaine lettuce.",
      "In a large bowl, toss the lettuce with Caesar dressing.",
      "Add the croutons and grated parmesan cheese.",
      "Season with salt and pepper to taste.",
      "Drizzle with olive oil.",
      "Toss to combine and serve immediately.",
    ],
    liked: false,
  },
  {
    id: 9,
    name: "Grilled Steak",
    description:
      "Juicy grilled steak with a side of mashed potatoes and steamed vegetables.",
    image: "/assets/recipe9.jpg",
    time: "30 min",
    ingredients: "5 ingredients",
    rating: 4.8,
    type: ["dinner"],
    temperature: "hot",
    ingredientsList: [
      { name: "Steak", quantity: "1 lb" },
      { name: "Potatoes", quantity: "4 medium" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Salt", quantity: "1 tsp" },
    ],
    calories: 700,
    fat: 45,
    saturates: 20,
    carbs: 35,
    sugars: 4,
    fibre: 5,
    protein: 40,
    salt: 1.8,
    instructions: [
      "Preheat the grill to high heat.",
      "Season the steak with salt and pepper.",
      "Grill the steak for 4-5 minutes per side, or until it reaches your desired doneness.",
      "Meanwhile, boil the potatoes until tender.",
      "Mash the potatoes with butter and salt.",
      "Steam the vegetables until tender.",
      "Serve the steak with mashed potatoes and steamed vegetables.",
    ],
    liked: false,
  },
  {
    id: 10,
    name: "Fruit Salad",
    description:
      "Refreshing fruit salad with a mix of seasonal fruits and a touch of honey.",
    image: "/assets/recipe10.jpg",
    time: "10 min",
    ingredients: "5 ingredients",
    rating: 4.5,
    type: ["dessert", "breakfast"],
    temperature: "cold",
    ingredientsList: [
      { name: "Seasonal fruits", quantity: "4 cups chopped" },
      { name: "Honey", quantity: "2 tbsp" },
      { name: "Lemon juice", quantity: "1 tbsp" },
      { name: "Mint leaves", quantity: "2 tbsp chopped" },
      { name: "Vanilla extract", quantity: "1/2 tsp" },
    ],
    calories: 120,
    fat: 1,
    saturates: 0,
    carbs: 30,
    sugars: 25,
    fibre: 5,
    protein: 1,
    salt: 0.1,
    instructions: [
      "Wash and chop the seasonal fruits.",
      "In a large bowl, combine the fruits.",
      "Drizzle with honey and lemon juice.",
      "Add chopped mint leaves and vanilla extract.",
      "Toss to combine.",
      "Serve immediately or refrigerate for later.",
    ],
    liked: false,
  },
  {
    id: 11,
    name: "Eggplant Parmesan",
    description:
      "Breaded and baked eggplant slices layered with marinara sauce and melted cheese.",
    image: "/assets/recipe11.jpg",
    time: "1 hr",
    ingredients: "10 ingredients",
    rating: 4.3,
    type: ["dinner"],
    temperature: "hot",
    ingredientsList: [
      { name: "Eggplant", quantity: "1 large" },
      { name: "Marinara sauce", quantity: "2 cups" },
      { name: "Mozzarella cheese", quantity: "1 cup shredded" },
      { name: "Parmesan cheese", quantity: "1/2 cup grated" },
      { name: "Breadcrumbs", quantity: "1 cup" },
      { name: "Egg", quantity: "1" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Pepper", quantity: "1/4 tsp" },
      { name: "Basil", quantity: "1/4 cup chopped" },
    ],
    calories: 480,
    fat: 25,
    saturates: 10,
    carbs: 45,
    sugars: 12,
    fibre: 10,
    protein: 15,
    salt: 1.3,
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "Slice the eggplant and season with salt.",
      "Dip the eggplant slices in beaten egg, then coat with breadcrumbs.",
      "Heat oil in a pan and fry the eggplant slices until golden.",
      "In a baking dish, layer the fried eggplant slices with marinara sauce and mozzarella cheese.",
      "Sprinkle with grated parmesan cheese and basil.",
      "Bake for 25-30 minutes, or until the cheese is melted and bubbly.",
      "Serve hot.",
    ],
    liked: true,
  },
  {
    id: 12,
    name: "Yogurt Parfait",
    description:
      "Healthy yogurt parfait with layers of yogurt, granola, and fresh berries.",
    image: "/assets/recipe12.jpg",
    time: "10 min",
    ingredients: "4 ingredients",
    rating: 4.6,
    type: ["breakfast"],
    temperature: "cold",
    ingredientsList: [
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Granola", quantity: "1/2 cup" },
      { name: "Berries", quantity: "1/2 cup" },
      { name: "Honey", quantity: "1 tbsp" },
    ],
    calories: 280,
    fat: 8,
    saturates: 3,
    carbs: 45,
    sugars: 25,
    fibre: 6,
    protein: 10,
    salt: 0.3,
    instructions: [
      "In a glass or bowl, layer the yogurt, granola, and berries.",
      "Drizzle with honey.",
      "Repeat the layers until the glass or bowl is filled.",
      "Serve immediately.",
    ],
    liked: false,
  },
  {
    id: 13,
    name: "Grilled Salmon",
    description:
      "Flavorful grilled salmon fillet served with steamed vegetables.",
    image: "/assets/recipe13.jpg",
    time: "20 min",
    ingredients: "6 ingredients",
    rating: 4.7,
    type: ["dinner"],
    temperature: "hot",
    ingredientsList: [
      { name: "Salmon fillet", quantity: "1" },
      { name: "Lemon", quantity: "1" },
      { name: "Garlic", quantity: "1 clove" },
      { name: "Olive oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" },
    ],
    calories: 350,
    fat: 20,
    saturates: 4,
    carbs: 0,
    sugars: 0,
    fibre: 0,
    protein: 35,
    salt: 0.8,
    instructions: [
      "Preheat the grill to medium-high heat.",
      "Season the salmon fillet with salt and pepper.",
      "In a small bowl, mix olive oil, minced garlic, and lemon juice.",
      "Brush the mixture over the salmon fillet.",
      "Grill the salmon for 6-8 minutes on each side, or until it flakes easily with a fork.",
      "Serve with steamed vegetables.",
    ],
    liked: false,
  },

  {
    id: 14,
    name: "Mango Sorbet",
    description:
      "Refreshing mango sorbet made with fresh mangoes and a hint of lime.",
    image: "/assets/recipe14.jpg",
    time: "3 hrs",
    ingredients: "3 ingredients",
    rating: 4.4,
    type: ["dessert"],
    temperature: "cold",
    ingredientsList: [
      { name: "Mangoes", quantity: "500g" },
      { name: "Sugar", quantity: "150g" },
      { name: "Lime juice", quantity: "2 tbsp" },
    ],
    calories: 120,
    fat: 0,
    saturates: 0,
    carbs: 30,
    sugars: 28,
    fibre: 2,
    protein: 1,
    salt: 0.1,
    instructions: [
      "Peel and chop the mangoes.",
      "In a blender, combine mangoes, sugar, and lime juice.",
      "Blend until smooth.",
      "Pour the mixture into a shallow dish and freeze for 3 hours, stirring every 30 minutes.",
      "Scoop and serve the sorbet.",
    ],
    liked: true,
  },

  {
    id: 15,
    name: "French Toast",
    description:
      "Classic French toast served with maple syrup and a dusting of powdered sugar.",
    image: "/assets/recipe15.jpg",
    time: "20 min",
    ingredients: "5 ingredients",
    rating: 4.2,
    type: ["breakfast"],
    temperature: "hot",
    ingredientsList: [
      { name: "Bread slices", quantity: "4" },
      { name: "Eggs", quantity: "2" },
      { name: "Milk", quantity: "120ml" },
      { name: "Cinnamon", quantity: "1/2 tsp" },
      { name: "Maple syrup", quantity: "to taste" },
    ],
    calories: 280,
    fat: 10,
    saturates: 3,
    carbs: 40,
    sugars: 15,
    fibre: 2,
    protein: 8,
    salt: 0.5,
    instructions: [
      "In a bowl, whisk together eggs, milk, and cinnamon.",
      "Dip the bread slices into the egg mixture, coating both sides.",
      "Heat a non-stick pan over medium heat and cook the bread slices until golden brown on both sides.",
      "Serve with maple syrup and a dusting of powdered sugar.",
    ],
    liked: false,
  },

  {
    id: 16,
    name: "Gazpacho",
    description:
      "Refreshing cold soup made with ripe tomatoes, cucumbers, and bell peppers.",
    image: "/assets/recipe16.jpg",
    time: "30 min",
    ingredients: "8 ingredients",
    rating: 4.1,
    type: ["appetizer", "lunch"],
    temperature: "cold",
    ingredientsList: [
      { name: "Tomatoes", quantity: "4" },
      { name: "Cucumbers", quantity: "2" },
      { name: "Bell peppers", quantity: "2" },
      { name: "Onion", quantity: "1/2" },
      { name: "Garlic", quantity: "1 clove" },
      { name: "Olive oil", quantity: "2 tbsp" },
      { name: "Red wine vinegar", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" },
    ],
    calories: 120,
    fat: 5,
    saturates: 1,
    carbs: 18,
    sugars: 10,
    fibre: 4,
    protein: 2,
    salt: 0.8,
    instructions: [
      "Chop the tomatoes, cucumbers, and bell peppers.",
      "In a blender, combine chopped vegetables, onion, garlic, olive oil, red wine vinegar, and salt.",
      "Blend until smooth.",
      "Chill in the refrigerator for at least 2 hours.",
      "Serve cold.",
    ],
    liked: false,
  },
  {
    id: 17,
    name: "Roast Chicken",
    description:
      "Juicy roast chicken seasoned with herbs and served with roasted vegetables.",
    image: "/assets/recipe17.jpg",
    time: "1 hr",
    ingredients: "7 ingredients",
    rating: 4.8,
    type: ["dinner"],
    temperature: "hot",
    ingredientsList: [
      { name: "Whole chicken", quantity: "1" },
      { name: "Potatoes", quantity: "4" },
      { name: "Carrots", quantity: "2" },
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Olive oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
    ],
    calories: 450,
    fat: 25,
    saturates: 7,
    carbs: 30,
    sugars: 5,
    fibre: 4,
    protein: 35,
    salt: 1.2,
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "Season the chicken with salt, pepper, and herbs of choice.",
      "Place the chicken in a roasting pan.",
      "Chop the potatoes, carrots, and onions, and arrange them around the chicken.",
      "Drizzle olive oil over the chicken and vegetables.",
      "Roast for 1 hour, or until the chicken is cooked through and the vegetables are tender.",
      "Serve hot.",
    ],
    liked: false,
  },

  {
    id: 18,
    name: "Banana Bread",
    description:
      "Moist and delicious banana bread with walnuts and a hint of cinnamon.",
    image: "/assets/recipe18.jpg",
    time: "1 hr",
    ingredients: "8 ingredients",
    rating: 4.5,
    type: ["breakfast", "dessert"],
    temperature: "cold",
    ingredientsList: [
      { name: "Bananas", quantity: "3 ripe" },
      { name: "Flour", quantity: "250g" },
      { name: "Sugar", quantity: "150g" },
      { name: "Eggs", quantity: "2" },
      { name: "Butter", quantity: "100g, melted" },
      { name: "Baking soda", quantity: "1 tsp" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Walnuts", quantity: "100g, chopped" },
    ],
    calories: 280,
    fat: 12,
    saturates: 6,
    carbs: 40,
    sugars: 20,
    fibre: 3,
    protein: 5,
    salt: 0.4,
    instructions: [
      "Preheat the oven to 350°F (175°C).",
      "In a large bowl, mash the bananas.",
      "Mix in the melted butter, sugar, eggs, and vanilla extract.",
      "Add the baking soda and salt, and mix well.",
      "Stir in the flour and walnuts until just combined.",
      "Pour the batter into a greased loaf pan.",
      "Bake for 60-65 minutes, or until a toothpick inserted into the center comes out clean.",
      "Cool in the pan for 10 minutes, then remove to a wire rack to cool completely.",
    ],
    liked: true,
  },

  {
    id: 19,
    name: "Tomato Basil Soup",
    description:
      "Comforting tomato basil soup made with ripe tomatoes and fresh basil.",
    image: "/assets/recipe19.jpg",
    time: "45 min",
    ingredients: "6 ingredients",
    rating: 4.3,
    type: ["lunch"],
    temperature: "hot",
    ingredientsList: [
      { name: "Tomatoes", quantity: "6 ripe" },
      { name: "Basil", quantity: "1 bunch" },
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Vegetable broth", quantity: "500ml" },
      { name: "Cream", quantity: "120ml" },
    ],
    calories: 180,
    fat: 10,
    saturates: 5,
    carbs: 20,
    sugars: 12,
    fibre: 4,
    protein: 4,
    salt: 0.9,
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add chopped onions and cook until soft.",
      "Add minced garlic and cook for another minute.",
      "Add chopped tomatoes and cook until they start to break down.",
      "Add vegetable broth and bring to a boil. Reduce heat and simmer for 20 minutes.",
      "Stir in chopped basil and cream.",
      "Use an immersion blender to puree the soup until smooth.",
      "Season with salt and pepper to taste.",
      "Serve hot.",
    ],
    liked: false,
  },

  {
    id: 20,
    name: "Ice Cream Sundae",
    description:
      "Indulgent ice cream sundae with chocolate syrup, whipped cream, and a cherry on top.",
    image: "/assets/recipe20.jpg",
    time: "10 min",
    ingredients: "4 ingredients",
    rating: 4.6,
    type: ["dessert"],
    temperature: "cold",
    ingredientsList: [
      { name: "Vanilla ice cream", quantity: "2 scoops" },
      { name: "Chocolate syrup", quantity: "2 tbsp" },
      { name: "Whipped cream", quantity: "to taste" },
      { name: "Cherry", quantity: "1" },
    ],
    calories: 320,
    fat: 15,
    saturates: 10,
    carbs: 45,
    sugars: 35,
    fibre: 2,
    protein: 5,
    salt: 0.3,
    instructions: [
      "Scoop vanilla ice cream into a bowl or glass.",
      "Drizzle with chocolate syrup.",
      "Top with whipped cream.",
      "Garnish with a cherry.",
      "Serve immediately.",
    ],
    liked: false,
  },
];

export default recipes;
