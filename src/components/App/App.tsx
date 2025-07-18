import React from 'react';
import './App.css';
import Pokedex from '../Pokedex/Pokedex';
import { usePokemon } from '../hooks/usePokemon';

export function App() {
  const { searchedPokemon, selectedPokemon, onInputChange, handleClick } = usePokemon();

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex
        searchedPokemon={searchedPokemon}
        onInputChange={onInputChange}
        handleclick={handleClick}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
}

export default App;
