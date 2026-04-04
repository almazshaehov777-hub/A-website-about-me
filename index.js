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