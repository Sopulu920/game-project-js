//declare result variable
let humanResult
let computerResult

//generate random number and plays for ai
function aiChoice() {
    let choice
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

    computerResult = computerChoice;
}


//generate plays for human
function rock() {
    humanResult = `rock`
    aiChoice();
    icon()
    Compare();
}
function paper() {
    humanResult = `paper`
    aiChoice();
    icon()
    Compare();
}
function scissors() {
    humanResult = `scissors`
    aiChoice();
    icon()
    Compare();
}

//event listener for buttons
document.addEventListener(`DOMContentLoaded`, function () {
    const buttons = document.querySelectorAll(`.myButton`);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(`click`, aiChoice);
    }
});

//score
let humanScore = 0;
let computerScore = 0;

function Compare() {
    if (humanResult === computerResult) {
        humanScore += 0;
        computerScore += 0;
    }
    if (
        (humanResult === `rock`) && (computerResult === `scissors`) ||
        (humanResult === `paper`) && (computerResult === `rock`) ||
        (humanResult === `scissors`) && (computerResult === `paper`)
    ) {
        humanScore += 1;
    }
    if (
        (computerResult === `rock`) && (humanResult === `scissors`) ||
        (computerResult === `paper`) && (humanResult === `rock`) ||
        (computerResult === `scissors`) && (humanResult === `paper`)
    ) {
        computerScore += 1;
    }
     //display scores
    document.getElementById(`humanScore`).innerHTML = humanScore;
    document.getElementById(`computerScore`).innerHTML = computerScore;
}

//icon
function icon() {
    //human
    if (humanResult === `rock`) {
        document.getElementById(`human-player`).innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    }
    if (humanResult === `paper`) {
        document.getElementById(`human-player`).innerHTML = `<i class="fa-solid fa-hand"></i>`;
    }
    if (humanResult === `scissors`) {
        document.getElementById(`human-player`).innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
    }

    //computer
    if (computerResult === `rock`) {
        document.getElementById(`ai-player`).innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    }
    if (computerResult === `paper`) {
        document.getElementById(`ai-player`).innerHTML = `<i class="fa-solid fa-hand"></i>`;
    }
    if (computerResult === `scissors`) {
        document.getElementById(`ai-player`).innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
    }
}