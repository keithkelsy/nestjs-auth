# 🚀 NestJS Authentication API

Esta es una API de autenticación construida con **NestJS**, que utiliza **JWT (JSON Web Token)** para manejar sesiones de usuario de manera segura.

---

## **📌 Características**
✅ Autenticación con **JWT**  
✅ Protección de rutas con **Guards**  
✅ Uso de **bcrypt** para encriptar contraseñas  
✅ **NestJS modular** con estructura organizada  

---

## **📌 Instalación**
1. **Clonar el repositorio**
   
   ```sh
   git clone https://github.com/keithkelsy/nestjs-auth.git
   cd nestjs-auth 
2. **Instalar dependencias**
   ```sh
   npm install
3. **Iniciar el servidor**
   ```sh
   npm start
El servidor correra en http://localhost:3000.

4. **Hacer pruebas en Postman**

   El endpoint para hacer las pruebas de iniciar sesión en Postman es: POST http://localhost:3000/api/auth/login
   
5. **Body (JSON):**
   ```sh
   {
     "email": "admin@example.com", "password": "123456"
   }
   
5. **Respuesta esperada:**
   ```sh
   {
     "access_token": "TOKEN_GENERADO"
   }


  
