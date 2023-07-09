const { Pokemon, PokemonType, Op } = require("../../db");
module.exports = async function getPokemonByNameDb(name) {
  const min = name.toLowerCase();
  const pokemons = await Pokemon.findAll({
    where: {
      name: { [Op.startsWith]: min },
    },
    include: {
      model: PokemonType,
      as: "types",
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return pokemons.map((pokemon) => ({
    ...pokemon.dataValues,
    types: pokemon.types.map((type) => type.name),
  }));
};