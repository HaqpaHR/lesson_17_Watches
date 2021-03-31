class Clock {
    constructor() {}
    
    update() {
            let clock = document.getElementById('clock');
            let date = new Date(); 
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
            clock.children[0].innerHTML = hours;
          
            let minutes = date.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;
            clock.children[1].innerHTML = minutes;
          
            let seconds = date.getSeconds();
            if (seconds < 10) seconds = '0' + seconds;
            clock.children[2].innerHTML = seconds;
           
            console.log(`${hours}:${minutes}:${seconds}`);
    
    }

    start() {
      this.update();
      this.timer = setInterval(() => this.update(), 1000);
    }
  }

let clo = new Clock()
clo.start()