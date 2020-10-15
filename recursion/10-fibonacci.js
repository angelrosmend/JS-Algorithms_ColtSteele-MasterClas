let F0 = 0
let F1 = 1
function getFibonacci(num){
    let Fn = F0 + F1
    if(num <= 2) return Fn
    F0 = F1
    F1 = Fn
    return getFibonacci(num-1)
}

console.log(getFibonacci(10))