let addExpense = (e) =>{
    e.preventDefault()

    const  description = document.getElementById('exampleFormControlInput1').value;
    const  amount = document.getElementById('exampleFormControlInput').value;
    const  Category = document.getElementById('Categories').value;
    const form = document.getElementById('form')


    const addData = {
     id: Math.floor(Math.random() * 1000),
     description,
     amount,
     Category,
     

    }
    
    let expense = JSON.parse(localStorage.getItem('addExpense'));
    console.log(expense)
    if(!expense){
        expense = [];
    }
    
    expense.push(addData)
    
    let string = JSON.stringify(expense)
    localStorage.setItem('addExpense',string)

  
    
}



 let loadFn = () => {

  // get localstorage
        
  let users =localStorage.getItem('AllUsers')
  let user=JSON.parse(users)

  //set username 
  
  for(a=0; a<user.length; a++){
      console.log(user[a].username)
      let name = (user[a].username.toUpperCase())
     let topUser =  document.getElementById('userC').innerText=name
      
     
  
}

     let getinput = JSON.parse(localStorage.getItem('AddCategory'));
     console.log(getinput)

     for(get=0; get<getinput.length; get++){
        let input = (getinput[get].input)

       const Category = document.getElementById('Categories')
       
    

        let template = `
                  <option>${input}</option>
        
        `

        Category.innerHTML += template;

        console.log(template)



     
     }
      


 } 

  let addAlert = () => {
      alert('Expense Added!!!');

      location.reload()
  }


 loadFn()