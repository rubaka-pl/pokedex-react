import type { PokemonSchema } from '../types/PokemonSchema';

export interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemon: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}
