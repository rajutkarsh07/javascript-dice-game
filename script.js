"use strict";

const player0ele = document.querySelector(".player--0");
const player1ele = document.querySelector(".player--1");
const score0ele = document.querySelector("#score--0");
const score1ele = document.querySelector("#score--1");
const current0ele = document.querySelector("#current--0");
const current1ele = document.querySelector("#current--1");

const diceele = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentscore = 0;
let currentPlayer = 0;
let score = [0, 0];
let playing = true;

const changeplayer = function () {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0ele.classList.toggle("player--active");
  player1ele.classList.toggle("player--active");
};

score0ele.textContent = 0;
score1ele.textContent = 0;

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceele.classList.remove("hidden");
    diceele.src = `img/dice-${dice}.png`;

    if (dice != 1) {
      currentscore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentscore;
      console.log(currentscore);
    }
    if (dice === 1) {
      currentscore = 0;
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      changeplayer();
      console.log("curernt player is" + currentPlayer);
    }
  }
});

console.log(currentscore);

btnHold.addEventListener("click", function () {
  if (playing) {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;

    changeplayer();

    console.log("curernt player is" + currentPlayer);

    score[currentPlayer] += currentscore;
    console.log("score is" + score[currentPlayer]);

    currentscore = 0;

    if (currentPlayer === 1) {
      score0ele.textContent = score[currentPlayer];
    }
    if (currentPlayer === 0) {
      score1ele.textContent = score[currentPlayer];
    }

    if (score[0] >= 50) {
      player1ele.classList.add("player--winner");
      btnNew.classList.add("btn--win");
      playing = false;
      // document.getElementById(`player--${currentPlayer}`).classList.add("player--winner");
    }
    if (score[1] >= 50) {
      player0ele.classList.add("player--winner");
      btnNew.classList.add("btn--win");
      playing = false;
    }
  }
});

btnNew.addEventListener("click", function () {
  btnNew.classList.remove("btn--win");
  diceele.classList.add("hidden");

  playing = true;
  score = [0, 0];
  let currentscore = 0;
  let currentPlayer = 1;

  player0ele.classList.remove("player--winner");
  player1ele.classList.remove("player--winner");

  score0ele.textContent = 0;
  score1ele.textContent = 0;

  current0ele.textContent = 0;
  current1ele.textContent = 0;
});
