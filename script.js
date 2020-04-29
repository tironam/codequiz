const startButton = document.getElementById('startBtn')
const qBox = document.getElementById('questContainer')
const qElement = document.getElementById('questionBox')
const answerButton = document.getElementById('answerBtn')
const startTxt = document.getElementById('startTxt')
const startBox = document.getElementById('startBox')
let rightAnswer = document.getElementById('rightAnswer')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('invisible')
    startTxt.classList.add('invisible')
    startBox.classList.add('byeBox')
    qBox.classList.remove('invisible')
}

function chooseAnswer() {
    document.getElementById.addEventListener('click', (event) => {
        if (event.target.classList.contains('rightAnswer')) {
            console.log('hey')
        }
    })
}


