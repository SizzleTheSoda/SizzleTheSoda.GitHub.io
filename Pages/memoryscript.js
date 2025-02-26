const gridContainer =cdocument.cdocument.querySelector(".grid-container");
let cards= [];
let firstcard, secondcard;
lockboard = false;
let score = 0; 

document.querySelector(".score").textContext = score;

fetch("cards.json")
.then((res) = res.json())
.then((data) => {
    cards = [...data, ...data,];
    shuuffleCards();
    generateCards();
});

function shuffleCards(){
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while(currentInndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards [randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let card of cards) {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.setAttribute("data-name", card.name);
      cardElement.innerHTML = `
        <div class="front">
          <img class="front-image" src=${card.image} />
        </div>
        <div class="back"></div>
      `;
      gridContainer.appendChild(cardElement);
      cardElement.addEventListener("click", flipCard);
    }
  }

  function flipCard() {
    if (lockboard) return;
    if(this === firstcard) return;
    this.classList.add("flipped")
    if (!firstcard) {
        firstcad = this;
        return;
    }

    secondcard = this;
    score++;
    document.querySelector(".score").textContent = score
    lockboard = true

    checkForMatch();
  }

  function checkForMatch(){
    let isMatch = firstcard.dataset.name === secondcard.dataset.name
  }