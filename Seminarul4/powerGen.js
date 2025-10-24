function powerGen() {
    const cache = {};

    const pow = (base, exp) => {
        const key = `${base}^${exp}`;
        if(cache[key] !== undefined) {
            console.log('found' + key);
            return cache[key];
        }

        if(exp === 0) return 1;
        if(exp === 1) return base;

        console.log('calculating ' + key);
        cache[key] = base * pow(base, exp - 1);
        return cache[key];
    }

    return pow;
}

const pow = powerGen();
console.log(pow(2, 5));
console.log(pow(2, 3));
console.log(pow(2, 5));