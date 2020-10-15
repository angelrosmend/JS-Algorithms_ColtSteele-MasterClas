var str = 'dracula'

let chars = [];
function reverse (str){
    if(!str.length) return chars.join('')
    chars.unshift(str[0])
    return reverse(str.slice(1))
}

console.log(reverse(str))
