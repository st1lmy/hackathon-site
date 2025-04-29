const cards = [
    { front: 'img', back: 'France — Paris' },
    { front: '🇯🇵', back: 'Japan — Tokyo' },
    { front: '🇧🇷', back: 'Brazil — Brasília' },
    { front: '🇰🇿', back: 'Kazakhstan — Astana' }
  ];
  let currentIndex = 0;
  
  function flipCard() {
    document.getElementById('card').classList.toggle('flip');
  }
  
  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    document.getElementById('front').textContent = cards[currentIndex].front;
    document.getElementById('back').textContent = cards[currentIndex].back;
    document.getElementById('card').classList.remove('flip');
  }