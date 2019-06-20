import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) =>
  <main>
    <h1>Results</h1>
    <button onClick={props.reset} className="button is-medium is-info">Play Again!</button>
  </main>

export default Results
