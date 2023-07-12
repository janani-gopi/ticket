//ask the user whether they are going to view/add/change the status of the ticket
//ticket info : name/id/phone/issue/status
//if view =>
  //ask for the id
  //search the input id in data
  //get and display all the data
//if add=>
   //create a new object
   //input all the info necessary
//if change the status =>
   //ask for the id for what you wanted to change the status
   //show the options (submitted/cleared)
   //selected change is reflected on the main data
//changes reflected in main data
const userId = document.getElementById("userId")
const buttonAction = document.getElementById("enterBtn")
const userName = document.getElementById("name")
const phone = document.getElementById("phone")
const id = document.getElementById("id")
const issue= document.getElementById("issue")
const result = document.getElementById("result")

let mainData = 
   [{name:"John",
    id: 1,
    phone: 10234567444,
    isssue:"some issues",
   status:"opened" },
   {name:"James",
   id: 2,
   phone: 10234567444,
   isssue:"some issues",
  status:"submitted" }]

//DISPLAY THE DATA
buttonAction.addEventListener("click", displayTicket)
function displayTicket(){
    const ticket = mainData.filter((data)=>{
        return data.id == userId.value 
      })
const result = document.getElementById("result")
result.innerText = JSON.stringify(ticket) 
}

//TO ADD NEW DATA TO THE ARRAY

document.getElementById("create").addEventListener("click",function(e){
    e.preventDefault()
   mainData.push({name:userName.value, id:id.value, phone:phone.value, issue:issue.value,status:"opened"})
})

//CHANGING THE STATUS AND ITS REFLECTION ON SCREEN
 function statusChange(){
    const ticket = mainData.filter((data)=>{
        return data.id == userId.value 
      })  
    if(ticket[0].status == "opened"){
      ticket[0].status = "submitted"
    } 
    else if(ticket[0].status == "submitted"){
        ticket[0].status = "cleared"
    } 
    else if(ticket[0].status == "cleared"){
        alert("this ticket is cleared")
    }  
    result.innerHTML = JSON.stringify(ticket) 
}
console.log(mainData)

 