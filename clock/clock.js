

function updateClock(){
    let date = new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes().toString().padStart(2,0)
    let seconds=date.getSeconds().toString().padStart(2,0)
    let meridiam = hours>=12?"PM":"AM"
    
    hours=hours%12||12
    hours=hours.toString().padStart(2,0)

    const time=`${hours}:${minutes}:${seconds} ${meridiam}`

    document.getElementById("clock").textContent=time
}

updateClock()// without this line it shows 00:00:00 at start
setInterval(updateClock, 1000)