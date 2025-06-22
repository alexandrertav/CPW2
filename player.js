const musicas = [
  { nome: "Jazz Suave", arquivo: "musicas/jazz.mp3" },
  { nome: "Rock Leve", arquivo: "musicas/rock.mp3" },
  { nome: "Lo-fi Chill", arquivo: "musicas/lofi.mp3" }
];

let indexAtual = 0;

const audio = document.getElementById("audio");
const nomeMusica = document.getElementById("nome-musica");

function carregarMusica(index) {
  audio.src = musicas[index].arquivo;
  nomeMusica.textContent = "Música: " + musicas[index].nome;
  audio.load();
}

function playMusica() {
  audio.play();
}

function pauseMusica() {
  audio.pause();
}

function proximaMusica() {
  indexAtual = (indexAtual + 1) % musicas.length;
  carregarMusica(indexAtual);
  playMusica();
}

// Inicializa com a primeira música
carregarMusica(indexAtual);