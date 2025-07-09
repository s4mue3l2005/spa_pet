# 🐾 SPA - Centro de Cuidado de Mascotas

Este proyecto es una **Single Page Application (SPA)** desarrollada en **JavaScript Vanilla**, que permite gestionar usuarios, mascotas y estancias en un centro vacacional para animales.

---

## 🛠️ Tecnologías utilizadas

- HTML5 + CSS3
- JavaScript ES Modules
- JSON Server (para simular el backend)
- LocalStorage (manejo de sesión)
- Vite (opcional para entorno de desarrollo)

---

## 📁 Estructura del Proyectospa-centro-mascotas/
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── main.js # Enrutador y SPA
│ ├── ui.js # Carga de vistas parciales
│ ├── auth.js # Login y registro
│ ├── api.js # Comunicación con json-server
│ ├── session.js # Manejo de sesión con localStorage
│ └── dashboard.js # Carga de dashboard según el rol
├── views/
│ ├── landingView.html
│ ├── loginView.html
│ ├── registerView.html
│ ├── dashboardCustomerView.html
│ ├── dashboardWorkerView.html
│ └── 404View.html


---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar o descargar el repositorio

```bash
git clone https://github.com/tuusuario/spa-centro-mascotas.git
cd spa-centro-mascotas

2. Instalar json-server (si no lo tienes)
bash
Copiar
Editar
npm install -g json-server
3. Crear y correr database.json
Crea un archivo database.json con la siguiente estructura:

json
Copiar
Editar
{
  "roles": [
    { "id": 1, "name": "worker" },
    { "id": 2, "name": "customer" }
  ],
  "users": [],
  "pets": [],
  "stays": []
}
Inicia el servidor:

bash
Copiar
Editar
json-server --watch database.json --port 3000
4. Abrir el proyecto
Si usas Vite:

bash
Copiar
Editar
npm create vite@latest
# Copia este proyecto dentro de la carpeta de Vite generada
npm install
npm run dev
O simplemente abre index.html en el navegador usando Live Server.

👤 Roles y funcionalidades
Rol: Cliente (customer)
Registro y login

Gestión de sus mascotas (crear, editar, eliminar)

Visualización de sus mascotas

Rol: Trabajador (worker)
Ver todos los usuarios

Ver y gestionar todas las mascotas

Crear y completar estancias

Calcular automáticamente el valor total de la estancia
