Practica Unidad 5

# FORMULARIO DE REGISTRO Y LOGIN CON COOKIES
#### (Ejecutar en Firefox)
***

## funcionalidad

### El formulario de ***Registro*** consta de los siguientes campos:

Nombre  (Obligatorio) - Caracteres alfabéticos
Apellido (Obligatorio) - Caracteres alfabéticos
Fecha de nacimiento (opcional)
correo electrónico o móvil (Obligatorio) - Debe ser un teléfono móvil o email válidos 
Contraseña: (Obligatorio) - 8 carácteres, una máyuscula, un número y un carácter especial
Confirmación contraseña: (Obligatorio) - Comprueba que es la misma que la introducida anteriormente, mostrará asteríscos.
Botón para mostrar/ocultar la contraseña

### El formulario de ***Login*** cuenta con los siguientes campos:

Usuario (correo electrónico o móvil) (Obligatorio) - Debe ser un teléfono móvil o email válido
Contraseña: (Obligatorio) -  Mostrará asteríscos
Botón para mostrar/ocultar la contraseña

## Implementación de cookies

* Se crearán 2 cookies al registrar un usuario conteniendo el contacto ***(Email/Telefono)*** y la contraseña.
* Una vez que el usuario se loguea, si existe, se crean otras 2 cookies para la sesión, durarán 1 hora.
* Una vez que el usuario ha sido autenticado puede cerrar la sesion haciendo click en el botón de Logout, eliminando las cookies      creadas.
* Las cookies se borran por defecto al cerrar el navegador.

***Puede seguirse el proceso de cookies en consola*** *

***
## Capturas

### Botones para registrarse o loguearse _(sin y con hover)_
![alt text](img/Buttons.PNG) ![alt text](img/ButtonsHover.PNG)

## Formulario Login
![alt text](img/loguearse.PNG)

 _(Con detección errores)*_
![alt text](img/EmptyLog.PNG)

## Formulario Registro
![alt text](img/reg.PNG)

 _(Con detección errores)*_
![alt text](img/EmptyReg.PNG)

## Usuario registrado
![alt text](img/UsuarioRegistrado.PNG)
