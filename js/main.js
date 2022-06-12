const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const divs = document.createElement('div');
    divs.classList.add('square');
    container.appendChild(divs);
};



