import React from 'react'
import axios from 'axios'

import Results from './Results'


class QuizPage extends React.Component {
  constructor() {
    super()

    this.state = { quiz: [], counter: 0 }

    this.showAnswer = this.showAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=50&category=11&type=multiple&difficulty=easy')
      .then(res => this.setState({ quiz: res.data.results }, () => this.random()))
      .catch(err => console.log(err))
  }

  random() {
    const questions = this.state.quiz
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)]
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    this.setState({ currentQuestion, answers })
  }

  showAnswer(e) {
    e.preventDefault()
    if (e.target.value === this.state.currentQuestion.correct_answer ) {
      const result = 'Right'
      this.setState({ result })
    } else {
      const result = 'Wrong'
      this.setState({ result })
    }
  }

  nextQuestion(e) {
    e.preventDefault()
    this.random()
    const result = ''
    this.setState({ result })
    let counter = this.state.counter
    counter ++
    this.setState({ counter })
  }

  score() {
    
  }


  render() {
    if (!this.state.quiz || !this.state.currentQuestion || !this.state.answers) return null
    const { currentQuestion, answers, result } = this.state
    return (
      <main>
        {this.state.counter < 10 &&
          <div>
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
            <div>{ result }</div>
            <button onClick={this.nextQuestion}>Next Question</button>
          </div>
        }
        {this.state.counter === 10 &&
          <Results
            score={this.state.score}
          />
        }
      </main>
    )
  }
}

export default QuizPage
