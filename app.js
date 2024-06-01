const ticTacToe = (function () {
    function createGrid() {
        let grid = {
            1: "-",
            2: "-",
            3: "-",
            4: "-",
            5: "-",
            6: "-",
            7: "-",
            8: "-",
            9: "-",
        };

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

// Example usage:
ticTacToe.playerMove(1, "X"); // Player X moves to position 1
ticTacToe.playerMove(5, "O"); // Player O moves to position 5
ticTacToe.playerMove(1, "X"); // Invalid move
