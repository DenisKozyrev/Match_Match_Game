let greetingFirstNameInput = document.getElementById('greeting_first_name');

let greetingLastNameInput = document.getElementById('greeting_last_name');

let fullNameGreeting = document.querySelector('.player_full_name_greeting');

let playerProfileButton = document.querySelector('.player_profile_button');

let gameGreeting = document.querySelector('.game_greeting_and_player_profile');
let gameRules = document.querySelector('.player_greeting_and_game_rules');

function getFullName() {
    // gameGreeting.style.display = 'none';
    // gameRules.style.display = 'block';
    fullNameGreeting.innerHTML = "Hello" + " " + greetingFirstNameInput.value + " " + greetingLastNameInput.value + "!";
}

playerProfileButton.addEventListener('click', getFullName)