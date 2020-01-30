//////////////////////
// 16) 3Sum Closest
//////////////////////
// sort the nums array
// loop through the array with two pointers
// depending whether it is less than or greater than the target, move pointers
// check sum before pushing into triplets
threeSumClosest = (nums, target) => {
  let triplets = [];
  let tripletsCompare = [];


  nums.sort((a,b) => {
    return a - b;
  })

  for (let i = 0; i < nums.length; i++) {
    let left = i+1;
    let right = nums.length -1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      triplets.push([nums[i], nums[left], nums[right]]);
      tripletsCompare.push(sum-target);

      if (sum < target) {
        left += 1;
      } else {
        right -= 1;
      }



    }

  }
  // console.log(triplets);
  // console.log(tripletsCompare);
  // console.log(Math.min(...tripletsCompare));
  // console.log(Math.min(...tripletsCompare.map(x => Math.abs(x))));

  if (tripletsCompare.indexOf(Math.min(...tripletsCompare.map(x => Math.abs(x)))) !==-1) {
    // console.log(target + Math.min(...tripletsCompare.map(x => Math.abs(x))));
    return Math.min(...tripletsCompare.map(x => Math.abs(x)))+target;
  } else {
    // console.log(target + Math.min(...tripletsCompare.map(x => Math.abs(x)))*-1);
    return Math.min(...tripletsCompare.map(x => Math.abs(x)))*-1 + target;
  }


}

threeSumClosest([-1,2,1,-4], 1)

//////////////////////
// 17) Letter combinations of a Phone Number
//////////////////////
// split string and replace with letter array
// loop through 2 numbers at a time

letterCombinations = (digits) => {
  let digitsArray = [];
  let letterCombo = [];
  let digitsToLetters = [
    [""], [""],["a", "b", "c"], ["d","e","f"], ["g","h","i"], ["j","k","l"], ["m","n","o"],
    ["p","q","r","s"], ["t","u","v"], ["w","x","y","z"]
  ];

  if (digits.length == 0) {
    // console.log([""]);
    return [];
  }

  let digitsSplit = digits.split("");
  // console.log(digitsSplit);

  for (var i = 0; i < digitsSplit.length; i++) {
    digitsArray.push(digitsToLetters[parseInt(digitsSplit[i])]);
  }

  // console.log(digitsArray);

  if (digitsArray.length == 1) {
    console.log(digitsArray[0]);
    return digitsArray[0];
  }

  for (var i = 0; i < digitsArray[0].length; i++) {
    for (var j = 0; j < digitsArray[1].length; j++) {
      letterCombo.push(digitsArray[0][i]+digitsArray[1][j]);
    }
  }
  digitsArray.shift();
  digitsArray.shift();
  digitsArray.unshift(letterCombo);
  letterCombo = [];
  // console.log(digitsArray);

  while (digitsArray.length>1) {
    for (var i = 0; i < digitsArray[0].length; i++) {
      for (var j = 0; j < digitsArray[1].length; j++) {
        letterCombo.push(digitsArray[0][i]+digitsArray[1][j]);
      }
    }

    digitsArray.shift();
    digitsArray.shift();
    digitsArray.unshift(letterCombo);
    letterCombo = [];

  }

  if (digitsArray.length == 1) {
    console.log(digitsArray[0]);
    return digitsArray[0];
  }


}

letterCombinations("");
