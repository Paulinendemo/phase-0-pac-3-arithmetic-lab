function add(x,y) {
    return x+y
}
function subtract(x,y) {
    return x-y
}
function multiply(x,y) {
    return x*y
}
function divide(x,y) {
    return x/y
}
function increment(n) {
    n++
    return n
}
function decrement(n){
    n--
    return n
}
function makeInt(n) {
    return parseInt(n,10)
}
function preserveDecimal(n){
    return parseFloat(n)
}

add (10,5)
subtract(10,5)
divide(10,3)
multiply(10,5)
increment(5)
decrement(4)

console.log(makeInt("Hello"))
console.log(preserveDecimal(4.444))