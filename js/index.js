// game Player Profile form register and input game rules page greeting
let gamePlayerProfilePage = document.querySelector('#gamePlayerProfilePage');

let greetingFirstNameInput = document.querySelector('#playerProfileGreetingFirstName');

let greetingLastNameInput = document.querySelector('#playerProfileGreetingLastName');

let fullNameGreeting = document.querySelector('#fullNameGreeting');

let playerProfileRegisterButton = document.querySelector('#playerProfileRegisterButton');

let gameRulesPage = document.querySelector('.player-greeting-and-game-rules-page');

function getFullName() {
    gamePlayerProfilePage.style.display = 'none';
    gameRulesPage.style.display = 'block';
    fullNameGreeting.innerHTML = "Hello" + " " + greetingFirstNameInput.value + " " + greetingLastNameInput.value + "!";
}

playerProfileRegisterButton.addEventListener('click', getFullName)



// shirt Button options
let shirtOptionsButton = document.querySelector('#shirtCardsButton');

let shirtButtonDropdownContent = document.querySelector('#shirtCardsButtonContent')

shirtOptionsButton.addEventListener('click', () => {
    shirtButtonDropdownContent.style.display = 'block';
});

// Добовляет нужную рубашку кард при выборе игрока и убирает внутренний блок 
let gameCardBlock = document.getElementsByClassName('front');

let yodaShirtCard = document.querySelector('.yoda');
let vaderShirtCard = document.querySelector('.vader');
let r2d2ShirtCard = document.querySelector('.r2d2');

function shirtButtonDropdownContentOff() {
    shirtButtonDropdownContent.style.display = 'none';
}

yodaShirtCard.addEventListener('click', () => {
    Array.from(gameCardBlock).forEach(card => {
        card.innerHTML = '<img class = "card-img" src = "../Match-Match-Game/images/yoda-img.png" width = "130px" height = "130px" >';
    });
    shirtButtonDropdownContentOff();
});

vaderShirtCard.addEventListener('click', () => {
    Array.from(gameCardBlock).forEach(card => {
        card.innerHTML = '<img class = "card-img" src = "../Match-Match-Game/images/darth-vader-img.png" width = "130px" height = "130px" >';
    });
    shirtButtonDropdownContentOff();
});

r2d2ShirtCard.addEventListener('click', () => {
    Array.from(gameCardBlock).forEach(card => {
        card.innerHTML = '<img class = "card-img" src = "../Match-Match-Game/images/r2d2-img.png" width = "130px" height = "130px" >';
    });
    shirtButtonDropdownContentOff();
});




// game Level event (открывает внутренний блок с выбором сложности игры)
let gameLevelButton = document.querySelector('#gameLevelButton');

let levelButtonContent = document.querySelector('#levelButtonContent');

gameLevelButton.addEventListener('click', () => {
    levelButtonContent.style.display = 'block';
});

// генерирует нужное количество кард и убирает внутренний блок level button 
let gameLevel3x2 = document.querySelector('#gameLevel3x2');
let gameLevel6x3 = document.querySelector('#gameLevel6x3');
let gameLevel8x3 = document.querySelector('#gameLevel8x3');
let gameFild = document.querySelector('#gameFild');
let gameCard = document.querySelector('#gameCard');

gameLevel3x2.addEventListener('click', () => {
    let cardNumber = 6
    for (let i = 0; i < cardNumber - 1; i++) {
        let gameCard2 = gameCard.cloneNode(true);
        gameCard.parentNode.insertBefore(gameCard2, gameCard.nextSibling);
    }
    gameFild.style.width = '480px';
    levelButtonContent.style.display = 'none';
});

gameLevel6x3.addEventListener('click', () => {
    let cardNumber = 18
    for (let i = 0; i < cardNumber - 1; i++) {
        let gameCard2 = gameCard.cloneNode(true);
        gameCard.parentNode.insertBefore(gameCard2, gameCard.nextSibling);
    }
    gameFild.style.width = '960px';
    levelButtonContent.style.display = 'none';
});

gameLevel8x3.addEventListener('click', () => {
    let cardNumber = 24
    for (let i = 0; i < cardNumber - 1; i++) {
        let gameCard2 = gameCard.cloneNode(true);
        gameCard.parentNode.insertBefore(gameCard2, gameCard.nextSibling);
    }
    gameFild.style.width = '1285px';
    levelButtonContent.style.display = 'none';
});

//new game button event
let newGameButton = document.querySelector('#newGameButton');
let gamePage = document.querySelector('.game-page');

newGameButton.addEventListener('click', () => {
    gameRulesPage.style.display = 'none';
    gamePage.style.display = 'block';
});