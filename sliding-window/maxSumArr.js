function maxSubarraySum (arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num)return null;
    for(let i = 0; i < num; i++){
        console.log(maxSum, 'max', i, 'i')
        maxSum += arr[i]
    }
    tempSum = maxSum;

    console.log(tempSum,1)
    for(let i = num; i < arr.length; i++){
 
    }
    return maxSum
}

console.log(maxSubarraySum([6,3,4,5,7,3],2)); //7