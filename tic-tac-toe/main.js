const gameBoard = document.querySelector('.tic-tac-toe');
const resetButton = document.querySelector('#wrapper section button');

function makeBoard(element) {
//creates divs for the game board
    for (let i = 0; i < 9; i++) {
      let square = document.createElement('div');
        square.classList.add('empty', 'square');
        element.appendChild(square);
    }
};
//add event listeners to the cells of the board
document.addEventListener('DOMContentLoaded', function() {
    makeBoard(gameBoard);
    let cells = document.querySelectorAll('.tic-tac-toe .square');
    // first input will be O
    let currentInput = { 'input': 'O' };
    // uses for each to add event listener to each cell and uses tertiary operator to alternate X and O's
    cells.forEach(cell => {
        cell.addEventListener('click', function(e) {
            if (e.target.classList.contains('empty')) {
                currentInput.input = currentInput.input === 'O' ? 'X' : 'O';
                e.target.innerText = currentInput.input;
                e.target.classList.remove('empty');
            } else {
                //prevents the button from reloading the page
                e.preventDefault();
            }
        });
    });
// creates an eent listner for the reset button and when clicked will removev
    resetButton.addEventListener('click', function(e) {
        cells.forEach(cell => {
            gameBoard.removeChild(cell);
           // restores the default behavior that was removed in my else statement by reloading the page
            location.reload();
        });
        makeBoard(gameBoard);
    });
});
