import React from 'react'
import './PokeSearchResult.css'
const PokeSearchResult = () => {
    
  const pokemonIsSelected = true;

    return (
    <div className="poke-result-card">
        { pokemonIsSelected ? ( <div>
            {/* img */}
            <p>Name: Pika</p>
            <p>id: PikaId</p>
            <p>desc: PikaDesc</p>
            <p>Height: PikaHeight</p>
            <p>Weight: PikaWeight</p>
            <p>ability: Pikaability</p>
        </div> ) : <h2>Welcome to the Pokedex</h2>
        }
    </div>
    
  )
}

export default PokeSearchResult;
