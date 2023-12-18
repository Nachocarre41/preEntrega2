const catalogo = [
  { nombre: "juego 1", precio: 5000 },
  {
    nombre: "juego 2",
    precio: 7500,
  },
  {
    nombre: "juego 3",
    precio: 12000,
  },
  {
    nombre: "juego 4",
    precio: 4500,
  },
];

const carrito = [];
agregarCarrito = () => {
  carrito.push(prompt("Agrega un juego al carrito"));
};
let bucle = true;
while (bucle) {
  let opcion = parseInt(
    prompt(
      "Elegi una opcion: 1.Mostrar Catalogo 2.Agregar al carrito 3.Ver Carrito 4.Salir "
    )
  );

  switch (opcion) {
    case 1:
      catalogo.forEach((juego) =>
        alert(juego.nombre + " Precio " + juego.precio)
      );
      break;
    case 2:
      agregarCarrito();
      break;
    case 3:
      carrito.forEach((producto) => alert(producto));
      break;
    case 4:
      bucle = false;
      break;
    default:
      alert("Ingresa una opcion valida");
      break;
  }
}
