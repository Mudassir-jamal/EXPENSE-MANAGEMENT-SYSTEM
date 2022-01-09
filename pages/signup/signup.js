
let goToLogIn = () => {

    window.location = '../../index.html'
}



let signUp = (e) => {
    console.log('event' + e)
    e.preventDefault()
    let login = document.getElementById('login')
    const a = document.getElementById('username');
    const b = document.getElementById('Email');
    const c = document.getElementById('pass');
    const d = document.getElementById('cpass');

    let username = a.value;
    let email = b.value;
    let password = c.value;
    let confirm_pass = d.value;

    if (!username || !email || !password || !confirm_pass) {
        alert('please submit all fields')
    }



    else {
        swal({
            title: "Good job!",
            text: "Your Account is Created Sucessfully!",
            icon: "success",
            button: "Aww yiss!",
        });

        
    }

   


    const userData = {
        id: Math.floor(Math.random() * 1000),
        email,
        password,
        username,
        //id: Math.floor(Math.random(12.996))

    }


    // users.push(userData)

    let users = JSON.parse(localStorage.getItem('AllUsers'));
    if(!users){
        users = [];
    }

    users.push(userData)


    let stringify = JSON.stringify(users)

    localStorage.setItem('AllUsers', stringify)

  setTimeout(() => {
    location.reload()
  }, 2000);
    

    // let newData = localStorage.getItem('AllUsers')
    // console.log(newData)

}


// let rem = () =>{
//     username.value=''
//     email.value=''
//     password.value=''
//     confirm_pass.value=''
//     console.log(username)
// }


// var abc = [];
// var get =  JSON.parse(localStorage.getItem('user'));
// abc = [get];
// abc.push(user);
