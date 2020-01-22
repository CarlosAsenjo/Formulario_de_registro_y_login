document.getElementById("reg-button").addEventListener('click', function() {
    tab("registro", "login", "nombre");
});

document.getElementById("log-button").addEventListener('click', function() {
    tab("login", "registro", "contacto");
});

function tab(show, hide1, focus) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(focus).focus();
}

/* ############ Mostrar contraseña ############# */

function mostrarPass(pass1, pass2) {
    var mostrarPass = document.getElementById(pass1);
    var mostrarPass2 = document.getElementById(pass2);

    if (mostrarPass.type == "password") {
        mostrarPass.type = "text";
        if (mostrarPass2) {
            mostrarPass2.type = "text";
        }
    } else {
        mostrarPass.type = "password";
        if (mostrarPass2) {
            mostrarPass2.type = "password";
        }
    }
}


/* ############ Validacion ############# */

function valPass(pass, repass) {
    if (pass == repass) {
        return true;
    } else {
        return false;
    }
}

function validacion() {
    event.preventDefault();
    var user = document.getElementById("contacto").value;
    var pass = document.getElementById("pass").value;
    if (valPass(pass, document.getElementById("repass").value)) {
        setCookie("user", user, 1);
        setCookie("pass", pass, 1);
        document.getElementById("reg-button").style.display = "none";
        document.getElementById("log-button").style.display = "none";
    } else {
        console.log("error validacion()");
    }
}


/* ############ Cookies ############# */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(nameCookie) {
    var name = nameCookie + "=";
    var cookieDecoded = decodeURIComponent(document.cookie);
    var arrayCookie = cookieDecoded.split(';');
    for (var i = 0; i < arrayCookie.length; i++) {
        var cookie = arrayCookie[i];
        while (cookie.charAt(0) == ' ')
            cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0) {
            console.log("%cOK! Cookie does exists.", 'background: #222; color: green');
            return cookie.substring(name.length, cookie.length);
        }
    }
    console.log("%cKO! Cookie does NOT exists.", 'background: #222; color: red');
    return null;
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

/* ############ Login ############# */
function log() {
    document.getElementById("logOut-button").style.display = "block";
    document.getElementById("reg-button").style.display = "none";
    document.getElementById("log-button").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("demo").innerHTML = "Bienvenido " + getCookie("user");
}


document.getElementById("enviarLog").addEventListener("click", function() {

    
    var userSession = document.getElementById("contactoLog").value;
    var passSession = document.getElementById("passwordLog").value;

    if (userSession == getCookie("user") && passSession == getCookie("pass")) {
        log();
        console.log("user correct");
        setCookie("userSession", userSession, 0.041667);
        setCookie("passSession", passSession, 0.041667);
        console.log("%cSession Created! Cookies lasts for 1h.", 'background: #222; color: green');

    } else {
        console.log("user incorrecto");
        //
    }
    console.log(document.cookie);
    console.log("Cookie checked");

});
document.getElementById("enviarReg").addEventListener("click", function() {
    document.getElementById("registro").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("demo").innerHTML = "Registro con exito"
    document.getElementById("welcome").style.color = "green";
    document.getElementById("login").style.display = "block";
});

window.onload = function() {

    if (getCookie("userSession") && getCookie("passSession")) {
        log();
       console.log("window.onload");
    }
}


/* ############ Log Out ############# */

document.getElementById("logOut-button").addEventListener('click', function() {

    delete_cookie("userSession");
    delete_cookie("passSession");
    document.getElementById("logOut-button").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("welcome").style.color = "green";
    document.getElementById("demo").innerHTML = "ADEU!";

});