const arr = [10, 12, 30, 21];

function media(arr){
    return (arr.reduce((accumulator, current) => accumulator + current) / arr.length).toFixed(2);
}

console.log(media(arr));
