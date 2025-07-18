// src/utils/pokemonHelpers.ts
import type { PokemonSchema } from '../types/PokemonSchema';

export function filterPokemonsByName(
  pokemons: PokemonSchema[],
  inputValue: string
): PokemonSchema[] {
  const lower = inputValue.toLowerCase();
  return pokemons.filter((p) => p.name?.toLowerCase().includes(lower));
}

export function findPokemonByName(
  pokemons: PokemonSchema[],
  name: string
): PokemonSchema | undefined {
  return pokemons.find((p) => p.name === name);
}
