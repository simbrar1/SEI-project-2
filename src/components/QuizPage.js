import React from 'react'
import axios from 'axios'

import Results from './Results'

const Entities = require('html-entities').XmlEntities
const entities = new Entities()


class QuizPage extends React.Component {
  constructor() {
    super()

    this.state = { quiz: [], counter: 0, gameMode: null  }
    this.score = 0

    this.showAnswer = this.showAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.playEasy = this.playEasy.bind(this)
    this.playHard = this.playHard.bind(this)
    this.reset = this.reset.bind(this)
  }


  playEasy() {
    this.setState({ gameMode: 'easy' }, () => this.getData())
  }

  playHard() {
    this.setState({ gameMode: 'medium' }, () => this.getData())
  }

  getData() {
    axios.get(`https://opentdb.com/api.php?amount=50&category=11&type=multiple&difficulty=${this.state.gameMode}`)
      .then(res => this.setState({ quiz: res.data.results }, () => this.random()))
      .catch(err => console.log(err))
  }


  random() {
    const questions = this.state.quiz
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)]
    const answers = this.shuffle([...currentQuestion.incorrect_answers, currentQuestion.correct_answer])
    this.setState({ currentQuestion, answers })
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  showAnswer(e) {
    e.preventDefault()
    if (e.target.value === this.state.currentQuestion.correct_answer ) {
      const result = 'Right'
      this.setState({ result })
      this.score += 1
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

  reset() {
    this.setState({ counter: 0 })
    this.score = 0
  }


  render() {
    if (!this.state.gameMode) {
      return(
        <main>
          <h1 className="d"> Please choose your difficulty level </h1>
          <button className="easy button is-large is-warning" onClick={this.playEasy}>Easy</button>
          <button className="hard button is-large is-danger" onClick={this.playHard}>Hard</button>
        </main>
      )
    }
    if (!this.state.quiz || !this.state.currentQuestion || !this.state.answers) return null
    const { currentQuestion, answers, result } = this.state
    return (
      <main>
        {this.state.counter < 10 &&
          <div>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Question
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  {entities.decode(currentQuestion.question)}
                </div>
              </div>
              <div className="card-footer">
                {answers.map((answer, i) => (
                  <button className="card-footer-item" onClick={this.showAnswer} key={i} value={entities.decode(answer)} type="submit">{entities.decode(answer)}
                  </button>
                ))}
              </div>
            </div>
            <div className="container">
              {this.state.counter < 10 && <button className="next button is-danger is-outlined" onClick={this.nextQuestion}>Next Question
              </button>}
            </div>
            <div className="result">{ result }</div>
            <h1 className="score">Score: {this.score}</h1>
          </div>
        }

        {this.state.counter === 10 &&
              <Results
                score={this.score}
                reset={this.reset}
              />
        }
      </main>
    )
  }
}

export default QuizPage


// if (!this.state.quiz || !this.state.currentQuestion || !this.state.answers) return null
//     const { currentQuestion, answers, result } = this.state
//     return (
//       <main>
//         {this.state.counter < 10 &&
//           <div>
//             <div>
//               Question:
//               {currentQuestion.question}
//             </div>
//             <div>
//             Answers:
//               {answers.map((answer, i) => (
//                 <button onClick={this.showAnswer} key={i} value={answer} type="submit">{answer}
//                 </button>
//               ))}
//             </div>
//             <div>{ result }</div>
//             <button onClick={this.nextQuestion}>Next Question</button>
//           </div>
//         }
//         {this.state.counter === 10 &&
//           <Results
//             score={this.state.score}
//             reset={this.reset}
//           />
//         }
//         <h1>{this.score}</h1>
//       </main>
//     )
//   }
// }
