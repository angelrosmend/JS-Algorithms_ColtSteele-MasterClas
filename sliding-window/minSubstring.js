/*const findLongestSubstring = str => {
    let ret = 0;
    let seen = {};
    let i = 0;
  
    for (let j = 0; j < str.length; j++) {
      let char = str[j];
      if (seen[char]) i = Math.max(i, seen[char]);
      ret = Math.max(ret, j - i + 1);
      seen[char] = j + 1;
    }
  
    return ret;
  };
*/

function findLongestSubstring(str){
  let i = 0;
  let substring = {}
  let j = 0; 
  let len = 0
  let counter = 0

  while (i < str.length){
    counter[]
    if(substring[str[j]])
    j++
    i++
  }
  return len
}
console.log(findLongestSubstring('thisishowwedoit'))
