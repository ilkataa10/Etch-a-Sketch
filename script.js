const container = document.getElementById('container');
const button = document.getElementById('new-grid-btn');

let gridSize = 16;

// Create grid with specified number of squares per side
function createGrid(size) {
    // Clear the previous grid
    container.innerHTML = '';

    // Set the container's grid size dynamically
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flexBasis = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;

        // Add hover effect to change color
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor(); // For random color
            // square.style.backgroundColor = darkenSquare(square); // For progressive darkening
        });

        container.appendChild(square);
    }
}

// Randomize RGB values for each interaction
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Button to create new grid based on user input
button.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter grid size (up to 100): '));

    if (newSize > 100) {
        alert('Maximum grid size is 100!');
        newSize = 100;
    } else if (isNaN(newSize) || newSize <= 0) {
        alert('Invalid size! Please enter a positive number.');
        return;
    }

    createGrid(newSize);
});

// Initialize grid
createGrid(gridSize);
