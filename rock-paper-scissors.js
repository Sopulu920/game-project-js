function rock() {
    document.getElementById(`human-player`).innerHTML = `rock`;
}
function paper() {
    document.getElementById(`human-player`).innerHTML = `paper`;
}
function scissors() {
    document.getElementById(`human-player`).innerHTML = `scissors`;
}

const choice = [`rock`, `paper`, `scissors`];
document.querySelectorAll(`button`).forEach(button => button.addEventListener(`click`, () => play()));

function play() {
    const aiChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(aiChoice);

}
function y(){
    console.log(Math.round(Math.random() * 3) );
}
