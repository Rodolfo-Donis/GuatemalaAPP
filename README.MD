# GuatemalaAPP

### Instalacion:

Guatemala APP, aplicacion hecha con Ionic Framework en el cual se mostraran los pasos para su ejecucion
  - abrir el entregable con cualquier editor de texto, Atom/Visual Studio Code por ejemplo para visualizar el codigo fuente.
  - Si desea correr el programa, ingrese a la terminal del proyecto y ejecute los siguientes comandos:


   >npm install
  -  npm install : el comando se encargara de instalar las dependencias necesarias para lograr la ejecucion del programa.
  - ionic serve : el comando crea una instancia, para la ejecucion del codigo.

### Integracion Parte 1 y Parte 2
```sh
Modulo HttpClient
```
Se utilizaria para obtener datos dede un servidor (lista de promociones), desde un API a datos JSON.
Para usar el HttpClientModule, se debe importar el  al app.module:
- import {HttpClientModule} from '@angular/common/http'
- agregarlo al arreglo imports
- Se debe de importar  al .ts del componente en donde se utilizara.

### CONSUMIR SERVICIOS 
> GET/POST : funciones para obtener  algun atributo o una coleccion de datos o mandar datos al servidor
- HTTP.GET('param') /HTTP.POST('param') : en donde el parametro es la direccion del servicio el cual nos brindara los datos necesarios
-HEADERS: dentro del header de la consulta, se agrega el token de seguridad para consumir los servicios de promociones en el servidor.
```sh
headers:{'Authorization' : accessToken
```


## PASOS ANDROID BUILD 


- en la terminal del proyecto, agregar los siguientes comandos:
> npm i -g cordova


> ionic cordova platform add android

en la carpeta platforms, se encontrara el codigo para plataforma android o ios

> ionic cordova build android
> ionic cordova run android


