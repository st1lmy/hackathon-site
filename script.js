const cards = [
  { front1: '<img src="america/argentina.webp">', back1: 'Аргентина' },
  { front1: '<img src="america/bolivia.jpg">', back1: 'Боливия' },
  { front1: '<img src="america/brazil.png">', back1: 'Бразилия' },
  { front1: '<img src="america/canada.jpeg">', back1: 'Канада' },
  { front1: '<img src="america/chile.png">', back1: 'Чили' },
  { front1: '<img src="america/dominica.png">', back1: 'Доминика' },
  { front1: '<img src="america/ecuador.png">', back1: 'Эквадор' },
  { front1: '<img src="america/honduras.png">', back1: 'Гонудрас' },
  { front1: '<img src="america/Grenada.png">', back1: 'Гренада' },
  { front1: '<img src="america/mexico.png">', back1: 'Мексика' },
  { front1: '<img src="america/Paraguay.png">', back1: 'Парагвай' },
  { front1: '<img src="america/Peru.png">', back1: 'Перу' },
  { front1: '<img src="america/salvador.png">', back1: 'Сальвадор' },
  { front1: '<img src="america/usa.jpg">', back1: 'США' },
  { front1: '<img src="america/venezuela.jpg">', back1: 'Венесуэла' },
  { front1: '<img src="america/barbados.png">', back1: 'Барбадос' },
  { front1: '<img src="america/belize.png">', back1: 'Белиз' },
  { front1: '<img src="america/nicaragua.png">', back1: 'Никарагуа' },
  { front1: '<img src="america/suriname.png">', back1: 'Суринам' },
  { front1: '<img src="america/guatemala.png">', back1: 'Гватемала' },
];

const cards2 = [
  { front2: '<img src="eurasia/andorra.jpeg">', back2: 'Андора' },
  { front2: '<img src="eurasia/armenia.jpeg">', back2: 'Армения' },
  { front2: '<img src="eurasia/austria.jpeg">', back2: 'Австрия' },
  { front2: '<img src="eurasia/azerbaijan.jpg">', back2: 'Азербайджан' },
  { front2: '<img src="eurasia/Belarus.jpeg">', back2: 'Беларусь' },
  { front2: '<img src="eurasia/Cyprus.png">', back2: 'Кипр' },
  { front2: '<img src="eurasia/France.jpg">', back2: 'Франция' },
  { front2: '<img src="eurasia/germany.jpg">', back2: 'Германия' },
  { front2: '<img src="eurasia/italy.png">', back2: 'Италия' },
  { front2: '<img src="eurasia/jpn.png">', back2: 'Япония' },
  { front2: '<img src="eurasia/kazakhstan.jpg">', back2: 'Казахстан' },
  { front2: '<img src="eurasia/norway.jpg">', back2: 'Норвегия' },
  { front2: '<img src="eurasia/spain.jpeg">', back2: 'Испания' },
  { front2: '<img src="eurasia/switzerland.jpeg">', back2: 'Швейцария' },
  { front2: '<img src="eurasia/turkey.jpg">', back2: 'Турция' },
  { front2: '<img src="eurasia/uk.png">', back2: 'Великобритания' },
  { front2: '<img src="eurasia/ukraine.jpg">', back2: 'Украина' },
  { front2: '<img src="eurasia/vatican.jpeg">', back2: 'Ватикан' },
  { front2: '<img src="eurasia/poland.png">', back2: 'Польша' },
  { front2: '<img src="eurasia/finland.jpg">', back2: 'Финляндия' },
];

const cards3 = [
  { front3: '<img src="africa/algeria.svg">', back3: 'Алжир' },
  { front3: '<img src="africa/angola.svg">', back3: 'Ангола' },
  { front3: '<img src="africa/Benin.svg">', back3: 'Бенин' },
  { front3: '<img src="africa/Botswana.png">', back3: 'Ботсвана' },
  { front3: '<img src="africa/Burkina-Faso.svg">', back3: 'Буркино Фасо' },
  { front3: '<img src="africa/Burundi.png">', back3: 'Бурунди' },
  { front3: '<img src="africa/Cameroon.png">', back3: 'Камерун' },
  { front3: '<img src="africa/cape-verde.png">', back3: 'Кабо Верде' },
  { front3: '<img src="africa/Congo.png">', back3: 'Конго' },
  { front3: '<img src="africa/Djibouti.png">', back3: 'Джибути' },
  { front3: '<img src="africa/DR-Congo.png">', back3: 'Демократическая Республика Конго' },
  { front3: '<img src="africa/Egypt.webp">', back3: 'Египет' },
  { front3: '<img src="africa/Gabon.svg">', back3: 'Габон' },
  { front3: '<img src="africa/Gambia.svg">', back3: 'Гамбия' },
  { front3: '<img src="africa/Ghana.png">', back3: 'Гана' },
  { front3: '<img src="africa/Guinea-Bissau.svg">', back3: 'Гвинея Бисау' },
  { front3: '<img src="africa/Kenya.webp">', back3: 'Кения' },
  { front3: '<img src="africa/Komor.png">', back3: 'Коморские острова' },
  { front3: '<img src="africa/Zambia.png">', back3: 'Замбия' },
  { front3: '<img src="africa/Zimbabwe.webp">', back3: 'Зимбабве' },
];


let currentIndex1 = 0;
let currentIndex2 = 0; 
let currentIndex3 = 0; 

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
