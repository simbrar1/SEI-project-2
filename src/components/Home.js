import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <p className="home-title title is-1 ">
      Movie Quiz
          </p>
          <Link to="/quiz" className="button is-large is-warning">Start</Link>
        </div>
      </section>
    )
  }
}



export default Home
