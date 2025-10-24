class NumerePare {
    #value;
    constructor(value) {
        this.#value = value;
    }

    get value() {
        return this.#value;
    }

    get next() {
        this.#value += 2;
        return this.#value;
    }
}


//Test 
const sir = new NumerePare(2);
console.log(`sir[0] = ${sir.value}`);
for(let i = 1; i < 10; i++) {
    console.log(`sir[${i}] = ${sir.next}`);
}
