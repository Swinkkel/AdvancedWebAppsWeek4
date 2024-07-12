var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:food', function(req, res, next) {
    const { food } = req.params;

    const recipe = {
        name: food,
        instructions: ['Step 1: ', 'Step 2:'],
        ingrediantes: ['Ingredient 1', 'Ingredient 2']
    };

    res.json(recipe);
});

module.exports = router;
