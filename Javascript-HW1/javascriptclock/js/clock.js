

let name = prompt("Lütfen adınızı giriniz: ");
let info = document.querySelector("#myName");

info.innerHTML = name;

function showTime()
{
    setTimeout(showTime, 1000);
    
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    day === 0  ? day = "Pazar" :
    day === 1  ? day = "Pazartesi" :
    day === 2  ? day = "Salı" :
    day === 3  ? day = "Çarşamba" :
    day === 4  ? day = "Perşembe" :
    day === 5  ? day = "Cuma" : "Cumartesi"

    return document.getElementById("myClock").innerHTML = `${hour}:${min}:${second} ${day}`;
}

showTime();
