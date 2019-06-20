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

  random() {
    const questions = this.state.quiz
    return questions[Math.floor(Math.random() * questions.length)]
  }

  showAnswer(e) {
    e.preventDefault()
    console.log('clicked!')
  }


  render() {
    if (!this.state.quiz.length) return null
    const questionAnswer = this.random()
    const answers = [...questionAnswer.incorrect_answers, questionAnswer.correct_answer]
    console.log(answers)
    console.log(questionAnswer)
    return (
      <main>
        <div>
          Question:
          {questionAnswer.question}
        </div>
        <div>
          Answers:
          {answers.map((answer, i) => (
            <button onClick={this.showAnswer} key={i} value={answer} type="submit">{answer}
            </button>
          ))}
        </div>
      </main>
    )
  }
}

export default QuizPage
