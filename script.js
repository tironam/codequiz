const startButton = document.getElementById('startBtn')
const qBox = document.getElementById('questions')
const qElement = document.getElementById('questionBox')
const answerButton = document.getElementById('answerBtn')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('invisible')
    qBox.classList.remove('invisible')
}



function showQ(questions) {

}


