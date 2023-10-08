
const arregloObjetos = []; // Arreglo en el que se guardarán todos los objetos creados

class Venta {
  constructor() {
    this.id = 0;
    this.nombre_Producto = "";
    this.precio_Unitario = 0.0;
    this.cantidad_a_Llevar = 0.0;
  }
  setId(id) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
  setNombreProducto(nombreProducto) {
    this.nombre_Producto = nombreProducto;
  }
  getNombreProducto() {
    return this.nombre_Producto;
  }
  setPrecioUnitario(precioUnitario) {
    this.precio_Unitario = precioUnitario;
  }
  getPrecioUnitario() {
    return this.precio_Unitario;
  }
  setCantidadALlevar(cantidadALlevar) {
    this.cantidad_a_Llevar = cantidadALlevar;
  }
  getCantidadALlevar() {
    return this.cantidad_a_Llevar;
  }
  getDetalle() {
    return this.cantidad_a_Llevar * this.precio_Unitario;
  }
}

function inicializacion() {
  let InputNombre = document.getElementById("producto");
  let InputPrecio = document.getElementById("precio");
  let InputCantidad = document.getElementById("cantidad");
  let BtnSubmit = document.getElementById("submit");

  if (BtnSubmit.addEventListener) {
    BtnSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      CrearUnaNuevaInstancia(
        InputNombre.value,
        InputPrecio.value,
        InputCantidad.value
      );
    });
  }
}

function CrearUnaNuevaInstancia(nombreP, precioP, cantidadP) {
  let ObjetoVenta = new Venta();

  ObjetoVenta.setId(arregloObjetos.length);
  ObjetoVenta.setNombreProducto(nombreP);
  ObjetoVenta.setPrecioUnitario(precioP);
  ObjetoVenta.setCantidadALlevar(cantidadP);
  arregloObjetos.push(ObjetoVenta);
  MostrarInstancia();
}

var filasDeVentas = document.getElementById("tablaResultados");

function MostrarInstancia() {
  let tbody = filasDeVentas;
  tbody.innerHTML = ""; // Limpia el contenido anterior de la tabla
  arregloObjetos.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${element.getId()}</td>
            <td>${element.getNombreProducto()}</td>
            <td>${element.getPrecioUnitario()}</td>
            <td>${element.getCantidadALlevar()}</td>
            <td>${element.getDetalle()}</td>
            <td><button onclick='eliminar(${element.getId()})' class='btn btn-danger'>Eliminar</button></td>
        `;
    tbody.appendChild(row);
  });
}

function eliminar(index) {
  // Verifica si el índice está dentro de los límites del arreglo
  if (index >= 0 && index < arregloObjetos.length) {
    // Elimina el objeto en el índice especificado
    arregloObjetos.splice(index, 1);

    // Actualiza los IDs de los objetos restantes en el arreglo
    for (let i = 0; i < arregloObjetos.length; i++) {
      
      arregloObjetos[i].setId(i);
      console.log(arregloObjetos[i].getId());

      i + 1;
    }

    // Muestra la instancia actualizada
    MostrarInstancia();
  } else {
    console.log("Índice fuera de los límites del arreglo" + index);
  }

}
window.addEventListener("load", inicializacion, false);
