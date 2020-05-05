

var grid = [
    [1, 8, 7, 4, 6, 2, 5, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0],
    [6, 0, 3, 0, 5, 9, 1, 0, 8],
    [0, 0, 1, 0, 4, 0, 0, 9, 0],
    [0, 0, 0, 2, 1, 8, 0, 7, 0],
    [0, 5, 0, 0, 0, 6, 8, 1, 0],
    [0, 0, 0, 0, 3, 4, 0, 5, 2],
    [4, 0, 0, 6, 0, 1, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0]
]
gridje = [[9, 0, 0, 0, 0, 0, 0, 0, 0]]
console.log(gridje[0].length)
console.log('Input Sudoku:')
displayGrid(grid)
solveSudoku(grid)


function solveSudoku(grid) {
    console.log('Input Sudoku:')
    displayGrid(grid)
    if (isGridValid(grid)) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (isEmpty(i, j, grid)) {
                        let possibilities = 0
                        for (let k = 1; k < 10; k++) {
                            if (isPossible(i, j, k)) {
                                possibilities++
                                grid[i][j] = k
                                solveSudoku(grid)
                                grid[i][j] = 0
                            }
                        }
                        return
                    }
                }
            }
        console.log('Solved Sudoku:')
        displayGrid(grid)
        return grid
    }
}

function isGridValid(grid){
    if ((grid.length == 9)&&(grid[0].length==9)){
        return true
    }
    return false
}
function hasEmpty(grid) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (isEmpty(i, j, grid)) return true
        }
    }
    console.log('has no empty')
    return false
}

function isEmpty(y , x, grid){
    for (let i = 1; i<10; i++){
        if (grid[y][x]==0){
            return true
        }
    }
    return false
}

function isPossible(y, x, n) {
    for (let i = 0; i<9; i++){
        if (grid[y][i]==n){
            return false
        }
    }

    for (let i = 0; i<9; i++) {
        if (grid[i][x] == n) {
            return false
        }
    }
    let x0 = Math.floor(x/3)*3
    let y0 = Math.floor(y/3)*3

    for (let i = 0; i<3; i++) {
        for (let j = 0; j<3; j++) {
            if (grid[y0+i][x0+j]==n){
                return false
            }
        }
    }

    return true
}

function checkRow(rowNumber, position){
// kan dit getal hier?


}
function checkColumn(potentialNumber){

}
function checkSquare(){

}
function checkValue(){

}

function displayGrid(grid){

    for (let i=0; i<9;i++){
        let row = ''
        if (i%3==0){
            console.log(' ------- ------- -------  ')
        }
        for (let j=0; j<9;j++){
            if (j%3==0){
                row = row + '| '
            }
            row = row + grid[i][j].toString() + ' '
        }
        row = row + '|'
        console.log(row)
    }
    console.log(' ------- ------- -------  ')
}

function displayMiniGrid(grid){
    let row = ''
    console.log(' ------- ------- -------  ')
    for (let j=0; j<9;j++){
        if (j%3==0){
            row = row + '| '
        }
        row = row + grid[0][j].toString() + ' '
    }
    row = row + '|'
    console.log(' ------- ------- -------  ')
}