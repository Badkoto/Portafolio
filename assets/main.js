document.addEventListener("DOMContentLoaded", function () {

    $("#formulario").submit(function (evento) {
      evento.preventDefault();
      limpiarErrores();
      var nombre = $("#inputNombre").val();
      var apellido = $("#inputApellido").val();
      var email = $("#txt-email").val();
      var comentarios = $("#txt-comentarios").val();
      var valido = true;
  
      if (nombre == "") {
        valido = false;
        $("#error-nombre").html("Ingrese nombre");
        $("label[for='inputNombre']").addClass("text-danger");
      }
  
      if (apellido == "") {
        valido = false;
        $("#error-apellido").html("Ingrese Apellido");
        $("label[for='inputApellido']").addClass("text-danger");
      }
  
      if (email == "") {
        valido = false;
        $("#error-email").html("Ingrese su correo electronico");
        $("#lbl-email").addClass("text-danger");
      }
  
      if (comentarios == "") {
        valido = false;
        $("#error-comentarios").html("Ingrese comentario");
        $("#lbl-comentarios").addClass("text-danger");
      }
  
      if (valido) {
        $("#alert-send").removeClass("d-none");
      }
    });
  
    function limpiarErrores() {
      $("#error-email").html("");
      $("#error-nombre").html("");
      $("#error-apellido").html("");
      $("#error-comentarios").html("");
      $("#lbl-email").removeClass("text-danger");
      $("label[for='inputNombre']").removeClass("text-danger");
      $("label[for='inputApellido']").removeClass("text-danger");
      $("#lbl-comentarios").removeClass("text-danger");
    }
  
    $("#btn-limpiar").click(function () {
      limpiarErrores();
      $("#txt-email").val("");
      $("#inputNombre").val("");
      $("#inputApellido").val("");
      $("#txt-comentarios").val("");
      $("#alert-send").addClass("d-none");
    });
  });
  