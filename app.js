const ticTacToe = (function () {
    function createGrid() {
        // let grid = {
        //     1: "-",
        //     2: "-",
        //     3: "-",
        //     4: "-",
        //     5: "-",
        //     6: "-",
        //     7: "-",
        //     8: "-",
        //     9: "-",
        // };
        let body = document.querySelector('body');
        let gameGrid = document.createElement('div');
        gameGrid.id = 'ticTacToe-grid';
        gameGrid.style.display = 'grid'
        gameGrid.style.gridTemplate = 'repeat(3, 1fr) / repeat(3, 1fr)';
        gameGrid.style.border = 'solid black 1px';
        body.appendChild(gameGrid);
        let cell1 = document.createElement('div');
        cell1.id = 'cell1';
        cell1.textContent = '-'
        cell1.style.textAlign = 'center';
        gameGrid.appendChild(cell1);
        let cell2 = document.createElement('div');
        cell2.id = 'cell2';
        cell2.textContent = '-'
        cell2.style.textAlign = 'center';
        gameGrid.appendChild(cell2);
        let cell3 = document.createElement('div');
        cell3.id = 'cell3';
        cell3.textContent = '-'
        cell3.style.textAlign = 'center';
        gameGrid.appendChild(cell3);
        let cell4 = document.createElement('div');
        cell4.id = 'cell4';
        cell4.textContent = '-'
        cell4.style.textAlign = 'center';
        gameGrid.appendChild(cell4);
        let cell5 = document.createElement('div');
        cell5.id = 'cell5';
        cell5.textContent = '-'
        cell5.style.textAlign = 'center';
        gameGrid.appendChild(cell5);
        let cell6 = document.createElement('div');
        cell6.id = 'cell6';
        cell6.textContent = '-'
        cell6.style.textAlign = 'center';
        gameGrid.appendChild(cell6);
        let cell7 = document.createElement('div');
        cell7.id = 'cell7';
        cell7.textContent = '-'
        cell7.style.textAlign = 'center';
        gameGrid.appendChild(cell7);
        let cell8 = document.createElement('div');
        cell8.id = 'cell8';
        cell8.textContent = '-'
        cell8.style.textAlign = 'center';
        gameGrid.appendChild(cell8);
        let cell9 = document.createElement('div');
        cell9.id = 'cell9';
        cell9.textContent = '-'
        cell9.style.textAlign = 'center';
        gameGrid.appendChild(cell9);

        function printGrid() {
            console.log(grid[1], grid[2], grid[3]);
            console.log(grid[4], grid[5], grid[6]);
            console.log(grid[7], grid[8], grid[9]);
        }

        function updateGrid(position, marker) {
            if (grid[position] === "-") {
                grid[position] = marker;
                return true;
            }
            return false;
        }

        return {
            printGrid,
            updateGrid,
            getGrid: () => grid,
        };
    }

    const gameBoard = createGrid();

    function playerMove(position, marker) {
        if (gameBoard.updateGrid(position, marker)) {
            console.log(`Player ${marker} moved to position ${position}`);
            gameBoard.printGrid();
        } else {
            console.log("Invalid move! Try again.");
        }
    }

    return {
        playerMove,
    };
})();

