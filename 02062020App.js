//////////////////////
// 35) Search Insert Position
//////////////////////
// Use indexOf to find target value
// If not found then use for lop to insert via splice
searchInsert = (nums, target) => {
  let indexOfTarget = nums.indexOf(target);
  // console.log(indexOfTarget);

  if (indexOfTarget!==-1) {
    return indexOfTarget;
  }else {
    for (var i = 0; i < nums.length; i++) {
      // console.log(i);
      if (target<nums[i]) {
        // nums.splice(i,0,target);
        // console.log(nums);
        return i;
      } else if (target>nums[i]&&i==nums.length-1) {
        // nums.push(target);
        // console.log(nums);
        console.log(i+1);
        return i+1;
      }

    }
  }
}

searchInsert([1,3,5,6],7)
