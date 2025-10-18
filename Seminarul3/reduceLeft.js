
const reduce = (arr, callback, initial) => {
    let accumulator = initial;
    for(const element of arr){
        accumulator = callback(accumulator, element);
    }

    return accumulator;
}
const arr = [1, 2, 3, 4];
const suma = reduce(arr, (acc, elem) => acc + elem, 0);
console.log(suma);