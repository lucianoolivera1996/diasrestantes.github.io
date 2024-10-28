//Declare variables
const form = document.getElementById("form");
const inputDate = document.getElementById("f-date");
const btnSubmit = document.getElementById("f-btn-submit");
const output = document.getElementById("output");
const outputText = document.getElementById("output-text");
const outputImg = document.getElementById("output-img");

//Global variables for posterior use
let distance;
let timer;
let time;

//Initialize the calendar
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1) > 9 ? today.getMonth() + 1 : "0" + today.getMonth() + 1;
const day = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
inputDate.setAttribute("min", `${year}-${month}-${day}`);
inputDate.setAttribute("max", "2025-03-17");
inputDate.valueAsDate = today;

// Vacations date
const countDownDate = new Date("2025-03-17").getTime();

const images = [
    "./img/1.png", 
    "./img/2.png", 
    "./img/3.png", 
    "./img/4.png", 
    "./img/5.png", 
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
    "./img/10.png"];

//AUDIO SETTINGS
const audio = new Audio();
audio.src = "./sounds/magalenha-sergio-mendes.mp3";

//'#t='
// audio.autoplay = true;

//FM to start timer
const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(calculateSeconds, 1000);
}

// Update the count down every 1 second
const calculateSeconds = () => {
    output.style.display = "block"

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    distance = countDownDate - now;

    if (time > 0) {
        distance -= time;
    }

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // console.log(days, hours, minutes, seconds);

    // Display the result in the element with id="demo"
    outputText.innerHTML = `<p class="text">Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para irnos!</p>`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("output").innerHTML = `<p class="text">¡¡¡¡NOS FUIMOSSSS!!!!</p>`;
    }
}

const displayImages = () => {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (distance < 0) {
        output.innerHTML += `<video class="video" src="./img/jeje.mp4" width="200" height="100" muted autoplay loop></video>`;
    }

    if (days > 99) {
        outputImg.innerHTML = `<img class="img" src="${images[9]}" />`
    } else if (days > 89 ) {
        outputImg.innerHTML = `<img class="img" src="${images[8]}" />`
    } else if (days > 79 ) {
        outputImg.innerHTML = `<img class="img" src="${images[7]}" />`
    } else if (days > 69 ) {
        outputImg.innerHTML = `<img class="img" src="${images[6]}" />`
    } else if (days > 59 ) {
        outputImg.innerHTML = `<img class="img" src="${images[5]}" />`
    } else if (days > 49 ) {
        outputImg.innerHTML = `<img class="img" src="${images[4]}" />`
    } else if (days > 39 ) {
        outputImg.innerHTML = `<img class="img" src="${images[3]}" />`
    } else if (days > 29 ) {
        outputImg.innerHTML = `<img class="img" src="${images[2]}" />`
    } else if (days > 19 ) {
        outputImg.innerHTML = `<img class="img" src="${images[1]}" />`
    } else if (days > 0 && days < 20 ) {
        outputImg.innerHTML = `<img class="img" src="${images[0]}" />`
    }
}

const changeAudio = () => {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (distance < 0) {
        audio.src = "./sounds/magalenha-sergio-mendes.mp3";
        audio.play();
        audio.autoplay = true;
        return;
    }

    if (days > 99) {
        audio.src = "./sounds/mr-increible10.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 89 ) {
        audio.src = "./sounds/mr-increible9.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 79 ) {
        audio.src = "./sounds/mr-increible8.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 69 ) {
        audio.src = "./sounds/mr-increible7.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 59 ) {
        audio.src = "./sounds/mr-increible6.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 49 ) {
        audio.src = "./sounds/mr-increible5.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 39 ) {
        audio.src = "./sounds/mr-increible4.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 29 ) {
        audio.src = "./sounds/mr-increible3.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 19 ) {
        audio.src = "./sounds/mr-increible2.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    } else if (days > 0 && days < 20 ) {
        audio.src = "./sounds/mr-increible1.mp3";
        audio.setAttribute("loop", "");
        audio.setAttribute("autoplay", "");
        audio.play();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

btnSubmit.addEventListener("click", (e) => {
    time = new Date(inputDate.value).getTime() - today.getTime();
    startTimer();
    setTimeout(() => {
        changeAudio();
        displayImages();
    }, 1000)
});

audio.addEventListener("ended", () => {
    console.log("TEST");
})