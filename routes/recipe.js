var express = require('express');
var router = express.Router();

// Structure to store recipes.
let recipes = [];

/* GET home page. */
router.get('/:food', function(req, res) {
    const { food } = req.params;

    const recipe = {
        name: food,
        instructions: ['Step 1: ', 'Meanwhile, make the sauce'],
        ingredients: ['Ingredient 1', 'Casserole']
    };

    res.json(recipe);
});

router.post('recipe', function(req, res, next) {
    const {name, instructions, ingredients} = req.body;
    const newRecipe = {name, instructions, ingredients};
    recipes.push(newRecipe);

    res.json(newRecipe);
});

module.exports = router;
