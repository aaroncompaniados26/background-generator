(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
