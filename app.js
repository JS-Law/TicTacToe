const ticTacToe = (function () {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

    function checkWinner(cells, marker) {
        let winner = document.querySelector('#results-window');
        console.log("Checking winner for marker:", marker); // Debug line
        for (let combination of winningCombinations) {
            console.log("Checking combination:", combination); // Debug line
            if (combination.every(index => cells[index] === marker)) {
                console.log("Winning combination found:", combination); // Debug line
                if (marker === 'X') {
                    winner.style.display = 'block';
                    winner.textContent = 'You won!';
                } else {
                    winner.style.display = 'block';
                    winner.textContent = 'You lost!';
                }
                return true;
            }
        }
        return false;
    }
    
    
    
    function createPageElements() {
        let body = document.querySelector('body');
        let nav = document.createElement('div');
        
        let resetButton = document.createElement('button');
        resetButton.id = 'resetButton';
        resetButton.textContent = 'Reset Game';
        
        let gameOverWindow = document.createElement('div')
        gameOverWindow.id = 'game-over'
        gameOverWindow.textContent = 'Game Over'
        gameOverWindow.style.display = 'none'

        let results = document.createElement('div');
        results.style.display = 'none';
        results.id = 'results';
        
        let resultsWindow = document.createElement('div');
        resultsWindow.id = 'results-window';
        resultsWindow.style.display = 'none';

        nav.appendChild(resetButton);
        body.appendChild(nav);
        body.appendChild(resultsWindow);
        resultsWindow.appendChild(gameOverWindow);
        resultsWindow.appendChild(results);
    }

    function newGame() {
        let resetButton = document.querySelector('#resetButton');
        resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
        gameBoard.resetGrid();
    }

    function createGrid() {
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
        gameGrid.style.justifyContent = 'center';

        for (let i = 1; i <= 9; i++) {
            let cell = document.createElement('div');
            cell.id = `cell-${i}`;
            cell.className = 'cell';
            cell.textContent = cells[i];
            cell.style.textAlign = 'center';
            cell.style.border = '1px solid black';
            cell.style.display = 'flex';
            cell.style.alignItems = 'center';
            cell.style.justifyContent = 'center';
            cell.addEventListener('click', () => playerMove(i, 'X')); 
            gameGrid.appendChild(cell);
        }

        function updateGrid(position, marker) {
            if (cells[position] === "-") {
                cells[position] = marker;
                document.getElementById(`cell-${position}`).textContent = marker; 
                return true;
            }
            return false;
        }

        function resetGrid() {
            for (let i = 1; i <= 9; i++) {
                cells[i] = "-";
                let cell = document.querySelector(`#cell-${i}`);
                cell.textContent = cells[i];
            }
            let gameOverWindow = document.querySelector('#results-window');
            gameOverWindow.style.display = 'none';
            // let results = document.querySelector('#results');
            // results.style.display = 'none';
        }

        return {
            updateGrid,
            getGrid: () => cells,
            resetGrid,
        };
    }

    const gameBoard = createGrid();

    function gameOver(){
        let gameOverWindow = document.querySelector('#game-over');
        gameOverWindow.style.display = 'block'

    }

    function playerMove(position, marker) {
        if (gameBoard.updateGrid(position, marker)) {
            console.log(`Player ${marker} moved to position ${position}`);
            if (checkWinner(gameBoard.getGrid(), marker)) {
                console.log(`Player ${marker} wins!`);
                gameOver()
                
            } else {
                computerMove(); 
            }
        } else {
            console.log("Invalid move! Try again.");
        }
    }
    
    function computerMove() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        let cells = gameBoard.getGrid();
        let emptyCells = [];
        
        for (let i = 1; i <= 9; i++) {
            if (cells[i] === "-") {
                emptyCells.push(i);
            }
        }
    
        if (emptyCells.length > 0) {
            let randomIndex = getRandomInt(0, emptyCells.length - 1);
            let position = emptyCells[randomIndex];
            gameBoard.updateGrid(position, 'O');
            console.log(`Computer moved to position ${position}`);
            if (checkWinner(cells, 'O')) {
                gameOver()
            }
        }
    }
     

    return {
        createPageElements,
        playerMove,
        newGame,
        resetGame,
        computerMove,
        gameOver
    };
})();

ticTacToe.createPageElements();
ticTacToe.newGame();
