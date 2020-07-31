var body = document.getElementById("gradient");
var button = document.querySelector("button");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");

color1.setAttribute("value", "#2193b0");
color2.setAttribute("value", "#6dd5ed");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function defaultColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function generateRandomColor() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

button.addEventListener('click', function() {
    generateRandomColor();
});

body.addEventListener("onload", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);