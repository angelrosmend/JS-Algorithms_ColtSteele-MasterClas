function averagePair(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while( left < right ){
        let average = arr[left] + arr[right] / 2;
        if(average === target){
            return true
        }else {
            right--;
            left++;
        }
    }
    return false
}
console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([1,2,3], 4))