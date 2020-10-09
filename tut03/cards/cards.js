function createImg(src) {
    const image = document.createElement("img");
    image.src = src;
    return image;
}
const boardView = document.querySelector('#board-view');
for (let i = 0; i < linkArray.length; i++) {
    const imgSrc = linkArray[i];
    const img = createImg(imgSrc);
    img.addEventListener('click', handleClickEvent);
    boardView.appendChild(img);
}

let previousImg = null;
function handleClickEvent(event) {
    let chosenImg = event.currentTarget;
    if (previousImg == null) {
        chosenImg.classList.add('chosenImg');
        previousImg = chosenImg;
    } if (previousImg != null && previousImg != chosenImg) {
        previousImg.classList.remove('chosenImg');
        chosenImg.classList.add('chosenImg');
        previousImg = chosenImg;
    }
}