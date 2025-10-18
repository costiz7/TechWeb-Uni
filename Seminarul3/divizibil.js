const arrNumere = [18, 10, 15, 100, 54, 81, 36, 72, 93, 45];
const divizor = 3;

function divizibil(arrNumere, divizor){
    const arrMultipli = arrNumere.filter((numar) => numar % divizor === 0);
    const suma = arrMultipli.reduce((accumulator, currValue) => accumulator + currValue, 0);

    console.log(`Suma numerelor divizible cu ${divizor} din array este: ${suma}`);
}

divizibil(arrNumere, divizor);