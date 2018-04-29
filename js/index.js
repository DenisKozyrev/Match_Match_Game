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
        card.classList.add('vader-front');
    });
    shirtButtonDropdownContentOff();
});

r2d2ShirtCard.addEventListener('click', () => {
    Array.from(gameCardBlock).forEach(card => {
        card.innerHTML = '<img class = "card-img" src = "../Match-Match-Game/images/r2d2-img.png" width = "130px" height = "130px" >';
        card.backgroundColor = '#aaa';
    });
    shirtButtonDropdownContentOff();
});




// game Level event (открывает внутренний блок с выбором сложности игры)
let gameLevelButton = document.querySelector('#gameLevelButton');

let levelButtonContent = document.querySelector('#levelButtonContent');

gameLevelButton.addEventListener('click', () => {
    levelButtonContent.style.display = 'block';
});







// функция Перевороты карт и исчезновение 
let gameCardsClassActiveArr = [];
let gameCardsClassActiveArrLength = 2;
let cardImgArr = ['back-card-img-1', 'back-card-img-1', 'back-card-img-2', 'back-card-img-2', 'back-card-img-3', 'back-card-img-3', 'back-card-img-4', 'back-card-img-4', 'back-card-img-5', 'back-card-img-5', 'back-card-img-6', 'back-card-img-6', 'back-card-img-7', 'back-card-img-7', 'back-card-img-8', 'back-card-img-8', 'back-card-img-9', 'back-card-img-9', 'back-card-img-10', 'back-card-img-10', 'back-card-img-11', 'back-card-img-11', 'back-card-img-12', 'back-card-img-12'];

let activeClass = document.getElementsByClassName('active');
let gameCard = document.querySelector('#gameCard');
let gameCards = document.getElementsByClassName('flip-container');

function cardMovement() {
    this.classList.toggle('active');
    setTimeout(() => {
        if (!this.classList.contains('active')) {
            gameCardsClassActiveArr.splice(0);
        } else {
            gameCardsClassActiveArr.push(this.children[0].children[1].classList[2]);
        };
        for (i = 0; i < gameCardsClassActiveArrLength; i++) {
            if (gameCardsClassActiveArr.length === 2 && gameCardsClassActiveArr[i] !== gameCardsClassActiveArr[i + 1]) {
                Array.from(activeClass).forEach((item) => {
                    item.classList.remove('active');
                    gameCardsClassActiveArr.splice(0);
                })
            } else if (gameCardsClassActiveArr.length === 2 && gameCardsClassActiveArr[i] === gameCardsClassActiveArr[i + 1]) {
                Array.from(activeClass).forEach((item) => {
                    item.classList.add('hiddenCard');
                    gameCardsClassActiveArr.splice(0);
                })
            }
        };
    }, 1000)
}


// генерирует правила поля и убирает внутренний блок level button 
let cardNumber = 0;
let gameFild = document.querySelector('#gameFild');
let gameLevel3x2 = document.querySelector('#gameLevel3x2');
let gameLevel6x3 = document.querySelector('#gameLevel6x3');
let gameLevel8x3 = document.querySelector('#gameLevel8x3');

gameLevel3x2.addEventListener('click', () => {
    cardNumber = 6
    cardImgArr.splice(6);
    gameFild.style.width = '480px';
    gameFild.style.padding = '119px 0 120px 0'
    levelButtonContent.style.display = 'none';
});

gameLevel6x3.addEventListener('click', () => {
    cardNumber = 18
    cardImgArr.splice(18);
    gameFild.style.width = '960px';
    gameFild.style.padding = '15px 0'
    levelButtonContent.style.display = 'none';
});

gameLevel8x3.addEventListener('click', () => {
    cardNumber = 24
    gameFild.style.width = '1285px';
    gameFild.style.padding = '15px 0'
    levelButtonContent.style.display = 'none';
});


//timer
let timerString = document.querySelector('#timerString');
let timer = document.querySelector('#timer');
let timerArr = timerString.innerHTML.split(':');
let seconds = 0;

function startTimer() {
    seconds++
    timerArr[2] = seconds % 60;
    if (seconds === 60) {
        timerArr[2] = 0;
        timerArr[1] = +timerArr[1] + 1;
    }
    if (timerArr[1] === 60) {
        timerArr[1] = 0;
        timerArr[0] = +timerArr[0] + 1;
    }
    timerString.innerHTML = timerArr.join(':');
}


//NewGame Button
let newGameButton = document.querySelector('#newGameButton');
let gamePage = document.querySelector('.game-page');
let gameCardBlockFrontBack = document.getElementsByClassName('back');
let cardCount = 24;
newGameButton.addEventListener('click', () => {
    gameRulesPage.style.display = 'none';
    gamePage.style.display = 'block';
    gameCard.addEventListener('click', cardMovement);
    for (let i = 0; i < cardNumber - 1; i++) {
        let gameCard2 = gameCard.cloneNode(true);
        gameCard.after(gameCard2);
        gameCard2.addEventListener('click', cardMovement);
    }
    timer.style.display = 'block';
    setInterval(startTimer, 1000)
    Array.from(gameCardBlockFrontBack).forEach(card => {
        let i = Math.floor(Math.random() * (cardCount + 1)) + 0;
        if (cardImgArr.length > 2 && cardImgArr[i] !== undefined) {
            card.classList.add(cardImgArr[i]);
            cardImgArr.splice(i, 1);

        } else {
            card.classList.add(cardImgArr[0]);
            cardImgArr.shift();
        }
    })
});