//////////////////////
// 8) Container with most water
//////////////////////
// loop over first number with every combo
// loop over second number with every combo
// keep track of max area
maxArea = (height) => {
  let maxarea = 0;

  for (var i = 0; i < height.length; i++) {
    for (var j = i+1; j < height.length; j++) {
      maxarea = Math.max(maxarea,Math.min(height[i], height[j])*(j-i));
    }
  }
  console.log(maxarea);
  return maxarea;
}

maxArea([1,1]);
