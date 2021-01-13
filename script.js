let screen = [];

let ballPosition = 600;

let directionY = "down";
let directionX = "right";

let bouncyBall = () => {
    if (directionY === "down" && directionX === "right") {
        screen[ballPosition] = 0;
        ballPosition += 31;
        screen[ballPosition] = 1;
        if (ballPosition + 31 > 900) {
            directionY = "up";
        }
    }
    else if (directionY === "up" && directionX === "right") {
        screen[ballPosition] = 0;
        ballPosition -= 29;
        screen[ballPosition] = 1;
        let modulator = ballPosition + 1;
        if (modulator % 30 === 0) {
            directionX = "left";
        }
    } else if (directionY === "up" && directionX === "left") {
        screen[ballPosition] = 0;
        ballPosition -= 31;
        screen[ballPosition] = 1;
        if (ballPosition - 30 < 0) {
            directionX = "left";
            directionY = "down";
        }
    } else if (directionX === "left" && directionY === "down") {
        screen[ballPosition] = 0;
        ballPosition += 29;
        screen[ballPosition] = 1;
        if (ballPosition % 30 === 0) {
            directionX = "right";
        }
    }

    render();
}


let randomiser = () => {
    for (i = 0; i < screen.length; i++) {
        let randomInt = Math.floor(Math.random() * 10);
        if (randomInt > 6) {
            screen[i] = 1;
        }
    }
}

let gameInit = () => {
    let gamespace = document.getElementById("gamearea");
    for (i = 0; i < 900; i++) {
        let divMake = document.createElement("div");
        divMake.setAttribute("class", "gridSquare");
        divMake.setAttribute("id", "pix" + i);
        gamespace.appendChild(divMake);
        //every 30 loops create a new array
        let j = 0;
        let k = 0;
        screen.push(0);
    }
}

let render = () => {
    for (i = 0; i < screen.length; i++) {
        let pixel = document.getElementById("pix" + i);
        if (screen[i] === 0) {
            pixel.style.backgroundColor = "green";
        } else if (screen[i] === 1) {
            pixel.style.backgroundColor = "black";
        }
    }
}

gameInit();
// randomiser();
// bouncyBall();
// render();
setInterval(bouncyBall, 40)

console.log(screen);





// For each row (x) create a new array
// Push each (x) array onto the master array (y)
// Each array entry or 'pixel' = 0 by default to represent 'pixel state off'
// If a single entry is changed, immediately trigger / update respective HTML background-colour to reflect this
// 