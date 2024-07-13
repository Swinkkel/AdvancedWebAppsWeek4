var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const apiUrl = 'http://localhost:3000/recipe/pizza'
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('error');
    }

    const recipe = await response.json();
    res.render('index', { title: 'Express', recipe });
  }
  catch (error) {
    console.error('Error fetching recipe: ', error.message);
    res.status(500).json({title: 'Error', recipe: {}});
  }
});

module.exports = router;
