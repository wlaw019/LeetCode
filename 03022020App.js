//////////////////////
// 49) Group Anagrams
//////////////////////
// groupAnagrams = (strs) => {
//   let res = [];
//
//   for (var i = 0; i < strs.length; i++) {
//     let count = 0;
//
//     for (var j = 0; j < strs[i].length; j++) {
//       count += strs[i].charAt(j).charCodeAt();
//     }
//
//     if (res[count]) {
//       res[count].push(strs[i]);
//     } else {
//       res[count] = [strs[i]];
//     }
//
//     console.log(res);
//   }
//
//   console.log(res.filter(function(){return true}));
//   return res.filter(function(){return true})
//
// }

groupAnagrams = (strs) => {
  let res = {};

  for (var i = 0; i < strs.length; i++) {
    if (res[strs[i].split("").sort().join("")]) {
      res[strs[i].split("").sort().join("")].push(strs[i])
    } else {
      res[strs[i].split("").sort().join("")] = [strs[i]]
    }

  }

  console.log(Object.values(res));
  return Object.values(res);


}

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
