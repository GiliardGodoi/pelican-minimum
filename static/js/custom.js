document.addEventListener("DOMContentLoaded", function () {
    var btnTopo = document.getElementById("btnTopo");

    // Mostra o botão quando o usuário rolar 300px para baixo
    window.addEventListener("scroll", function () {
        if (window.scrollY > 450) {
            btnTopo.classList.add("show"); // Mostra suavemente
        } else {
            btnTopo.classList.remove("show"); // Esconde suavemente
        }
    });

    // Faz a página rolar suavemente para o topo ao clicar
    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});