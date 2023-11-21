let timerdisplay = document.querySelector(".display");

let interval;
let sec = 0;
let min = 0;
let hr = 0;

const startButton = () => {
    interval = setInterval(() => {
       if (sec < 59){
        sec++;
       } 
       else if(min >= 59){
        hr++;
        min = 0;
       }
       else{
        sec = 0;
        min++;
       }

       const hour = String(hr).padStart(2, "0");
       const minutes = String(min).padStart(2, "0");
       const seconds = String(sec).padStart(2, "0");

       timerdisplay.innerText = `${hour} : ${minutes} : ${seconds}`;
    }, 1000);
}

const stopButton = () => {
    clearInterval(interval);
}

const resetButton = () =>{
    timerdisplay.innerHTML = `00:00:00`;
}

