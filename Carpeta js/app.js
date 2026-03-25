const productos = [
  { id: 1, nombre: "Ramen Coreano", precio: 45, categoria: "comida" },
  { id: 2, nombre: "Tteokbokki", precio: 60, categoria: "comida" },
  { id: 3, nombre: "Mascarilla Facial", precio: 30, categoria: "skincare" },
  { id: 4, nombre: "Crema Coreana", precio: 120, categoria: "skincare" },
  { id: 5, nombre: "Álbum BTS", precio: 350, categoria: "kpop" },
  { id: 6, nombre: "Lightstick BLACKPINK", precio: 800, categoria: "kpop" }
];

let carrito = [];


function filtrarCategoria(categoria) {
  const productos = document.querySelectorAll(".card");

  productos.forEach(p => {
    if (categoria === "todos" || p.dataset.categoria === categoria) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}


function buscarProductos() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const productos = document.querySelectorAll(".card");

  productos.forEach(p => {
    const nombre = p.querySelector("h3").textContent.toLowerCase();

    if (nombre.includes(texto)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}


function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}


function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalTexto = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;

    lista.innerHTML += `
      <li>
        ${item.nombre} - $${item.precio}
        <button onclick="eliminarProducto(${index})">❌</button>
      </li>
    `;
  });

  totalTexto.textContent = "Total: $" + total + " MXN";
}


function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}


function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}


function mostrarCarrito() {
  const carrito = document.getElementById("carrito");
  carrito.classList.toggle("oculto");
}
