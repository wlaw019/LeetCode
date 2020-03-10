//////////////////////
// 55) Jump Game
//////////////////////
canJump = (nums) => {
  let lastPos = nums.length-1

  for (var i = nums.length-1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }

  if (lastPos === 0) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

canJump([3,2,1,0,4])
