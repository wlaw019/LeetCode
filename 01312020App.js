//////////////////////
// 26) Remove Duplicates from Sorted Array
//////////////////////
// remove duplicates by using Set
// put the object back into array form
// return length of new array

// removeDuplicates = (nums) => {
//   // nums = [...new Set(nums)];
//   nums = Array.from(new Set(nums));
//
//   console.log(nums);
//   return nums;
// }

removeDuplicates = (nums) => {
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]!==nums[i+1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  // console.log(nums.slice(0, count));
  return count;
}


removeDuplicates([1,1,2]);

//////////////////////
// 27) Remove Element
//////////////////////
removeElement = (nums, val) => {
  let count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i]!==val) {
      nums[count]=nums[i];
      count++;
    }
  }
  // console.log(nums);
  // console.log(count);
  return count;
}

removeElement([0,1,2,2,3,0,4,2],2)

//////////////////////
// 28) Implement strStr()
//////////////////////
strStr = (haystack, needle) => {
  console.log(haystack.indexOf(needle));
  return haystack.indexOf(needle);

}

strStr("hello", "ll")
