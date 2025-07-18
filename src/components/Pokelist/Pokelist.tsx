import PokeCard from '../PokeCard/PokeCard';
import './Pokelist.css';
import type { PokelistProps } from '../../types/PokemonSchema';

export default function Pokelist({
  searchedPokemon,
  handleclick,
}: PokelistProps) {
  return (
    <div className="pokelist">
      {searchedPokemon.map(({ id, name, sprites }) => (
        <PokeCard
          key={id}
          name={name || 'Unknown'}
          spriteUrl={sprites?.normal}
          onClick={() => handleclick(name!)} // 👈
        />
      ))}
    </div>
  );
}
