const cards = document.querySelectorAll('.card');

const links = [
  'https://github.com/almazshaehov777-hub/Audio-Player',
  'https://github.com/almazshaehov777-hub/Registrate-Window', 
  'https://github.com/almazshaehov777-hub/Memorizer'
];

function cardClick(index){
    window.open(links[index], '_blank');
}

for(let i = 0; i<cards.length; ++i){
    cards[i].onclick = (event) => cardClick(i, event);
}


const cards2 = document.querySelectorAll('.cardD');

const link = [
    'https://github.com/almazshaehov777-hub/Audio-Player',
  'https://github.com/almazshaehov777-hub/Registrate-Window', 
  'https://github.com/almazshaehov777-hub/Memorizer'
];

function cardsClick(index){
    window.open(link[index], '_blank');
}

for(let i = 0; i<cards2.length; ++i){
    cards2[i].onclick = (event) => cardsClick(i, event);
}