const board = document.querySelector('.board');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.value');
const colorInput = document.querySelector('.color-input')
const choices = document.querySelectorAll('.choice');


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
            tile.dataset.darkness = 0.0;
            row.appendChild(tile);
        }
    }

    const tiles = document.querySelectorAll('.tile')
    for (let tile of tiles) {
        tile.addEventListener('mouseover', () => modeHandler(tile));
    }
}

function paint(tile, color) {
    tile.style.backgroundColor = color;
    tile.dataset.darkness = 0.0;
}

function paintRandom(tile) {
    tile.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)}, ${getRandomInt(255)})`;
    tile.dataset.darkness = 0.0;
}

function darken(tile) {
    let currentColor = getComputedStyle(tile).backgroundColor;
    let rgbaValues = currentColor.slice(currentColor.indexOf('(')+1, currentColor.indexOf(')')).split(', ');
    console.log(rgbaValues);
    if (tile.dataset.darkness < 1){
        tile.dataset.darkness = parseFloat(tile.dataset.darkness) + 0.1;
        tile.style.backgroundColor = `rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${tile.dataset.darkness})`;
    }
}

function modeHandler(tile) {
    if (mode === 'single-color') paint(tile, color);
    if (mode === 'random') paintRandom(tile);
    if (mode === 'darken') darken(tile);
}


slider.addEventListener('change', function() {
    size = slider.value;
    sliderValue.textContent = `${size} x ${size}`
    grid(size);
})

colorInput.addEventListener('change', function() {
    color = colorInput.value;

})

for (let choice of choices) {
    choice.addEventListener('click', function() {
        if (choice.id === 'reset') grid(size);
        else {
            mode = choice.id;
        }
    });
}

grid(size);




