//////////////////////
// 20) Valid Parentheses
//////////////////////
// traverse array to check mirror
// if yes slice out off the string then repeat
// isValid = (s) => {
//   if (s.length === 0) {
//     return true;
//   }
//   for (var i = 0; i < s.length; i++) {
//     console.log(s.charAt(i));
//     console.log(i);
//     if (s.charAt(i)=="(" && s.charAt(i+1)==")"||
//         s.charAt(i)=="{" && s.charAt(i+1)=="}"||
//         s.charAt(i)=="[" && s.charAt(i+1)=="]") {
//           sArray = s.split("");
//           sArray.splice(i, 2);
//           s = sArray.join("");
//
//           i=-1;
//           console.log(s);
//         }
//
//     if (i == s.length-1 && s.length !== 0) {
//       console.log(false);
//       return false
//     } else if (s.length==0) {
//       console.log(true);
//       return true;
//     }
//   }
//
//
//
// }
//
// isValid("{[]}()")

// More optimal solution
// isValid = (s) => {
//   let openParen = [];
//   let pushOnce = false;
//
//   if (s.length === 0) {
//       return true;
//     }
//
//   for (var i = 0; i < s.length; i++) {
//     if (s.charAt(i)=="(" ||s.charAt(i)=="{" ||s.charAt(i)=="[") {
//       openParen.push(s.charAt(i));
//       pushOnce = true;
//       // console.log(openParen);
//     } else if (s.charAt(i)==")" && openParen[openParen.length-1]=="("||
//                s.charAt(i)=="}" && openParen[openParen.length-1]=="{"||
//                s.charAt(i)=="]" && openParen[openParen.length-1]=="[") {
//                 openParen.pop();
//                 // console.log(openParen);
//     } else {
//       // console.log(false);
//       return false;
//     }
//
//   }
//     if (openParen.length==0 && pushOnce == true) {
//       // console.log(true);
//       return true;
//     } else {
//       // console.log(false);
//       return false;
//     }
// }
//
// isValid("(])")

//////////////////////
// 21) Merge Two Sorted Lists
//////////////////////
mergeTwoLists = (l1, l2) => {
  let newArray = [];

  while (l1.length!==0 || l2.length!==0) {
    if (l1.length==0) {
      newArray.push(l2[0]);
      l2.splice(0,1);
      console.log(l2);
    } else if (l2.length==0) {
      newArray.push(l1[0]);
      l1.splice(0,1);
      console.log(l1);
    } else if (l1.length>0 && l2.length>0) {
      if (l1[0]<=l2[0]) {
        newArray.push(l1[0]);
        l1.splice(0,1);
        console.log(l1);
      } else {
        newArray.push(l2[0]);
        l2.splice(0,1);
        console.log(l2);
      }
    }


  }
  console.log(newArray);
  return  newArray;
}

mergeTwoLists([1,2,4],[1,3,4]);
