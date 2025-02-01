let choice 
function rock() {
    document.getElementById(`human-player`).innerHTML = `rock`;
    choice = Math.ceil(Math.random() * 3);
    console.log(choice);
}
function paper() {
    document.getElementById(`human-player`).innerHTML = `paper`;
    choice = Math.round(Math.random() * 3);
}
function scissors() {
    document.getElementById(`human-player`).innerHTML = `scissors`;
    choice = Math.round(Math.random() * 3);
} 
console.log(choice);

//const choice = [`rock`, `paper`, `scissors`];
document.querySelectorAll(`button`).forEach(button => button.addEventListener(`click`, () => play()));

function play() {
    const aiChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(aiChoice);

}
function y(){
    console.log( );
}
