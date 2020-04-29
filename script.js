const startButton = document.getElementById('startBtn')
const qBox = document.getElementById('questionBox')
let questionIndex
const qElement = document.getElementById('question')
const answerButton = document.getElementById('answerBtn')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    qBox.classList.remove('hide')
    questionIndex = 0
    nextQ()
}

function nextQ () {
    showQ(questionIndex)
} 

function showQ(question) {
    qElement.innerText = question.question
}

function choose() {

}

const questions = [
    {
        question: 'Question 1',
        answers: [
            { text: 'no', correct: false }
            { text: 'Yes', correct: true }
            { text: 'narp', correct: false }
            { text: 'nah', correct: false }
        ]
    }
]