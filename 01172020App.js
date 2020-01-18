//////////////////////
// 1) Two Sum
//////////////////////
twoSum = (nums, target) => {
  let balanceNum = 0;
  let ans = [];

  for (var i = 0; i < nums.length; i++) {
    balanceNum = target - nums[i];
    if (nums.indexOf(balanceNum)!== -1 && nums.indexOf(balanceNum)!==i) {
      ans.push(i);
      ans.push(nums.indexOf(balanceNum));
      // console.log(ans);
      return ans;
    }
  }
}

twoSum([3, 2, 4], 6);

//////////////////////
// 2) Add Two Numbers
//////////////////////
addTwoNumbers = (l1, l2) => {
  let newL1 = [];
  let newL2 = [];
  let ans = 0;
  let ansArray = [];

  for (var i = l1.length-1; i >=0; i--) {
    newL1.push(l1[i]);
  }

  for (var i = l2.length-1; i >=0; i--) {
    newL2.push(l2[i]);
  }

  ans = parseInt(newL1.join("")) + parseInt(newL2.join(""));
  // console.log(ans);

  for (var i = ans.toString().length-1; i>=0; i--) {
    ansArray.push(parseInt(ans.toString().charAt(i)))
  }

  console.log(ansArray);
  console.log(typeof(ansArray)[0]);
  return ansArray;


}

addTwoNumbers([1,4,3], [3,6,4]);

//////////////////////
// 3) Longest Substring Without Repeating Characters
//////////////////////
lengthOfLongestSubstring = (s) => {
  let ans = [];
  let subString = [];

  for (var i = 0; i < s.length; i++) {
    subString = [];
    subString.push(s.charAt(i));
    // console.log(i);
    // console.log(subString);

    for (var j = i+1; j < s.length; j++) {

      if (!subString.includes(s.charAt(j))) {
        subString.push(s.charAt(j));
        console.log(subString);
      } else {
        break;
      }
    }
    ans.push(subString);

  }

  // console.log(ans);
  const ansLength = ans.map(x => x.length);
  // console.log(ansLength);
  // console.log(Math.max(...ansLength));

  if (s=="") {
    return 0;
  } else {
    return Math.max(...ansLength);
  }


}

lengthOfLongestSubstring(" ");


//////////////////////
// 7) Reverse Integer
//////////////////////
reverse = (x) => {
  let sign = x/Math.abs(x);
  let reversedInteger = [];
  let integerArrary = Math.abs(x).toString().split("")
  // console.log(integerArrary);

  for (var i = integerArrary.length-1; i >= 0; i--) {
    reversedInteger.push(integerArrary[i]);
  }

  // console.log(parseInt(reversedInteger.join(""))*sign);

  if (x===0) {
    return 0;
  } else {
    return parseInt(reversedInteger.join("")*sign);
  }

}

reverse(0);

//////////////////////
// 9) Pailindrome Number
//////////////////////
isPalindrome = (x) => {
  let sign = x/Math.abs(x);
  let reverseXArray = [];

  for (var i = Math.abs(x).toString().length-1; i >= 0; i--) {
    reverseXArray.push(Math.abs(x).toString()[i])
  }

  const reverseX = parseInt(reverseXArray.join(""));
  console.log(reverseX);
  console.log(typeof(reverseX));
  console.log(typeof(x));

  if (x===reverseX && sign !== -1) {
    console.log("true");
    return true;
  } else {
    console.log(false);
    return false;
  }


}

isPalindrome(10)
