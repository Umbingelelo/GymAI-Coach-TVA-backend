# GymAI Coach Backend

Backend en Node.js para la aplicación **GymAI Coach**. Este servidor provee una API REST para gestionar ejercicios, rutinas, perfiles de usuario y seguimiento de entrenamientos.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

1.  **Node.js**: Versión 18 o superior (se recomienda v20+ o v24 como en el desarrollo).
    *   [Descargar Node.js](https://nodejs.org/)
2.  **Base de Datos**: PostgreSQL (o un proyecto en **Supabase**).
    *   Necesitas la cadena de conexión (`DATABASE_URL`).
3.  **Supabase Auth**: Un proyecto configurado en Supabase si planeas usar autenticación real en el futuro.

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
Si aún no lo has hecho:
```bash
git clone <url-del-repositorio>
cd backend-gymai
```

### 2. Instalar dependencias
Ejecuta el siguiente comando para descargar las librerías necesarias:
```bash
npm install
```

### 3. Configurar Variables de Entorno (`.env`)
Crea un archivo llamado `.env` en la raíz del proyecto. Puedes basarte en el siguiente ejemplo:

**Archivo `.env`**:
```properties
# Puerto del servidor (Por defecto 3000)
PORT=3000

# Conexión a Base de Datos (Supabase Transaction Pooler recomendado)
DATABASE_URL=postgresql://postgres.xxx:password@aws-0-region.pooler.supabase.com:6543/postgres

# Configuración de Supabase Auth (JWT)
# Obtenlo en Supabase Dashboard -> Project Settings -> API -> JWT Secret
SUPABASE_JWT_SECRET=tu_secreto_jwt_aqui
```
> **Nota:** Asegúrate de reemplazar `DATABASE_URL` y `SUPABASE_JWT_SECRET` con tus credenciales reales.

## 🏃 Como Ejecutar el Proyecto

### Modo Producción/Estándar
Para iniciar el servidor normalmente:
```bash
npm start
```
Deberías ver en la consola:
```
Database connected successfully
Server running on port 3000
```

### Modo Desarrollo
Para iniciar con recarga automática (si tienes configurado `--watch` o `nodemon`):
```bash
npm run dev
```

## 🔌 API Endpoints (Resumen)

La URL base es `http://localhost:3000/api`.

| Método | Endpoint             | Descripción                              |
| :----- | :------------------- | :--------------------------------------- |
| GET    | `/exercises`         | Obtener lista de todos los ejercicios.   |
| POST   | `/routines`          | Crear una nueva rutina de entrenamiento. |
| GET    | `/routines/:userId`  | Obtener rutinas de un usuario.           |
| POST   | `/workouts/session`  | Iniciar sesión de entrenamiento.         |
| POST   | `/workouts/log`      | Registrar un set/log de ejercicio.       |
| GET    | `/profiles/:id`      | Ver perfil de usuario.                   |
| POST   | `/profiles`          | Crear/Actualizar perfil.                 |

> **Estado de Autenticación:** Actualmente, el middleware de autenticación está **DESACTIVADO** para facilitar pruebas. Todas las rutas son públicas.

## 🛠 Solución de Problemas

### Error: `listen EADDRINUSE: address already in use :::3000`
Esto significa que ya hay un proceso ocupando el puerto 3000 (probablemente una instancia anterior del servidor que no se cerró bien).

**Solución (Windows PowerShell):**
```powershell
taskkill /F /IM node.exe
```
Luego intenta `npm start` nuevamente.
