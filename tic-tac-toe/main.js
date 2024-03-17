const gameBoard = document.querySelector('.tic-tac-toe');
const resetButton = document.querySelector('#wrapper section button');

function makeBoard(element) {

    for (let i = 0; i < 9; i++) {
      let square = document.createElement('div');
        square.classList.add('empty', 'square');
        element.appendChild(square);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    makeBoard(gameBoard);
    let cells = document.querySelectorAll('.tic-tac-toe .square');
    
    let currentInput = { 'input': 'O' };
    
    cells.forEach(cell => {
        cell.addEventListener('click', function(e) {
            if (e.target.classList.contains('empty')) {
                currentInput.input = currentInput.input === 'O' ? 'X' : 'O';
                e.target.innerText = currentInput.input;
                e.target.classList.remove('empty');
            } else {
                e.preventDefault();
            }
        });
    });

    resetButton.addEventListener('click', function(e) {
        cells.forEach(cell => {
            gameBoard.removeChild(cell);
            location.reload();
        });
        makeBoard(gameBoard);
    });
});
