//1. ESTRUCTURA DE DATOS. 

//a. Crear un array de objetos llamado libros que contenga al menos 10
//libros. Cada libro debe tener las siguientes propiedades:
//✔ id (número)
//✔ título (string),
//✔ autor (string),
//✔ año (número),
//✔ género (string),
//✔ disponible (booleano).

const libros = [
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
    
    const usuarios = [
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
    
    //2. Funciones de Gestión de Libros.
    
    //a. Implementar una función agregarLibro(id, titulo, autor, anio, genero)
    //que agregue un nuevo libro al array libros.
    
    function agregarLibro (id, título, año, género) {
    const nuevoLibro = {
    id: 12,
    título: 'Una habitación propia',
    autor: 'Virginia Woolf',
    año: 1929,
    género: 'Ensayo',
    disponible: true
    };
      
    libros.push(nuevoLibro);
    console.log(`El libro "${título}" se ha agregado.`); 
    }
    
    //b. Crear una función buscarLibro(criterio, valor) que permita buscar 
    //libros por título, autor o género utilizando el algoritmo de búsqueda
    //lineal.

    agregarLibro(12, 'Una habitación propia', 1929, 'Ensayo');
    
    function buscarLibro(criterio, valor) {
    
    for (let i = 0; i < libros.length; i++) { 
    if (libros[i][criterio] === valor) {
    console.log(`Libro encontrado:`, libros[i]);
    return libros[i];
    }
    }
    }

    buscarLibro('autor', 'Virginia Woolf');

    //c. Desarrollar una función ordenarLibros(criterio) que ordene los libros
    //por título o año utilizando el algoritmo de ordenamiento burbuja
   //(bubble sort) y luego muestre los libros ordenados en la consola.
    
   
    