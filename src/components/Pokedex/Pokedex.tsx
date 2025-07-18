import './Pokedex.css';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchInput from '../SearchInput/SearchInput';
import Pokelist from '../Pokelist/Pokelist';
import type { PokedexProps } from '../../types/PokemonSchema';

const Pokedex = ({
  searchedPokemon,
  selectedPokemon,
  onInputChange,
  handleclick,
}: PokedexProps) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchInput onInputChange={onInputChange} />
        <Pokelist searchedPokemon={searchedPokemon} handleclick={handleclick} />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Pokedex;
