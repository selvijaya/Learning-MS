import React from 'react'

function Hero({name}) {
    if(name==="jenith"){
        throw new Error ('not a hero')
    }
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Hero
