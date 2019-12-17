var name = document.getElementById('nombre_usuario').value;
console.log("nombre1");
var subname = document.getElementById('apellido').value;
console.log("apellido1");
var email = document.getElementById('mail').value;
console.log("mail1");
var movil = document.getElementById('movil').value;
console.log("movil1");
var pass = document.getElementById('password').value;
console.log("pass1");
var repass = document.getElementById('repassword').value;
console.log("repassword1");

function validacion() {

    if (name == null || name.length == 0 || /^\s+$/.test(name)) {
        // Validar Nombre
        alert('[ERROR] Solo admite caracteres');
        console.log(name);
        return false;

    } else if (subname == null || subname.length == 0 || /^\s+$/.test(subname)) {
        // Validar Apellido
        alert('[ERROR] Solo admite caracteres');
        console.log("subname");
        return false;

    } else if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        // Validar Email
        console.log("email");
        return false;

    } else if (!(/^\d{9}$/.test(movil))) {
        // Validar Telefono
        alert('[ERROR] El campo debe tener una longitud de 9 digitos');
        console.log("movil");
        return false;

    } else if (pass == null || pass.length < 9) {
        // Validar password
        alert('[ERROR] El campo debe tener una longitud de 8 caracteres alfanumericos');
        console.log("pass")
        return false;

    } else if (repass != pass) {
        // Validar repassword
        alert('[ERROR] El campo debe ser igual que el password');
        console.log("repass");
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    document.write("<h1>BIENVENIDO</h1>");
    return true;
}