const btn = document.getElementById("btn-top");
const searchBar = document.getElementById("search-bar");
const categorySelect = document.getElementById("category-select");
const jeux = document.querySelectorAll(".jeu-block");

// Afficher/cacher le bouton retour en haut selon scroll
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Scroll vers le haut quand on clique sur le bouton
btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fonction de filtrage des jeux selon texte et catégorie
function filterJeux() {
    const query = searchBar.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value.toLowerCase();

    jeux.forEach(jeu => {
        const nom = jeu.querySelector("h3").textContent.toLowerCase();
        const categorie = jeu.getAttribute("data-category").toLowerCase();

        const matchesName = nom.includes(query);
        const matchesCategory = selectedCategory === "" || categorie === selectedCategory;

        if (matchesName && matchesCategory) {
            jeu.style.display = "flex";
        } else {
            jeu.style.display = "none";
        }
    });
}

// Écouteurs sur input et select pour filtrer en temps réel
searchBar.addEventListener("input", filterJeux);
categorySelect.addEventListener("change", filterJeux);
