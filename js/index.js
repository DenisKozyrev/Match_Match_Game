// Greeting page
let playerFullNameDiv = document.querySelector("#playerFullName");
let greetingAndGameRulesPage = document.querySelector(
  "#greetingAndGameRulesPage"
);
let playerProfileRegisterButton = document.querySelector(
  "#playerProfileRegisterButton"
);
//Timer
let timerString = document.querySelector("#timerString");
let divTimer = document.querySelector("#timer");
let seconds = 0;
let startTimer = null;
// Player profile page
let playerProfilePage = document.querySelector(".player-profile-page");
let playerCheckin = document.querySelector("#playerCheckin");
let playerFirstName = document.querySelector("#playerProfileFirstName");
let playerLastName = document.querySelector("#playerProfileLastName");
let newGameButton = document.querySelector("#newGameButton");
//Game and score page
let gamePage = document.querySelector(".game-page");
let gameFild = document.querySelector("#gameFild");
let gameScorePage = document.querySelector(".game-score-page");
let gameScoreTable = document.querySelector(".game-score-table");
// Game option buttons
let shirtOptionsButton = document.querySelector("#shirtCardsButton");
let shirtButtonDropdownContent = document.querySelector(
  "#shirtCardsButtonContent"
);
let yodaShirtCard = document.querySelector(".yoda");
let vaderShirtCard = document.querySelector(".vader");
let r2d2ShirtCard = document.querySelector(".r2d2");
let shirtCardImage = "";
let gameLevelButton = document.querySelector("#gameLevelButton");
let levelButtonContent = document.querySelector("#levelButtonContent");
let gameLevel3x2 = document.querySelector("#gameLevel3x2");
let gameLevel6x3 = document.querySelector("#gameLevel6x3");
let gameLevel8x3 = document.querySelector("#gameLevel8x3");
// Game cards
let gameCardsClassActiveArr = [];
let gameCardsClassActiveArrLength = 2;
let backImgClassArr = [
  "back-card-img-1",
  "back-card-img-1",
  "back-card-img-2",
  "back-card-img-2",
  "back-card-img-3",
  "back-card-img-3",
  "back-card-img-4",
  "back-card-img-4",
  "back-card-img-5",
  "back-card-img-5",
  "back-card-img-6",
  "back-card-img-6",
  "back-card-img-7",
  "back-card-img-7",
  "back-card-img-8",
  "back-card-img-8",
  "back-card-img-9",
  "back-card-img-9",
  "back-card-img-10",
  "back-card-img-10",
  "back-card-img-11",
  "back-card-img-11",
  "back-card-img-12",
  "back-card-img-12"
];
let cardMovementActiveClassCollection = document.getElementsByClassName(
  "active"
);
let gameCardsCollection = document.getElementsByClassName("card-box");
let cardNumber = 0;
let hiddenCardNumber = 0;

playerProfileRegisterButton.addEventListener("click", () => {
  greetingAndGameRulesPage.style.display = "none";
  playerProfilePage.style.display = "block";
});

function shirtButtonDropdownContentOff() {
  shirtButtonDropdownContent.classList.toggle(
    "shirt-cards-dropdown-content-display"
  );
}

shirtOptionsButton.addEventListener("click", shirtButtonDropdownContentOff);

yodaShirtCard.addEventListener("click", () => {
  shirtCardImage =
    '<img class = "card-img" src = "./images/yoda-img.png" width = "130px" height = "130px" >';
  shirtButtonDropdownContentOff();
});

vaderShirtCard.addEventListener("click", () => {
  shirtCardImage =
    '<img class = "card-img" src = "./images/darth-vader-img.png" width = "130px" height = "130px" >';
  shirtButtonDropdownContentOff();
});

r2d2ShirtCard.addEventListener("click", () => {
  shirtCardImage =
    '<img class = "card-img" src = "./images/r2d2-img.png" width = "130px" height = "130px" >';
  shirtButtonDropdownContentOff();
});

function levelButtonDropdownContentOff() {
  levelButtonContent.classList.toggle("level-card-dropdown-content-display");
}

gameLevelButton.addEventListener("click", levelButtonDropdownContentOff);

gameLevel3x2.addEventListener("click", () => {
  cardNumber = 6;
  backImgClassArr.splice(6);
  gameFild.style.width = "480px";
  gameFild.style.padding = "109px 0";
  levelButtonDropdownContentOff();
});

gameLevel6x3.addEventListener("click", () => {
  cardNumber = 18;
  backImgClassArr.splice(18);
  gameFild.style.width = "960px";
  gameFild.style.padding = "4px 0";
  levelButtonDropdownContentOff();
});

gameLevel8x3.addEventListener("click", () => {
  cardNumber = 24;
  gameFild.style.width = "1285px";
  gameFild.style.padding = "4px 0";
  levelButtonDropdownContentOff();
});

function cardMovement() {
  this.classList.toggle("active");
  if (!this.classList.contains("active")) {
    gameCardsClassActiveArr.splice(0);
  } else {
    gameCardsClassActiveArr.push(this.children[0].children[1].classList[2]);
  }
  setTimeout(() => {
    for (i = 0; i < gameCardsClassActiveArrLength; i++) {
      if (
        gameCardsClassActiveArr.length >= 2 &&
        gameCardsClassActiveArr[i] !== gameCardsClassActiveArr[i + 1]
      ) {
        Array.from(cardMovementActiveClassCollection).forEach(item => {
          item.classList.remove("active");
          gameCardsClassActiveArr.splice(0);
        });
      } else if (
        gameCardsClassActiveArr.length === 2 &&
        gameCardsClassActiveArr[i] === gameCardsClassActiveArr[i + 1]
      ) {
        Array.from(cardMovementActiveClassCollection).forEach(item => {
          item.style.opacity = "0";
          gameCardsClassActiveArr.splice(0);
        });
        hiddenCardNumber += 2;
        if (hiddenCardNumber === gameCardsCollection.length) {
          showScorePage();
        }
      }
    }
  }, 700);
}

function gameCardCreate() {
  let gameCardDiv = document.createElement("div");
  let gameCardFlipper = document.createElement("div");
  let frontSideCard = document.createElement("div");
  let backSideCard = document.createElement("div");
  let i = Math.round(Math.random() * (backImgClassArr.length - 1));
  gameCardDiv.classList.add("card-box");
  gameCardFlipper.classList.add("flipper");
  frontSideCard.classList.add("front");
  frontSideCard.innerHTML = shirtCardImage;
  backSideCard.classList.add("back");
  backSideCard.classList.add("back-position");
  backSideCard.classList.add(backImgClassArr[i]);
  backImgClassArr.splice(i, 1);
  gameFild.appendChild(gameCardDiv);
  gameCardDiv.appendChild(gameCardFlipper);
  gameCardFlipper.appendChild(frontSideCard);
  gameCardFlipper.appendChild(backSideCard);
  gameCardDiv.addEventListener("click", cardMovement);
}

function tableRowAdd() {
  gameScoreTable.innerHTML = "";
  let localObjectArr = Object.entries(localStorage).sort((a, b) => a[1] - b[1]);
  if (localObjectArr.length > 10) {
    localObjectArr.splice(10);
  }
  localObjectArr.forEach(player => {
    let playerScoreInfoRow = document.createElement("tr");
    let playerScoreFullName = document.createElement("td");
    let playerScoreTimer = document.createElement("td");
    playerScoreInfoRow.classList.add("player-score-information");
    playerScoreFullName.classList.add("player-score-full-name");
    playerScoreTimer.classList.add("player-score-timer");
    gameScoreTable.appendChild(playerScoreInfoRow);
    playerScoreInfoRow.appendChild(playerScoreFullName);
    playerScoreInfoRow.appendChild(playerScoreTimer);
    playerScoreFullName.innerHTML = player[0];
    playerScoreTimer.innerHTML = parseTimer(player[1]);
  });
}

function showScorePage() {
  gamePage.style.display = "none";
  playerProfilePage.style.display = "block";
  playerCheckin.style.display = "none";
  gameScorePage.style.display = "block";
  if (
    localStorage.hasOwnProperty(
      playerFirstName.value + " " + playerLastName.value
    )
  ) {
    if (
      seconds <=
      localStorage[playerFirstName.value + " " + playerLastName.value]
    ) {
      localStorage.setItem(
        playerFirstName.value + " " + playerLastName.value,
        seconds
      );
    }
  } else {
    localStorage.setItem(
      playerFirstName.value + " " + playerLastName.value,
      seconds
    );
  }
  toInnitial();
  tableRowAdd();
}

function timer() {
  seconds++;
  timerString.innerHTML = parseTimer(seconds);
}

function parseTimer(seconds) {
  let ss = seconds % 60;
  let mm = Math.floor(seconds / 60) % 60;
  let hh = Math.floor(seconds / 3600);
  ss = ss < 10 ? "0" + ss : ss;
  mm = mm < 10 ? "0" + mm : mm;
  hh = hh < 10 ? "0" + hh : hh;
  return hh + ":" + mm + ":" + ss;
}

function toInnitial() {
  backImgClassArr = [
    "back-card-img-1",
    "back-card-img-1",
    "back-card-img-2",
    "back-card-img-2",
    "back-card-img-3",
    "back-card-img-3",
    "back-card-img-4",
    "back-card-img-4",
    "back-card-img-5",
    "back-card-img-5",
    "back-card-img-6",
    "back-card-img-6",
    "back-card-img-7",
    "back-card-img-7",
    "back-card-img-8",
    "back-card-img-8",
    "back-card-img-9",
    "back-card-img-9",
    "back-card-img-10",
    "back-card-img-10",
    "back-card-img-11",
    "back-card-img-11",
    "back-card-img-12",
    "back-card-img-12"
  ];
  clearInterval(startTimer, 0);
  startTimer = null;
  seconds = 0;
  cardNumber = 0;
  hiddenCardNumber = 0;
  shirtCardImage = "";
  gameFild.innerHTML = "";
}

function gameProfileFormValidation() {
  if (cardNumber === 0) {
    levelButtonContent.classList.add("level-card-dropdown-content-display");
  }
  if (shirtCardImage === "") {
    shirtButtonDropdownContent.classList.add(
      "shirt-cards-dropdown-content-display"
    );
  }
  if (cardNumber !== 0 && shirtCardImage !== "") {
    newGameCreate();
  }
}

function newGameCreate() {
  gamePage.style.display = "block";
  playerProfilePage.style.display = "none";
  gameScorePage.style.display = "none";
  divTimer.style.display = "flex";
  playerFullNameDiv.innerHTML =
    playerFirstName.value + " " + playerLastName.value;
  for (let i = 0; i < cardNumber; i++) {
    gameCardCreate();
  }
  startTimer = setInterval(timer, 1000);
}
