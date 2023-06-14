import './App.css';
import shuffle from 'shuffle-array';
import Card from './components/Card';
import brownie from './assets/brownie.jpg';
import cheesecake from './assets/cheesecake.jpg';
import chocolate from './assets/chocolate.jpg';
import cookie from './assets/cookie.jpg';
import cupcake from './assets/cupcake.jpg';
import doughnut from './assets/doughnut.jpg';
import eclairs from './assets/eclairs.jpg';
import icecream from './assets/icecream.jpg';
import lollipop from './assets/lollipop.jpg';
import macarons from './assets/macarons.jpg';
import stroopwaffles from './assets/stroopwaffles.jpg';
import waffles from './assets/waffles.jpg';
import background from './assets/background.jpg'
import { useEffect, useState } from 'react';

let images = [
  { img: brownie, name: 'Brownie' },
  { img: cheesecake, name: 'Cheesecake' },
  { img: chocolate, name: 'Chocolate' },
  { img: cookie, name: 'Cookie' },
  { img: cupcake, name: 'Cupcake' },
  { img: doughnut, name: 'Doughnut' },
  { img: eclairs, name: 'Eclairs' },
  { img: icecream, name: 'Icecream' },
  { img: lollipop, name: 'Lollipop' },
  { img: macarons, name: 'Macarons' },
  { img: stroopwaffles, name: 'Stroopwaffles' },
  { img: waffles, name: 'Waffles' }
];

function App() {
  // const [clicks, setClicks] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  images = shuffle(images);

  useEffect(() => {
    images = shuffle(images);
    if (score === 12) {
      setRound(round + 1);
      setGameOver(true);
      // setScore(0);
    };
  }, [score]);

  function handleClick(itemClickedBefore) {
    // console.log(itemClickedBefore);
    if (itemClickedBefore === true) {
      setGameOver(true);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setRound(1);

    } else {
      setGameOver(false);
      setScore(score + 1);
      // console.log(score);
    }
  }

  return (
    <div className="App">
      <img className='background' src={background} alt="" />
      <div className="top">
        <h1>Sweets Memory Game</h1>
        <div className="scores">
          <div className="round">Round: {round}</div>
          <div className="score">Score: {score}</div>
          <div className="bestScore">Best Score: {bestScore}</div>
        </div>
      </div>
      <div className="container">
        {images.map(image => <Card key={image.name} img={image.img} onClick={handleClick} isGameOver={gameOver}>{image.name}</Card>)}
      </div>
      <footer>
        Copyright © github.com/hajra-javed
    </footer>
    </div>
  );
}

export default App;
