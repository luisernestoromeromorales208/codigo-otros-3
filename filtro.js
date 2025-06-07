// Tenemos una "lista desordenada" de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }

];

// Se corrigió el método para obtener el contenedor de nuestra lista de productos
const listaDeProductos = document.getElementById('lista-de-productos');
// Se cambió el método para obtener el input de búsqueda
const input = document.getElementById('filtro');
// Se corrigió el identificador de nuestro botón de filtro
const botonFiltrar = document.getElementById('filtrar');
// Se le añadió funcioanlidad al identificador de nuestro botón de filtro
const botonResetear = document.getElementById('resetear');

// Se realizó una función para mostrar productos
function mostrarProductos(lista) {
  listaDeProductos.innerHTML = ''; // Limpiar contenido anterior
  lista.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');

    const nombre = document.createElement('p');
    nombre.textContent = `${producto.nombre} - ${producto.tipo} - ${producto.color}`;

    const imagen = document.createElement('img');
    imagen.setAttribute('src', producto.img);
    imagen.setAttribute('alt', producto.nombre);

    div.appendChild(nombre);
    div.appendChild(imagen);

    listaDeProductos.appendChild(div);
  }
);
}

// Mostramos los productos
mostrarProductos(productos);

// Creamos un evento para filtrar productos
botonFiltrar.addEventListener('click', () => {
  const texto = input.value.toLowerCase();
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(texto) ||
    producto.tipo.toLowerCase().includes(texto) ||
    producto.color.toLowerCase().includes(texto)
  );
  mostrarProductos(productosFiltrados);
}

);

// Hscemos otro evento para resetear el filtro
botonResetear.addEventListener('click', () => {
  input.value = '';
  mostrarProductos(productos);
}

);