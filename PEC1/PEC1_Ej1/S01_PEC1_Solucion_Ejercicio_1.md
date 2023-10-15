1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno (0.75):
   
    1.1. ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de esas ventajas.
    
    Las 3 principales ventajas del uso de etiquetas semánticas son las siguientes:

    - *Ayuda a la lectura, comprensión y mantenimiento del código.* El hecho de que las etiquetas tengan un nombre que se relaciona con su uso, hace que el código tenga un lenguaje más familiar y sea más fácilmente leído y, por tanto, comprendido. Este beneficio puede ser mucho más notable en proyectos de gran envergadura, en los que el etiquetado semántico ayudan a que el código pueda mantenerse de forma más sencilla.
    - *Hace que tu sitio web sea más accesible.* El etiquetado semántico facilita a las herramientas utilizadas por personas con diversidad funcional a navegar por tu sitio web. Además, también es una ventaja para aquellos usuarios que utilizan sólo teclado.
    - *Ayuda a mejorar el posicionamiento SEO de tu sitio web.* Utilizar el etiquetado semántico ayuda a que los algoritmos de posicionamiento de los motores de búsqueda analicen de forma más sencilla tu sitio web y le de un mejor índice de posicionamiento.

    1.2. Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad. 

    - *HTML DOM API:* Permite la modificación del DOM desde código JavaScript. Esto permite una mayor funcionalidad en la sitio web.
    - *localStorage:* Permite almacenar datos en el navegador sin tener que utilizar cookies.
    - *WebSockets:* Permite agregar comunicación bidireccional en una conexión persistente para tu aplicación/sitio web, permitiendo que sea real-time. Un ejemplo puede ser una aplicación de mesajería.

    1.3. Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla)
    
        Para aplicar distintos estilos CSS sobre el mismo elemento en función del tamaño de pantalla del dispositivo utilizado existen las media query. Esto nos permite que, por defecto, apliquemos un estilo CSS al elemento y que, en caso de que la pantalla supere un valor determinado, un breakpoint, se aplique otro estilo.

    1.4. Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo)

    Las principales características de TypeScript són las siguientes:

    - *Tipado Estático:* Permite especificar el tipo de variable y parámetros en tiempo de compilación. Esto facilita la detección de errores que tengan que ver con el tipado, haciendo que el la robustez del código sea mayor.
    - *Tipado Opcional:* TypeScript permite el tipado estático, pero también da la libertad de no hacerlo y que sea él mismo quien infiera el tipo de las variables y los parámetros de forma automática en base al valor que le pasamos.
    - *Introduce Tipado Avanzado:* Además de los tipado de datos que ya conocemos, incorpora otros tipos como pueden ser los genéricos o las uniones e intersecciones.
    - *Es 100% compatible con JavaScript:* Al ser TypeScript un superset de JavaScript, todas las funciones de JavaScript están disponibles en el mismo. Esto permite que se pueda ir llevando a cabo un cambio de un lenguaje a otro de forma gradual y sin tener que cambiar todo el código de golpe.

2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema, se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)
    2.1. Cita al menos 2 de estos preprocesadores

    - *Sintactically Awesome Style Sheets (Sass)* 
    - *Sassy CSS (SCSS)*
    
    2.2. Cita al menos 4 ventajas que ofrecen estos preprocesadores

    Algunas de las principales ventajas que ofrecen los preprocesadores CSS son:

    - *Posibilidad de añadir funcionalidades adicionales* (ej. variables y lógica condicional)
    - *Resulta en un código más ordenado y comprensible*
    - *Facilita la reutilización de código*
    - *Creamos una capa de abstracción entre el código CSS y el código que nosotros modificamos* lo que se traduce en una mayor seguridad del código.
    
    2.3. Explica brevemente en qué consisten los sourcemaps
    
    2.4. Explica qué es un transpilador

    Un tranpsilador es un compilador que traduce codigo de un lenguaje fuente a otro lenguaje fuente de un nivel de abstracción similar. Esto es precisamente lo que ocurre con estos preprocesadores.

3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos)
    3.1. Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos

    Algunos sistemas de control de versiones pueden ser CVS, Git, Suversion, Mercurial y Baazar. Algunas herramientas de gestión de módulos pueden ser npm y yarn, aunque existen otras.
    
    3.2. Cita y explica al menos 3 comandos de Git

    - *git clone <link con el nombre del repositorio>*: Permite descargar el código desde un repositorio remoto.
    - *git branch <nombre de la rama>*: Permite crear una nueva rama en local.
    - *git push <nombre repo. remoto> <nombre de la rama>*: Tras haber creado la rama con el comando anterior, envia la nueva rama al repositorio remoto.
    
    3.3. Cita y explica brevemente las características más definitorias de WebPack

    - Se trata de una herramienta *Module Bundler*. En otras palabras, es un software que se encarga de crear los paquetes de código necesarios para poder llevar a producción un proyecto frontend, realizando la transpilación del código y el empaquetado de los módulos en uno o varios archivos compactados.
    - Es capaz de traducir las versiones más modernas de JavaScript a código que sea soportado en todos los navegadores más utilizados.
    - Puede convertir el código de preprocesadores CSS a CSS
