const express = require('express');
const router = express.Router();

const recipeCtrl = require('../controllers/recipe');

router.get('/', recipeCtrl.getRecipes);
router.get('/:id', recipeCtrl.getSingleRecipe);
router.post('/', recipeCtrl.saveRecipe);
router.put('/:id', recipeCtrl.modifyRecipe);
router.delete('/:id', recipeCtrl.deleteRecipe);

module.exports = router;