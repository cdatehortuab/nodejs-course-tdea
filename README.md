# Primera entrega curso virtual de Node.js

Este proyecto contiene los archivos correspondientes a la solución de la primera entrega del curso virtual de Node.js

## Instrucciones para correr el proyecto

Lo **primero** que se debe hacer es **instalar las dependecias*** por medio del comando:
```bash
npm install
```

Una vez instaladas las dependencias el proyecto se puede correr a través de dos comandos, uno para cada historia de usuario.

### Listar todos los cursos

Para **listar todos los cursos**, estando en la línea de comandos en la carpeta raíz del proyecto, ejecuta:
```bash
node index.js
```

### Inscribirse en un curso

Para **inscribirse en un curso**, estando en la línea de comandos en la carpeta raíz del proyecto, ejecuta:
```bash
node index.js inscribir --idCurso=<id del curso a inscribir> --nombre=<Nombre de la persona que se va a inscribir> --cedula=<Cédula de la persona que se va a inscribir>
```
Recuerda que en el comando anterior debes cambiar los valores entre `<` y `>` por valores reales.

### Obtener ayuda

Puedes escribir `node index.js --help` para ver la ayuda del programa.
