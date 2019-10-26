import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <Link to="/quiz" className="start">Start</Link>
        </div>
      </section>
    )
  }
}



export default Home
