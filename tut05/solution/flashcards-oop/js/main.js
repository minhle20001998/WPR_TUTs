const cardContainer = document.querySelector('#flashcard-container');
const statusBarContainer = document.querySelector('#status-bar');

async function main() {
    const WORDS = await fetchData();
    const app = new App(cardContainer, statusBarContainer, WORDS);
}
main();