const container = document.querySelector('#container');

for (let i = 1; i <= 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

container.addEventListener('mouseover', function(e) {
    console.log(e.target)
    e.target.style.background = 'green';
    setTimeout(() => e.target.style.background = '', 200)
});





