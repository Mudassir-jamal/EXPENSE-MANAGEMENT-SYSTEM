let onloadFn = () => {
    let users =localStorage.getItem('AllUsers')


    let user=JSON.parse(users)

    console.log(user)
    for(a=0; a<user.length; a++){
        //console.log(user[a].username)
       let topUser =  document.getElementById('userC').innerText=user[a].username
       
    }
}

onloadFn()


let addCate = (e) => {

     
    e.preventDefault()
    let a = document.getElementById('add');
    input = a.value;
    console.log(input);

    //let table = document.getElementById('table')

    let date = new Date().toLocaleString()
    let id = Math.floor(Math.random() * 1000)

    
    let data = {
        id,
        input,
        date
    }

    
    
    let AddCategory = JSON.parse(localStorage.getItem('AddCategory'))
     if(!AddCategory){
         AddCategory = [];
     }
      
     AddCategory.push(data)
 
     let string =JSON.stringify(AddCategory)
     localStorage.setItem('AddCategory',string)

    alert('Category is Added !!')
    location.reload()

}

let goToLogIn= () =>{
    window.location='../addcategory.html'
}


// let alertFn = () => {

//     window.location='subadd/add.html'
    // let cate = prompt('enter')
    // console.log(cate)

    // let table = document.getElementById('table')

    // let date = new Date().toLocaleString()
    // let id = Math.floor(Math.random() * 1000)

    // let data = {
    //     id,
    //     cate,
    //     date
    // }

    //  console.log(data)


    //  let AddCategory = JSON.parse(localStorage.getItem('AddCategory'))
    //  if(!AddCategory){
    //      AddCategory = [];
    //  }
      
    //  AddCategory.push(data)
 
    //  let string =JSON.stringify(AddCategory)
    //  localStorage.setItem('AddCategory',string)
    // let template = `
        
    //            <tr>
    //             <td>${id}</td>
    //               <td>${cate}</td>
    //               <td>${date}</td>
               
    //            </tr>
    
    // `
    // table.innerHTML += template;
    // console.log(template)

  

//}


// let create = document.createElement('tr')
    // let td = document.createElement('td')
    // let td2 = document.createElement('td')
    
    // td.appendChild(create)
    // td2.appendChild(create)
    // table.appendChild(create)
    

    // console.log(table,create)