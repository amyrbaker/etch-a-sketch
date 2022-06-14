//Declare Variables
const container = document.querySelector('#container');
const button = document.querySelector('button');

//Set up board based on user input size
//Add event listeners to each square
function createBoard(size) {
    for (let i = 1; i <= size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${512 / size - 2}px`;
        square.style.height = `${512 / size - 2}px`;
        container.appendChild(square);
        square.addEventListener('mousedown', color)
        square.addEventListener('mouseover', color)
        
    };
};
//Set up default board
createBoard(16)

//Set up reset button asking for user input for boardsize.
//Clear existing board and create new board
button.addEventListener('click', () => {
    let boardSize = prompt('Choose a board size');
    while (boardSize > 100) boardSize = prompt('Board size cannot be greater than 100. Choose a board size');
    reset(container)
    container.style.background = 'white'
    createBoard(boardSize);
});

//Helper function to clear existing board
function reset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

//Logic to color board on mouse click and hold
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Add shading to the squares if mouse is clicked and held and hovered over square
function color(e) {
    console.log(e.type)
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.background = 'grey';
    e.target.style.border = '1px solid grey'
};







