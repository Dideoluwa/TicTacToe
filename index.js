let board;
let playerX = 'x'
let playerO = 'o'
let currentPlayer = playerX
let isGameOver = false
let reset = document.querySelector('#reset')

window.onload = function () {
    setGame();
}

function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement('div')
            tile.id = r.toString() + '-' + c.toString()
            tile.classList.add('tile')
            if (r == 0 || r == 1) {
                tile.classList.add('horizontal-line')
            }
            if (c == 0 || c == 1) {
                tile.classList.add('vertical-line')
            }
            document.querySelector('#board').append(tile)


            tile.addEventListener('click', function () {
                if (isGameOver) {
                    return;
                }
                let coords = tile.id.split('-')
                let r = parseInt(coords[0])
                let c = parseInt(coords[1])
                if (board[r][c] != ' ') {
                    return
                }
                board[r][c] = currentPlayer
                tile.innerText = currentPlayer

                
                if (currentPlayer == playerX) {
                    currentPlayer = playerO
                }
                else if (currentPlayer == playerO) {
                    currentPlayer = playerX
                }
                checkWin()
            })
            reset.addEventListener('click', function(e){
                isGameOver = false
                tile.innerText = ''
                
                e.stopPropagation()
            })
        }
    }
}
function checkWin() {
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile1 = document.getElementById(r.toString() + '-' + i.toString())
                tile1.classList.add('winner')
            }
            isGameOver = true
            return;
        }
    }
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile1 = document.getElementById(i.toString() + '-' + c.toString())
                tile1.classList.add('winner')
            }
            isGameOver = true
            return;
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let tile1 = document.getElementById(i.toString() + '-' + i.toString())
            tile1.classList.add('winner')
        }
        isGameOver = true
        return;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        let tile = document.getElementById('0-2')
        tile.classList.add('winner')
         tile = document.getElementById('1-1')
        tile.classList.add('winner')
         tile = document.getElementById('2-0')
        tile.classList.add('winner')
        isGameOver = true
        return;
    }
}

