//grab id
let inputBtn = document.getElementById("input-btn")

//add event listener to id and log message saying button is clicked from event listener
inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addEventListener")
})