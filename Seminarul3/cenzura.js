const dictionar = ['este', 'minunat'];
const text = "javascript este minunat";

function cenzura(dictionar, text){
    let modified = text.split(' '); //Array pentru cuvintele din text

    //Parcurgem fiecare cuvant din dictionar pentru cenzura
    dictionar.forEach((cuvant) => {
        let index = modified.indexOf(cuvant); //preluam index-ul cuvantului din text

        //Verificam daca cuvrantul exista in text si daca este mai mare de 2 litere
        if(index !== -1 && modified[index].length > 2){
            //Cuvantul este actualizat: prima litera + '*' inmultit cu lungimea cuvantului fara prima si ultima litera (2) + ultima litera
            modified[index] = modified[index].charAt(0) + '*'.repeat(modified[index].length - 2) + modified[index].charAt(modified[index].length - 1);
        }
    });
    modified = modified.join(' '); //Reasignez arrayul cu un join

    return modified;
}

console.log(cenzura(dictionar, text));