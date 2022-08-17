function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")
let terminos = document.getElementById("terminos")
let fromGroup = document.getElementsByClassName("datos")
let button = document.getElementById("regBtn")


function validaDatos(){
    return nombre.value.length > 0 && apellido.value.length > 0 && email.value.length > 0

}
 


function validaPass(){
    let pas1 = document.getElementById('password1').value;
    let pas2 = document.getElementById('password2').value;
    return (pas1 === pas2);
}



function validaCaracteresPas(){
    return document.getElementById('password1').value.length > 5;
}



function check() {
    return document.getElementById("terminos").checked;
}




 button.addEventListener("click", e =>
    {
        if (validaDatos() && validaPass() && validaCaracteresPas() && check()) {
            showAlertSuccess();
        } else {
            showAlertError();
        }

       
}
 )