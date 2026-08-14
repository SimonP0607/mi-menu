# Mi Menu

Menu de restaurante multipagina con Express, EJS y PostgreSQL (Laboratorio 2).

## Requisitos

- Node.js
- PostgreSQL corriendo en local

## Instalacion

```bash
npm install
```

## Configuracion

Copia `.env.example` a `.env` y completa `DB_PASSWORD` con la contrasena de tu
usuario de PostgreSQL:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mi_menu
DB_USER=postgres
DB_PASSWORD=tu_contrasena
```

## Crear la base de datos y cargar el esquema

En Windows los ejecutables de PostgreSQL normalmente **no estan en el PATH**, asi
que hay que llamarlos con la ruta completa. En PowerShell, una ruta entre comillas
necesita el operador `&` adelante:

```powershell
& "C:\Program Files\PostgreSQL\18\bin\createdb.exe" -U postgres mi_menu
& "C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -d mi_menu -f sql/schema.sql
```

Ajusta el `18` a tu version instalada. Si tienes varias, revisa cual escucha en el
puerto de tu `.env` (`DB_PORT`).

Si prefieres escribir solo `psql` y `createdb`, agrega la carpeta al PATH de tu
usuario (una sola vez, luego reinicia la terminal):

```powershell
[Environment]::SetEnvironmentVariable(
  "Path",
  [Environment]::GetEnvironmentVariable("Path", "User") + ";C:\Program Files\PostgreSQL\18\bin",
  "User"
)
```

Hecho eso, los comandos cortos ya funcionan:

```bash
createdb -U postgres mi_menu
psql -U postgres -d mi_menu -f sql/schema.sql
```

El script `sql/schema.sql` borra y recrea las tablas, asi que se puede volver a
ejecutar cuando quieras reiniciar los datos. Si `createdb` falla con
"database already exists", la base ya esta creada y solo hace falta el `psql`.

## Correr el proyecto

```bash
npm start
```

Luego abre http://localhost:3000

## Rutas

- `/` — lista todos los platos
- `/platos/:id` — detalle de un plato con su chef
