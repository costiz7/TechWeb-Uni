const increaseSalary = (array, percent) => {
    if(!Array.isArray(array) || typeof percent !== 'number'){
        throw new Error("!!Tipurile parametrilor sunt invalide, array trebuie sa fie de tip 'array', iar percent trebuie sa fie de tip 'number'!!");
    }
    console.log(`Vechile salarii: ${array}`);
    array.forEach((salariu) => salariu + (salariu * percent) / 100);
    for(let i = 0; i < array.length; i++){
        array[i] = array[i] + (array[i] * percent) / 100;
    }
    console.log(`Noile salarii: ${array}`);
}

try {
    increaseSalary([1200, 2500, 3200], 10);
    increaseSalary(10, [1200, 2500, 3200]);
} catch (err) {
    console.log(err)
}