//////////////////////
// 58) Length of Last Word
//////////////////////
// lengthOfLastWord = (s) => {
//   sTrim = s.trim();
//   console.log(sTrim.length-1-sTrim.lastIndexOf(" "));
//   return sTrim.length-1-sTrim.lastIndexOf(" ")
//
//
// }
//
// lengthOfLastWord("Hello World  ")


// console.log(employees[0].reports[0].reports[0]);

RemoveLastReport = (s) => {
  let employees = [
    {
      name: "Aiden",
      reports:[{name:"Nico", reports:[{name: "Katherine"}]}]
    }
  ]

  // let modifyS = JSON.stringify(s);
  modifyS = s + ".reports[0]"
  console.log(modifyS);

  // let ans = eval(modifyS)

  console.log(eval(modifyS));

  // console.log(s.lastIndexOf("reports"));
  // let sliceIndex = s.lastIndexOf("reports");
  //
  // console.log(s.slice(0, sliceIndex));
}

// RemoveLastReport('employees[0]reports[1]reports[5]reports[3]')
RemoveLastReport("employees[0].reports[0]")
