

/* ############ Validacion ############# */
/*function validacion() {
      event.preventDefault();
}*/
function validacion() {

    var name = document.getElementById('nombre').value;
    var subname = document.getElementById('apellido').value;
    var contact = document.getElementById('contacto').value;
    var pass = document.getElementById('password').value;
    var repass = document.getElementById('repassword').value;

    if (name == null || name.length == 0 || /^[aA-zZ][aA-zZ]*/.test(name) == false) {
        // Validar Nombre
        alert('[ERROR] Solo admite caracteres (nombre)');
        document.getElementById("nombre").focus();
        console.log(name);
        return false;

    } else if (subname == null || subname.length == 0 || /^[aA-zZ][aA-zZ]*/.test(subname) == false) {
        // Validar Apellido
        alert('[ERROR] Solo admite caracteres');
        document.getElementById("apellido").focus();
        console.log("subname");
        return false;

    } else if (contact == null || contact.length == 0 || /\S+@\S+\.\S+/.test(contact) == false) {
        // Validar Email
        console.log("email false");
        return false;

    } else if (pass == null || pass.length < 8) {
        // Validar password
        alert('[ERROR] El campo debe tener una longitud de 8 caracteres alfanumericos');
        document.getElementById("password").focus();
        console.log("pass")
        return false;

    } else if (repass != pass) {
        // Validar repassword
        alert('[ERROR] El campo Re-password debe ser igual que el password');
        document.getElementById("repassword").focus();
        console.log("repass");
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones se han cumplido, 
    //por lo que se crearán las cookies y devuelve el valor true
    setCookie("usuario", name, 1);
    setCookie("password", pass, 1);
    setCookie("repassword", repass, 1);
    console.log(document.cookie);

    document.write("<h1>BIENVENIDO</h1><br><dt>Nombre:</dt><dd>" + name + "</dd><dt>Apellido:</dt><dd>" + subname + "</dd>");

    return true;
}

/* ############ Cookies ############# */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}