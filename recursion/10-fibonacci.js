let i = 0
let j = 1
function getFibonacci(num){
    let fib = i + j
    if(num <= 2) return fib
    i = j
    j = fib
    return getFibonacci(num-1)
}

console.log(getFibonacci(1))