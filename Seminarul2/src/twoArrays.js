function twoArrays(array1, array2){
    let array3 = [];
    for(let i = 0; i < array1.length; i++){
        array3.push(array1[i], array2[i]);
    }

    return array3;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

console.log(twoArrays(array1, array2));