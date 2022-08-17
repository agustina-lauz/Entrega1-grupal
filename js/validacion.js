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
let button = document.getElementById("regBtn")


function validaDatos(){
    return nombre.value.length > 0 && apellido.value.length > 0 && email.value.length > 0

}

function validaPass(){
    return (pass1.value === pass2.value);
}

function validaCaracteresPas(){
    return pass1.value.length > 5;
}

function check() {
    return terminos.checked;
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