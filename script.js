const startButton = document.getElementById('startBtn')
const qBox = document.getElementById('answerBtn')
let shuffledQ, questionIndex
const qElement = document.getElementById('questionBox')
const answerButton = document.getElementById('answerBtn')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('invisible')
    shuffledQ = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    qBox.classList.remove('invisible')
    nextQ()
}

function nextQ () {
    // showQ(questionIndex)
} 

// function showQ(questions) {
//     qElement.innerText = questions.question
// }

function choose() {

}

const questions = [
    {
        question: 'Question 1',
        answers: [
            {
                text: 'no', 
                correct: false
            },
            {
             text: 'yes', 
             correct: true
            }
        ]
    }
]