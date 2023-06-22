function toggleContent(button) {
  var content = button.nextElementSibling;
  content.style.display = (content.style.display === "none") ? "block" : "none";
}
const postsContainer = document.querySelector('.posts');

const posts = [
  { title: 'Post 1', content: 'Contenido del post 1' },
  { title: 'Post 2', content: 'Contenido del post 2' },
  { title: 'Post 3', content: 'Contenido del post 3' },
];

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

  var nuevaEntrada = document.createElement("div");
  nuevaEntrada.innerHTML = "<h2>" + titulo + "</h2><p>" + descripcion + "</p><img src='" + URL.createObjectURL(imagen) + "'>";
  document.getElementById("entradas").appendChild(nuevaEntrada);
}