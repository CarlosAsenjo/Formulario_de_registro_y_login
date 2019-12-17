function validacion() {

    var name = document.getElementById('nombre').value;
    var subname = document.getElementById('apellido').value;
    var email = document.getElementById('mail').value;
    var pass = document.getElementById('password').value;
    var repass = document.getElementById('repassword').value;

    if (name == null || name.length == 0 || /^[a-z][a-z]*/.test(name) == false) {
        // Validar Nombre
        alert('[ERROR] Solo admite caracteres (nombre)');
        console.log(name);
        return false;

    } else if (subname == null || subname.length == 0 || /^[a-z][a-z]*/.test(subname) == false) {
        // Validar Apellido
        alert('[ERROR] Solo admite caracteres');
        console.log("subname");
        return false;

    } else if (!/\S+@\S+\.\S+/.test(email)) {
        // Validar Email
        console.log("email false");
        return false;

    } else if (pass == null || pass.length < 9) {
        // Validar password
        alert('[ERROR] El campo debe tener una longitud de 8 caracteres alfanumericos');
        console.log("pass")
        return false;

    } else if (repass != pass) {
        // Validar repassword
        alert('[ERROR] El campo Re-password debe ser igual que el password');
        console.log("repass");
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    document.write("<h1>BIENVENIDO</h1><br><dt>Nombre:</dt><dd>" + name + "</dd><dt>Apellido:</dt><dd>" + subname + "</dd>").innerHTML;

    return true;
}