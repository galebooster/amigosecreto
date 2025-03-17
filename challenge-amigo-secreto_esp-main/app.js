// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaDeAmigos = [];
const ulListaDeAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){
  listaDeAmigos.push(inputAmigo.value);
  ulListaDeAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
  const aleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSecreto = listaDeAmigos[aleatorio];
  ulSecreto.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};
