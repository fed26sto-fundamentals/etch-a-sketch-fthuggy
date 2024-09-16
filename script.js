console.log("JavaScript is linked");


function clearGrid() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 
}


function createGrid(size) {
    clearGrid(); 

    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;    

    const squareSize = 380 / size; 

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`; 
        square.style.height = `${squareSize}px`; 
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; 
        });
        container.appendChild(square);
    }
}


const button = document.getElementById('reset-button');
button.addEventListener('click', () => {
    let gridSize = prompt('Enter the number of squares per side (max 100):');
    gridSize = Math.min(gridSize, 100); 
    createGrid(gridSize); 
});


createGrid(16); 
