window.addEventListener('load', main);
let chooseLevel = document.querySelector('#chooseLevel');
let displayWord = document.querySelector('.displayWord');

let timeLeft = document.querySelector('.timeLeft');
let scorePlusPlus = document.querySelector('.scorePlusPlus');
let inputLetters = document.querySelector('#inputLetters');

let arrayText = [
    "Bald Eagle",
    'Peacock',
    'Swallow',
    'Rooster',
    'Penguin',
    'Nightingale',
    'Pigeon',
    'Owl',
    'Duck',
    'Hawk',
];

let time = 20;
let score = 0;
let timePlus = 30;
let timeDown;

chooseLevel.addEventListener('change', () => {
    if(chooseLevel.value === "easy") timePlus = 30;
    if(chooseLevel.value === "medium") timePlus = 20;
    if(chooseLevel.value === "difficult") timePlus = 10;
});

function word() {
    return arrayText[Math.floor(Math.random() * arrayText.length)];
}

function displayChater(){
    displayWord.innerHTML = word();
}

function scorePlus(){
    ++score;
    scorePlusPlus.innerHTML = score;
}

function timeGame(){
    --time;
    timeLeft.innerHTML = time;
    
    if(time === 0){
        clearInterval(timeDown);
    }

}

inputLetters.addEventListener("focus", ()=>{
    timeDown = setInterval(timeGame, 1000);
})

inputLetters.addEventListener("input", ()=>{
    let text = displayWord.textContent;
    if(inputLetters.value === text){
        inputLetters.value = "";
        scorePlus();
        displayChater();
        time += timePlus;
        timeGame();
    }
})

function main() {
    window.addEventListener('keydown', keyColor);
    // console.log(word());
    displayChater();
}

function keyColor(e){
    let key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (key) {
        key.style.setProperty('background-color', '#e2b714');

        setTimeout(() => {
            key.style.removeProperty('background-color');
        }, 125)
    }
}

