//////////////////////
// 18) 4Sum
//////////////////////
// sort the nums array
// loop through array fixing 2 indexes
// move left and right pointers depending on the comparisons with target
fourSum = (nums, target) => {
  if (nums.length<4) {
    return [];
  }

  let quadruplets = [];

  nums.sort((a, b) => {
    return a-b;
  })
  // console.log(nums);

  for (var i = 0; i < nums.length-1; i++) {
    for (var j = i+1; j < nums.length-1; j++) {
      let left = j+1;
      let right = nums.length-1;

      while (left<right) {
        const sum = nums[i]+nums[j]+nums[left]+nums[right];

        if (sum<target) {
          left += 1;
        } else if (sum>target) {
          right -= 1;
        } else if (sum==target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]])
          left += 1;
        }
      }
    }


  }

// console.log(Array.from(new Set(quadruplets.map(JSON.stringify)), JSON.parse));
return Array.from(new Set(quadruplets.map(JSON.stringify)), JSON.parse);
}

fourSum([-3,-2,-1,0,0,1,2,3], 0);

//////////////////////
// 22) Generate Parentheses
//////////////////////
generateParenthesis = (n) => {
  let res = [];

  goRecusive = (left, right, s) => {
    if (left>right) {
      return;
    }

    if (left == 0 && right == 0) {
      res.push(s);
      return;
    }

    console.log(s);
    if (left>0) {
      goRecusive(left-1, right, s+"(");
    }
    if (right>0) {
      goRecusive(left, right-1, s+")");
    }
  }

  goRecusive(n, n, "");
  console.log(res);
  return res;
}

generateParenthesis(3);


// Solution
// function generateParenthesis(n) {
//   const res = [];
//
//   function go(l, r, s) {  // l: left remaining, r: right remaining
//     if (l > r) return;  // The number of '(' should be always >= ')'
//
//     if (l === 0 && r === 0) {
//       res.push(s);
//       return;
//     }
//
//     if (l > 0) go(l - 1, r, s + '(');
//     console.log(s);
//     if (r > 0) go(l, r - 1, s + ')');
//     console.log(s);
//   }
//
//   go(n, n, '');
//   console.log(res);
//   return res;
// }

// generateParenthesis(3);
