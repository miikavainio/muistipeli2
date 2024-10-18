const cards = document.querySelectorAll(".memory-card");
const congratsMessage = document.getElementById("congratsMessage");
const nextLevelButton = document.getElementById("nextLevelButton");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
let totalPairs = 3; // Initially 4 pairs
let currentRound = 1; // Track current round

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if (isMatch) {
    disableCards();
    matchedPairs++;
    if (matchedPairs === totalPairs) {
      setTimeout(() => {
        // Show congratulations message and the next level button
        congratsMessage.style.display = "block";
        nextLevelButton.style.display = "block";
        
        // Trigger confetti rain
        confetti({
          particleCount: 200,
          spread: 150,
          origin: { y: 0.6 }
        });
      }, 400);
    }
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  const cards = document.querySelectorAll(".memory-card");
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}


// Function to reset for the harder level with more pairs
function startNextLevel() {
  matchedPairs = 0;
  currentRound++;
  congratsMessage.style.display = "none";
  nextLevelButton.style.display = "none";

  const memoryGame = document.querySelector('.memory-game');
  if (currentRound === 2) {
    totalPairs = 4;
    memoryGame.style.gridTemplateColumns = "repeat(4, 1fr)";
    memoryGame.innerHTML = `
    <div class="memory-card" data-framework="astro">
      <img class="front-face" src="img/astro.jpg" alt="astro" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="astro">
      <img class="front-face" src="img/astro.jpg" alt="astro" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="tahti">
      <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="tahti">
      <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="kuu">
      <img class="front-face" src="img/kuu2.jpg" alt="kuu" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="kuu">
      <img class="front-face" src="img/kuu2.jpg" alt="kuu" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="raketti">
      <img class="front-face" src="img/raketti.jpg" alt="raketti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="raketti">
      <img class="front-face" src="img/raketti.jpg" alt="raketti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
  `;

    } else if (currentRound === 3) {
    totalPairs = 5;
    memoryGame.style.gridTemplateColumns = "repeat(4, 1fr)";
    memoryGame.innerHTML = `
    <div class="memory-card" data-framework="tahti">
      <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="tahti">
      <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="kuu">
      <img class="front-face" src="img/kuu2.jpg" alt="kuu" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="kuu">
      <img class="front-face" src="img/kuu2.jpg" alt="kuu" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="sun">
      <img class="front-face" src="img/sun.jpg" alt="sun" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="sun">
      <img class="front-face" src="img/sun.jpg" alt="sun" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="maapallo">
      <img class="front-face" src="img/maapallo.jpg" alt="maapallo" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="maapallo">
      <img class="front-face" src="img/maapallo.jpg" alt="maapallo" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="raketti">
      <img class="front-face" src="img/raketti.jpg" alt="raketti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="raketti">
      <img class="front-face" src="img/raketti.jpg" alt="raketti" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
  `;

} else if (currentRound === 4) {
  totalPairs = 6;
  memoryGame.style.gridTemplateColumns = "repeat(4, 1fr)";
  memoryGame.innerHTML = `

  <div class="memory-card" data-framework="tahti">
    <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="tahti">
    <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="back">
    <img class="front-face" src="img/back.jpg" alt="back" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="back">
    <img class="front-face" src="img/back.jpg" alt="back" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="sun">
    <img class="front-face" src="img/sun.jpg" alt="sun" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="sun">
    <img class="front-face" src="img/sun.jpg" alt="sun" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="maapallo">
    <img class="front-face" src="img/maapallo.jpg" alt="maapallo" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="maapallo">
    <img class="front-face" src="img/maapallo.jpg" alt="maapallo" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="raketti">
    <img class="front-face" src="img/raketti.jpg" alt="raketti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="raketti">
    <img class="front-face" src="img/raketti.jpg" alt="raketti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="mars">
    <img class="front-face" src="img/mars.jpg" alt="mars" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="mars">
    <img class="front-face" src="img/mars.jpg" alt="mars" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
`;


} else if (currentRound === 5) {
  totalPairs = 7;
  memoryGame.style.gridTemplateColumns = "repeat(5, 1fr)";
  memoryGame.innerHTML = `

  <div class="memory-card" data-framework="tahti">
    <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="tahti">
    <img class="front-face" src="img/tahti2.jpg" alt="tahti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="back">
    <img class="front-face" src="img/back.jpg" alt="back" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="back">
    <img class="front-face" src="img/back.jpg" alt="back" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="sun">
    <img class="front-face" src="img/sun.jpg" alt="sun" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="sun">
    <img class="front-face" src="img/sun.jpg" alt="sun" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="maapallo">
    <img class="front-face" src="img/maapallo.jpg" alt="maapallo" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="maapallo">
    <img class="front-face" src="img/maapallo.jpg" alt="maapallo" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="raketti">
    <img class="front-face" src="img/raketti.jpg" alt="raketti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="raketti">
    <img class="front-face" src="img/raketti.jpg" alt="raketti" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="mars">
    <img class="front-face" src="img/mars.jpg" alt="mars" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
  <div class="memory-card" data-framework="mars">
    <img class="front-face" src="img/mars.jpg" alt="mars" />
    <img class="back-face" src="img/kys.jpg" alt="kysymys" />
  </div>
    <div class="memory-card" data-framework="kuu">
      <img class="front-face" src="img/kuu2.jpg" alt="kuu" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
    <div class="memory-card" data-framework="kuu">
      <img class="front-face" src="img/kuu2.jpg" alt="kuu" />
      <img class="back-face" src="img/kys.jpg" alt="kysymys" />
    </div>
`;
  }
  
  const newCards = document.querySelectorAll(".memory-card");
  newCards.forEach((card) => card.addEventListener("click", flipCard));
  shuffle();
}

shuffle();

cards.forEach((card) => card.addEventListener("click", flipCard));
nextLevelButton.addEventListener("click", startNextLevel);
