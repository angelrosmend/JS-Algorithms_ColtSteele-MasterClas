         // i
let str1 = "abc"
        //  j
var str2 = "abracadabra"


function isSubsequence(str1, str2){
    let sequence = []
    var i = 0;
    while(i < str1.length){
        for(var j = 0; j < str2.length; j++){
            if(str1[i] == str2[j]){
                i++
                sequence.push(str2[j])
                //console.log(i + 'i')
            }
            //console.log(j + 'j')
        }
       return sequence.join('') === str1 ?  true : false;
    }
}

console.log(isSubsequence(str1, str2))