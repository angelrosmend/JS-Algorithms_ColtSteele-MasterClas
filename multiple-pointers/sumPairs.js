function sumPairs(arr){
    let left = 0;
    let right = arr.length -1;

    while ( left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0) return [arr[left], arr[right]]
        else if(sum > 0) right--; 
        else left++;
    }
    return false

}

var sortedArray = [-4,-3,-2,0,1,2,5]
console.log(sumPairs(sortedArray))