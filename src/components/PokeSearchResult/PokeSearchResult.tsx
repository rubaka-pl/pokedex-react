import React from 'react';
import './PokeSearchResult.css';
import type { PokemonSearchPropsSchema } from '../../types/PokemonSchema';
const PokeSearchResult: React.FC<PokemonSearchPropsSchema> = ({
  selectedPokemon,
}) => {
  return (
    <div className="poke-result-card">
      {selectedPokemon ? (
        <div>
          {selectedPokemon?.sprites?.animated ? (
            <img
              src={selectedPokemon.sprites.animated}
              alt={selectedPokemon.name}
            />
          ) : selectedPokemon?.sprites?.normal ? (
            <img
              src={selectedPokemon.sprites.normal}
              alt={selectedPokemon.name}
            />
          ) : (
            <p>Sorry, no image</p>
          )}
          <p>Name: {selectedPokemon.name}</p>
          <p>ID: {selectedPokemon.id}</p>
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
        </div>
      ) : (
        <h2>Welcome to the Pokedex</h2>
      )}
    </div>
  );
};
export default PokeSearchResult;
