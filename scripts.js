const board = document.querySelector('.board');
const slider = document.querySelector('.slider');


let size = 10;
let color = 'red'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function grid(size) {
    board.replaceChildren();
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        board.appendChild(row)
        for (let j = 0; j < size; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            row.appendChild(tile);
        }
    }
}

function paint(color) {
    const tiles = document.querySelectorAll('.tile')
    for (let tile of tiles) {
        tile.addEventListener('mouseover', function() {
        tile.style.backgroundColor = color;})
    }
}

function paintRandom() {
    const tiles = document.querySelectorAll('.tile')
    for (let tile of tiles) {
        tile.addEventListener('mouseover', function() {
        tile.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)}, ${getRandomInt(255)})`;})
    }
}

function darken() {

}

function reset() {

}


slider.addEventListener('change', function() {
    size = slider.value;
    grid(size);
    paint(color);
})

grid(size); darken();