let greetingFirstNameInput = document.getElementById('greetingFirstName');

let greetingLastNameInput = document.getElementById('greetingLastName');

let fullNameGreeting = document.querySelector('.player_full_name_greeting');

let playerProfileButton = document.querySelector('.player_profile_register_button');

let gameGreeting = document.querySelector('.game_greeting_and_player_profile');

let gameRules = document.querySelector('.player_greeting_and_game_rules');

function getFullName() {
    gameGreeting.style.display = 'none';
    gameRules.style.display = 'block';
    fullNameGreeting.innerHTML = "Hello" + " " + greetingFirstNameInput.value + " " + greetingLastNameInput.value + "!";
}

playerProfileButton.addEventListener('click', getFullName)




let shirtOptionsButton = document.querySelector('#shirt_cards_button');

let shirtButtonDropdownContent = document.querySelector('.shirt_cards_button_content')

let shirtCardsImg = document.querySelectorAll('.shirt_cards_img');

// let yodaImg = document.querySelector('.yoda_img');

shirtOptionsButton.addEventListener('click', () => {
    // yodaImg.style.display = 'none';
    shirtButtonDropdownContent.style.display = 'block';
});

function shirtButtonsOptions() {
    shirtButtonDropdownContent.style.display = 'none';
    // yodaImg.style.display = 'block';
}

shirtCardsImg.forEach(img => img.addEventListener('click', shirtButtonsOptions));