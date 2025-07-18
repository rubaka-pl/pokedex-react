import React, { Component } from 'react'
import './App.css'
import Pokedex from '../Pokedex/Pokedex'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
export default class App extends Component {
  render() {
    return (
      <>
      
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex/>
      </div>
      </>
    )
  }
}
