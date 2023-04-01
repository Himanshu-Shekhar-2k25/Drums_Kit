for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
    })
}

function playSound(value) {
    let sound = new Audio();

    if (value == 'W') {
        sound = new Audio("Sounds/crash.mp3");
    }
    else if (value == 'A') {
        sound = new Audio("Sounds/kick-bass.mp3");

    }
    else if (value == 'S') {
        sound = new Audio("Sounds/snare.mp3");

    }
    else if (value == 'D') {
        sound = new Audio("Sounds/tom-1.mp3");

    }
    else if (value == 'J') {
        sound = new Audio("Sounds/tom-2.mp3");

    }
    else if (value == 'K') {
        sound = new Audio("Sounds/tom-3.mp3");

    }
    else if (value == 'L') {
        sound = new Audio("Sounds/tom-4.mp3");

    }
    sound.play();
}


document.addEventListener("keydown", function (event)
{
    let sound;
    if (event.key == 'w') {
        sound = new Audio("Sounds/crash.mp3");
    }
    else if (event.key == 'a') {
        sound = new Audio("Sounds/kick-bass.mp3");

    }
    else if (event.key == 's') {
        sound = new Audio("Sounds/snare.mp3");

    }
    else if (event.key == 'd') {
        sound = new Audio("Sounds/tom-1.mp3");

    }
    else if (event.key == 'j') {
        sound = new Audio("Sounds/tom-2.mp3");

    }
    else if (event.key == 'k') {
        sound = new Audio("Sounds/tom-3.mp3");

    }
    else if (event.key == 'l') {
        sound = new Audio("Sounds/tom-4.mp3");

    }
    sound.play();
    console.log(event.key);
})