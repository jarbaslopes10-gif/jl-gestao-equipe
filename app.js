// ===== CONFIGURAÇÃO =====
const SENHA = "jl123";
const MESES = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
];
const DIAS = ["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];

// ===== ESTADO =====
let estado = JSON.parse(localStorage.getItem("jl-gestao")) || {
  autenticado: false,
  funcionarios: [],
  dados: {}
};

// ===== SALVAR =====
function salvar() {
  localStorage.setItem("jl-gestao", JSON.stringify(estado));
}

// ===== LOGIN =====
function telaLogin() {
  document.body.innerHTML = `
    <div style=
