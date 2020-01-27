window.onload = function() {

    console.log("window onload()")
    if (getCookie("userSession") && getCookie("passSession")) {
        log();
        console.log("window.onload");
    }
}


/* ############ BOTONES REGISTRO / OCULTAR ############# */

document.getElementById("reg-button").addEventListener('click', function() {
    tab("registro", "login", "nombre");

});

document.getElementById("log-button").addEventListener('click', function() {
    tab("login", "registro", "contacto");

});

/* ############ Mostrar / Ocultar ############# */

function tab(show, hide1, focus) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(focus).focus();
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
        console.log("validacion ok : entra en reg")
        reg();
        setCookie("user", user, 1);
        setCookie("pass", pass, 1);
        console.log("Cookies user y pass creadas");

    } else {
        console.log("error validacion()");
        err();
    }
}


/* ########### BOTON ENVIAR ############# */

document.getElementById("enviar").addEventListener("click", function() {

    var userSession = document.getElementById("contactoLog").value;
    var passSession = document.getElementById("passwordLog").value;

    if (userSession == getCookie("user") && passSession == getCookie("pass")) {
        console.log("entra en funcion log")
        log();
        console.log("user correct");
        setCookie("userSession", userSession, 0.041667);
        setCookie("passSession", passSession, 0.041667);
        console.log("%cSession Created! Cookies lasts for 1h.", 'background: #222; color: green');

    }

    if (getCookie("user") == "" || getCookie("pass") == "") {
        console.log("user incorrecto log");
        // document.getElementById("login").style.display = "block";
        err();

    }
    console.log(document.cookie);
    console.log("Cookie checked");

});


/* ############ Registro ############# */

function reg() {

    console.log("registrado")
    document.getElementById("choice").style.display = "none";
    document.getElementById("registro").style.display = "none";
    document.getElementById("login").style.display = "block";
    green()
    document.getElementById("demo").innerHTML = "Registro con exito";
}


/* ############ Login ############# */

function log() {

    console.log("logueado")
    document.getElementById("choice").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("logOut-button").style.display = "block";
    green();
    document.getElementById("demo").innerHTML = "Bienvenido " + getCookie("userSession");
}


/* ############ Log Out ############# */

document.getElementById("logOut-button").addEventListener('click', function() {

    console.log("boton logout")
    delete_cookie("userSession");
    delete_cookie("passSession");
    delete_cookie("user");
    delete_cookie("pass");
    console.log("cookies eliminadas")

    document.getElementById("logOut-button").style.display = "none";
    green();
    document.getElementById("demo").innerHTML = "ADEU!";

});

function err() {

    console.log("funcion error")
    document.getElementById("welcome").style.display = "block";
    document.getElementById("welcome").style.backgroundColor = "red";
    document.getElementById("welcome").style.color = "white";
    document.getElementById("demo").innerHTML = "Usuario no registrado";
}

function green() {
    document.getElementById("welcome").style.display = "block";
    document.getElementById("welcome").style.backgroundColor = "white";
    document.getElementById("welcome").style.color = "green";
}