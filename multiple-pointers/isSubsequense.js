         // i
let str1 = "abc"
        //  j
var str2 = "abracadabra"


function isSubsequense(str1, str2){
    let sequense = []
    var i = 0;
    while(i < str1.length){
        for(var j = 0; j < str2.length; j++){
            if(str1[i] == str2[j]){
                i++
                sequense.push(str2[j])
                //console.log(i + 'i')
            }
            //console.log(j + 'j')
        }
       return sequense.join('') === str1 ?  true : false;
       // else return false
    }
}

console.log(isSubsequense(str1, str2))