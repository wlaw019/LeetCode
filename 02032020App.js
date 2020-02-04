//////////////////////
// 29) Divide Two Integers
//////////////////////
// Identify sign of quotient
// while loop to calculate quotient (minus 1)

divide = (dividend, divisor) => {
  let sign = 1;
  let quotient = 0;
  let sum = 0;

  if (dividend<Math.pow(-2, 31)||dividend>Math.pow(2, 31)-1) {
    return Math.pow(2, 31)-1;
  } else if (dividend == 0) {
    return 0;
  }

  if ((dividend < 0 && divisor > 0)||(dividend > 0 && divisor < 0)) {
    sign = -1;
  }

  if (Math.abs(divisor)==1) {
    quotient = Math.abs(dividend)+1;
  } else {
    while (sum<=Math.abs(dividend)) {
      sum += Math.abs(divisor);
      quotient ++;
      // console.log(quotient);
    }
  }




  if (sign<0) {
    quotient = sign*(quotient-1);
  }else {
    quotient = quotient-1;
  }

  if (quotient<Math.pow(-2, 31)||quotient>Math.pow(2, 31)-1) {
    // console.log(Math.pow(2, 31)-1);
    return Math.pow(2, 31)-1;
  } else {
    // console.log(quotient);
    return quotient
  }

}

divide(1, 1);

//////////////////////
// 31) Next Permutation
//////////////////////
// if right number > left number switch position
// otherwise sort

nextPermutation = (nums) => {
  let tempNum = 0;
  
  if (nums.length==0) {
    return [];
  } else if (nums.length==2 && nums[1]>nums[0]) {
    tempNum = nums[0];
    nums[0] = nums[1]
    nums[1] = tempNum;

    console.log(nums);
    return nums;
  }



  for (var i = 1; i < nums.length; i++) {
    if (nums[i]<nums[i+1]) {
      tempNum = nums[i];
      nums[i] = nums[i+1]
      nums[i+1] = tempNum;

      console.log(nums);
      return nums;
    } else if (i==nums.length-1) {
      nums.sort((a,b) => {
        return a-b;
      })

      console.log(nums);
      return nums;
    }

  }
}

nextPermutation([]);
