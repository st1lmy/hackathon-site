const cards = [
    { front: '<img src = "src/france.jpg">', back: 'France ' },
    { front: '<img src = "src/jpn.png">', back: 'Japan ' },
    { front: '<img src = "src/italy.png">', back: 'Italy ' },
    { front: '<img src = "src/uk.png">', back: 'UK' },
    { front: '<img src = "src/">', back: 'Japan — Tokyo' },
    { front: '<img src = "src/">', back: 'Japan — Tokyo' },
    { front: '<img src = "src/">', back: 'Japan — Tokyo' },
  ];
  let currentIndex = 0;
  
  function flipCard() {
    document.getElementById('card').classList.toggle('flip');
  }
  
  function playAudio() {
    const sound = document.getElementById('sound');
    sound.currentTime = 0;
    sound.play();
  }
  
  function flipCardAndPlay() {
    flipCard();
    playAudio();
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    document.getElementById('front').innerHTML = cards[currentIndex].front;
    document.getElementById('back').innerHTML = cards[currentIndex].back;
    document.getElementById('card').classList.remove('flip');
  }



  function previousCard() {
    currentIndex = (currentIndex - 1) % cards.length;
    document.getElementById('back').innerHTML = cards[currentIndex].back;
    document.getElementById('front').innerHTML = cards[currentIndex].front;
    document.getElementById('card').classList.remove('flip');
  }

  // при клике «Показать ответ»:




