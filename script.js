const name = document.querySelector('#name');
const question = document.querySelector('#question');
const translation = document.querySelector('#translation');

let swapped = false;
let qObj;

const players = [
    'Nikki',
    'Luis',
    'Caroline'
];

question.addEventListener('click', swap);

function display() {
    const icon = '<i class="fas fa-user"></i> ';

    qObj = getQuestion();

    name.innerHTML = icon + players[randN(players.length)]
    question.innerText = swapped ? qObj.t : qObj.q;
    translation.innerText = swapped ? qObj.q : qObj.t;
}

function swap() {
    swapped = !swapped;

    question.innerText = swapped ? qObj.t : qObj.q;
    translation.innerText = swapped ? qObj.q : qObj.t;
}

function getQuestion() {
    let rand = randN(questions.length);
    return questions[rand];
}

function randN(limit) {
    return Math.floor(Math.random() * limit);
}