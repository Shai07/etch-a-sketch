const board = document.querySelector('.board');
const tiles = document.querySelectorAll('.tile')
const slider = document.querySelector('.slider');

let SIZE = 10;
grid(SIZE);

slider.addEventListener('change', function() {
    SIZE = slider.value;
    grid(SIZE);
})



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