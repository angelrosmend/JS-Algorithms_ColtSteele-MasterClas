/* function outer(input){
    var outerScopedVariable = []
    
    function helper (helperInput){
        helper(helperInput--)
    }
    helper(input)

    ruturn outerScopedVariable;
    */

    //Collect the odd values in an array!

    
    function collectOddValues(arr){

        let result = [];

        function helper (helperInput){
            if(helperInput.length === 0){
               return;
            }
            if(helperInput[0] % 2 !== 0){
                result.push(helperInput[0])
            }
            helper(helperInput.slice(1))
        }
        helper(arr)
        return result;
    }

var arrNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(collectOddValues(arrNum))
