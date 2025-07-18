import React from 'react'
import './Pokedex.css'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchInput from '../SearchInput/SearchInput'
import Pokelist from '../Pokelist/Pokelist'

const Pokedex = () => {
  return (
    <div className="pokedex-container">
        <div className="pokelist-container">
            <SearchInput/>
            <Pokelist/>
        </div>
        <div className="pokesearchresult-container">
            <PokeSearchResult/>
        </div>
    </div>
  )
}


export default Pokedex
