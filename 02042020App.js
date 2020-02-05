//////////////////////
// 33) Search in Rotated Sorted Array
//////////////////////
// find indexOf Min. to identify pivot

// search = (nums, target) => {
//   let indexOfMin = nums.indexOf(Math.min(...nums));
//   console.log(indexOfMin);
//
//   if (target>nums[indexOfMin-1]||nums.length==0) {
//     console.log(-1);
//     return -1;
//   } else if (target>=nums[0]) {
//     // console.log(nums.slice(0,indexOfMin));
//     // console.log(nums.slice(0,indexOfMin).indexOf(target));
//     if (nums.length==1) {
//       return nums.indexOf(target)
//     } else {
//       return nums.slice(0,indexOfMin).indexOf(target)
//     }
//
//   } else if(target>nums[nums.length-1]) {
//     console.log(-1);
//     return -1;
//   }else {
//     console.log(nums.slice(indexOfMin));
//     console.log(nums.slice(indexOfMin).indexOf(target)+indexOfMin);
//     return nums.slice(indexOfMin).indexOf(target)+indexOfMin
//   }
// }
//
// search([1],1)

// Solution
searchIndex = (nums, target, start, end) => {
  if (start>=end) {
    if (nums[end]==target) {
      console.log(end);
      return end;
    }else {
      console.log(-1);
      return -1;
    }
  }

  const mid = Math.floor((start+end)/2);

  if (nums[mid]==target) {
    console.log(mid);
    return mid;
  } else if (nums[start]<=target && target<=nums[mid] && nums[start]<nums[mid]||
             nums[start]>nums[mid]&&!(nums[mid]<target && target<=nums[end])) {
    return searchIndex(nums, target, start, mid);
  } else {
    return searchIndex(nums, target, mid+1, end);
  }
}

search = (nums, target) => {
  return searchIndex(nums, target, 0, nums.length-1);
}

search([4,5,6,7,0,1,2],0);
