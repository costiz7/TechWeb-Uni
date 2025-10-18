const getFilteredObjects = (array, object) => {
    return array.sort((a, b) => a[object] - b[object]);
}

const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Acer',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    },
]

const result = getFilteredObjects(laptops, "ram");
console.log(result);