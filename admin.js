// // Definir las rutas y contenido de cada página
// const routes = [
//   { path: '/', content: 'Contenido de la página de inicio' },
//   { path: '/obras', content: 'Contenido de la página de opciones' },
//   { path: '/map', content: 'Contenido de la página de acerca' }
//   { path: '/proyect', content: 'Contenido de la página de acerca' }
//   { path: '/aboutus', content: 'Contenido de la página de acerca' }
// ];

// // Función para cambiar la página activa
// function setActivePage(path) {
//   const pageContent = document.getElementById('pageContent');
  
//   // Buscar la ruta correspondiente en el arreglo de rutas
//   const route = routes.find(route => route.path === path);
  
//   // Verificar si se encontró una ruta válida
//   if (route) {
//     // Actualizar el contenido de la página
//     pageContent.innerHTML = `<div class="post">${route.content}</div>`;
//   } else {
//     // Mostrar un mensaje de página no encontrada
//     pageContent.innerHTML = '<div class="post">Página no encontrada</div>';
//   }
  
//   // Activar la página correspondiente
//   const activePage = document.querySelector('.page.active');
//   if (activePage) {
//     activePage.classList.remove('active');
//   }
  
//   const newActivePage = document.getElementById(path);
//   if (newActivePage) {
//     newActivePage.classList.add('active');
//   }
// }

// // Función para manejar el cambio de ruta
// function handleRouteChange() {
//   const path = location.hash.slice(1);
//   setActivePage(path);
// }

// // Escuchar el evento de cambio de hash (ruta)
// window.addEventListener('hashchange', handleRouteChange);

// // Cargar la página inicial
// setActivePage('/');

// // Entradas simuladas (para este ejemplo)
// let entradas = [
//     { titulo: 'Entrada 1', contenido: 'Contenido de la entrada 1' },
//     { titulo: 'Entrada 2', contenido: 'Contenido de la entrada 2' },
//     { titulo: 'Entrada 3', contenido: 'Contenido de la entrada 3' }
//   ];
  
//   // Función para mostrar las entradas existentes
//   function mostrarEntradas() {
//     const entradaList = document.getElementById('entrada-list');
//     entradaList.innerHTML = '';
  
//     entradas.forEach((entrada, index) => {
//       const li = document.createElement('li');
//       li.innerHTML = `
//         <h3>${entrada.titulo}</h3>
//         <p>${entrada.contenido}</p>
//         <button onclick="editarEntrada(${index})">Editar</button>
//         <button onclick="eliminarEntrada(${index})">Eliminar</button>
//       `;
//       entradaList.appendChild(li);
//     });
//   }
  
//   // Función para agregar una entrada
//   function agregarEntrada(event) {
//     event.preventDefault();
  
//     const tituloInput = document.getElementById('titulo');
//     const contenidoInput = document.getElementById('contenido');
  
//     const nuevaEntrada = {
//       titulo: tituloInput.value,
//       contenido: contenidoInput.value
//     };
  
//     entradas.push(nuevaEntrada);
  
//     tituloInput.value = '';
//     contenidoInput.value = '';
  
//     mostrarEntradas();
//   }
  
//   // Función para editar una entrada existente
//   function editarEntrada(index) {
//     const entrada = entradas[index];
  
//     const tituloInput = document.getElementById('titulo');
//     const contenidoInput = document.getElementById('contenido');
  
//     tituloInput.value = entrada.titulo;
//     contenidoInput.value = entrada.contenido;
  
//     entradas.splice(index, 1);
  
//     mostrarEntradas();
//   }
  
//   // Función para eliminar una entrada existente
//   function eliminarEntrada(index) {
//     entradas.splice(index, 1);
  
//     mostrarEntradas();
//   }
  
//   // Mostrar las entradas existentes al cargar la página
//   mostrarEntradas();
  
//   // Agregar el evento de submit al formulario
//   const entradaForm = document.getElementById('entrada-form');
//   entradaForm.addEventListener('submit', agregarEntrada);








  function enviarFormulario() {
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagen = document.getElementById("imagen").files[0];

    // Aquí puedes realizar acciones adicionales, como enviar los datos y la imagen a un servidor o almacenarlos en una base de datos

    // Mostrar la información en la página principal
    var nuevaEntrada = document.createElement("div");
    nuevaEntrada.innerHTML = "<h2>" + titulo + "</h2><p>" + descripcion + "</p><img src='" + URL.createObjectURL(imagen) + "'>";
    document.getElementById("entradas").appendChild(nuevaEntrada);
}