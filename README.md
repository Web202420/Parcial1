# Proyecto Triatlón App - Parcial 1

## Descripción
Esta es una aplicación web en React diseñada como un MVP (Producto Mínimo Viable) para registrar tiempos de entrenamiento en ciclismo, natación y trote. El profesor Camilo está entrenando para un triatlón, y la aplicación permite registrar y mostrar los tiempos de sus entrenamientos, junto con la opción de hacerlo para otros usuarios.

## Funcionalidades
- **Login:** Página para iniciar sesión con validación de correo y contraseña.
- **Home:** Pantalla principal con el resumen del perfil del usuario (mejores tiempos y foto de perfil) y registros de actividades deportivas.
- **Detalle de Ejercicio:** Modal que muestra información ampliada de cada actividad registrada.

## Componentes principales
1. **Login.js:** Componente de la página de inicio de sesión, donde se solicitan las credenciales del usuario (correo y contraseña) con validación.
2. **Home.js:** Componente que muestra los registros de ciclismo, trote y natación. Incluye una sección con el perfil del usuario y sus mejores tiempos.
3. **Card.js:** Componente que representa las tarjetas de los registros deportivos.
4. **Modal:** Al hacer clic en un registro, se abre un modal que muestra los detalles del registro seleccionado.

## Instrucciones para correr el proyecto

### Prerrequisitos
- Tener instalado Node.js y npm.
- Dar permisos de acceso temporal a la API:
  1. Ir a [https://cors-anywhere.herokuapp.com](https://cors-anywhere.herokuapp.com)
  2. Hacer clic en el botón "Request temporary access to the demo server" para permitir las peticiones de API.

### Instalación
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/Web202420/Parcial1.git
   cd Parcial1
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación:
   ```bash
   npm start
   ```

4. Abrir el navegador en [http://localhost:3000](http://localhost:3000).

## Decisiones de diseño y desarrollo
1. **Internacionalización (I18N):** Se implementó soporte para inglés y español usando la biblioteca `react-intl`. Se crearon archivos de traducción (`es.json` y `en.json`) en la carpeta `locales` y se utiliza el componente `IntlProvider` para administrar el idioma en función de la configuración del navegador.
2. **Estilos y Responsividad:** Se usó `Bootstrap` para la estilización de la aplicación. Las tarjetas de registro no son responsive según lo solicitado en el enunciado.
3. **Mock de datos:** Se usaron dos servicios para obtener datos ficticios. La API de Mockaroo para los registros deportivos y un Gist de GitHub para los datos del usuario.
4. **Componentes reutilizables:** Se modularizaron componentes como `RegisterCard` para reutilizarlos en las diferentes secciones deportivas (ciclismo, trote, natación).

## Librerías utilizadas
- **React:** Framework principal para el desarrollo de la interfaz.
- **Bootstrap:** Para los estilos y la estructura visual.
- **react-intl:** Para manejar la internacionalización.
- **Fetch API:** Para obtener datos de las APIs de Mockaroo y GitHub.

## Consideraciones finales
Este README incluye los pasos básicos para la instalación, ejecución y un resumen de las decisiones de diseño. Recuerde otorgar permisos temporales al API antes de intentar correr el proyecto.

`Autor`: [wareval0](ttps://github.com/wareval0)