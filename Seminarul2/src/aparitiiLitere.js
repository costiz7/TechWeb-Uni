let sampleString = "the quick brown fox jumps over the lazy dog";

let aparitiiLitere = (text) => {
    const res = {};
    text = text.split(" ").join("");
    const letters = text.length;

    for (let char of text) {
        if (char in res) {
            res[char]++;
        } else {
            res[char] = 1;
        }
    }

    for (let char in res) {
        res[char] = res[char] / letters;
    }

    return res;
}

console.log(aparitiiLitere(sampleString));
