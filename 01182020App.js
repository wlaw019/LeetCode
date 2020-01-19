//////////////////////
// 5) Longest Palindromic Substring
//////////////////////





longestPalindrome = (s) => {
  // start from the front and remove the last letter to get substring
  // reverse half of the string
  // check left half equals right half, if so push to PalindromArray
  let sArray = [];
  let palindromArray = [];
  let rightHalf = [];
  let leftHalf = [];
  let sModify = "";

  checkPalindrom = (sModify) => {
    for (var i = sModify.length; i >=0; i--) {
      sArray = sModify.split("").slice(0, i);
      leftHalf = sArray.slice(0, Math.floor(i/2))
      rightHalf = sArray.slice(Math.ceil(i/2));

      // console.log(sArray);
      // console.log(leftHalf);
      // console.log(rightHalf.reverse());
      // console.log(i);

      arrayMatch = (arr1, arr2) => {
        for (var i = 0; i < arr1.length; i++) {
          if (arr1[i]!==arr2[i]) return false;
        }

        return true;
      }



      if (arrayMatch(leftHalf, rightHalf.reverse())) {
        if (sArray.length > palindromArray.length) {
          palindromArray=sArray;
          // console.log(palindromArray);
          break;
        }

      }


    }
  }





  for (var i = 0; i <s.length; i++) {
    sModify = s.slice(i);
    // console.log(sModify);

    checkPalindrom(sModify);

  }

  console.log(palindromArray.join(""));
  return palindromArray.join("");

}

longestPalindrome("kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv");
