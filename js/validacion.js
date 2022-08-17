function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")
let terminos = document.getElementById("terminos")
let fromGroup = document.getElementsByClassName("datos")


function validaDatos(){
    let fromGroup = document.getElementsByClassName("datos").value.length > 0
    return true;
}


function validaPass(){
    let pas1 = document.getElementById('password1').value;
    let pas2 = document.getElementById('password2').value;
    return (pas1 === pas2);
}

function validaCaracteresPas(){
    let pas1 = document.getElementsById('password1').value.length > 5
    return true;
}


function check() {
    document.getElementById("terminos").checked = true;
}



 form.addEventListener("submit", e =>
    {
        if (pass1.value.length < 6) {
            showAlertError;
        } else {
            showAlertSuccess;
        }

       
}
 )
