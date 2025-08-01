let count=0;

const increase=document.getElementById("incBtn");
const decrease=document.getElementById("decBtn");
const reset=document.getElementById("resBtn");
const counter=document.getElementById("countLabel");

increase.onclick=function() {
    count++;
    counter.textContent=count;
}
reset.onclick=function() {
    count=0;
    counter.textContent=count;
}
decrease.onclick=function() {
    count--;
    counter.textContent=count;
}
