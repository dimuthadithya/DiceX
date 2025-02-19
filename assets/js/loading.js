// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 9000,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: { width: '100%', height: '100%' },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: { color: '#FFEA82' },
  to: { color: '#ED6A5A' },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0); // Number from 0.0 to 1.0

setTimeout(() => {
  document.querySelector('.loading').classList.add('d-none');
}, 10000);

// player logic
const rollBtn = document.getElementById('roll-btn');
let playerOne = 0;
let playerTwo = 0;

const playerOneScoreEl = document.getElementById('player-1');
const playerTwoScoreEl = document.getElementById('player-2');
const diceContainer = document.querySelector('.dice-container');
const dices = diceContainer.querySelectorAll('div');
let currentPlayerPlayerOne = true;

updateScore();

rollBtn.addEventListener('click', () => {
  const number = Math.floor(Math.random() * 6) + 1;

  if (currentPlayerPlayerOne) {
    playerOne += number;
    updateScore();
  } else {
    playerTwo += number;
    updateScore();
  }

  if (number == 1) {
    currentPlayerPlayerOne = true;
  } else {
    currentPlayerPlayerOne = !currentPlayerPlayerOne;
  }

  dices.forEach((dice) => {
    dice.classList.add('d-none');
  });

  dices[number - 1].classList.remove('d-none');
});

function updateScore() {
  playerOneScoreEl.textContent = playerOne;
  playerTwoScoreEl.textContent = playerTwo;
}
