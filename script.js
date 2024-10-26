//Declare variables
const form = document.getElementById("form");
const inputDate = document.getElementById("f-date");
const btnSubmit = document.getElementById("f-btn-submit");
const output = document.getElementById("output");

//Initialize the calendar
const today = new Date();
console.log(today);
const year = today.getFullYear();
const month = (today.getMonth() + 1) > 9 ? today.getMonth() + 1 : "0" + today.getMonth() + 1;
const day = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
inputDate.setAttribute("min", `${year}-${month}-${day}`);
inputDate.valueAsDate = today;

const setTimer = () => {

    //Vacations date
    const countDownDate = new Date("2025-03-17").getTime();
    
    // Update the count down every 1 second
    let x = setInterval(function(){

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        output.innerHTML = `<p class="text">Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para irnos!</p>`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("output").innerHTML = "EXPIRED";
        }
    }, 1000);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

btnSubmit.addEventListener("click", (e) => {
    console.log(inputDate.value)
    setTimer(inputDate.value);
})