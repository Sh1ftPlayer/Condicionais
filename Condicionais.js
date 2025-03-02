let foiApertado = false;

function apertouBotao() {
  if (!foiApertado) { 
    foiApertado = true;
    console.log("Parabéns, você apertou o botão!");
    alert("Parabéns, você apertou o botão!");
  } else {
    console.log("Você já apertou o botão.");
    alert("Você já apertou o botão.");
  }
}
