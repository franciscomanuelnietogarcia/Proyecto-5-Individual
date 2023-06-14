// Entradas simuladas (para este ejemplo)
let entradas = [
    { titulo: 'Entrada 1', contenido: 'Contenido de la entrada 1' },
    { titulo: 'Entrada 2', contenido: 'Contenido de la entrada 2' },
    { titulo: 'Entrada 3', contenido: 'Contenido de la entrada 3' }
  ];
  
  // Función para mostrar las entradas existentes
  function mostrarEntradas() {
    const entradaList = document.getElementById('entrada-list');
    entradaList.innerHTML = '';
  
    entradas.forEach((entrada, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${entrada.titulo}</h3>
        <p>${entrada.contenido}</p>
        <button onclick="editarEntrada(${index})">Editar</button>
        <button onclick="eliminarEntrada(${index})">Eliminar</button>
      `;
      entradaList.appendChild(li);
    });
  }
  
  // Función para agregar una entrada
  function agregarEntrada(event) {
    event.preventDefault();
  
    const tituloInput = document.getElementById('titulo');
    const contenidoInput = document.getElementById('contenido');
  
    const nuevaEntrada = {
      titulo: tituloInput.value,
      contenido: contenidoInput.value
    };
  
    entradas.push(nuevaEntrada);
  
    tituloInput.value = '';
    contenidoInput.value = '';
  
    mostrarEntradas();
  }
  
  // Función para editar una entrada existente
  function editarEntrada(index) {
    const entrada = entradas[index];
  
    const tituloInput = document.getElementById('titulo');
    const contenidoInput = document.getElementById('contenido');
  
    tituloInput.value = entrada.titulo;
    contenidoInput.value = entrada.contenido;
  
    entradas.splice(index, 1);
  
    mostrarEntradas();
  }
  
  // Función para eliminar una entrada existente
  function eliminarEntrada(index) {
    entradas.splice(index, 1);
  
    mostrarEntradas();
  }
  
  // Mostrar las entradas existentes al cargar la página
  mostrarEntradas();
  
  // Agregar el evento de submit al formulario
  const entradaForm = document.getElementById('entrada-form');
  entradaForm.addEventListener('submit', agregarEntrada);