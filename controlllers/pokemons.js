const path = require('path');
const fs = require('fs');

const index = (req, res) => {
  const listaPokemons = 
  res.render('listarPokemons')
}


module.exports = {
  index,
}