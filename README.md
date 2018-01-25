# Instrucciones para el uso del repositorio

Este repositorio contiene múltiples ejercicios, a continuación se especifican las instrucciones para la visualización de cada uno de ellos.

Lo primero es clonar o descargar el repositorio, la información suministrada adelante, son los pasos para clonar el repositorio a través del "Terminal" en Mac, el procedimiento es el mismo, una vez se tenga [GIT](https://git-scm.com/downloads) instalado en Windows.

### Clonar el repositorio
Tras ingresar a la ubicación en la que se desea clonar el repositorio, ingresar la siguiente línea en la terminal o símbolo del sistema.

`git clone https://github.com/Junicavi/ProdigiousFinalWork.git`

## JS-Gallery, Landing Page Y Responsive
Estos ejercicios fueron realizados con HTML, CSS y Javascript. Para visualizarlos, simplemente abrir el archivo `index.html` correspondiente a cada carpeta.

El ejercicio LandingPage, NO es responsive, motivo por el cuál se recomienda visualizarlo en una pantalla 1920x1080.

## ThreeJs
Este ejercicio requiere de un servidor `PHP`, para correrlo, a continuación se dan los pasos para ejecutar uno de manera local en Mac; en Windows se puede configurar uno con herramientas como [XAMPP](https://www.apachefriends.org/es/download.html) 

### Inicialización de Servidor PHP Local en Mac
Lo primero que se debe hacer es abrir el terminal del equipo, pulsando `cmd + Espacio` y escribiendo `terminal` una vez allí debemos navegar hasta la ruta en la que se encuentra el repositorio: 

` .../ProdigiousFinalWork/ThreeJs`

Una vez estemos en el directorio correcto, podemos iniciar el servidor local de PHP, copiando la siguiente línea de código:

`php -S localhost:8080`

Si el proceso ha sido correcto, el terminal debería mostrar un mensaje como este:

![Inicialización exitosa del servidor](https://github.com/Junicavi/ProdigiousFinalWork/blob/master/PHPServer.png?raw=true)

Tras esto, podemos ingresar en el navegador a `localhost:8080`y el ejercicio debería visualizarse.