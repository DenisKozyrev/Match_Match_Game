// game Player Profile form register and input game rules page greeting
let greetingAndGameRules = document.querySelector('#greetingAndGameRules');
let gamePlayerProfilePage = document.querySelector('.game-player-profile-page');
let gamePlayerCheckin = document.querySelector('.game-player-checkin');
let greetingFirstNameInput = document.querySelector('#playerProfileFirstName');
let greetingLastNameInput = document.querySelector('#playerProfileLastName');
let playerProfileEmail = document.querySelector('#playerProfileEmail');
let playerFullName = document.querySelector('#playerFullName');
//NewGame Button
let newGameButton = document.querySelector('#newGameButton');
let gamePage = document.querySelector('.game-page');
let gameScoreTable = document.querySelector('.game-score-table');
let hiddenCardNumber = 0;
let playerScoreFullName = document.querySelector('.player-score-full-name');
let playerScoreEmail = document.querySelector('.player-score-email');
let playerScoreTimer = document.querySelector('.player-score-timer');
let playerProfileRegisterButton = document.querySelector('#playerProfileRegisterButton');
// shirt Button options
let shirtOptionsButton = document.querySelector('#shirtCardsButton');
let shirtButtonDropdownContent = document.querySelector('#shirtCardsButtonContent');
// shirt Button options
// game Level event (открывает внутренний блок с выбором сложности игры)
let gameLevelButton = document.querySelector('#gameLevelButton');
let levelButtonContent = document.querySelector('#levelButtonContent');
// Добовляет нужную рубашку кард при выборе игрока и убирает внутренний блок 
let gameCardBlock = document.getElementsByClassName('front');
let yodaShirtCard = document.querySelector('.yoda');
let vaderShirtCard = document.querySelector('.vader');
let r2d2ShirtCard = document.querySelector('.r2d2');
// функция Перевороты карт и исчезновение 
let gameCardsClassActiveArr = [];
let gameCardsClassActiveArrLength = 2;
let cardImgArr = ['back-card-img-1', 'back-card-img-1', 'back-card-img-2', 'back-card-img-2', 'back-card-img-3', 'back-card-img-3', 'back-card-img-4', 'back-card-img-4', 'back-card-img-5', 'back-card-img-5', 'back-card-img-6', 'back-card-img-6', 'back-card-img-7', 'back-card-img-7', 'back-card-img-8', 'back-card-img-8', 'back-card-img-9', 'back-card-img-9', 'back-card-img-10', 'back-card-img-10', 'back-card-img-11', 'back-card-img-11', 'back-card-img-12', 'back-card-img-12'];
let gameCardBlockFrontBack = document.getElementsByClassName('back');
let activeClass = document.getElementsByClassName('active');
let gameCard = document.querySelector('#gameCard');
let gameCardsBlock = document.getElementsByClassName('flip-container')
    // генерирует правила поля и убирает внутренний блок level button 
let cardNumber = 0;
let gameFild = document.querySelector('#gameFild');
let gameLevel3x2 = document.querySelector('#gameLevel3x2');
let gameLevel6x3 = document.querySelector('#gameLevel6x3');
let gameLevel8x3 = document.querySelector('#gameLevel8x3');
//timer
let timerString = document.querySelector('#timerString');
let divTimer = document.querySelector('#timer');
let seconds = 0;




function getFullName() {
    greetingAndGameRules.style.display = 'none';
    gamePlayerProfilePage.style.display = 'block';
}

playerProfileRegisterButton.addEventListener('click', getFullName);
shirtOptionsButton.addEventListener('click', shirtButtonDropdownContentOff);


function shirtButtonDropdownContentOff() {
    shirtButtonDropdownContent.classList.toggle('shirt-cards-display');
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


gameLevelButton.addEventListener('click', () => {
    levelButtonContent.classList.toggle('game-dropdown-content-display');
});

gameLevel3x2.addEventListener('click', () => {
    cardNumber = 6
    cardImgArr.splice(6);
    gameFild.style.width = '480px';
    gameFild.style.padding = '109px 0'
    levelButtonContent.classList.toggle('game-dropdown-content-display');
});

gameLevel6x3.addEventListener('click', () => {
    cardNumber = 18
    cardImgArr.splice(18);
    gameFild.style.width = '960px';
    gameFild.style.padding = '4px 0'
    levelButtonContent.classList.toggle('game-dropdown-content-display');
});

gameLevel8x3.addEventListener('click', () => {
    cardNumber = 24
    gameFild.style.width = '1285px';
    gameFild.style.padding = '4px 0'
    levelButtonContent.classList.toggle('game-dropdown-content-display');
});

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
                    item.style.opacity = "0";
                    gameCardsClassActiveArr.splice(0);
                })
                hiddenCardNumber += 2;
            }
        };
    }, 700)
};

function newGameButtonAddEvent() {
    gamePage.style.display = 'block';
    gamePlayerProfilePage.style.display = 'none';
    gameScoreTable.style.display = 'none';

    playerFullName.innerHTML = greetingFirstNameInput.value + " " + greetingLastNameInput.value;


    gameCard.addEventListener('click', cardMovement);

    for (let i = 0; i < cardNumber - 1; i++) {
        let gameCard2 = gameCard.cloneNode(true);
        gameCard.after(gameCard2);
        gameCard2.addEventListener('click', cardMovement);
    }
    divTimer.style.display = 'flex';
    Array.from(gameCardBlockFrontBack).forEach(card => {
        let i = Math.round(Math.random() * (cardImgArr.length - 1));
        card.classList.add(cardImgArr[i]);
        cardImgArr.splice(i, 1);
    })

    function showScorePage() {
        divTimer.style.display = 'none';
        gamePage.style.display = 'none';
        gamePlayerProfilePage.style.display = 'block';
        gamePlayerCheckin.style.display = 'none';
        gameScoreTable.style.display = 'block';
        playerScoreFullName.innerHTML = greetingFirstNameInput.value + " " + greetingLastNameInput.value;
        playerScoreEmail.innerHTML = playerProfileEmail.value;
        playerScoreTimer.innerHTML = parseTimer();
        clearInterval(startTimer, 0)
        hiddenCardNumber = 0;
        // Array.from(gameCardsBlock).forEach((item) => {
        //     item.remove()
        // });
    };

    function timer() {
        seconds++;
        timerString.innerHTML = parseTimer();
        if (hiddenCardNumber === gameCardsBlock.length) {
            showScorePage();
        }
    };

    function parseTimer() {
        let ss = seconds % 60;
        let mm = Math.floor(seconds / 60) % 60;
        let hh = Math.floor(seconds / 3600);
        ss = ss < 10 ? "0" + ss : ss;
        mm = mm < 10 ? "0" + mm : mm;
        hh = hh < 10 ? "0" + hh : hh;
        return hh + ":" + mm + ":" + ss;
    };
    let startTimer = setInterval(timer, 1000);
};

newGameButton.addEventListener('click', newGameButtonAddEvent);