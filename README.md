# API Estudiantes 📋
API Rest creada con node.js, express y mongodb para manejar registros de los estudiantes pertenecientes a un curso. La aplicación corre local en el puerto 3000 👉 `localhost:3000/api/estudiante`. Se debe configurar la url de conexión a la base de datos en el archivo `db/db.js`.

Para correr la aplicación se usa el comando `npm start`

## ¿Cómo consumir la API? 🛎
A continuación una explicación de como implementar cada función de la api.

### Crear estudiante
Por medio de un método POST en la url `http://localhost:3000/api/estudiante/registro` y se envía por el cuerpo de la petición un json, tomando el siguente ejemplo:
```json
{
	"id": "38920",
	"nombre": "Jaime",
	"apellido": "Perez",
	"nota": 4.2
}
```
### Listar todos los registros
Se hace con un método GET en la url `http://localhost:3000/api/estudiante/coleccion`, se devuelve un json con la identificación, nombre y apellido del estudiante.

### Consultar un registro
Se realiza una petición GET en la url `http://localhost:3000/api/estudiante/registro/:id`, añadiendo el id en `:id` del estudiante que se desee consultar, la app devuelve un json con la información del estudiante.

### Modificar un registro
Por medio de un método PUT en la url `http://localhost:3000/api/estudiante/registro/:id`, añade el id en `:id` del estudiante que desee modificar, se envía por el cuerpo de la petición un json (se modifican los datos necesarios en este) tomando el siguente ejemplo:
```json
{
	"nombre": "Jaime",
	"apellido": "Perez",
	"nota": 3.6
}
```

### Eliminar un registro
Se realiza una petición DELETE en la url `http://localhost:3000/api/estudiante/registro/:id`, añadiendo el id en `:id` del estudiante que desee eliminar, la aplicación confirmará con un mensaje si el proceso fue exitoso y mostrará la información del estudiante eliminado.

### Eliminar todos los registros
Con un método DELETE en la url `http://localhost:3000/api/estudiante/coleccion`, se devuelve un mensaje confirmando la cantidad de estudiantes que fueron eliminados.

### Modificar según criterio
Se modifican los estudiantes **según la nota**. Por medio de un método PUT en la url `http://localhost:3000/api/estudiante/coleccion/:nota`, añadiendo la nota en `:nota` que desee modificar y se envía por el cuerpo de la petición un json con la nueva nota que se aplicará para todos los estudiantes que cumplan la condición, tomando el siguente ejemplo:
```json
{
	"nota": 3.8
}
```
Se indica por un mensaje cuantos registros fueron modificados con la nueva nota.

### Promediar notas
Se realiza una petición GET en la url `http://localhost:3000/api/estudiante/notas`, la app devuelve el valor promedio de las notas de todos los estudiantes.
