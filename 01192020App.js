//////////////////////
// 12) Roman to Integer
//////////////////////
// traverse the string
// test the 6 subtraction instances and translate to number
// otherwise translate single roman numberal to number
// add all the numnbers

romanToInt = (s) => {
  let sum = 0;
  let subtractionCases = ["IV", "IX", "XL", "XC", "CD", "CM"];

  for (var i = 0; i < s.length; i++) {

    if (subtractionCases.includes(s[i]+s[i+1])) {
      switch (s[i]+s[i+1]) {
        case "IV":
          sum += 4;
          i++;
          break;
        case "IX":
          sum += 9;
          i++;
          break;
        case "XL":
          sum += 40;
          i++;
          break;
        case "XC":
          sum += 90;
          i++;
          break;
        case "CD":
          sum += 400;
          i++;
          break;
        case "CM":
          sum += 900;
          i++;
          break;

        default:
      }
    } else {
      switch (s[i]) {
        case "I":
          sum += 1;
          break;
        case "V":
          sum += 5;
          break;
        case "X":
          sum += 10;
          break;
        case "L":
          sum += 50;
          break;
        case "C":
          sum += 100;
          break;
        case "D":
          sum += 500;
          break;
        case "M":
          sum += 1000;
          break;

        default:
      }
    }



  }
  // console.log(sum);
  return sum;
}

romanToInt("MCMXCIV");

//////////////////////
// 6) ZigZag Conversion
//////////////////////
// Initialize the number of arrays needed for problem
// push character into appropiate array depending on numRows

convert = (s, numRows) => {
  let finalArray = [[]];
  let k = 0;

  if (numRows===1) {
    return s;
  }

  for (var i = 1; i <= numRows; i++) {
    finalArray.push([]);
  }
  // console.log(finalArray);

  while (s.length>0) {
    k=0;
    for (var i = 0; i < numRows; i++) {
      finalArray[i+1].push(s.charAt(i));
    }
    s = s.slice(numRows);
    // console.log(s);

    for (var i = numRows-1; i >1; i--) {
      finalArray[i].push(s.charAt(k));
      k++;
    }
    s = s.slice(numRows-2);
    // console.log(s);
  }



  // console.log(finalArray);
  // console.log(finalArray.flat().join(""));
  // return finalArray.flat().join("");

  let finalArrayFlat = [];
  for (var i = 0; i < finalArray.length; i++) {
    finalArrayFlat.push(finalArray[i].join(""))
  }
  // console.log(finalArrayFlat.join(""));
  return finalArrayFlat.join("")
}

convert("PAYPALISHIRING", 5)

//////////////////////
// 14) Longest Common Prefix
//////////////////////
// traverse through every word in array starting first letter
// push into commonPrefix array in true for all
// otherwise return

longestCommonPrefix = (strs) => {
  console.log(strs.length);
  if(strs == null || strs.length ==0){
      return "";
  } else if (strs.length == 1) {
      return strs[0];
  }

  let commonPrefix = [];
  let maxStringLength = strs.sort((x, y) => {return x.length - y.length})[0].length;
  console.log(maxStringLength);

  if (maxStringLength==0) {
    return "";
  }



    for (var k = 0; k < maxStringLength; k++) {
      console.log("k="+k);
      for (var i = 0; i < strs.length-1; i++) {
        console.log("i="+i);
        if (strs[i].charAt(k)==strs[i+1].charAt(k)) {
          if (i==strs.length-2) {
            commonPrefix.push(strs[i+1].charAt(k));
            console.log(commonPrefix);
          }
        } else {
          console.log(commonPrefix.join(""));
          return commonPrefix.join("");
        }
      }
    }

return commonPrefix.join("");
}

longestCommonPrefix(["c","c"]);
