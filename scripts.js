// Datos simulados para las publicaciones del blog
const posts = [
    {
        title: "Mi primer post",
        content: "Este es el contenido de mi primer post en el blog. Aquí hablaré sobre temas interesantes."
    },
    {
        title: "Aprendiendo HTML, CSS y JavaScript",
        content: "En este artículo aprenderás cómo crear un sitio web básico utilizando HTML, CSS y JavaScript."
    },
    {
        title: "Consejos para desarrolladores",
        content: "Aquí comparto algunos consejos para desarrolladores que están empezando en el mundo del desarrollo web."
    }
];

// Función para cargar posts dinámicamente
function loadPosts() {
    const postContainer = document.getElementById("post-container");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = post.title;

        const postContent = document.createElement("p");
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        postContainer.appendChild(postElement);
    });
}

// Cargar posts cuando la página haya cargado
window.onload = loadPosts;
