function formatString(s, ...format){
    let modified = s;
    for(let i = 0; i < format.length; i++){
        if(modified.indexOf('{substantiv}') !== -1){
            modified = modified.replace('{substantiv}', format[i]);
            continue;
        }
        if(modified.indexOf('{adjectiv}') !== -1){
            modified = modified.replace('{adjectiv}', format[i]);
            continue;
        }
        
    }
    return modified;
}

console.log(formatString('un {substantiv} este {adjectiv}', 'calut', 'dragut'));