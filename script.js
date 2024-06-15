let fname = "";
let lname = "";
let email = "";
let phone = "";
let pass = "";
let pass2 = "";


Firstname = (a) => {
    fname = a;

}


Lastname = (a) => {
    lname = a;
}



Email = (a) => {
    email = a;
}

Phone = (a) => {
    phone = a;
}

Password = (a) => {
    pass = a;
}
Password2 = (a) => {
    pass2 = a;

}
submit = () => {
    if (fname.length > 0 && lname.length > 0 && email.length > 0 && phone.length > 0 && pass.length > 0) {
        if (fname.length <= 10) {
            firstNameError.innerText = 'username must be or greater than 10'
        }

       

    }
     else {
            if (fname == 0) {
                
                firstNameError.innerText = "name cannot be empty"
            }
            if (fname == 0) {
                lastNameError.innerText = "last name cannot be empty"
                
            }
            if (fname == 0) {
                emailError.innerText = "email cannot be empity"

            }
            if (fname == 0) {
                numberError.innerText = "number is empity "

            }
            if (fname == 0) {
                passwordError.innerText = "password cannot be empity "

            }


        }
}

    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let numberError = document.getElementById("numberError");
    let passwordError = document.getElementById("passwordError");
