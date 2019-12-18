
function validacion() {
    event.preventDefault()
}

document.getElementById("reg-button").addEventListener("click", function (){
    var user = document.getElementById("contact").value
    var pass = document.getElementById("password").value
    var repass = document.getElementById("repassword").value

    setCookie("usuario", user, 1)
    setCookie("password", pass, 1)
    setCookie("repassword", repass, 1)
    console.log(document.cookie)
})




/* ############ Cookies ############# */

function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
  }
  
  function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ')
        c = c.substring(1)
      if (c.indexOf(name) == 0)
        return c.substring(name.length, c.length)
    }
    return "";
  }
  
  function checkCookie() {
    var user = getCookie("username");
    if (user != "")
      alert("Welcome again " + user)
    else{
      user = prompt("Please enter your name:", "")
      if (user != "" && user != null)
        setCookie("username", user, 365)
    }
  }

  function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }