
const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
    res.send('Hello World')
})

/*app.get('/sudoku', function (req, res) {
    let grid;
    grid = solveSudoku(req.body.grid);
    res.send(grid)
})
*/

app.listen(3000)


