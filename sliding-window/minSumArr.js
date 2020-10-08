
/*
function minSubarrayLen(arr, num){
    let minLen = 0;
    let tempLen = 0;
    let tempSum = 0;
    let minSum = 0
    let i = 0;

while(i < arr.length){
    for( j = i; minSum < num; j++){
        minSum += arr[j]
        console.log(minSum)
        minLen = j
    }
    tempLen = minLen
    minLen = Math.min(minLen, tempLen);
    i++
}
return minLen

}
*/

const minSubArrayLen = (arr, num) => {
    let total = 0; // start
    let start = 0; // end
    let total = 0;
    let minLen = Infinity;
  
    while (start < arr.length) {
      if (total < num && end < arr.length) {
        total += arr[j];
        end++;
      } else if (sum >= num) {
        minLen = Math.min(minLen, end - start);
        sum -= arr[i];
        start++;
      } else {
        break;
      }
    }
  
    return ret === Infinity ? 0 : ret;
  };

console.log(minSubArrayLen([2,3,1,2,4,3],7)); //2
console.log(minSubArrayLen([2,1,1,3,5,5],10)); //2
console.log(minSubArrayLen([9,3,1,3,5,7],15)); //2

