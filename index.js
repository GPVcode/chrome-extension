//grab id
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.dweller.com", "www.greatlead.com"]
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//add event listener to id and log message saying button is clicked from event listener    
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
}

)

for(let i = 0; i < myLeads.length; i++){
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //create element
    const newEl = document.createElement("li");
    //set text content
    newEl.innerHTML = myLeads[i]
    //append to ul
    ulEl.appendChild(newEl)
}