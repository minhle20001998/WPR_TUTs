const cardContainer = document.querySelector('#flashcard-container');
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');

// Task 1: flip word/ definition
function flipCard(event) {
    const card = event.currentTarget;

    const word = card.querySelector('.word');
    const definition = card.querySelector('.definition');

    word.classList.toggle('hidden');
    definition.classList.toggle('hidden');
}

// const cards = cardContainer.querySelectorAll('.flashcard-box');
// for (const card of cards) {
//     card.addEventListener('click', flipCard);
// }

// Task 2: populate data
function createCard(word, definition) {
    const card = document.createElement('div');
    card.classList.add('flashcard-box');
    card.classList.add('hidden');

    const wordSide = document.createElement('div');
    wordSide.classList.add('flashcard');
    wordSide.classList.add('word');
    wordSide.textContent = word;

    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard');
    definitionSide.classList.add('definition');
    definitionSide.classList.add('hidden');
    definitionSide.textContent = definition;

    card.appendChild(wordSide);
    card.appendChild(definitionSide);

    return card;
}

function populateCards(cardContainer) {
    let cards = [];

    for (const word in KOREAN) {
        const card = createCard(word, KOREAN[word]);

        // display
        cardContainer.appendChild(card);

        // handle event
        card.addEventListener('click', flipCard);

        // store for navigating
        cards.push(card);
    }

    return cards;
}

const cards = populateCards(cardContainer);

const statusNoWords = statusBar.querySelector('span');
statusNoWords.textContent = cards.length;

// Task 3: mouse events - navigation
const statusCurrentIndex = statusBar.querySelector('strong');

// on start: show first word
let currentIndex = 0;
setIndex(currentIndex);

function setIndex(index) {
    if (index < 0 || index > cards.length -1)
        return;
        
    // hide current card
    cards[currentIndex].classList.add('hidden');

    // show card at index
    cards[index].classList.remove('hidden');

    statusCurrentIndex.textContent = index+1;
    currentIndex = index;

    // disable/ enable navigating buttons
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === cards.length - 1;
}

function prevCard() {
    setIndex(currentIndex-1);
}

function nextCard() {
    setIndex(currentIndex+1);
}

btnPrev.addEventListener('click', prevCard);
btnNext.addEventListener('click', nextCard);

// Task 4: keyboard events - navigation
function onKeyDown(event) {
    if (event.key === 'ArrowLeft') {
        prevCard();
    } else if (event.key === 'ArrowRight') {
        nextCard();
    }
}
document.addEventListener('keydown', onKeyDown);