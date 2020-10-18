function createCard(cardSource) {
    const img = document.createElement('img');
    img.src = cardSource;
    return img;
}

function onCardClick(event) {
    const card = event.currentTarget;

    // remove active if any
    const activeCard = document.querySelector('.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }

    card.classList.add('active');
}

function navigateCard(event) {
    const key = event.key;

    if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
        return;
    }

    // get selected card
    const activeCard = document.querySelector('.active');

    if (!activeCard) {
        return;
    }
    
    // move to next sibling
    if (key === 'ArrowLeft') {
        const prevCard = activeCard.previousSibling;

        if (prevCard) {
            activeCard.classList.remove('active');
            prevCard.classList.add('active');
        }
    }
    if (key === 'ArrowRight') {
        const nextCard = activeCard.nextSibling;

        if (nextCard) {
            activeCard.classList.remove('active');
            nextCard.classList.add('active');
        }
    }
}

const cardBoard = document.querySelector('#card-board');

for (const cardSource of CARD_SOURCES) {
    const card = createCard(cardSource);
    card.addEventListener('click', onCardClick);
    cardBoard.appendChild(card);
}

document.addEventListener('keydown', navigateCard);