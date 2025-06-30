const board = document.querySelector('.board');
const slider = document.querySelector('.slider');


let size = 10;
let color = 'rgb(0, 0, 0)';
let mode = 'single-color';


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

function paint(tile, color) {
    tile.style.backgroundColor = color;
    return false;
}

function paintRandom(tile) {
    tile.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)}, ${getRandomInt(255)}, 0)`;
}

function darken(tile) {
    let currentColor = getComputedStyle(tile).backgroundColor;
    let rgbaValues = currentColor.slice(currentColor.indexOf('(')+1, currentColor.indexOf(')')).split(', ');
    console.log(rgbaValues);
    if (Number(rgbaValues[3]) < 1){
        tile.style.backgroundColor = `rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${Number(rgbaValues[3])+0.1})`;
    }
}

function modeHandler(tile) {
    if (mode === 'single-color') paint(tile, color);
    if (mode === 'random') paintRandom(tile);
    if (mode === 'darken') darken(tile);
}


slider.addEventListener('change', function() {
    size = slider.value;
    grid(size);
})

grid(size);

const tiles = document.querySelectorAll('.tile')
for (let tile of tiles) {
    tile.addEventListener('mouseover', () => modeHandler(tile));
}


