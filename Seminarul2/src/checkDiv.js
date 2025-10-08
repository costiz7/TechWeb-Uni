function checkDivisible(n, divisor){
    if(n % divisor === 0){
        return true;
    } else{
        return false;
    }
}

console.log(checkDivisible(50, 25));
console.log(checkDivisible(5, 3));

