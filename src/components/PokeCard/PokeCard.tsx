import './PokeCard.css';

import type { PokemonCardProps } from '../../types/PokemonSchema';

const PokeCard = ({ spriteUrl, name, onClick }: PokemonCardProps) => {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img className="pokemon-image" src={spriteUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokeCard;
