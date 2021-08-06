import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {allJokes: ['Why was 6 afraid of 7?', 'What kind of tree fits in your hand?', 'What animal is always at a basketball game?', 
    'How does a scientist freshen her breath?', 'Where do vampires keep their money?', 'What stays in the corner yet can travel all over the world?'
    , 'How do you fix a cracked pumpkin?', 'Why was the computer cold?', 'What did the left eye say to the right eye?',
     'How do we know that the ocean is friendly?'], 
    allAnswers:['Because 7, 8, 9!', 'A palm tree!', 'A bat!', 'With experi-ments!', 'A blood bank!', 'A stamp!', 'With a pumpkin patch!'
    , 'It left its window open!', 'Between us, something smells!', 'It waves!' ], 
    currentJoke: '', currentAnswer: ''}
  }
  handleShowJoke = () => {
    if (this.state.currentAnswer!== ''){
      this.setState({currentAnswer: ''});
    }
    const allJokes = this.state.allJokes.slice();
    // pick random joke from array
    const randJoke = allJokes[Math.floor(Math.random()*allJokes.length)];
    // set state
    this.setState({currentJoke: randJoke});



  }

  handleShowAnswer = () => {
    
    // get current Joke
    const currentJoke = this.state.currentJoke;
    // get index of joke in array
    const allJokes = this.state.allJokes.slice();
    const index = allJokes.indexOf(currentJoke);
    // use index to get answer
    const answers = this.state.allAnswers.slice();
    const theAnswer = answers[index];

    // set state of currentAnswer to that
    this.setState({currentAnswer: theAnswer});

  }
  render(){
    return(
    <div className="App">
        <h1> Jokes App </h1>

     <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title><Button onClick={this.handleShowJoke} style={{ marginLeft: '180px'}} variant="outline-primary">tell joke!</Button></Modal.Title>
  </Modal.Header>

  <Modal.Body style={{height: '400px'}}>
    <p style={{marginTop: '100px'}}> 
<div>


{ this.state.currentJoke == ''
  ? ''
  : [
      (this.state.currentAnswer == ''
        ? <div>{this.state.currentJoke}</div>
        : <div>{this.state.currentAnswer}</div>
      )
    ]
}


</div>

    
     </p>
  </Modal.Body>

  <Modal.Footer>

  {this.state.currentJoke == '' ? '' : <div> 

<Button onClick= {this.handleShowAnswer} style={{ marginLeft: '180px'}} variant="outline-primary">show answer!</Button>


   </div>}




  </Modal.Footer>
</Modal.Dialog>






    </div>
    );
  }
}

export default App;
