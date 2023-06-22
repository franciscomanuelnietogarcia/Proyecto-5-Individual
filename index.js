function toggleContent(button) {
    var content = button.nextElementSibling;
    content.style.display = (content.style.display === "none") ? "block" : "none";
  }
  const postsContainer = document.querySelector('.posts');
  
  // Simulación de datos de los posts
  const posts = [
    { title: 'Post 1', content: 'Contenido del post 1' },
    { title: 'Post 2', content: 'Contenido del post 2' },
    { title: 'Post 3', content: 'Contenido del post 3' },
  ];
  
  // Cargar los posts en la página
  function loadPosts() {
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  loadPosts();
  
  // window.onscroll = function () { mostrarBotonVolverArriba() };
  
  // function mostrarBotonVolverArriba() {
  //   var botonVolverArriba = document.getElementById("btnVolverArriba");
  
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     botonVolverArriba.classList.add("show");
  //   } else {
  //     botonVolverArriba.classList.remove("show");
  //   }
  // }
  
  // function volverArriba() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  
  // var botonVolverArriba = document.getElementById("btnVolverArriba");
  // botonVolverArriba.addEventListener("click", volverArriba);
  
  
  
  
  
  function loadContent(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('content').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', page + '.html', true);
    xhttp.send();
  }
  // Manejo de eventos de clic en los enlaces de navegación
  document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('nav ul li a');
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        let page = this.getAttribute('href').substring(1);
        loadContent(page);
      });
    }
  });
  
  
  
  
  
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