const q1 = 'What show does the term \"hotdog\" come from?'
const q2 = 'Temperate Literals use:'
const q3 = 'A Boolean is a True/False statement'
const q4 = 'What styling library can be a coder\'s best friend?'
const q5 = 'Making frequent commits is often a bad idea'
const q6 = 'W3 Schools is a:'
const q7 = 'It\'s best practice to use ____ for CSS'
const q8 = 'It\'s best practice to use ___ for JavaScript'
const q9 = 'The best browser for a web developer to use is:'
const q10 = 'A great place to store your code repositories is:'

const choice1 = [
    {
        question: 'a) The Big Bang Theory',
        isTrue: false
    },
    {
        question: 'b) Silicon Valley',
        isTrue: true
    },
    {
        question: 'c) Mr. Robot',
        isTrue: false
    },
    {
        question: 'd) Freaks & Geeks',
        isTrue: false
    }
]

let correct = 0
let incorrect = 0
let question = 'none'
let input = 'none'
let answer = 'none'

let start = quizStart()

document.getElementById('question').innerHTML = q1
// document.getElementsById('choices').innerHTML = choice1.question

for (let i = 0; i < choice1.length; i++) {
    let btnElem = document.createElement('button')
    btnElem.className = 'question'
    btnElem.textContent = choice1[i].question
    btnElem.dataset.index = i
    document.getElementById('choices').append(btnElem)
} 

document.addEventListener('click', (event) => {
    if (choice1) {
        console.log('You got it right!')
    } else {
        console.log('You got it wrong :(')
    }
})

rightAnswer() {

}
// // document.getElementById('choices').addEventListener('click', () => {
// //     if 
// // })