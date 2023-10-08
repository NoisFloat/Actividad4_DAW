function iniciar() {
  var formulario = document.getElementsByName("Noel")[0]; // Obtén el formulario por su nombre

  var btnSubmit = document.getElementById("botonaso");

  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    var emailValue = formulario.z.value; // Obtiene el valor del campo "z"
    var passwordValue = formulario.zz.value; // Obtiene el valor del campo "zz"

    mostrarTexto(emailValue, passwordValue);
  }, false);
}

function mostrarTexto(email, contrasena) {
  var siSoy = new Persona("Como te extraño marcela", "Regresaaaa conmigo");
  siSoy.nombre = email;
  siSoy.deuda = contrasena;

  // Crea un elemento de párrafo y agrega el texto a ese elemento
  var resultado = document.createElement("p");
  resultado.textContent = siSoy.texto_Del_Puto();

  // Agrega el elemento de párrafo al cuerpo del documento
  document.body.appendChild(resultado);
}

class Persona {
  constructor(ARG1,ARG2) { //El metodo contructor se utiliza para inicializar valores en un objeto( En resumen es un por si al caso)
    this.nombre = ARG1;
    this.deuda = ARG2;
  }
  texto_Del_Puto() {
    return `Si ${this.nombre} no se hubiera comido la manzana (Ajá)
    La vida fuera sin malicia y mucho más sana (¡Sí!)
    Pero como esa cabrona se comió la fruta
    Por eso es que hoy en día hay mujeres tan p' (¿Me entiende'?)
    YA PAGAME ESTO ME DEBES ${this.deuda}$`;
  }
}

window.addEventListener("load", iniciar, false);
