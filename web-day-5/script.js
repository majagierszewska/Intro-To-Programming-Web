
let tom1 = document.getElementById("tom1");
tom1.addEventListener('click', playTom1);

function playTom1() {
    let sound = new Audio("sounds/tom-1.mp3");
    sound.play();
}


let tom2 = document.getElementById("tom2");
tom2.addEventListener('click', playTom2);

function playTom2() {
    let sound = new Audio("sounds/tom-2.mp3");
    sound.play();
}


let tom3 = document.getElementById("tom3");
tom3.addEventListener('click', playTom3);

function playTom3() {
    let sound = new Audio("sounds/tom-3.mp3");
    sound.play();
}


let tom4 = document.getElementById("tom4");
tom4.addEventListener('click', playTom4);

function playTom4() {
    let sound = new Audio("sounds/tom-4.mp3");
    sound.play();
}


let snare = document.getElementById("snare");
snare.addEventListener('click', playSnare);

function playSnare() {
    let sound = new Audio("sounds/snare.mp3");
    sound.play();
}

let kick = document.getElementById("kick");
kick.addEventListener('click', playKick);

function playKick() {
    let sound = new Audio("sounds/kick-bass.mp3");
    sound.play();
}


let crash = document.getElementById("crash");
crash.addEventListener('click', playCrash);

function playCrash() {
    let sound = new Audio("sounds/crash.mp3");
    sound.play();
}