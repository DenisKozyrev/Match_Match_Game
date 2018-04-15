let greetingFirstNameInput = document.querySelector('#greetingFirstName');

let greetingLastNameInput = document.querySelector('#greetingLastName');

let fullNameGreeting = document.querySelector('.player-full-name-greeting');

let playerProfileButton = document.querySelector('.player-profile-register-button');

let gameGreeting = document.querySelector('.game-greeting-and-player-profile-page');

let gameRules = document.querySelector('.player-greeting-and-game-rules-page');

function getFullName() {
    gameGreeting.style.display = 'none';
    gameRules.style.display = 'block';
    fullNameGreeting.innerHTML = "Hello" + " " + greetingFirstNameInput.value + " " + greetingLastNameInput.value + "!";
}

playerProfileButton.addEventListener('click', getFullName)




let shirtOptionsButton = document.querySelector('#shirtCardsButton');

let shirtButtonDropdownContent = document.querySelector('#shirtCardsButtonContent')

let shirtCardsImg = document.querySelectorAll('.shirt-cards-img');

// let yodaImg = document.querySelector('.yoda-img');

shirtOptionsButton.addEventListener('click', () => {
    // yodaImg.style.display = 'none';
    shirtButtonDropdownContent.style.display = 'block';
});

function shirtButtonsOptions() {
    shirtButtonDropdownContent.style.display = 'none';
    // yodaImg.style.display = 'block';
}

shirtCardsImg.forEach(img => img.addEventListener('click', shirtButtonsOptions));


let gameLevelButton = document.querySelector('#gameLevelButton');

let levelButtonContent = document.querySelector('#levelButtonContent');

gameLevelButton.addEventListener('click', () => {
    levelButtonContent.style.display = 'block';
});

let newGameButton = document.querySelector('#newGameButton');
let gamePage = document.querySelector('.game-page');

newGameButton.addEventListener('click', () => {
    gameRules.style.display = 'none';
    gamePage.style.display = 'block';
});