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
    }
]

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
// const startText = document.getElementById('start-txt')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

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
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('invisible')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('invisible')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('invisible')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
