# Frontend Quiz

Aplicacion web de quizzes por categorias para practicar habilidades y medir progreso.

## Funcionalidad principal

- Pantalla inicial con tarjetas de quizzes por categoria (por ejemplo: Historia, Comunicacion, Pensamiento Critico, etc.).
- Flujo de quiz por paginas/preguntas con navegacion `Siguiente` y `Anterior`.
- Validacion por pregunta: no permite avanzar ni terminar sin seleccionar una opcion.
- Calculo de resultado al finalizar (porcentaje de aciertos).
- Modal de cierre con puntaje final.
- Persistencia del progreso y resultados en `localStorage`.
- Visualizacion de estadisticas por categoria en la pantalla principal (correctas/incorrectas o estado nuevo).

## Tecnologias usadas

- `React 19`: construccion de la interfaz y logica de componentes.
- `React Router 7`: manejo de rutas y navegacion entre vistas.
- `styled-components`: estilos encapsulados y UI responsive.
- `Vite 7`: entorno de desarrollo y build.
- `ESLint 9`: reglas de calidad de codigo.
