// ============================================================
// sobre.js — Interatividade da página Sobre (Focinho Feliz)
// ============================================================
 
// ---- Funcionalidade 1: Menu mobile (abrir/fechar) ----
const botaoMenu = document.getElementById("botao-menu");
const menu = document.querySelector("nav");
 
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-aberto");
});
 
// ---- Funcionalidade 2: Confirmação antes de abrir o Google Maps ----
const botaoMapa = document.querySelector(".btn-mapa");
 
botaoMapa.addEventListener("click", function (evento) {
  const confirmou = confirm("Você será redirecionado ao Google Maps. Deseja continuar?");
 
  if (!confirmou) {
    evento.preventDefault();
  }
});
 
// ---- Funcionalidade 3: Destaque ao clicar na imagem do pet ----
const figuraDestaque = document.getElementById("pet-destaque");
 
figuraDestaque.addEventListener("click", function () {
  figuraDestaque.classList.toggle("destaque-selecionado");
});
