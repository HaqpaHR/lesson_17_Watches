function time() {
     const time = new Date();
     let hours = time.getHours();
     if (hours < 10) hours = '0' + hours;

     let minutes = time.getMinutes();
     if (minutes < 10) minutes = '0' + minutes;

     let seconds = time.getSeconds();
     if (seconds < 10) seconds = '0' + seconds;

     console.clear()
     console.log(`${hours}:${minutes}:${seconds}`);

     str = hours + ":" + minutes + ":" + seconds;

     return str
}

function makeContainer(time) {
    const timeDiv = document.createElement("div");
    timeDiv.className = "clock";
      for(let i = 0; i < time.length; i++){
         const div = document.createElement("div");
         div.className = "time" + i;
         timeDiv.appendChild(div)
      }
    return timeDiv;
}


function timeShowOnScreen(time){
    const clock = document.body.querySelector('.clock');
    if(clock) {
      const clockDivs = clock.querySelectorAll("div");
      for(let i = 0; i < time.length; i++){
        clockDivs[i].innerText = time[i];
      }
    }
}

document.body.appendChild(makeContainer(time()));

setInterval(() => timeShowOnScreen(time()), 1000);
