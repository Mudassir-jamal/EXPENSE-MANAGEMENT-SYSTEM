let goToSignUp = () => {
    window.location='./pages/signup/signup.html'
}


let logIn = (e) =>{
  e.preventDefault()

let login = document.getElementById('login');
const a   = document.getElementById('username');
const b = document.getElementById('pass');


let email = a.value;
let password = b.value;



let users = JSON.parse(localStorage.getItem('AllUsers'));
console.log(users)

for(get=0; get<users.length; get++){
   //console.log(users[get].email)
    
    AllPasw=(users[get].password)

   //console.log(AllEmail,AllPasw)


    
     //console.log(ele)
   if( email==(users[get].email) && password==AllPasw){
    console.log('han')
    window.location='./pages/Dashboard/dashboard.html'
    break
    
}

else{
    console.log('wrong')
    swal ( "Oops" ,  "Incorrect Email Password!" ,  "error")
    
     //reload page function
     
    // function timedRefresh(time) {
    //     setTimeout("location.reload(true);", time);
    // }
    // timedRefresh(3000)
}
   // console.log(password,AllPasw)
}





//console.log(AllEmail,AllPasw)


//console.log(AllEmail,AllPasw)




// user = JSON.parse(users)
// console.log(users)


// let n =user.find(function(username){

//     return username
// })
// console.log(n)

// if( email==user||password == user){
//     console.log('han')
//     window.location='./pages/Dashboard/dashboard.html'
// }

// else{
//     alert('wrong')
    
//}



// if(users==AllUsers){
//     window.location='google.com'
// }



// }

}

