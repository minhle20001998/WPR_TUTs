const cardContainer = document.querySelector('#flashcard-container');
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');
let index = 0;
let previous = 0;
// Task 1: flip word/ definition
cardContainer.addEventListener('click', flipCard)
function flipCard(event) {
    const words = document.querySelectorAll('.word');
    const definitions = document.querySelectorAll('.definition');
    words.forEach(element => {
        element.classList.toggle('hidden')
    });
    definitions.forEach(element => {
        element.classList.toggle('hidden')
    });
}

function resetCard(event) {
    const words = document.querySelectorAll('.word');
    const definitions = document.querySelectorAll('.definition');
    words.forEach(element => {
        element.classList.remove('hidden')
    });
    definitions.forEach(element => {
        element.classList.add('hidden')
    });
}

// Task 2: populate data
function createCard(word, definition) {
    const flashcard_box = document.createElement('div');
    const newWord = document.createElement('div');
    const newDefinition = document.createElement('div');


    flashcard_box.classList.add('flashcard-box', "hidden");
    newWord.classList.add('flashcard', 'word');
    newDefinition.classList.add('flashcard', 'definition', 'hidden');

    newWord.textContent = word;
    newDefinition.textContent = definition;

    flashcard_box.appendChild(newWord);
    flashcard_box.appendChild(newDefinition);

    return flashcard_box;
}

function populateCards(cardContainer) {
    const wordList = []
    for (const key in KOREAN) {
        card = createCard(key, KOREAN[key]);
        cardContainer.appendChild(card);
        wordList.push(card);

    }
    wordList[0].classList.remove('hidden');
    return wordList;
}
const cards = populateCards(cardContainer);

const statusNoWords = statusBar.querySelector('span');
statusNoWords.textContent = cards.length;

// Task 3: mouse events - navigation
const statusCurrentIndex = statusBar.querySelector('strong');

// on start: show first word
let currentIndex = 0;


function setIndex(index) {
    let current = index;
    // check if valid index
    if (Boolean(cards[index])) {
        // hide current card
        cards[previous].classList.add('hidden');

        // show card at index
        cards[current].classList.remove('hidden');
        previous = current;

        // disable/ enable navigating buttons
        if (index == 0) {
            btnPrev.disabled = true;
        }
        if (index > 0 && index < cards.length - 1) {
            btnNext.disabled = false;
            btnPrev.disabled = false;
        }
        if (index == cards.length - 1) {
            btnNext.disabled = true;
        }
    }
}
//addEventListener for button previous
btnPrev.addEventListener('click', prevCard);
btnPrev.addEventListener('click', resetCard);
function prevCard() {
    if (index > 0) {
        index--;
        statusCurrentIndex.textContent = index + 1;
    }

    setIndex(index);


}
//addEventListener for button next
btnNext.addEventListener('click', nextCard);
btnNext.addEventListener('click', resetCard);
function nextCard() {
    if (index < cards.length - 1) {
        index++;
        statusCurrentIndex.textContent = index + 1;
    }
    setIndex(index);

}


// Task 4: keyboard events - navigation
document.onkeydown = onKeyDown;
function onKeyDown(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        console.log('a');
        prevCard();
    }
    if (e.keyCode == '39') {
        nextCard();
    }
}
