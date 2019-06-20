import React from 'react'
import axios from 'axios'


class QuizPage extends React.Component {
  constructor() {
    super()

    this.state = { quiz: [] }

    this.showAnswer = this.showAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=50&category=11&type=multiple&difficulty=easy')
      .then(res => this.setState({ quiz: res.data.results }, () => this.random()))
      .catch(err => console.log(err))
  }

  random() {
    console.log('running')
    const questions = this.state.quiz
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)]
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    this.setState({ currentQuestion, answers })
  }

  showAnswer(e) {
    e.preventDefault()
    if (e.target.value === this.state.currentQuestion.correct_answer ) {
      const right = 'Right'
      this.setState({ right })
    } else {
      const wrong = 'Wrong'
      this.setState({ wrong })
    }
  }

  nextQuestion(e) {
    e.preventDefault()
    this.random()
  }


  render() {
    if (!this.state.quiz || !this.state.currentQuestion || !this.state.answers) return null
    const { currentQuestion, answers, right, wrong } = this.state
    return (
      <main>
        <div>
          Question:
          {currentQuestion.question}
        </div>
        <div>
          Answers:
          {answers.map((answer, i) => (
            <button onClick={this.showAnswer} key={i} value={answer} type="submit">{answer}
            </button>
          ))}
        </div>
        <div>{ right }{ wrong }</div>
        <button onClick={this.nextQuestion}>Next Question</button>
      </main>
    )
  }
}

export default QuizPage
