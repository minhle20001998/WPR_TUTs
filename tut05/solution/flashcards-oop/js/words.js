// const WORDS = {
//     '여자': 'woman',
//     '남자': 'man',
//     '사람': 'person',
//     '나무': 'tree',
//     '호수': 'lake',
//     '구름': 'cloud',
//     '땅': 'ground'
// };
async function fetchData() {
    const url = 'https://wpr-quiz-api.herokuapp.com/words';
    const noneParams = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }
    const myResponse = await fetch(url, noneParams);
    const WORDS = await myResponse.json()
    return WORDS;
}
