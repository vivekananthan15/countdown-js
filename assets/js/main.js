const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function updateDays() {
    const currentYear = new Date().getFullYear();

    const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
    const currentDate = new Date();
    const differDate = newYear - currentDate;
    const day=Math.floor(differDate/1000/60/60/24);
    const hrs=Math.floor((differDate/1000/60/60)%24);
    const min=Math.floor((differDate/1000/60)%60);
    const sec=Math.floor((differDate/1000)%60);
    //console.log(day+' '+hrs+' '+min+sec);
    days.innerHTML=day<10?"0"+day:day;
    hours.innerHTML=hrs<10?"0"+hrs:hrs;
    minutes.innerHTML=min<10?"0"+min:min;
    seconds.innerHTML=sec<10?"0"+sec:sec;
}
setInterval(updateDays, 1000);
/* 
1000ms=1s
60s=1m
60m=1hr
24hrs=1day
*/