
var isValidSudoku = function(board) {
    const rows = Array.from({length:9},()=> Array(9).fill(false))
    const cols = Array.from({length:9},()=>Array(9).fill(false))
    const boxes = Array.from({length:9},()=>Array(9).fill(false))

    for(let r = 0; r<9; r++){
        for(let c =0; c<9; c++){
            const val = board[r][c];

            if(val === ".") continue;

            const num = Number(val) - 1;
            const box =  Math.floor(r/3)*3 + Math.floor(c/3)

            if(rows[r][num] || cols[c][num] || boxes[box][num]){
                return false;
            }
            rows[r][num] = true;
            cols[c][num]= true;
            boxes[box][num] = true;
        }

    }
    return true;
};