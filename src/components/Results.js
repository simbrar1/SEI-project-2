import React from 'react'
// import { Link } from 'react-router-dom'

const Results = (props) =>
  <main>
    <h1 className="show-result">Score: {props.score}</h1>
    <button onClick={props.reset} className="play-again button is-danger is-large is-outlined">Play Again!</button>
  </main>

export default Results
