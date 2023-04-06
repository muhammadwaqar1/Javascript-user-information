// const getInputfield = (inputId) => document.getElementById(inputId).value

const showOutput = (output) => {
    document.getElementById("Output").innerHTML = output
}

console.log("numnan");
const randomid = () => {
    return Math.random().toString(36).slice(2)
}
const cleartOutput=()=>{
    document.getElementById("Output").innerHTML = " "

}


const emailValidation = (email) => {
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

const ageDifferenc=()=>{
const birthdate = document.getElementById("dateOf").value
const today = new Date();
const birthdateObj = new Date(birthdate);
let age = today.getFullYear() - birthdateObj.getFullYear();
const monthDiff = today.getMonth() - birthdateObj.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
  age--;
}

return age ;
}

const showNotfication = (msg, type) => {
    let bgColor;

    switch (type) {
        case "success":
            bgColor = "green"
            // bgColor="liner-gradient(to right, #fdc830,#f37335)"
            break;
        case "error":
            // bgColor="liner-gradient(to right, #93291e,#ed213a)"
            bgColor = "#e9e953"
            break;
        default:
            bgColor = "#000"
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: bgColor,
        }
    }).showToast();
}

const toastifySuccess = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right,#1D976C,#93F9B9)",
        },
    }).showToast();
}

let users = []
const adduser = () => {
    event.preventDefault()
    console.log("sdfjkaks;l");
     let firstName = document.getElementById("firstName").value 
    let lastName = document.getElementById("lastName").value 
    let email =document.getElementById("email").value 
    let date =document.getElementById("dateOf").value 
    let id=randomid()
    let age=ageDifferenc()
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    if (firstName.length < 3) { return showNotfication("Enter first name", "error") }
    if (!lastName) { return showNotfication("Enter last name", "error") }
    if (!emailValidation(email)) { return showNotfication("Invalid email", "error") }
    if (!date) { return showToast("Enter Date") }
    let user = {
        firstName,
        lastName,
        email,
        date,
        id,
        age
    }
    users.push(user)
    showNotfication("A new user Successfuly added", "success")
    console.log(users);

}

const showTable = () => {
    if (!users.length) {
        showNotfication("There is not a single user available.", "error")
    }
    let tableStringCode = '<div class="table-responsive"><table class="table">'
    let tableHead = '<thead><tr><th>#</th><th>First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of birth</th><th scope="col">Age</th></tr></thead>'
    let tableEndingCode = '</table></div>'
    let tableBody = ''
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        tableBody += '<tr><th>' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td> ' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].date + '</td><td>'+  users[i].age+'</td><tr>'
    }
    let table1 = tableStringCode + tableHead + "<tbody>" + tableBody + "</tbody>" +tableEndingCode
    console.log(table1);
    showOutput(table1)
}


const consolTable = () => {
    if (!users.length) {
        showNotfication("there is not a single user available")
        return;
    }
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        console.log(user)
    }

}
