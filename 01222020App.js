//////////////////////
// 12) Integer to Roman
//////////////////////
// Find out number of digit
// traverse array to find roman numeral
// Calculate remaining and repeat

intToRoman = (num) => {
  let numArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let romanAns = "";
  let n = 0;

  for (var i = 0; i < numArray.length && num!==0; i++) {
    n = Math.floor(num/numArray[i]);

    if (n!==0) {
      for (var j = 1; j <= n; j++) {
        romanAns += romanNumeral[i];
        // console.log(romanAns);
      }
    }

    num = num%numArray[i];
  }
  // console.log(romanAns);
  return romanAns;
}

intToRoman(9);

//////////////////////
// 15) 3Sum
//////////////////////
// Identify all unqiue combo
// Only push to triplets when sum = 0
threeSum = (nums) => {
  let temp = [];
  let sum;
  let triplets = [];

  if (nums.length<3) {
    return triplets;
  } else if (nums.every(a => a ===0)) {
    console.log([0,0,0]);
    return [[0,0,0]];
  }

  for (var k = 0; k < nums.length; k++) {
      temp.push(nums[k]);

      for (var i = k+1; i < nums.length; i++) {
        temp.push(nums[i]);
        for (var j = i+1; j < nums.length; j++) {
          temp.push(nums[j]);
          sum = temp.reduce((a, b) => a + b)
          console.log(temp);
          if (sum===0) {
            if (triplets.some(function(ele){
              return JSON.stringify(ele) === JSON.stringify(temp.sort());
            }))  {

            } else {
              triplets.push(temp.sort());
            }

          }
          temp = [nums[k], nums[i]];
        }
        temp = [nums[k]];



      }
      temp = [];
  }




  console.log(triplets);
  return triplets;


}

threeSum([12,5,-12,4,-11,11,2,7,2,-5,-14,-3,-3,3,2,-10,9,-15,2,14,-3,-15,-3,-14,-1,-7,11,-4,-11,12,-15,-14,2,10,-2,-1,6,7,13,-15,-13,6,-10,-9,-14,7,-12,3,-1,5,2,11,6,14,12,-10,14,0,-7,11,-10,-7,4,-1,-12,-13,13,1,9,3,1,3,-5,6,9,-4,-2,5,14,12,-5,-6,1,8,-15,-10,5,-15,-2,5,3,3,13,-8,-13,8,-5,8,-6,11,-12,3,0,-2,-6,-14,2,0,6,1,-11,9,2,-3,-6,3,3,-15,-5,-14,5,13,-4,-4,-10,-10,11]);

// solution
var threeSum = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    const triplets = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        const target = -1 * nums[i];

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);

                left += 1;
                right -= 1;

            } else if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return removeDuplicates(triplets);
};

function removeDuplicates(arr) {
    const seen = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const hash = arr[i].join(' ');
        if (!seen[hash]) {
            seen[hash] = true;
            result.push(arr[i]);
        }
    }
    return result;
}
