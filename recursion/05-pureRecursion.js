function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}
var arrNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(collectOddValues(arrNum))