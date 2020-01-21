//////////////////////
// 8) String to Integer (atoi)
//////////////////////
// split string into array
// traverse array including optional +/- sign
// break when array[i] is not an integer
// if loop to check integer range

myAtoi = (str) => {
  let atoiArray = [];
  let strArray = str.split("");
  console.log(strArray);

  for (var i = 0; i < strArray.length; i++) {
    console.log("i="+i);
    if (atoiArray.length==0 && strArray[i]!==" ") {
      if (strArray[i]=="+"||strArray[i]=="-") {
        // console.log("hello");
        atoiArray.push(strArray[i]);
      } else if (!isNaN(strArray[i])) {
        atoiArray.push(strArray[i]);
        console.log(atoiArray);
      } else {
        console.log(0);
        return 0;
      }
    } else if (atoiArray.length>0) {
      if (!isNaN(strArray[i]) && strArray[i]!==" ") {
        atoiArray.push(strArray[i]);
        console.log(atoiArray);
      } else {
        break;
      }
    }

  }
  if (atoiArray.length==0||isNaN(atoiArray.join(""))) {
    console.log(0);
    return 0;
  } else if (atoiArray.join("")<Math.pow(-2,31)) {
    console.log(Math.pow(-2,31));
    return Math.pow(-2,31);
  }else if (atoiArray.join("")>Math.pow(2,31)-1) {
    return Math.pow(2,31)-1;
  }
  console.log(atoiArray.join(""));

  return atoiArray.join("");
}

myAtoi("  0000000000012345678")
