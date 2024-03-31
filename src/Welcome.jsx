import React from 'react'

function Welcome (props) {
  return <h1>Hola {props.name ?? 'Papa'}</h1>
}

export { Welcome }
