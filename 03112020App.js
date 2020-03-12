//////////////////////
// 58) Length of Last Word
//////////////////////
lengthOfLastWord = (s) => {
  sTrim = s.trim();
  console.log(sTrim.length-1-sTrim.lastIndexOf(" "));
  return sTrim.length-1-sTrim.lastIndexOf(" ")


}

lengthOfLastWord("Hello World  ")
