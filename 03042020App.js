//////////////////////
// 54) Spiral Matrix
//////////////////////


spiralOrder = (matrix) => {
  let res = [];

  if (matrix.length == 0) {
    return matrix;
  }

  recursive = (matrix) => {
    if (matrix[0].length ==1) {
      for (var i = 0; i < matrix.length; i++) {
        res.push(matrix[i]);
      }
      return res;
    }

    let newMatrix = [];

    res.push(matrix[0]);

    if (matrix.length>1) {
      let lastIndex = matrix[0].length-1

      for (var i = 1; i < matrix.length-1; i++) {
        res.push(matrix[i][lastIndex]);
      }

      res.push(matrix[matrix.length-1].reverse())

      for (var i = matrix.length-2; i >0; i--) {
        res.push(matrix[i][0])
      }

      console.log(res);

      for (var i = 1; i < matrix.length-1; i++) {
        newMatrix.push(matrix[i].slice(1, lastIndex));
      }

      console.log(newMatrix);
    }



    if (newMatrix.length>0 && newMatrix[0].length>0) {
      recursive(newMatrix);
    }else {
      // console.log("final", [].concat.apply([],res));
      return res;
      // return [].concat(res);
    }
  }

  recursive(matrix);
  console.log("final", res.flat());
  return res.flat()




}

spiralOrder([[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]])
