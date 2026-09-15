# Mi Menu

Menu de restaurante con Express, EJS y MongoDB Atlas.

## Instalacion

```bash
npm install
```

## Configuracion

Copia `.env.example` a `.env` y pega la cadena de conexion de tu cluster de Atlas:

```
MONGODB_URI=mongodb+srv://tu-usuario:tu-password@cluster0.xxxxx.mongodb.net/mi_menu
```

## Correr el proyecto

```bash
npm start
```

## Rutas HTML

- `GET /` — lista todos los platos
- `GET /platos/:id` — detalle de un plato con su chef

## Servicio REST (`/api/platos`)

| Metodo | Ruta               | Accion           | Codigo |
|--------|--------------------|------------------|--------|
| GET    | `/api/platos`      | Listar           | 200    |
| GET    | `/api/platos/:id`  | Obtener uno      | 200 / 404 |
| POST   | `/api/platos`      | Crear            | 201    |
| PUT    | `/api/platos/:id`  | Actualizar       | 200 / 404 |
| DELETE | `/api/platos/:id`  | Eliminar         | 204 / 404 |

Ejemplo de cuerpo JSON para POST y PUT:

```json
{
  "nombre": "Pizza margarita",
  "descripcion": "Salsa de tomate, mozzarella fresca y hojas de albahaca.",
  "precio": 10.00,
  "disponibles": 5,
  "categoria": "Plato fuerte",
  "chef": { "nombre": "Marco Rossi", "especialidad": "Cocina italiana" }
}
```
