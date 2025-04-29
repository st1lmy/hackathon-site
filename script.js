const cards = [
    { front1: '<img src = "src/france.jpg">', back1: 'France ' },
    { front1: '<img src = "src/jpn.png">', back1: 'Japan ' },
    { front1: '<img src = "src/italy.png">', back1: 'Italy ' },
    { front1: '<img src = "src/uk.png">', back1: 'UK' },
    { front1: '<img src = "src/">', back1: 'Japan — Tokyo' },
    { front1: '<img src = "src/">', back1: 'Japan — Tokyo' },
    { front1: '<img src = "src/">', back1: 'Japan — Tokyo' },
  ];



    const cards2 = [
    { front2: '<img src = "src/france.jpg">', back2: 'France ' },
    { front2: '<img src = "src/jpn.png">', back2: 'Japan ' },
    { front2: '<img src = "src/italy.png">', back2: 'Italy ' },
    { front2: '<img src = "src/uk.png">', back2: 'UK' },
    { front2: '<img src = "src/">', back2: 'Japan — Tokyo' },
    { front2: '<img src = "src/">', back2: 'Japan — Tokyo' },
    { front2: '<img src = "src/">', back2: 'Japan — Tokyo' },
  ];


    const cards3 = [
    { front3: '<img src = "src/france.jpg">', back3: 'France ' },
    { front3: '<img src = "src/jpn.png">', back3: 'Japan ' },
    { front3: '<img src = "src/italy.png">', back3: 'Italy ' },
    { front3: '<img src = "src/uk.png">', back3: 'UK' },
    { front3: '<img src = "src/">', back3: 'Japan — Tokyo' },
    { front3: '<img src = "src/">', back3: 'Japan — Tokyo' },
    { front3: '<img src = "src/">', back3: 'Japan — Tokyo' },
  ];

  let currentIndex = 0;
  
  function flipCard() {
    document.getElementById('card1').classList.toggle('flip');
  }
  
  function playAudio() {
    const sound = document.getElementById('sound1');
    sound.currentTime = 0;
    sound.play();
  }
  // CARD1
  function flipCardAndPlay1() {
    flipCard();
    playAudio();
  }

  function nextCard1() {
    currentIndex = (currentIndex + 1) % cards.length;
    document.getElementById('front1').innerHTML = cards[currentIndex].front1;
    document.getElementById('back1').innerHTML = cards[currentIndex].back1;
    document.getElementById('card1').classList.remove('flip');
  }



  function previousCard1() {
    currentIndex = (currentIndex - 1) % cards.length;
    document.getElementById('back1').innerHTML = cards[currentIndex].back1;
    document.getElementById('front1').innerHTML = cards[currentIndex].front1;
    document.getElementById('card1').classList.remove('flip');
  }

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





// CARD2
function flipCardAndPlay2() {
    flipCard();
    playAudio();
  }

  function nextCard2() {
    currentIndex = (currentIndex + 1) % cards2.length;
    document.getElementById('front2').innerHTML = cards2[currentIndex].front2;
    document.getElementById('back2').innerHTML = cards2[currentIndex].back2;
    document.getElementById('card2').classList.remove('flip');
  }



  function previousCard2() {
    currentIndex = (currentIndex - 1) % cards2.length;
    document.getElementById('back2').innerHTML = cards2[currentIndex].back2;
    document.getElementById('front2').innerHTML = cards2[currentIndex].front2;
    document.getElementById('card2').classList.remove('flip');
  }

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





// CARD3
function flipCardAndPlay3() {
  flipCard();
  playAudio();
}

function nextCard3() {
  currentIndex = (currentIndex + 1) % cards3.length;
  document.getElementById('front3').innerHTML = cards3[currentIndex].front3;
  document.getElementById('back3').innerHTML = cards3[currentIndex].back3;
  document.getElementById('card3').classList.remove('flip');
}



function previousCard3() {
  currentIndex = (currentIndex - 1) % cards3.length;
  document.getElementById('back3').innerHTML = cards3[currentIndex].back3;
  document.getElementById('front3').innerHTML = cards3[currentIndex].front3;
  document.getElementById('card3').classList.remove('flip');
}

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











