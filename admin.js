
function enviarFormulario() {
  var titulo = document.getElementById("titulo").value;
  var descripcion = document.getElementById("descripcion").value;
  var imagen = document.getElementById("imagen").files[0];

  var nuevaEntrada = document.createElement("div");
  nuevaEntrada.innerHTML = "<h2>" + titulo + "</h2><p>" + descripcion + "</p><img src='" + URL.createObjectURL(imagen) + "'>";
  document.getElementById("entradas").appendChild(nuevaEntrada);
}