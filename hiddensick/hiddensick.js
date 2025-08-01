const myButton=document.getElementById("myButton")
const myImg=document.getElementById("myImg")


myButton.addEventListener("click", event=>{

    if(myImg.style.display==="none"){
        myImg.style.display="block"
        myButton.textContent="Hide"
        console.log("Working")
    }
    else {
        myImg.style.display="none"
        myButton.textContent="Show"
    }
    console.log("Working")
})