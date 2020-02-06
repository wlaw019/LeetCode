//////////////////////
// 34) Find First and Last Position of Element in Sorted Array
//////////////////////
// searchRange = (nums, target) => {
//   if (nums.length==0) {
//     console.log([]);
//     return [-1,-1];
//   }
//
//   let res = [];
//
//   goRecursive = (nums, target, start, end) => {
//       if (start>=end) {
//         if (nums[end]==target) {
//           return res.push(end);
//         }else {
//           res.push(-1);
//           return res.push(-1);
//         }
//       }
//
//       let mid = Math.floor((start+end)/2);
//
//       if (nums[mid]==target) {
//         res.push(mid);
//         if (nums[mid+1]==target) {
//           return goRecursive(nums, target, mid+1, nums.length-1);
//         }
//         if (nums[mid-1]==target) {
//           return goRecursive(nums, target, 0, mid-1);
//         }
//
//       }
//
//       if (nums[mid]<target) {
//         return goRecursive(nums, target, mid+1, nums.length-1)
//       }else if (nums[mid]>target) {
//         return goRecursive(nums, target, 0, mid-1)
//       }
//
//
//
//
//
//   }
//
//   goRecursive(nums, target, 0, nums.length-1)
//
//   if (res.length==1) {
//     res.push(res[0]);
//   }
//
//   console.log(res.sort((a,b) => {
//     return a-b;
//   }));
//
//   res.sort((a,b) => {
//     return a-b;
//   })
//
//   return [res[0],res[res.length-1]]
//
//
//
// }

// Solution

searchRange = (nums, target) => {

  goRecursive = (nums, target, left) => {
    let start = 0;
    let end = nums.length;

    while (start<end) {
      let mid = Math.floor((start+end)/2);

      if (target<nums[mid]|| (left&&nums[mid]==target)) {
        end = mid;
      }else {
        start = mid+1;
      }
    }

    return start;
  }


let leftIndex = goRecursive(nums, target, true);
let rightIndex = goRecursive(nums, target, false)-1;

if (leftIndex==nums.length || nums[leftIndex]!==target) {
  return [-1,-1];
} else {
  console.log([leftIndex, rightIndex]);
  return [leftIndex, rightIndex];
}

}

searchRange([1],1)
