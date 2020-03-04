//////////////////////
// 50) Pow(x, n)
//////////////////////
myPow = (x, n) => {
  console.log(Math.pow(x, n));
  return Math.pow(x, n);
}

myPow(2.00000, 10)

//////////////////////
// 53) Maximum Subarray
//////////////////////

// maxSubArray = (nums) => {
//   let resSum = nums[0];
//   let res = [];
//
//   const reducer = (acc, cur) => {
//     return acc + cur
//   }
//
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i+1; j <= nums.length; j++) {
//       let sum = nums.slice(i, j).reduce(reducer);
//
//       // console.log(nums.slice(i, j));
//       // console.log(sum);
//
//       if (sum > resSum) {
//         resSum = sum;
//         res = nums.slice(i, j);
//       }
//
//     }
//
//   }
//
//   console.log(res);
//   return resSum;
// }

maxSubArray = (nums) => {
  let prev = nums[0];
  let sum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    if (prev < 0) {
      prev = nums[i];
    }else {
      prev += nums[i];
    }

    sum = Math.max(sum, prev);
  }

  console.log(sum);
  return sum;

}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
