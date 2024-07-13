var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:food', function(req, res, next) {
    const { food } = req.params;

    const recipe = {
        name: food,
        instructions: ['Step 1: ', 'Step 2:'],
        ingredients: ['Ingredient 1', 'Ingredient 2']
    };

    res.render('index', { recipe });
});

module.exports = router;
