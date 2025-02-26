const gridContainer =cdocument.cdocument.querySelector(".grid-container");
let cards= [];
let firstcard, secondcard;
lockboard = false;
let score = 0; 

document.querySelector(".score").textContext = score;

fetch("cards.json")
