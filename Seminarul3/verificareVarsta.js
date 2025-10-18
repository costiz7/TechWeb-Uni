const aniNastere = [2000, 2003, 2010, 2001, 1999, 2020, 2017, 2004];


function verificareVarsta(arrAni){
    const anCurent = new Date().getFullYear(); //Anul local curent

    const arrVarste = arrAni.map((an) => anCurent - an); //Obtinem arrayul de varste relativ anului curent

    const arr18 = arrVarste.filter((varsta) => varsta >= 18); //Cream arrayului de varste peste 18

    console.log(`Varste peste 18 ani: ${arr18}`);
}

verificareVarsta(aniNastere);

