const startButton = document.getElementById('startBtn')
const qBox = document.getElementById('questContainer')
const qElement = document.getElementById('questionBox')
const answerButton = document.getElementById('answerBtn')
const startTxt = document.getElementById('startTxt')
const startBox = document.getElementById('startBox')
let rightAnswer = document.getElementById('rightAnswer')
let questBtn = document.getElementById('qBtn')

startButton.addEventListener('click', startGame)
// questBtn.addEventListener('click', () => {
//     if ()
// })\

questBtn.addEventListener('click', function() {
    console.log('hey')
})

function startGame() {
    startButton.classList.add('invisible')
    startTxt.classList.add('invisible')
    startBox.classList.add('byeBox')
    qBox.classList.remove('invisible')
}

function buttonClick() {
    document.getElementById('qBtn').click()
}

function chooseAnswer() {
    document.getElementById('qBtn').addEventListener('click', (event) => {
        event.preventDefault()
        if (document.getElementById('qBtn').classList.contains('rightAnswer')) {
            console.log('Right answer!')
        } else {
            console.log('you got it wrong!')
        }
    })
}

chooseAnswer()


