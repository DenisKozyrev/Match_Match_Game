class Card {
    constructor() {
        this.gameCard = document.createElement('div');
        this.gameCard.setAttribute('id', 'gameCard');
        this.gameCard.classList.add('flip-container');
        this.flipper = document.createElement('div');
        this.flipper.setAttribute('id', 'flipper');
        this.flipper.classList.add('flipper');
        this.gameCard.append(this.flipper);
        this.front = document.createElement('div');
        this.front.classList.add('front');
        this.flipper.appendChild(this.front);
        this.back = document.createElement('div');
        this.back.setAttribute('id', 'back');
        this.back.classList.add('back');
        this.back.classList.add('back-position');
        this.flipper.appendChild(this.back);
    }
}