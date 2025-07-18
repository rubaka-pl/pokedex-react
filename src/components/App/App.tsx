import { Component } from 'react';
import './App.css';
import Pokedex from '../Pokedex/Pokedex';
import { pokemonData } from '../../Data/pokemonData';
import type {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from '../../types/PokemonSchema';
import type { AppState } from '../../types/AppSchema';

export default class App extends Component<any, AppState> {
  state = {
    searchField: '',
    allPokemons: [],
    searchedPokemon: [],
    selectedPokemon: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };
      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (error) {
        console.warn('error: ', error);
      }

      const patchedPokemons: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemons;
    });
    return patchedPokemons;
  };

 componentDidMount(): void {
  const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);

  const savedSearch = localStorage.getItem('pokemonSearch') ?? '';

  const searched = patchedPokemons.filter((pokemon) =>
    pokemon.name?.toLowerCase().includes(savedSearch.toLowerCase())
  );

  this.setState({
    allPokemons: patchedPokemons,
    searchedPokemon: searched,
    searchField: savedSearch,
  });
}

  onInputChange = (inputValue: string) => {
    console.log(`input value from app.tsx: ${inputValue}`);
    const { allPokemons } = this.state;

    const searchedPokemon = allPokemons.filter((pokemon: PokemonSchema) => {
      return (
        pokemon.name &&
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    this.setState({
      searchField: inputValue,
      searchedPokemon: searchedPokemon,
    });
  };

  handleclick = (pokemonName: string) => {
    const { allPokemons } = this.state;

    const selectedPokemon = allPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );

    this.setState({ selectedPokemon });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Pokedex</h1>
          <Pokedex
            searchedPokemon={this.state.searchedPokemon}
            onInputChange={this.onInputChange}
            handleclick={this.handleclick}
            selectedPokemon={this.state.selectedPokemon}
          />
        </div>
      </>
    );
  }
}
