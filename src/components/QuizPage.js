import React from 'react'
import axios from 'axios'


class QuizPage extends React.Component {
  constructor() {
    super()

    this.state = { quiz: null }
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=50&category=11&type=multiple&difficulty=easy')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <main>
        <div>Question</div>
        <div>Answers</div>
      </main>
    )
  }
}

export default QuizPage
