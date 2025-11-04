let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");

if(oddCollection && oddCollection.length > 0)
    for(let item of oddCollection)
        item.style.backgroundColor = "violet";

document.querySelector("tbody tr:first-child").style.backgroundColor = "blue";

document.querySelector("tbody tr:last-child").style.backgroundColor = "green";