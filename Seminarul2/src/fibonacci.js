let fibonacci = (n) => {
    if (n < 0)
        return null;
    if(n === 0)
        return 0;
    if(n === 1)
        return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
} 

if(process.argv.length < 3){
    console.log("not enough params");
} else{
    console.log(fibonacci(parseInt(process.argv[2])));
}