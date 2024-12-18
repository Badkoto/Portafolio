document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const mensajeExito = document.getElementById("mensaje-exito");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Previene el envío automático
    limpiarErrores(); // Limpia mensajes previos de error

    let valido = true;

    // Captura de valores de los campos
    const nombre = document.getElementById("inputNombre").value.trim();
    const email = document.getElementById("txt-email").value.trim();
    const comentarios = document.getElementById("txt-comentarios").value.trim();

    // Validación personalizada
    if (nombre === "") {
      valido = false;
      mostrarError("error-nombre", "Por favor, ingrese su nombre.");
    }

    if (email === "") {
      valido = false;
      mostrarError("error-email", "Por favor, ingrese su correo electrónico.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      valido = false;
      mostrarError("error-email", "El correo electrónico no es válido.");
    }

    if (comentarios === "") {
      valido = false;
      mostrarError("error-comentarios", "Por favor, ingrese su comentario.");
    }

    // Si es válido, mostrar mensaje de éxito
    if (valido) {
      formulario.reset(); // Limpia el formulario
      mensajeExito.classList.remove("d-none"); // Muestra el mensaje de éxito
      setTimeout(() => {
        mensajeExito.classList.add("d-none"); // Oculta el mensaje después de 5 segundos
      }, 5000);
    }
  });

  // Función para mostrar mensajes de error en HTML
  function mostrarError(id, mensaje) {
    const elementoError = document.getElementById(id);
    elementoError.textContent = mensaje; // Establece el mensaje
  }

  // Función para limpiar los mensajes de error
  function limpiarErrores() {
    mostrarError("error-nombre", "");
    mostrarError("error-email", "");
    mostrarError("error-comentarios", "");
  }
});
