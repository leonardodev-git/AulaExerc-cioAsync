const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokemons');



router.get('/', controlllers.showPokemons);


module.exports = router;