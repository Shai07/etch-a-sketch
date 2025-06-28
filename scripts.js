const board = document.querySelector('.board');
const slider = document.querySelector('.slider');

tester.addEventListener('mouseover', function() {
    tester.style.backgroundColor = 'yellow';
})

let size = 10;
let color = 'yellow'

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

slider.addEventListener('change', function() {
    size = slider.value;
    grid(size);
    paint(color);
})

grid(size); paint(color);