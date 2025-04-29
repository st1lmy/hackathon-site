// Карточки для трёх разделов
const cards = [
  { front1: '<img src="america/france.jpg">', back1: 'France' },
  { front1: '<img src="america/jpn.png">', back1: 'Japan' },
  { front1: '<img src="america/italy.png">', back1: 'Italy' },
  { front1: '<img src="america/uk.png">', back1: 'UK' },
  { front1: '<img src="america/japan_tokyo.jpg">', back1: 'Japan — Tokyo' },
  { front1: '<img src="america/japan_tokyo.jpg">', back1: 'Japan — Tokyo' },
  { front1: '<img src="america/japan_tokyo.jpg">', back1: 'Japan — Tokyo' },
];

const cards2 = [
  { front2: '<img src="eurasia/france.jpg">', back2: 'France' },
  { front2: '<img src="eurasia/jpn.png">', back2: 'Japan' },
  { front2: '<img src="eurasia/italy.png">', back2: 'Italy' },
  { front2: '<img src="eurasia/uk.png">', back2: 'UK' },
  { front2: '<img src="eurasia/azerbaijan.jpg">', back2: 'Azerbaijan' },
  { front2: '<img src="eurasia/japan_tokyo.jpg">', back2: 'Japan — Tokyo' },
  { front2: '<img src="eurasia/japan_tokyo.jpg">', back2: 'Japan — Tokyo' },
];

const cards3 = [
  { front3: '<img src="africa/france.jpg">', back3: 'France' },
  { front3: '<img src="africa/jpn.png">', back3: 'Japan' },
  { front3: '<img src="africa/italy.png">', back3: 'Italy' },
  { front3: '<img src="africa/uk.png">', back3: 'UK' },
  { front3: '<img src="africa/japan_tokyo.jpg">', back3: 'Japan — Tokyo' },
  { front3: '<img src="africa/japan_tokyo.jpg">', back3: 'Japan — Tokyo' },
  { front3: '<img src="africa/japan_tokyo.jpg">', back3: 'Japan — Tokyo' },
];

// Индексы карточек
let currentIndex1 = 0;
let currentIndex2 = 0; // <-- ИСПРАВЛЕНО: было "let 2 = 0;"
let currentIndex3 = 0; // <-- ИСПРАВЛЕНО: было "let 3 = 0;"

// CARD 1
let isFlipped1 = false;

function flipCardAndPlay1() {
  const card = document.getElementById('card1');
  const sound = document.getElementById('sound1');

  if (!isFlipped1) {
    card.classList.add('flip');
    sound.currentTime = 0;
    sound.play();
    isFlipped1 = true;
  } else {
    card.classList.remove('flip');
    isFlipped1 = false;
  }
}

function nextCard1() {
  currentIndex1 = (currentIndex1 + 1) % cards.length;
  document.getElementById('front1').innerHTML = cards[currentIndex1].front1;
  document.getElementById('back1').innerHTML = cards[currentIndex1].back1;
  document.getElementById('card1').classList.remove('flip');
  isFlipped1 = false;
}

function previousCard1() {
  currentIndex1 = (currentIndex1 - 1 + cards.length) % cards.length; // <-- исправление для отрицательного значения
  document.getElementById('front1').innerHTML = cards[currentIndex1].front1;
  document.getElementById('back1').innerHTML = cards[currentIndex1].back1;
  document.getElementById('card1').classList.remove('flip');
  isFlipped1 = false;
}

// CARD 2
let isFlipped2 = false;

function flipCardAndPlay2() {
  const card = document.getElementById('card2');
  const sound = document.getElementById('sound2');

  if (!isFlipped2) {
    card.classList.add('flip');
    sound.currentTime = 0;
    sound.play();
    isFlipped2 = true;
  } else {
    card.classList.remove('flip');
    isFlipped2 = false;
  }
}

function nextCard2() {
  currentIndex2 = (currentIndex2 + 1) % cards2.length;
  document.getElementById('front2').innerHTML = cards2[currentIndex2].front2;
  document.getElementById('back2').innerHTML = cards2[currentIndex2].back2;
  document.getElementById('card2').classList.remove('flip');
  isFlipped2 = false;
}

function previousCard2() {
  currentIndex2 = (currentIndex2 - 1 + cards2.length) % cards2.length;
  document.getElementById('front2').innerHTML = cards2[currentIndex2].front2;
  document.getElementById('back2').innerHTML = cards2[currentIndex2].back2;
  document.getElementById('card2').classList.remove('flip');
  isFlipped2 = false;
}

// CARD 3
let isFlipped3 = false;

function flipCardAndPlay3() {
  const card = document.getElementById('card3');
  const sound = document.getElementById('sound3');

  if (!isFlipped3) {
    card.classList.add('flip');
    sound.currentTime = 0;
    sound.play();
    isFlipped3 = true;
  } else {
    card.classList.remove('flip');
    isFlipped3 = false;
  }
}

function nextCard3() {
  currentIndex3 = (currentIndex3 + 1) % cards3.length;
  document.getElementById('front3').innerHTML = cards3[currentIndex3].front3;
  document.getElementById('back3').innerHTML = cards3[currentIndex3].back3;
  document.getElementById('card3').classList.remove('flip');
  isFlipped3 = false;
}

function previousCard3() {
  currentIndex3 = (currentIndex3 - 1 + cards3.length) % cards3.length;
  document.getElementById('front3').innerHTML = cards3[currentIndex3].front3;
  document.getElementById('back3').innerHTML = cards3[currentIndex3].back3;
  document.getElementById('card3').classList.remove('flip');
  isFlipped3 = false;
}
