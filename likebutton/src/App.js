import logo from './logo.svg';
import { React, useState } from 'react'
import './App.css';

function App() {

  const [likecolor, setlikecolor] = useState('gray')
  const [dislikecolor, setDislikecolor] = useState('gray')
  const [likeCounter, setLikeCounter] = useState(100)
  const [dislikeCounter, setDislikeCounter] = useState(25)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const handleLikeButton = () => {
    if (!liked) {
      if (disliked) {
        setDislikeCounter(dislikeCounter - 1)
        setDislikecolor('gray')
        setDisliked(!disliked)
      }
      setLikeCounter(likeCounter + 1)
      setlikecolor('green')
      setLiked(true)
    } else {
      setLikeCounter(likeCounter - 1)
      setlikecolor('gray')
      setLiked(!liked)
    }
  }

  const handleDislikeButton = () => {
    if (!disliked) {
      if (liked) {
        setLikeCounter(likeCounter - 1)
        setlikecolor('gray')
        setLiked(!liked)
      }
      setDislikeCounter(dislikeCounter + 1)
      setDislikecolor('red')
      setDisliked(!disliked)
    } else {
      setDislikeCounter(dislikeCounter - 1)
      setDislikecolor('gray')
      setDisliked(!disliked)
    }
  }


  return (
    <div className="App">
      <button
        onClick={handleLikeButton}
        style={{ color: `${likecolor}`, padding: '15px', fontsize: '15px', margin: '15px' }}>
        Like | {likeCounter}
      </button>
      <button
        onClick={handleDislikeButton}
        style={{ color: `${dislikecolor}`, padding: '15px', fontsize: '15px', margin: '15px' }}>
        Dislike | {dislikeCounter}
      </button>
    </div>
  );
}

export default App;
