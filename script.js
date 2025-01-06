let button = document.getElementById("button");
let quote = document.getElementById("quote");


let messages = [
    "\"It takes courage to grow up and become who you really are.\" <br><h3>- E.E. Cummings</h3>",
    "\"Your self-worth is determined by you. You don't have to depend on someone telling you who you are.\" <br><h3>- Beyoncé</h3>",
    "\"Keep your face always toward the sunshine, and shadows will fall behind you.\" <br><h3>- Walt Whitman</h3>"
            ];

function generateMessage(){
    let index = Math.floor(Math.random() * messages.length);
    quote.innerHTML = messages[index];
    quote.style.display = "block";
}

button.addEventListener("click", generateMessage);