function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            let container = document.getElementById("posts-container");
            container.innerHTML = "";
            
            posts.forEach(post => {
                let postHTML = `
                    <div class="post">
                        <img src="${post.imagem}" alt="${post.titulo}">
                        <h2><a href="post.html?slug=${post.slug}">${post.titulo}</a></h2>
                        
                        <p>${post.resumo}</p>
                    </div>
                `;
                container.innerHTML += postHTML;
            });
        })
        .catch(error => console.error("Erro ao carregar os posts:", error));
});
