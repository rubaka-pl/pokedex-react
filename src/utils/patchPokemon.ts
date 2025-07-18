import type {
  UnpatchedPokemonSchema,
  PokemonSpritesSchema,
  PokemonSchema,
} from '../types/PokemonSchema';

export function patchPokemonData(
  pokemons: UnpatchedPokemonSchema[]
): PokemonSchema[] {
  return pokemons.map((pokemon) => {
    let parsedSprites: PokemonSpritesSchema = {
      normal: undefined,
      animated: undefined,
    };
    try {
      if (pokemon.sprites) {
        parsedSprites = JSON.parse(pokemon.sprites);
      }
    } catch (error) {
      console.warn('Invalid sprites JSON for', pokemon.name, error);
    }

    return {
      ...pokemon,
      sprites: parsedSprites,
    };
  });
}
