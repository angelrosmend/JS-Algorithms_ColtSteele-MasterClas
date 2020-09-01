function areThereDuplicates(...args){
    let array = [...args];
    let frecuencyCounter = {}

    for(var i = 0; i < array.length; i++){
        let number = array[i];
        frecuencyCounter[number] ? frecuencyCounter[number] +=1 : frecuencyCounter[number] = 1;
        if(frecuencyCounter[number] > 1) return true
    }
    return false;
}

var check = areThereDuplicates(1,3,4,5,5)
console.log(check)