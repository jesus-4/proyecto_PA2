document.getElementById("modo-btn").addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    this.textContent = document.body.classList.contains("modo-oscuro") ? "Modo Claro" : "Modo Oscuro";
});
