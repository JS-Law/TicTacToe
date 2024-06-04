const ticTacToe = (function () {
    function createPageElements(){
        let body = document.querySelector('body');
        let nav = document.createElement('div');
        let resetButton = document.createElement('button');
        resetButton.id = 'resetButton';
        resetButton.textContent = 'Reset Game'
        nav.appendChild(resetButton);
        body.appendChild(nav);
    }

    function newGame(){
        let resetButton = document.querySelector('#resetButton');
        resetButton.addEventListener('click', resetGame)
    }
    function resetGame(){
        gameBoard.resetGrid()
        
    }
    function createGrid(grid) {
        let cells = {
            1: "-", 2: "-", 3: "-",
            4: "-", 5: "-", 6: "-",
            7: "-", 8: "-", 9: "-",
        };
        
        let body = document.querySelector('body');
        let gameGrid = document.createElement('div');
        body.appendChild(gameGrid);
        gameGrid.id = 'ticTacToe-grid';
        gameGrid.style.display = 'grid';
        gameGrid.style.gridTemplate = 'repeat(3, 100px) / repeat(3, 100px)';
        gameGrid.style.border = 'solid black 1px';
        gameGrid.style.justifyContent = 'center';
        
        for (let i = 1; i <= 9; i++) {
            let cell = document.createElement('div');
            cell.id = `cell-${i}`;
            cell.textContent = cells[i];
            cell.style.textAlign = 'center';
            cell.style.border = '1px solid black';
            cell.style.display = 'flex';
            cell.style.alignItems = 'center';
            cell.style.justifyContent = 'center';
            gameGrid.appendChild(cell);
        }
        
        function updateGrid(position, marker) {
            if (cells[position] === "-") {
                cells[position] = marker;
                document.getElementById(`cell-${position}`).textContent = marker; // Update the HTML
                return true;
            }
            return false;
        }
        function resetGrid(){
            let cells = {
                1: "-", 2: "-", 3: "-",
                4: "-", 5: "-", 6: "-",
                7: "-", 8: "-", 9: "-",
            };
            for (let i = 1; i <= 9; i++) {
                let cell = document.querySelector(`#cell-${i}`);
                cell.textContent = cells[i];
            }
        }

        return {
            updateGrid,
            getGrid: () => cells,
            resetGrid,
        };
    }

    const gameBoard = createGrid();

    function playerMove(position, marker) {
        if (gameBoard.updateGrid(position, marker)) {
            console.log(`Player ${marker} moved to position ${position}`);
        } else {
            console.log("Invalid move! Try again.");
        }
    }
    function computerMove(position, marker) {
        if (gameBoard.updateGrid(position, marker)) {
        console.log(`Player ${marker} moved to position ${position}`);
        } else {
            console.log("Invalid move! Try again.");
        }
        // Use some sort of logic that utilizes random integers to them use as the updated move
        // Will also need logic to check for current status if(cell[i] !== '-') do stuff... etc
    }

    return {
        createPageElements,
        playerMove,
        newGame,
        resetGame,
        computerMove
    };
})();

// Example usage:
ticTacToe.createPageElements();
ticTacToe.newGame()
// ticTacToe.resetGrid();



// ticTacToe.playerMove(7, 'X');  // Invalid move
ticTacToe.playerMove(1, 'X');  // Player X moves to position 1
ticTacToe.playerMove(5, 'O');  // Player O moves to position 5
ticTacToe.playerMove(1, 'X');  // Invalid move
ticTacToe.playerMove(4, 'X');  // Invalid move