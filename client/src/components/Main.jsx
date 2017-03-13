import React, { Component } from 'react'
// import { Link } from 'react-router'
import DisplayContainer from './DisplayContainer'
// import GuessInput from './GuessInput'


class Main extends Component {

  constructor(props){
    super(props)

    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      characters: 
      [
      {
        name: 'lurl',
        img: 'https://static-cdn.jtvnw.net/emoticons/v1/150608/2.0',
        dankness: 'avg',
        hat: "no",
        terrifying: "no",
        derp: "yes"
      },
      {
        name: 'lul',
        img: 'https://static-cdn.jtvnw.net/emoticons/v1/49488/2.0',
        dankness: 'high',
        hat: "no",
        terrifying: "no",
        derp: "no"
      },
      {
        name: 'hmmmm',
        img: 'https://static-cdn.jtvnw.net/emoticons/v1/120643/2.0',
        dankness: 'high',
        hat: "no",
        terrifying: "no",
        derp: "no"
      },
      {
        name: 'AHHHH',
        img: 'https://pbs.twimg.com/media/C6qU50GWwAAYvVm.jpg',
        dankness: 'low',
        hat: "no",
        terrifying: "yes",
        derp: "no"
      },
      {
        name: 'deadtoise',
        img: 'https://pbs.twimg.com/media/CisPU1ZXEAAjd7V.jpg:large',
        dankness: 'low',
        hat: "no",
        terrifying: "yes",
        derp: "no"
      },
      {
        name: 'sailortoise',
        img: 'https://pbs.twimg.com/media/CEGEmy6WIAIqjM7.png:large',
        dankness: 'avg',
        hat: "yes",
        terrifying: "no",
        derp: "yes"
      }
      ],  focusCharacter: {} 
    };
  }

  setFocusBlastoise() {
   var blastoiseArray = this.state.characters;
     // console.log("array of blastoises", blastoiseArray);
     var newFocusBlastoise = blastoiseArray[Math.floor(Math.random() * blastoiseArray.length)];
     console.log("focused blastoise name", newFocusBlastoise.name);
     this.setState({focusCharacter: newFocusBlastoise});
   }

   componentWillMount() {
    this.setFocusBlastoise();
  }

  onBlastoiseClick(event) {
    const blastoiseClicked = JSON.parse(event.target.characters);
  if(blastoiseClicked === this.state.focusCharacter){
    console.log('winnner')
  } else {
   console.log('loser')
 }

}


render() {

  return (
    <div>
    <h1>Guess Who: Blastoise</h1>
    <br></br>
    <DisplayContainer characters={this.state.characters} onBlastoiseClick={this.onBlastoiseClick.bind(this)}/>/>
    </div>
    )
}
}

// <GuessInput characters={this.state.characters} focusCharacter={this.state.focusCharacter}/>


export default Main