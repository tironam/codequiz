const questions = [
    {
        question: 'What show does the term \"hotdog\" come from?',
        answers: [
            { text: 'Silicon Valley', correct: true },
            { text: 'The Big Bang Theory', correct: false },
            { text: 'Mr. Robot', correct: false },
            { text: 'Halt & Catch Fire', correct: false }
        ]
    },
    {
        question: 'Temperate Literals use:',
        answers: [
            { text: 'Backticks', correct: true },
            { text: 'Single Quotes', correct: false },
            { text: 'Double Quotes', correct: false },
            { text: '<a> links', correct: false }
        ]
    },
    {
        question: 'A Boolean is a True/False statement?',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
        question: 'What styling library can be a coder\s best friend?',
        answers: [
            { text: 'Pied Piper', correct: false },
            { text: 'Bootstrap', correct: true },
            { text: 'Box Lunch', correct: false },
            { text: 'JQuery', correct: false }
        ]
    },
    {
        question: 'What styling library can be a coder\s best friend?',
        answers: [
            { text: 'Pied Piper', correct: false },
            { text: 'Bootstrap', correct: true },
            { text: 'Box Lunch', correct: false },
            { text: 'JQuery', correct: false }
        ]
    },
    {
        question: 'W3 Schools is a:',
        answers: [
            { text: 'Great coding resource', correct: true },
            { text: 'A styling library', correct: false },
            { text: 'Art school', correct: false },
            { text: 'Middle-out compression company', correct: false }
        ]
    },
    {
        question: 'It\'s best practice to use ____ for CSS',
        answers: [
            { text: 'IDs', correct: false },
            { text: 'Classes', correct: true },
            { text: 'Scripts', correct: false },
            { text: '<a> links', correct: false }
        ]
    },
    {
        question: 'It\'s best practice to use ____ for JavaScript',
        answers: [
            { text: 'IDs', correct: true },
            { text: 'Classes', correct: false },
            { text: 'Cat pictures', correct: false },
            { text: '<a> links', correct: false }
        ]
    },
    {
        question: 'The best browser for a web developer to use is:',
        answers: [
            { text: 'Google Chrome', correct: true },
            { text: 'Internet Explorer', correct: false },
            { text: 'Safari', correct: false },
            { text: 'The Opera browser on a Nintendo Wii', correct: false }
        ]
    }
]

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
// const startText = document.getElementById('start-txt')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timer = document.getElementById('time')
let count = 60
let right = 0
let wrong = 0

let shuffledQuestions, currentQuestionIndex

const getTime = () => {
    let tempMinutes = Math.floor(count / 60)
    let seconds = count % 60
    seconds = `${seconds}`
    if (seconds.length < 2) {
        seconds = `0${seconds}`
    } else 
    document.getElementById('time').textContent = (seconds)
}

setInterval(() => {
    count--
    getTime()
}, 1000)

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('invisible')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('invisible')
    setNextQuestion()
    getTime()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    // Sets the inner text of the #question element to that of question string from the questions array
    questionElement.innerText = question.question
    // creates a button for each answer it's pulling from the array and giving it style and attributes
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn', 'btn-light')
        if (answer.correct) {
            // Adds data attribute of correct, and sets it to correct
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        // adds this to the answerButtonsElement
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    // Hides the next button
    nextButton.classList.add('invisible')
    count = 60
    // Loops through the children for the answer button elements and removes them
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    // what was clicked on
    const selectedButton = e.target
    // Checking if the selected button's dataset is correct
    const correct = selectedButton.dataset.correct
    // Checking if the body is set to correct or not
    setStatusClass(document.body, correct)
    // Creates an array from answer button elements
    Array.from(answerButtonsElement.children).forEach(button => {
        // Checks the button's dataset for correct
        setStatusClass(button, button.dataset.correct)
    })
    // Checks to see if there are any questions left
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        // If there are more questions, display next button
        nextButton.classList.remove('invisible')
    } else {
        // If there are no more questions, brings the start button back and changes it to restart, but starts it again
        startButton.innerText = 'Restart'
        startButton.classList.remove('invisible')
    }
}

// Checks an element for if it's correct
function setStatusClass(element, correct) {
    // Clears whatever status it already has
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// 
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// function countdown() {
//     timer = setInterval(countdown, 1000)
//     let minutes = Math.floor(time / 60)
//     let seconds = time % 60
//     time--
//     clock.textContent = ('Time left: ' + `${minutes} minutes, ${seconds} seconds`)
//     if (time <= 0) {
//         document.getElementById('clock').innerHTML = 'Time up!'
//         endQuiz
//     }
// }