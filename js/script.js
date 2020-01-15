document.getElementById("reg").addEventListener('click', function() {
    tab("registro", "login", "nombre")
})

document.getElementById("log").addEventListener('click', function() {
    tab("login", "registro", "contacto")
})

function tab(show, hide, focus) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
    document.getElementById(focus).focus();
}

function get_submit() {
    event.preventDefault()
}

/* ########## Mostrar password ################ */

function mostrarPass() {
    var displayPass = document.getElementById('password');
    var displayPass2 = document.getElementById('repassword');

    if (displayPass.type == "password") {
        displayPass.type = "text";

        if (displayPass2) {
            displayPass2.type = "text";
        }

    } else {
        displayPass.type = "password";

        if (displayPass2) {
            displayPass2.type = "password";
        }
    }
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