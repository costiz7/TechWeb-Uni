function compString(string1, string2){
    if(string1.length !== string2.length)
        return -1;

    string1 = string1.split("").sort().join("");
    string2 = string2.split("").sort().join("");

    let count = 0;
    for(let i = 0; i < string1.length; i++){
        if(string1.charAt(i) !== string2.charAt(i))
            count = count + 1;
    }

    return count;
}

console.log(compString("amma", "mama"));