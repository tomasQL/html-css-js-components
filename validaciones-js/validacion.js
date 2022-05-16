function validar () {
    var result_val_email = validar_email();
    var result_val_passw = validar_password();
    var result_val_direcc = validar_direccion();
    return (result_val_email && result_val_passw && result_val_direcc);
}



function validar_email () {
var email = document.getElementById("email").value;
var div = document.getElementById("msj-email");
    if (email != ""){
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_password () {
    var pass = document.getElementById("exampleInputPassword") 
    return true;
}

function validar_direccion(){
    return false;
}