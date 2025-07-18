export interface UnpatchedPokemonSchema {
  id?: string;
  species_id?: string;
  height?: string;
  weight?: string;
  base_experience?: string;
  order?: string;
  is_default?: string;
  name?: string;
  sprites?: string;
}

export interface PokemonSchema {
  id?: string;
  species_id?: string;
  height?: string;
  weight?: string;
  base_experience?: string;
  order?: string;
  is_default?: string;
  name?: string;
  sprites?: PokemonSpritesSchema;
}

export interface PokedexProps {
  searchedPokemon: PokemonSchema[];
  onInputChange: (InputValue: string) => void;
  handleclick: (pokemonName: string) => void;
  selectedPokemon: PokemonSchema | undefined;
}
export interface SearchInputProps {
  onInputChange: (InputValue: string) => void;
}
export interface PokelistProps {
  searchedPokemon: PokemonSchema[];
  handleclick: (pokemonName: string) => void;
}

export interface PokemonSpritesSchema {
  normal?: string;
  animated?: string;
}

export interface PokemonCardProps {
  spriteUrl?: string;
  name: string | undefined;
  onClick?: () => void;
}

export interface PokemonSearchPropsSchema {
  selectedPokemon: PokemonSchema | undefined;
}
