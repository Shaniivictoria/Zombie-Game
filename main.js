const gameFrame = document.querySelector("#gameFrame");
const button = document.querySelector(".button");

const zombies = document.createElement("zombie");
zombies.setAttribute("class", zombies);



const gameFrameHeight = gameFrame.offsetHeight;
const gameFrameWidth = gameFrame.offsetWidth;

setInterval(() => {
    const randTop = Math.random() * (contHeight - 100);
    const randLeft = Math.random() * (contWidth - 100);

    zombies.style.position = "absolute";
    zombies.style.top = randTop + "px";
    zombies.style.position = randLeft + "px";

}, 1000);


let score = 0;


button.addEventListener('click',() => {
gameFrame.appendChild(zombie);
});
