const musicas = [
  {
    nome: "Música Top",
    artista: "Banda TOP",
    arquivo: "musicas/music1.mp3",
    capa: "capas/top.png"
  },
  {
    nome: "Música Top 2",
    artista: "Banda TOP",
    arquivo: "musicas/music2.mp3",
    capa: "capas/top.png"
  },
  {
    nome: "Música Top 3",
    artista: "Banda TOP",
    arquivo: "musicas/music3.mp3",
    capa: "capas/top.png"
  }
];

let indexAtual = 0;

const audio = document.getElementById("audio");
const nomeMusica = document.getElementById("nome-musica");

function carregarMusica(index) {
  audio.src = musicas[index].arquivo;
  document.getElementById("nome-musica").textContent = musicas[index].nome;
  document.getElementById("artista").textContent = "Artista: " + musicas[index].artista;
  document.getElementById("capa").src = musicas[index].capa;
}

function alternarPlayPause() {
  const btn = document.getElementById("botao-play-pause");

  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸️";
  } else {
    audio.pause();
    btn.textContent = "▶️";
  }
}

function playMusica() {
  audio.play();
  document.getElementById("botao-play-pause").textContent = "⏸️";
}

function pauseMusica() {
  audio.pause();
  document.getElementById("botao-play-pause").textContent = "▶️";
}

function musicaAnterior() {
  indexAtual = (indexAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(indexAtual);
  playMusica();
}

function proximaMusica() {
  indexAtual = (indexAtual + 1) % musicas.length;
  carregarMusica(indexAtual);
  playMusica();
}

// Inicializa com a primeira música
carregarMusica(indexAtual);