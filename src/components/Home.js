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
          <Link to="/quiz" className="button is-medium is-white">Start</Link>
        </div>
        <footer className="home-footer">Amy & Sim &hearts;</footer>
      </section>
    )
  }
}



export default Home
