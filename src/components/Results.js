import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) =>
  <main>
    <h1 className="result-title">Results</h1>
    <button onClick={props.reset} className="play-again button is-medium is-info">Play Again!</button>
    <h2> {props.result} className="show-result"</h2>
  </main>

export default Results
