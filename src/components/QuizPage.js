import React from 'react'
import axios from 'axios'


class QuizPage extends React.Component {
  constructor() {
    super()

    this.state = { quiz: [] }
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=50&category=11&type=multiple&difficulty=easy')
      .then(res => this.setState({ quiz: res.data.results }))
      .catch(err => console.log(err))
  }

  randomQuestion() {
    const questions = this.state.quiz
    return questions[Math.floor(Math.random() * questions.length)]
  }


  render() {
    if (!this.state.quiz.length) return null
    const currentQuestion = this.randomQuestion()
    console.log(currentQuestion)
    return (
      <main>
        <div>
          {currentQuestion.question}
          {currentQuestion.correct_answer}
        </div>
        <div>Answers</div>
      </main>
    )
  }
}

export default QuizPage
