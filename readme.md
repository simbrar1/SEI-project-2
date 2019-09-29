# SEI - Project 2 Front End Application Movie Quiz
## Overview

This project was to work in a pair to **build a React application** that consumed a **public API**, this project was also known as a Reactathon. This project was made in collaboration with Amy Wilson (github.com/amydaniellewilson).

Click to view the live version of the app --->
**[Movie Quiz](https://moviequiz.herokuapp.com/)**

### Technical Requirements

* Consume a public API – this could be anything but it must make sense for your project.
* Have several components - At least one classical and one functional.
* The app can include a router - with several "pages".
* Be deployed online and accessible to the public.

---

### Technologies used

* JavaScript (ES6) / HTML5 / CSS
* React.js (Framework)
* Consumes the OpenTDB via the HTTP client Axios
* Git
* gitHub
* Bulma


### Timeframe

1 1/2 days

---

## The Approach

Once the API had been chosen we read the documentation in how to receive the data. There are 2 levels for the quiz "easy" and "hard, we decided that we would focus on just retrieving the data for easy, and once that was accomplished then to move onto the hard levels. Each GET request returned 50 questions per each difficulty level therefore we chose to make the quiz out of 10 so there wont be much repetition for frequent users of the quiz.

---

## User Journey

<img src="../../assets/screenshot1.png" />
Opens with the home page asking the user to start the Quiz

![Alt text]("screenshot1.png")

Next the user is asked what difficulty level they would like to do the quiz in. The options are either easy or hard
* photo 3
When playing the game the question will appear on the screen with 4 possible answers at the bottom. The user makes a decision on which answer they think is right and if they are correct their score either increases or stays the same.
* photo 4
The last photo the end of the game final score which is out of 10. There is also another option to play again.

---

## Challenges

There were a few challenges that came our way whilst working on the project. The first was to find a public API that would allow us to use the API without a key as we were under a big time crunch.

The second challenge seemed more difficult as we then wanted to create 2 levels of difficulty which was easy or hard.

The last major challenge was to write the logic for when the correct answer is being selected and then for the score to reflect how many answers were correct in total.


## Wins
To finish the project within one and a half days was a complete win as we succeeded in completing the task with a functioning working app. Another win was to ensure that the correct  at the end of the page. This took some

---

## Future Developments

I would like to improve the design as at the moment it seems like it
