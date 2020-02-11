//////////////////////
// 36) Valid Sudoku
//////////////////////
// Loop through each row to ensure no repetition
// Loop through each column to ensure no repetition
// Loop through 3x3 square to ensure no repetition
isValidSudoku = (board) => {
  let row = [];
  let col = [];
  let box = [];
  let res = false;

  checkRow = (array) => {
    for (var i = 0; i < array.length; i++) {
      // console.log(i);
      for (var j = 0; j < array[i].length; j++) {
        // console.log(j);
        if (row.includes(array[i][j])&&parseInt(array[i][j])>0) {
          // console.log(false);
          return res=false;
        } else if (!row.includes(array[i][j])&&parseInt(array[i][j])>0) {
          row.push(array[i][j]);

        }
      }
      console.log(row);
      row = [];
    }

    res = true;
  }

  checkColumn = (array) => {

      for (var i = 0; i < array.length; i++) {
        // console.log(i);
        for (var j = 0; j < array[i].length; j++) {
          // console.log(j);
          if (col.includes(array[j][i])&&parseInt(array[j][i])>0) {
            // console.log(false);
            return res=false;
          } else if (!row.includes(array[j][i])&&parseInt(array[j][i])>0) {
            col.push(array[j][i]);

          }
        }
        console.log(col);
        col = [];
      }
      // console.log(true);
      res = true;

  }

  checkBox = (array,n) => {

      for (var k = 0; k < 9; k=k+3) {
        for (var i = k; i < k+3; i++) {
          // console.log(i);
          for (var j = n; j < n+3; j++) {
            // console.log(j);
            if (box.includes(array[i][j])&&parseInt(array[i][j])>0) {
              // console.log(false);
              return res=false;
            } else if (!box.includes(array[i][j])&&parseInt(array[i][j])>0) {
              box.push(array[i][j]);
            }
          }

        }
        console.log(box);
        box = [];
      }


  }



  checkRow(board)

  if (res) {
    checkColumn(board);
  } else {
    return false;
  }

  if (res) {
    checkBox(board, 0);
  } else {
    return false;
  }

  if (res) {
    checkBox(board, 3);
  } else {
    return false;
  }

  if (res) {
    checkBox(board, 6);
  } else {
    return false;
  }



  if (res) {
    console.log(true);
    return true;
  }else {
    console.log(false);
    return false
  }

}

isValidSudoku([
["7",".",".",".","4",".",".",".","."],
[".",".",".","8","6","5",".",".","."],
[".","1",".","2",".",".",".",".","."],
[".",".",".",".",".","9",".",".","."],
[".",".",".",".","5",".","5",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".","2",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]);
