const startButton = document.getElementById('startBtn')
const qBox = document.getElementById('questions')
let shuffledQ, questionIndex
const qElement = document.getElementById('questionBox')
const answerButton = document.getElementById('answerBtn')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('invisible')
    shuffledQ = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    qBox.classList.remove('invisible')
    showQ()
}

function nextQ () {
    showQ(shuffledQ[questionIndex])
} 

function showQ(questions) {
    // qElement.innerText = questions.question
    document.getElementById('questionBox').append.innerText = questions.question
    document.getElementById('btn').append.innerText = questions.answers
    // questions.answers.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButton.appendChild(button)
    // })
}

function choose() {

}

const questions = [
    {
        question: `What show does the term "hotdog" come from?`,
        answers: [
            {
                text: 'no', 
                correct: false
            },
            {
             text: 'yes', 
             correct: true
            },
            {
                text: 'narp',
                correct: false
            },
            {
                text: 'nah',
                correct: false
            }
        ]
    }
]