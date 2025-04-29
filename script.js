const cards = [
    { front: <'img = src/france.jpg'> , back: 'France — Paris' },
    { front: 'src/jpn.png', back: 'Japan — Tokyo' },
  ];
  let currentIndex = 0;
  
  function flipCard() {
    document.getElementById('card').classList.toggle('flip');
  }
  
  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    document.getElementById('front').innerHTML = cards[currentIndex].front;
    document.getElementById('back').innerHTML = cards[currentIndex].back;
    document.getElementById('card').classList.remove('flip');
  }



