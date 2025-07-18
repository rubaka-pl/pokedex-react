import React from 'react'
import './PokeCard.css'

export default function PokeCard(props: any) {
  return (
          <div className='pokemon-card'>
        {/* image */}
        <p>{props.name}</p>
      </div>
  )
}

