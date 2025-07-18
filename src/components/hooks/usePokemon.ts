import { useState, useEffect, useCallback, useMemo } from 'react';
import { pokemonData } from '../../Data/pokemonData';
import type {
  PokemonSchema,
  UnpatchedPokemonSchema,
} from '../../types/PokemonSchema';
import { patchPokemonData } from '../../utils/patchPokemon';
import {
  filterPokemonsByName,
  findPokemonByName,
} from '../../utils/pokemonHelpers';

export function usePokemon() {
  const [searchField, setSearchField] = useState<string>(
    () => localStorage.getItem('pokemonSearch') ?? ''
  );
  const [allPokemons, setAllPokemons] = useState<PokemonSchema[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonSchema | undefined
  >(undefined);

  const patched = useMemo(
    () => patchPokemonData(pokemonData as UnpatchedPokemonSchema[]),
    []
  );

  useEffect(() => {
    setAllPokemons(patched);
  }, [patched]);

  const searchedPokemon = useMemo(
    () => filterPokemonsByName(allPokemons, searchField),
    [allPokemons, searchField]
  );

  const onInputChange = useCallback((value: string) => {
    setSearchField(value);
    localStorage.setItem('pokemonSearch', value);
  }, []);

  const handleClick = useCallback(
    (name: string) => {
      setSelectedPokemon(findPokemonByName(allPokemons, name));
    },
    [allPokemons]
  );

  return {
    searchedPokemon,
    selectedPokemon,
    onInputChange,
    handleClick,
  };
}
