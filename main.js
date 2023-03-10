let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let letters = document.querySelector(".letters");
for (let i = 0; i < alpha.length; i++) {
  let span = document.createElement("span");
  let letter = document.createTextNode(alpha[i].toUpperCase());
  span.appendChild(letter);
  span.className = "letter-box";
  letters.appendChild(span);
}
// object of words
const words = {
  programmig: ["html", "css", "javascript", "php", "python"],
  movies: [
    "game of thrones",
    "squid game",
    "the hunger games",
    "mission impossible",
  ],
  people: ["Albert Einstein", "cleopatra", "alexander", "Christopher Columbus"],
  countries: ["egypt", "lebanon", "canada", "ghana", "thailand"],
};
//Get ranom word
let allkeys = Object.keys(words);
let randomNum = Math.floor(Math.random() * allkeys.length);
let randomName = allkeys[randomNum];
let randomValue = words[randomName];
let randomValueNum = Math.floor(Math.random() * randomValue.length);
let randomWord = randomValue[randomValueNum];
console.log(randomWord);

document.querySelector(".game-info .category span").innerHTML = randomName;

//letter guess
let letterGuessContainer = document.querySelector(".letters-guess");
let wordGuess = Array.from(randomWord);

wordGuess.forEach((letter) => {
  let span = document.createElement("span");
  if (letter === " ") {
    span.className = "with-space";
  }
  // span.innerHTML=letter.toUpperCase();
  letterGuessContainer.appendChild(span);
});

//select guess span
let GuessSpans = document.querySelectorAll(".letters-guess span");
//wrong attempts
let Wrong = 0;
let succes = 0;

let TheDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let TheStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theClickLetter = e.target.innerHTML;

    wordGuess.forEach((WordLetter, WordIndex) => {
      if (theClickLetter.toUpperCase() == WordLetter.toUpperCase()) {
        succes++;

        TheStatus = true;

        GuessSpans.forEach((Span, SpanIndex) => {
          if (SpanIndex == WordIndex) {
            Span.innerHTML = WordLetter.toUpperCase();
          }
        });
        if (succes === wordGuess.length) {
          winner();
        }
      }
    });

    //Outside Loop
    //if letter is wrong
    if (TheStatus !== true) {
      Wrong++;
      TheDraw.classList.add(`wrong-${Wrong}`);
      if (Wrong === 6) {
        endGame();
        letters.classList.add("finished");
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `GAME OVER !! THE WORD IS "${randomWord.toUpperCase()}"`
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}

function winner() {
  let div = document.createElement("div");
  let divText = document.createTextNode(`GOOD JOB !! YOU WIN`);
  div.appendChild(divText);
  div.className = "winner";
  document.body.appendChild(div);
}
