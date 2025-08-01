
const display = document.getElementById("display")
let startTime=0
let elapsedTime=0
let timmer=null
let isRunning=false


function Start(){

    if(!isRunning){
        startTime = Date.now()-elapsedTime
        timmer = setInterval(updateTimmer, 10)
        isRunning=true
    }
    console.log(startTime)
}

function Stop(){

    if(isRunning){
        clearInterval(timmer)
        elapsedTime=Date.now()-startTime
        isRunning=false
    }

}

function Reset(){
    clearInterval(timmer)
    startTime=0
    elapsedTime=0
    isRunning=false
    display.textContent="00:00:00:00"

}


function updateTimmer(){

    // let currentTime = Date.now();
    // elapsedTime = currentTime - startTime;

    // let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    // let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    // let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    // let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // hours = String(hours).padStart(2, "0");
    // minutes = String(minutes).padStart(2, "0");
    // seconds = String(seconds).padStart(2, "0");
    // milliseconds = String(milliseconds).padStart(2, "0");

    // display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    let currentTime=Date.now()
    elapsedTime=currentTime-startTime

    let hours=Math.floor(elapsedTime / (1000*60*60) )
    let minutes=Math.floor(elapsedTime / (1000*60) % 60)
    let seconds=Math.floor(elapsedTime / 1000 % 60)
    let milliseconds=Math.floor(elapsedTime % 1000 / 10)

    hours=String(hours).padStart(2,"0")
    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    milliseconds=String(milliseconds).padStart(2,"0")

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
    console.log(display)

}