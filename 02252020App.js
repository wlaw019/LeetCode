//////////////////////
// 48) Rotate Image
//////////////////////
// function transpose(matrix) {
//   for (var i = 0; i < matrix.length; i++) {
//     console.log("i"+i);
//     for (var j = 0; j < i; j++) {
//       console.log("j"+j);
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//       console.log(matrix);
//     }
//   }
// }
//
// function transpose(matrix) {
//   let res = [];
//
//    res = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
//    console.log(res);
//
// }

rotate = (matrix) => {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
    for (var i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

rotate([[1,2,3],
  [4,5,6],
  [7,8,9]])
