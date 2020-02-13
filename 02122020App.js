//////////////////////
// 38) Count and Say
//////////////////////
// count number of unique digits and make string


countAndSay = (n) => {
  let ansFinal = "";
  let recursiveCount = 1;


  if (n==1) {
    return "1";
  }



  goRecursive = (n, res) => {
    let count = 1;
    // let res = "1";
    let ans = "";

    // console.log(res.split(""));

    while (recursiveCount<n) {
      for (var i = 0; i < res.split("").length; i++) {
        if (res.split("")[i]==res.split("")[i+1]) {
          count++;
        }else {
          ans=ans + count.toString()+res.split("")[i];
          // console.log(ans);
          count=1;
        }
      }
      ansFinal = ans;
      recursiveCount++;
      goRecursive(n, ans)
    }
  }

  goRecursive(n, "1");

  console.log(ansFinal);
  return ansFinal;

}

countAndSay(4);
