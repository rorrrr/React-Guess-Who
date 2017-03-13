import React from 'react'
import Main from './Main'

var DisplayContainer = function(props){

 var displayData = props.characters.map(function(char, index){
  return (<div id="blastoisesDiv" onBlastoiseClick={char.onBlastoiseClick}>
    <h2 key={index}>{char.name}</h2>
    <img src={char.img} />
    <p> Dank Level: {char.dankness}</p>
    <p> Hat: {char.hat}</p>
    <p> Derp: {char.derp}</p>
    <p> Terrifying: {char.terrifying}</p>
    </div>
  );
 })

  return(
    <div id="characterBox">
      {displayData}
    </div>
  )
}

export default DisplayContainer
