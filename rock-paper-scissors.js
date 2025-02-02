//generate random number and plays for ai
let choice
function aiChoice() {
    choice = Math.ceil(Math.random() * 3);
    console.log(choice);

    let computerChoice
    if (choice === 1) {
        computerChoice = `rock`;
    }
    if (choice === 2) {
        computerChoice = `paper`;
    }
    if (choice === 3) {
        computerChoice = `scissors`;
    }
    document.getElementById(`ai-player`).innerHTML = computerChoice;
}

//generate plays for human
function rock() {
    document.getElementById(`human-player`).innerHTML = `rock`;
}

function paper() {
    document.getElementById(`human-player`).innerHTML = `paper`;
}
function scissors() {
    document.getElementById(`human-player`).innerHTML = `scissors`;
}

//event listener for buttons
document.addEventListener(`DOMContentLoaded`, function () {
    const buttons = document.querySelectorAll(`.myButton`);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(`click`, aiChoice);
    }      
});