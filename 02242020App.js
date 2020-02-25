//////////////////////
// 43) Multiply Strings
//////////////////////
// multiply = (num1, num2) => {
//   let res = "";
//
//   res = (num1*1) * (num2*1);
//   console.log(res.toString());
//   return res.toString();
// }

multiply = (num1, num2) => {
  console.log((BigInt(num1)*BigInt(num2)).toString());
  return (BigInt(num1)*BigInt(num2)).toString();
}

multiply("123456789", "987654321");

let permuteRecursive = function (nums, arr, count) {
    if(nums.length - 1 === count) arr.push(nums.slice(0));
    else {
        for(let i = count; i < nums.length; i += 1) {
          console.log(i);
          console.log(count);
          console.log(arr);
            [nums[i], nums[count]] = [nums[count], nums[i]];
            console.log(nums);
            permuteRecursive(nums, arr, count + 1);
            [nums[i], nums[count]] = [nums[count], nums[i]];
        }
    }
};

var permute = function(nums) {
    let result = [];
    permuteRecursive(nums, result, 0);
    return result;
};

permute([1,2,3])
