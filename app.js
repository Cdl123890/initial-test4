// app.js — Daily Recipe API (Node.js + Express)

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5002;

const recipes = [
  {
    title: "Avocado Toast",
    time: 10,
    image: "https://via.placeholder.com/300x200?text=Avocado+Toast"
  },
  {
    title: "Grilled Chicken Bowl",
    time: 25,
    image: "https://via.placeholder.com/300x200?text=Grilled+Chicken"
  }
];

app.get("/api/recipe", (req, res) => {
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
  res.json(recipe);
});

app.listen(PORT, () => {
  console.log(`Recipe API running on port ${PORT}`);
});
