const containerDiv = document.createElement('div')
document.querySelector('body').appendChild(containerDiv)
document.querySelector('div').classList.add('container')

for (let i = 1; i <= 16; i++) {
    const divs = document.createElement('div')
    document.querySelector('.container').appendChild(divs)
}


