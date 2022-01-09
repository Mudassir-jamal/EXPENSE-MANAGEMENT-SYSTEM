// Goto logout
         
let goToLogIn = () =>{
    alert('Are you surre!')
    window.location='../../index.html'
    
}


// FUNCTION BUTTON 1 GO TO ADD EXPENSE PAGE
let goToAddExpense = () =>{
   window.location='Add-expense/AddEx.html'
}

// FUNCTION BUTTON 2 GO TO ADD CATEGORY PAGE
let goToAddCategory = () =>{
window.location='add category/addCategory.html'
} 

// get localstorage

let users =localStorage.getItem('AllUsers')
let user=JSON.parse(users)

//set username 

for(a=0; a<user.length; a++){
   console.log(user[a].username)
   let name = (user[a].username.toUpperCase())
  let topUser =  document.getElementById('userC').innerText=name
   
  
}


// get localStorage
 
let maindata =localStorage.getItem('addExpense')
let maindatajson=JSON.parse(maindata)
console.log(maindatajson)



for(get=0; get<maindatajson.length; get++){
   let table = document.getElementById('table')
   let getid = (maindatajson[get].id) 
   let description = (maindatajson[get].description) 
   let amount = (maindatajson[get].amount) 
   let getcategory = (maindatajson[get].Category) 
   let date = new Date().toLocaleString()
   let action =`<span onclick='edit()' id= 'editfn'><i class="fas fa-edit"></i></span>`
   


   let template = `
             <tr>
               <td>${getid}</td>
               <td>${description}</td>
               <td>${amount}</td>
               <td>${getcategory}</td>
               <td>${date}</td>
               <td>${action}</td>
               
               </tr>
   
   `
   table.innerHTML += template;
   


}




   function edit(){
   window.location='edit/edit.html'
}