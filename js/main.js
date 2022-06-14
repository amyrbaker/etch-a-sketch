const container = document.querySelector('#container');
const button = document.querySelector('button');

function createBoard(size) {
    for (let i = 1; i <= size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${512 / size - 2}px`;
        square.style.height = `${512 / size - 2}px`;
        container.appendChild(square);
    };
};

container.addEventListener('mouseover', function(e) {
    e.target.style.background = 'grey';
});

button.addEventListener('click', () => {
    let boardSize = prompt('Choose a board size');
    while (boardSize > 100) boardSize = prompt('Board size cannot be greater than 100. Choose a board size');
    reset('#container')
    createBoard(boardSize);
});

function reset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}







