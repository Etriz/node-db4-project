const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.findRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.findRecipeById(id)
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get shopping list" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get instruction list" });
    });
});

module.exports = router;
