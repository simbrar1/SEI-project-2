import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
import QuizPage from './components/QuizPage'

const App = () => {
  return(
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/quiz" component={QuizPage}/>
          <Route path="/" component={Home}/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
