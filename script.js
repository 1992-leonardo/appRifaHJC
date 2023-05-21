var numerosPreenchidos = [];
var nomeParticipante = "";

function adicionarNumero() {
  var nome = document.getElementById("nome").value;
  var numero = parseInt(document.getElementById("numero").value);
  if (numero >= 1 && numero <= 100) {
    if (numerosPreenchidos.includes(numero)) {
      alert("Este número já foi escolhido. Por favor, escolha outro número.");
    } else {
      numerosPreenchidos.push(numero);
      exibirNumerosEscolhidos();
      atualizarCartela();
      nomeParticipante = nome;
      document.getElementById("nome").value = "";
      document.getElementById("numero").value = "";
    }
  } else {
    alert("Por favor, digite um número válido de 1 a 100.");
  }
}

function exibirNumerosEscolhidos() {
  var numerosEscolhidos = document.getElementById("numerosEscolhidos");
  numerosEscolhidos.textContent = "Números escolhidos: " + numerosPreenchidos.join(", ");
}

function realizarSorteio() {
  var numeroSorteado = document.getElementById("numeroSorteado");
  if (numerosPreenchidos.length > 0) {
    var indiceSorteado = Math.floor(Math.random() * numerosPreenchidos.length);
    var sorteado = numerosPreenchidos[indiceSorteado];
    var nomeGanhador = nomeParticipante !== "" ? nomeParticipante : "Participante";
    numeroSorteado.textContent = nomeGanhador + " ganhou o sorteio com o número: " + sorteado;
  } else {
    numeroSorteado.textContent = "Nenhum número foi escolhido.";
  }
}

function criarCartela() {
  var numerosCartela = document.getElementById("numerosCartela");
  numerosCartela.innerHTML = "";
  for (var i = 1; i <= 100; i++) {
    var numero = document.createElement("div");
    numero.className = "numero" + (numerosPreenchidos.includes(i) ? " preenchido" : "");
    numero.textContent = i;
    numero.addEventListener("click", function() {
      if (!numerosPreenchidos.includes(i)) {
        numerosPreenchidos.push(i);
        exibirNumerosEscolhidos();
        atualizarCartela();
      }
    });
    numerosCartela.appendChild(numero);
  }
}

function atualizarCartela() {
  criarCartela();
}

criarCartela();
