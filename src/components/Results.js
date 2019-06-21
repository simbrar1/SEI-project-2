import React from 'react'
// import { Link } from 'react-router-dom'

const Results = (props) =>
  <main>
    <h1 className="result-title">Results</h1>
    <h2 className="show-result">Score: {props.score}</h2>
    <button onClick={props.reset} className="play-again button is-danger is-outlined">Play Again!</button>
  </main>

export default Results
