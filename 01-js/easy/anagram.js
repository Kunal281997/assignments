/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  str1
    .toLowerCase()
    .split("")
    .sort()
    .forEach((element) => {
      if (!obj1[element]) {
        obj1[element] = 1;
      } else {
        obj1[element] += 1;
      }
    });
  str2
    .toLowerCase()
    .split("")
    .sort()
    .forEach((element) => {
      if (!obj2[element]) {
        obj2[element] = 1;
      } else {
        obj2[element] += 1;
      }
    });
  console.log("new Objects-+-+-+-+--+" + str1 + " " + str2, obj1, obj2);
  for (let key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) {
      console.log(`false-+-++-+-${key}`, obj1[key], obj2[key]);
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
