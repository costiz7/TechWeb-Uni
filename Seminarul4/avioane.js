async function recupereazaZboruriRomania(){
    const response = await fetch("https://opensky-network.org/api/states/all?lamin=43.6&lomin=20.2&lamax=48.3&lomax=29.7");
    const data = await response.json();
    return data.states;
}

recupereazaZboruriRomania().then(object => {
    object.forEach(arr => console.log(arr[1].trim()));
});