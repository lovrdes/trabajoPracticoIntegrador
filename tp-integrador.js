//1. ESTRUCTURA DE DATOS. 

//a. Crear un array de objetos llamado libros que contenga al menos 10
//libros. Cada libro debe tener las siguientes propiedades:
//✔ id (número)
//✔ título (string),
//✔ autor (string),
//✔ año (número),
//✔ género (string),
//✔ disponible (booleano).

const libros = [ //se declara una constante llamada 'libros' y se le asignará un array que contiene 11 objetos, 
                 //es decir, 11 libros. 

    //cada objeto tendra 6 propiedades de diferentes tipos.
    
    {
    id: 1,
    título: 'Manual para mujeres de la limpieza',
    autor: 'Lucía Berlin', 
    año: 2015, 
    género: 'Ficción literaria',
    disponible: false
    },
    {
    id: 2, 
    título: 'La metamorfosis',
    autor: 'Franz Kafka',
    año: 1915,
    género: 'Novela psicológica',
    disponible: true
    },
    {
    id: 3,
    título: 'La peste', 
    autor: 'Albert Camus',
    año: 1947,
    género: 'Ficción',
    disponible: true
    },
    {
    id: 4,
    título: 'Estudio en escarlata',
    autor: 'Arthur Conan Doyle',
    año: 1887,
    género: 'Novela policial',
    disponible: true
    },
    {
    id: 5,
    título: 'Los amores difíciles',
    autor: 'Italo Calvino',
    año: 1970,
    género: 'Novela',
    disponible: false
    }, 
    {
    id: 6,
    título: 'Las cosas que perdimos en el fuego',
    autor: 'Mariana Enriquez', 
    año: 2016, 
    género: 'Ficción literaria',
    disponible: false
    },
    {
    id: 7,
    título: 'A sangre fría',
    autor: 'Truman Capote',
    año: 1965,
    género: 'Biografía',
    disponible: true
    },
    {
    id: 8,
    título: 'Kafka en la orilla',
    autor: 'Haruki Murakami',
    año: 2002,
    género: 'Literatura fantástica',
    disponible: true
    },
    {
    id: 9,
    título: 'El resplandor',
    autor: 'Stephen King',
    año: 1977,
    género: 'Terror',
    disponible: false
    },
    {
    id: 10,
    título: 'Carrie',
    autor: 'Stephen King',
    año: 1974,
    género: 'Terror',
    disponible: true
    },
    {
    id: 11,
    título: 'El viejo y el mar',
    autor: 'Ernest Hemingway',
    año: 1952,
    género: 'Novela',
    disponible: false,
    }
    ];
    
    //b. Crear un array de objetos llamado usuarios con al menos 5 usuarios.
    //Cada usuario debe tener:
    //✔ id (número)
    //✔ nombre (string)
    //✔ email (string)
    //✔ librosPrestados (array de ids de libros).
    
    const usuarios = [ //se declara una constante llamada usuarios y se le asigna un array, que contiene objetos
                       //que están asociados a datos de personas.
    {
    id: 1,
    nombre: 'Nicole Otero',
    email: 'nicoleot@gmail.com',
    librosPrestados: [1]
    },
    {
    id: 2,
    nombre: 'Alma Oviedo',
    email: 'alma1995@gmail.com',
    librosPrestados: [5]
    },
    {
    id: 3,
    nombre: 'Emilio Vega',
    email: 'emiliovega99@gmail.com',
    librosPrestados: [6]
    },
    {
    id: 4,
    nombre: 'Javier Valdés',
    email: 'valdesjavi@gmail.com',
    librosPrestados: [9]
    },
    {
    id: 5,
    nombre: 'Juan Pedro Aguilera',
    email: 'juaniaguilera@gmail.com',
    librosPrestados: [11]
    },
    ]; 
    
    //2. FUNCIONES DE GESTIÓN DE LIBROS.
    
    //a. Implementar una función agregarLibro(id, titulo, autor, anio, genero)
    //que agregue un nuevo libro al array libros.
    
    function agregarLibro (id, título, año, género) { //creamos una función llamada agregarLibro, que reciba los datos de un nuevo libro.
    
    const nuevoLibro = { //creamos el objeto que recibira diferentes valores.
    id: 12,
    título: 'Una habitación propia',
    autor: 'Virginia Woolf',
    año: 1929,
    género: 'Ensayo',
    disponible: true
    };
      
    libros.push(nuevoLibro); //acá usamos la palabra push para agregar el nuevo objeto al final del array.
    console.log(`El libro "${título}" se ha agregado.`); //mostramos el mensaje en la consola.
    }
    
    agregarLibro(12, 'Una habitación propia', 1929, 'Ensayo');

    //b. Crear una función buscarLibro(criterio, valor) que permita buscar 
    //libros por título, autor o género utilizando el algoritmo de búsqueda
    //lineal.

    function buscarLibro(criterio, valor) { //definimos la función, 'criterio' es el nombre de la propiedad
    //por la cual queremos buscar. 'Valor' es el valor que esperamos encontar. 
    
    for (let i = 0; i < libros.length; i++) { //usamos el for para recorrer el array de libros uno por uno.
    //i es el indice del array, y libros[i] accede al objeto libro en esa posición. 

    if (libros[i][criterio] === valor) { //accedemos a una propiedad del objeto, se compara con el valor
    //que buscamos. 

    console.log(`Libro encontrado:`, libros[i]); //si hay coincidencia se mostrará en la consola. 
    return libros[i];
    }
    }
    }

    buscarLibro('autor', 'Virginia Woolf');

    //c. Desarrollar una función ordenarLibros(criterio) que ordene los libros
    //por título o año utilizando el algoritmo de ordenamiento burbuja
   //(bubble sort) y luego muestre los libros ordenados en la consola.
    
   function ordenarLibros(criterio) { 
   let librosOrdenados = [...libros]; //hacemos una copia del array original para no modificarlo.

   for (let i = 0; i < librosOrdenados.length - 1; i++) { //ordenamos los libros, y comparamos dos libros adyacentes
   //si el año del primero es mayo que el segundo, los intercambiara. 
   for (let j = 0; j < librosOrdenados.length - 1 - i; j++) { //se repetirá hasta que todos los libros
   //esten ordenados. 
   
   if (librosOrdenados[j].año > librosOrdenados[j + 1].año) {
   
   let temp = librosOrdenados[j];
   librosOrdenados[j] = librosOrdenados[j + 1];
   librosOrdenados[j + 1] = temp;

   }

   }

   }

   console.log('Libros ordenados por año:'); //le pedimos a la consola que muestre los libros ordenados por año.
   librosOrdenados.forEach(libro => {
   console.log(`${libro.título} - ${libro.año}`);

   });
   }

   ordenarLibros();

   //d. Desarrollar una función borrarLibro(id) que elimine el libro que se le
   //pase por parámetro.

   function borrarLibro(id) {
   const librosActualizados = libros.filter(libro => libro.id !== id); //creamos una función sin el libro
   //que queremos borrar, usamos .filter() para crear un nuevo array, llamado librosActualizados.

   //si el libro con ese id no existe, el array queda igual que el original.

   if (librosActualizados.length === libros.length) { //acá verificamos si se eliminó algo, esto compara
   //la cantidad de libros antes y después, si las longitudes son iguales significa que no se eliminó nada. 
   console.log('No se encontró el libro'); //entonces se muestra este mensaje en la consola. 
   } else {

   libros.length = 0; //si se eliminó se actualizamos el array original. 
   libros.push(...librosActualizados);
   console.log('El libro ha sido eliminado');

   }
   }

   borrarLibro(3);
   console.log(libros);

   //3. GESTIÓN DE USUARIOS.

   //a. Implementar una función registrarUsuario(nombre, email) que
   //agregue un nuevo usuario al array usuarios.

   function registrarUsuario(nombre, email) {
   const nuevoId = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1; //en esta parte se verifica
   //si el array usuarios tiene elementos, toma el id del último usuario y le suma uno. 

   const nuevoUsuario = { //crea el objeto del nuevo usuario con sus valores.
   id: nuevoId,
   nombre: nombre,
   email: email,
   librosPrestados: []
   };

   usuarios.push(nuevoUsuario); //lo agrega al array.
   console.log(`Usuario ${nombre} registrado.`);
   }

   registrarUsuario("Mariano Gel", "mariangel@gmail.com");
   console.log(usuarios);

   //b. Implementar una función mostrarTodosLosUsuarios() que me
   //devuelva el array completo de usuarios

   function mostrarLosUsuarios () {
   console.log('Lista de usuarios:');
   console.log(usuarios);
   return usuarios;
   }
   
   const todos = mostrarLosUsuarios();

   //c. Crear una función buscarUsuario(email) que devuelva la información
   //de un usuario dado su email.

   function buscarUsuario(email) {
   const usuario = usuarios.find(user => user.email === email); //usamos el find() para buscar dentro del
   //array usuarios. La función de la flecha compara el email de cada usuario con el email que pasamos 
   //a la función. Si encuentra el usuario que coincide lo agrega a usuarios. 

   if (usuario) {
   console.log('Usuario encontrado:'); //si lo encuentra devuelve lo siguiente "usuario encontrado"
   console.log(usuario);
   return usuario;
   } else {
   console.log('No se encontró el usuario'); //de lo contrario muestra lo siguiente.
   return null; 
   }
   }

   buscarUsuario('alma1995@gmail.com');

   //d. Implementar una función borrarUsuario(nombre, email) que elimine el
   //usuario seleccionado.

   function borrarUsuario(nombre, email) {
   const usuariosFiltrados = usuarios.filter(user => !(user.nombre === nombre && user.email === email));

   if (usuariosFiltrados.length === usuarios.length) {
   console.log('No se encontro el usuario');
   return;
   }
    
   usuarios.length = 0;
   usuarios.push(...usuariosFiltrados);

   console.log('El usuario ha sido eliminado');

   }

   borrarUsuario(); 

   //4. SISTEMA DE PRÉSTAMOS.

   //a. Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
   //un libro como no disponible y lo agregue a la lista de libros prestados
   //del usuario. Luego mostrar que libro se prestó y a que usuario.

   function prestarLibro(idLibro, idUsuario) {
   const libro = libros.find(l => l.id === idLibro); // Usa .find() para buscar en el array libros el 
   //que tenga el mismo id que se pasa como parámetro (idLibro).

   if (!libro) { //Si libro es undefined (no existe en la lista), 
   //muestra un mensaje y corta la función con return.

   console.log(`No se encontró el libro ${idLibro}` );
   return;
   }

   if (!libro.disponible) { //Si el libro ya está prestado (disponible === false), 
   //avisa que no se puede prestar.

   console.log(`El libro ${libro.título} no está disponible`);
   return;
   }

   const usuario = usuarios.find(u => u.id === idUsuario);
   if (!usuario) { //verificamos si el usuario existe.
   console.log(`No se encontró el usuario ${idUsuario}`);
   return;
   }

   libro.disponible = false
   usuario.librosPrestados.push(idLibro);

   console.log(`El libro "${libro.título}" ha sido prestado a "${usuario.nombre}".`);
   }

   prestarLibro(3, 4);

   //b. Implementar una función devolverLibro(idLibro, idUsuario) que 
   //marque un libro como disponible y lo elimine de la lista de libros
   //prestados del usuario.

   function devolverLibro(idLibro, idUsuario) {
   const libro = libros.find(l => l.id === idLibro); //busca el libro en el array libros
   if (!libro) { //verifica si el libro existe.
   console.log(`No se encontró un libro con ID ${idLibro}`);
   return;
   }

   const usuario = usuarios.find(u => u.id === idUsuario); //Busca al usuario en el array 
   //usuarios usando el idUsuario.
   if (!usuario) {
   console.log(`No se encontró el usuario con ID ${idUsuario}`);
   return;
   }

   const indexLibro = usuario.librosPrestados.indexOf(idLibro);
   if (indexLibro === -1) {
   console.log(`El libro no está prestado al usuario "${usuario.nombre}"`);
   return; 
   }

   libro.disponible = true; //el libro vuelve a estar disponible.
   usuario.librosPrestados.splice(indexLibro, 1);

   console.log(`El libro "${libro.título}" ha sido devuelto por "${usuario.nombre}"`);
   }

   devolverLibro(6, 3)

   //5. REPORTES.

   //Crear una función generarReporteLibros() que utilice métodos
   //avanzados de arrays (.map(), .filter(), .reduce()) para generar un
   //reporte con la siguiente información:
   //✔ Cantidad total de libros.
   //✔ Cantidad de libros prestados.
   //✔ Cantidad de libros por género.
   //✔ Libro más antiguo y más nuevo

   function generarReporteLibros() {
    const totalLibros = libros.length; //cuenta cuántos libros hay en total en el array libros.
      
    const librosPrestados = libros.filter(libro => !libro.disponible).length; //filtra los libros no disponibles (prestados), 
    //y cuenta cuántos son.
    
    const cantidadPorGenero = libros.reduce((antiguo, libro) => {
    return libro.año < antiguo.año ? libro : antiguo;
    });
      
    const libroMasAntiguo = libros.reduce((antiguo, libro) => { //Usa reduce() para recorrer todos los libros y
    //guardar el que tenga el año más bajo (más viejo).
    return libro.año < antiguo.año ? libro : antiguo;
    });
      
    const libroMasNuevo = libros.reduce((nuevo, libro) => {
    return libro.año > nuevo.año ? libro : nuevo; 
    }); 
      
    console.log('Reporte de libros:');
    console.log(`Total de libros: ${totalLibros}`);
    console.log(`Libros prestados: ${librosPrestados}`);
    console.log("Cantidad de libros por género:");
    for (const genero in cantidadPorGenero) {
    console.log(`${genero}: ${cantidadPorGenero[genero]}`);
    }
    
    console.log(`Libro más antiguo: "${libroMasAntiguo.título}" (${libroMasAntiguo.año})`);
    console.log(`Libro más nuevo: "${libroMasNuevo.título}" (${libroMasNuevo.año})`);
      
    return {
    totalLibros,
    librosPrestados,
    cantidadPorGenero,
    libroMasAntiguo,
    libroMasNuevo,
    };
    }
    
    generarReporteLibros();

    //6. IDENTIFICACIÓN AVANZADA DE LIBROS.

    //a. Implementar una función librosConPalabrasEnTitulo() que identifique
    //y muestre los títulos de los libros que contienen más de una palabra.
    //Además la función debe excluir aquellos títulos que contengan
    //números y/o caracteres especiales. Por último mostrar en la consola
    //el array resultante.

    function librosConPalabrasEnTitulo() {
    const resultado = []; //aca se guardan los titulos de los libros válidos. 
      
    for (let i = 0; i < libros.length; i++) { //usamos un bucle for para pasar uno por uno los libros de
    //la colección.
    const titulo = libros[i].título;
      
          
    const palabras = titulo.trim().split(" "); //verificamos si el título tiene más de una palabra
    if (palabras.length > 1) {
    let esValido = true;
      
            
    for (let j = 0; j < titulo.length; j++) {
    const caracter = titulo[j];
      
              
    if ( //verificamos si todos los caracteres de los titulos son válidos
    !(
    (caracter >= "A" && caracter <= "Z") ||
    (caracter >= "a" && caracter <= "z") ||
    caracter === " " ||
    caracter === "á" || caracter === "é" || caracter === "í" ||
    caracter === "ó" || caracter === "ú" || caracter === "ñ" ||
    caracter === "Á" || caracter === "É" || caracter === "Í" ||
    caracter === "Ó" || caracter === "Ú" || caracter === "Ñ"
    )
    ) {
    esValido = false;
    break;
    }
    }
      
    if (esValido) { //si pasó todas las validaciones, se agrega a la lista resultado.
    resultado.push(titulo);
    }
    }
    }
      
    console.log("Títulos válidos:");
    console.log(resultado);
    return resultado;
    }

    librosConPalabrasEnTitulo();

    //7. CÁLCULOS ESTADÍSTICOS

    //Desarrollar una función calcularEstadisticas() que obtenga
    //información sobre los años de publicación de los libros:
    //✔ Obtener un array con los años de publicación de todos los
    //libros.
    //✔ Calcular el promedio de los años de publicación.
    //✔ Encontrar el año de publicación más frecuente.
    //✔ Calcular la diferencia en años entre el libro más antiguo y el
    //más nuevo. Para este punto es recomendable usar el objeto Math().

    function calcularEstadisticas() {
    const años = libros.map(libro => libro.año); //se crea un nuevo array años que solo contiene los años de cada libro.
      
        
    const sumaAños = años.reduce((total, año) => total + año, 0); //usamos reduce para sumar todos los años.
    const promedio = sumaAños / años.length; //luego dividimos entre la cantidad de libros para obtener el promedio.
      
        
    const frecuencias = {}; 
    let añoMasFrecuente = años[0];
    let maxFrecuencia = 1;
      
    for (let i = 0; i < años.length; i++) { //este bucle cuenta las veces que aparece cada año
    const año = años[i];
    if (frecuencias[año]) {
    frecuencias[año]++;
    } else {
    frecuencias[año] = 1;
    }
      
    if (frecuencias[año] > maxFrecuencia) { //usamos Math.min y Math.max para hallar el maximo y el minimo.
    maxFrecuencia = frecuencias[año];
    añoMasFrecuente = año;
    }
    }
      
        
    const añoMasAntiguo = Math.min(...años);
    const añoMasNuevo = Math.max(...años);
    const diferenciaAños = Math.abs(añoMasNuevo - añoMasAntiguo); //restamos el año más viejo del más nuevo para saber 
    //cuántos años pasaron entre ambos.
      
        
    console.log("Estadísticas sobre los años de publicación:");
    console.log(`Años de publicación: ${años.join(", ")}`);
    console.log(`Promedio de publicación: ${promedio.toFixed(2)}`);
    console.log(`Año más frecuente: ${añoMasFrecuente} (aparece ${maxFrecuencia} veces)`);
    console.log(`Diferencia entre el libro más antiguo y el más nuevo: ${diferenciaAños} años`);
    }

    calcularEstadisticas();

   //8. MANEJO DE CADENAS

   //a. Crear una función normalizarDatos() que utilice métodos de strings 
   //para: 
   //✔ Convertir todos los títulos a mayúsculas.
   //✔ Eliminar espacios en blanco al inicio y final de los nombres de autores. 
   //✔ Formatear los emails de los usuarios a minúsculas.

   function normalizarDatos() {
   for (let i = 0; i < libros.length; i++) { //convertimos los títulos a mayúsculas y quitamos los 
   //espacios en los nombres de autores
   libros[i].título = libros[i].título.toUpperCase();
   libros[i].autor = libros[i].autor.trim(); //usamos trim() elimina espacios en blanco
   }

   for (let i = 0; i < usuarios.length; i++) { //usamos el toLowerCase() para convertir todos los emails a 
   //minusculas.
   usuarios[i].email = usuarios[i].email.toLowerCase();
   }

   console.log('Datos normalizados');

   }

   normalizarDatos();
   console.log(libros);
   console.log(usuarios);

   //9. INTERFAZ DE USUARIO POR CONSOLA

   //a y b. Implementar una función menuPrincipal() que muestre un menú de
   //opciones al usuario y permita interactuar con el sistema utilizando
   //prompt().

   function menuPrincipal() {
   let opcion = "";
  
    do {
    opcion = prompt( //usamos el prompt() para pedirle al usuario que ingrese un numero. 
    "Menú Principal:\n" +
    "1. Mostrar todos los libros\n" +
    "2. Mostrar todos los usuarios\n" +
    "3. Registrar un nuevo usuario\n" +
    "4. Buscar un usuario por email\n" +
    "5. Borrar un usuario\n" +
    "6. Prestar un libro\n" +
    "7. Devolver un libro\n" +
    "8. Ordenar libros por año (ascendente)\n" +
    "9. Borrar un libro\n" +
    "10. Libros con títulos válidos (sin números/símbolos, más de una palabra)\n" +
    "11. Generar reporte de libros\n" +
    "12. Calcular estadísticas de publicación\n" +
    "13. Normalizar datos\n" +
    "14. Salir\n\n" +
    "Ingrese el número de la opción:"
    );
  
    switch (opcion) {
    case "1":
    console.log("Lista de libros:");
    console.log(libros);
    break;
  
    case "2":
    mostrarLosUsuarios();
    break;
  
    case "3":
    const nombreNuevo = prompt("Ingrese el nombre del nuevo usuario:");
    const emailNuevo = prompt("Ingrese el email del nuevo usuario:");
    registrarUsuario(nombreNuevo.trim(), emailNuevo.trim());
    break;
  
    case "4":
    const emailBuscado = prompt("Ingrese el email del usuario a buscar:");
    buscarUsuario(emailBuscado.trim().toLowerCase());
    break;
  
    case "5":
    const nombreEliminar = prompt("Ingrese el nombre del usuario a borrar:");
    const emailEliminar = prompt("Ingrese el email del usuario a borrar:");
    borrarUsuario(nombreEliminar.trim(), emailEliminar.trim());
    break;
  
    case "6":
    const idLibroPrestamo = parseInt(prompt("Ingrese el ID del libro a prestar:"));
    const idUsuarioPrestamo = parseInt(prompt("Ingrese el ID del usuario:"));
    prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
    break;
  
    case "7":
    const idLibroDev = parseInt(prompt("Ingrese el ID del libro a devolver:"));
    const idUsuarioDev = parseInt(prompt("Ingrese el ID del usuario:"));
    devolverLibro(idLibroDev, idUsuarioDev);
    break;
  
    case "8":
    ordenarLibros("año");
    break;
  
    case "9":
    const idLibroEliminar = parseInt(prompt("Ingrese el ID del libro a borrar:"));
    borrarLibro(idLibroEliminar);
    break;
  
    case "10":
    librosConPalabrasEnTitulo();
    break;
  
    case "11":
    generarReporteLibros();
    break;
  
    case "12":
    calcularEstadisticas();
    break;
  
    case "13":
    normalizarDatos();
    break;
  
    case "14":
    alert("Gracias por utilizar nuestra biblioteca virtual");
    break;
  
    default:
    alert("Opción inválida");
    }
    } while (opcion !== "14");
    }

    menuPrincipal();

