// MENU
function toggleMenu() {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("menuIcon");

  const aberto = menu.style.display === "block";

  if (aberto) {
    fecharMenu();
  } else {
    menu.style.display = "block";
    setTimeout(() => {
      menu.style.opacity = 1;
    }, 10);
    icon.textContent = "✖";

    // Ativa o listener de clique fora
    setTimeout(() => {
      document.addEventListener("click", cliqueForaMenu);
    }, 10);
  }

  function fecharMenu() {
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
    icon.textContent = "☰";
    document.removeEventListener("click", cliqueForaMenu);
  }

  function cliqueForaMenu(event) {
    if (!menu.contains(event.target) && event.target !== icon) {
      fecharMenu();
    }
  }
}


// === FRASE DO DIA ===
const frases = ["A saúde é o maior presente, cultive-a bem.",
    "Beba água, seu corpo agradece!",
    "Mexa-se! O corpo foi feito para se movimentar.",
    "Uma boa noite de sono é um dos melhores remédios.",
    "Respire fundo e aproveite o momento.",
    "Sorria mais, faz bem para a alma.",
    "Seja gentil, o mundo precisa disso.",
    "Um dia de cada vez, sem pressa.",
    "O sol nasce para todos, aproveite o seu dia.",
    "Cada novo dia é uma nova oportunidade.",
    "A paciência é a chave para muitas portas.",
    "O importante é seguir em frente.",
    "Aproveite as pequenas coisas da vida.",
    "A felicidade está nas coisas simples.",
    "Cuide de sua mente como cuida do corpo.",
    "Leia um livro, sua mente agradece.",
    "A música pode transformar seu dia.",
    "Mantenha-se positivo, tudo tem solução.",
    "Seu esforço de hoje trará frutos amanhã.",
    "O descanso também faz parte do progresso.",
    "Valorize quem está ao seu lado.",
    "Um café e um sorriso mudam qualquer manhã.",
    "Faça algo novo, saia da rotina.",
    "Seja grato pelo que tem.",
    "A vida é feita de escolhas, faça boas escolhas.",
    "Acredite no seu potencial.",
    "Caminhe ao ar livre e sinta a natureza.",
    "Boas vibrações atraem coisas boas.",
    "O tempo é precioso, use-o com sabedoria.",
    "Desafie-se e supere seus limites.",
    "O conhecimento é um tesouro infinito.",
    "Seja a mudança que deseja no mundo.",
    "Ajude alguém hoje, mesmo que com um sorriso.",
    "O que você planta hoje, colhe amanhã.",
    "A sorte favorece os que trabalham duro.",
    "Não tenha medo de errar, é parte do aprendizado.",
    "Você é mais forte do que imagina.",
    "O segredo do sucesso é a persistência.",
    "O silêncio também é uma resposta.",
    "A gratidão transforma dias comuns em especiais.",
    "Respire fundo e sinta a paz interior.",
    "Sonhe grande, comece pequeno, mas vá longe.",
    "A vida é curta para guardar rancores.",
    "Seja um exemplo, inspire os outros.",
    "O passado não pode ser mudado, mas o futuro sim.",
    "A gentileza sempre volta.",
    "O amor começa dentro de você.",
    "Cuide de sua saúde mental.",
    "A simplicidade é a verdadeira sofisticação.",
    "Faça o bem sem esperar nada em troca.",
    "Sua energia atrai coisas semelhantes.",
    "A mente é poderosa, alimente-a bem.",
    "Não desista, os desafios nos tornam mais fortes.",
    "Toda jornada começa com um primeiro passo.",
    "Encontre beleza nos pequenos detalhes.",
    "Nada é impossível para quem persiste.",
    "O tempo certo para agir é agora.",
    "Acredite no poder dos seus sonhos.",
    "Seja luz na vida de alguém hoje.",
    "As palavras têm poder, escolha bem as suas.",
    "A vida é um reflexo das suas atitudes.",
    "Pequenas ações diárias criam grandes mudanças.",
    "Ouça mais, fale menos.",
    "A verdadeira riqueza está no que você sente.",
    "Evite comparações, cada um tem seu tempo.",
    "A bondade nunca sai de moda.",
    "Não tenha medo de recomeçar.",
    "A felicidade mora dentro de você.",
    "Valorize suas conquistas, por menores que sejam.",
    "A paz começa com um sorriso.",
    "Dê o seu melhor, sempre.",
    "Confie no processo, tudo tem seu tempo.",
    "O sucesso é feito de pequenos avanços diários.",
    "A vida é um presente, aproveite-o.",
    "Menos preocupação, mais gratidão.",
    "A fé move montanhas.",
    "O amor próprio é o começo de tudo.",
    "Não deixe para amanhã o que pode fazer hoje.",
    "Cada dia é uma nova chance de ser melhor.",
    "O aprendizado nunca acaba.",
    "Valorize cada momento, pois ele é único.",
    "O equilíbrio é a chave para uma vida plena.",
    "Seja flexível, mas mantenha seus princípios.",
    "Seja dono do seu destino.",
    "Não existe um caminho certo, existe o seu caminho.",
    "Respire fundo e recomece quantas vezes for necessário.",
    "Transforme desafios em oportunidades.",
    "O amor sempre encontra um caminho.",
    "Não tema as mudanças, elas trazem crescimento.",
    "A beleza da vida está nos detalhes.",
    "Mantenha sua mente aberta a novas possibilidades.",
    "O otimismo muda perspectivas.",
    "Seu tempo é valioso, invista em coisas que importam.",
    "Siga em frente, sempre há algo bom à frente.",
    "Lembre-se: você é capaz de mais do que imagina.",
    "Grandes mudanças começam com pequenas atitudes.",
    "A maior coragem é seguir seu coração.",
    "A felicidade se constrói dia após dia."];

const STORAGE_KEY = 'fraseDoDia';

function pegarIndiceAleatorio(prevIndex) {
  let idx;
  do {
    idx = Math.floor(Math.random() * frases.length);
  } while (idx === prevIndex);
  return idx;
}

function exibirFraseDoDia() {
  const agora = Date.now();
  let registro = null;
  try {
    registro = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    registro = null;
  }

  if (
    registro &&
    typeof registro.timestamp === 'number' &&
    (agora - registro.timestamp) < 24 * 60 * 60 * 1000 &&
    typeof registro.index === 'number' &&
    frases[registro.index]
  ) {
    document.getElementById('frase').innerText = frases[registro.index];
    return;
  }

  const novoIndex = pegarIndiceAleatorio(registro ? registro.index : -1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    index: novoIndex,
    timestamp: agora
  }));
  document.getElementById('frase').innerText = frases[novoIndex];
}

document.addEventListener("DOMContentLoaded", exibirFraseDoDia);

// === CALCULADORA DE IMC ===
function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const resultadoDiv = document.getElementById("resultadoIMC");

  if (!peso || !alturaCm || alturaCm <= 0) {
    resultadoDiv.innerText = "Insira valores válidos.";
    resultadoDiv.className = "";
    document.getElementById("faixaPesoIdeal").innerText = "";
    return;
  }

  const altura = alturaCm / 100;
  const imc = peso / (altura * altura);
  const classificacao = imc < 18.5
    ? "Abaixo do peso"
    : imc < 24.9
    ? "Peso normal"
    : imc < 29.9
    ? "Sobrepeso"
    : "Obesidade";

resultadoDiv.innerHTML = `
  <div class="imc">IMC: ${imc.toFixed(2)}</div>
  <div class="classificacao-row">
    <div class="classificacao ${classificacao.replace(/\s/g, '-').toLowerCase()}">${classificacao}</div>
    <button type="button" class="info-icon ${classificacao.replace(/\s/g, '-').toLowerCase()}" onclick="mostrarObsIMC('${classificacao}')">?</button>
  </div>
`;

  resultadoDiv.className = "";
  if (classificacao === "Abaixo do peso") resultadoDiv.classList.add("abaixo-do-peso");
  else if (classificacao === "Peso normal") resultadoDiv.classList.add("peso-normal");
  else if (classificacao === "Sobrepeso") resultadoDiv.classList.add("sobrepeso");
  else if (classificacao === "Obesidade") resultadoDiv.classList.add("obesidade");

  // Faixa de peso ideal (IMC entre 18.5 e 24.9)
  const pesoMin = 18.5 * (altura * altura);
  const pesoMax = 24.9 * (altura * altura);
  document.getElementById("faixaPesoIdeal").innerText =
    `Faixa de peso ideal: ${pesoMin.toFixed(1)} kg a ${pesoMax.toFixed(1)} kg`;
}

function mostrarObsIMC(classificacao) {
  const infoTexts = {
    "Abaixo do peso": "Estar abaixo do peso pode levar a deficiências nutricionais e problemas de saúde.",
    "Peso normal": "Estar com o peso normal reduz o risco de várias doenças e promove o bem-estar geral.",
    "Sobrepeso": "Estar com sobrepeso pode aumentar o risco de doenças cardíacas, diabetes e outras condições.",
    "Obesidade": "A obesidade está associada a um maior risco de doenças graves, incluindo diabetes tipo 2 e doenças cardíacas."
  };
  if (infoTexts[classificacao]) {
    alert(infoTexts[classificacao]);
  }
}  

// === CONTADOR DE ÁGUA ===
let totalAgua = 0;

function atualizarProgresso() {
  const meta = parseInt(document.getElementById("meta-agua").value);
  const progresso = (totalAgua / meta) * 100;
  document.getElementById("progress-bar").style.width = `${Math.min(progresso, 100)}%`;
  document.getElementById("agua-total").innerText = totalAgua;
  document.getElementById("progress-text").innerText = `Consumido: ${totalAgua}ml`;
}

function adicionarAgua(qtd) {
  totalAgua += qtd;
  document.getElementById("agua-total").innerText = totalAgua;
  atualizarProgresso();
}

function adicionarAguaCustom() {
  const qtd = parseInt(document.getElementById("agua-custom").value);
  if (qtd > 0) adicionarAgua(qtd);
}

function resetarAgua() {
  totalAgua = 0;
  document.getElementById("agua-total").innerText = 0;
  atualizarProgresso();
}

// === LEMBRETE DE BEBER ÁGUA ===
function agendarNotificacao() {
  const horas = parseInt(document.getElementById("horas").value) || 0;
  const minutos = parseInt(document.getElementById("minutos").value) || 0;
  const segundos = parseInt(document.getElementById("segundos").value) || 0;

  const tempoTotal = horas * 3600 + minutos * 60 + segundos;

  if (tempoTotal <= 0) {
    alert("Por favor, insira um tempo válido.");
    return;
  }

  if (!("Notification" in window)) {
    alert("Seu navegador não suporta notificações.");
    return;
  }

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      setTimeout(() => {
        new Notification("Beba água!", {
          body: "Para manter sua meta diária de água.",
          icon: "icon-180.png",
        }).onclick = () => window.open("https://tomdrd.github.io/home/", "_blank");
      }, tempoTotal * 1000);
    } else {
      alert("Você precisa permitir notificações para usar este recurso.");
    }
  });
}

// === COMPARTILHAMENTO ===
function shareWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Confira este site incrível!");
  window.open(`https://api.whatsapp.com/send?text=${text} ${url}`, "_blank");
}

function shareFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareEmail() {
  const subject = encodeURIComponent("Confira este site incrível!");
  const body = encodeURIComponent(`Dê uma olhada neste site: ${window.location.href}`);
  window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
}

function shareTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Confira este site incrível!");
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
}

// === QUIZ ===
function calculateResult(feeling) {
  const STORAGE_KEY_QUIZ = "respostaQuiz";
  const agora = Date.now();

  const mensagens = {
    triste: [
      "Você parece sentir um pouco de saudade...",
      "Dias tristes também passam. Seja gentil com você.",
      "Lembre-se: você já superou muita coisa até aqui.",
      "Abra espaço para o autocuidado, especialmente hoje.",
      "Tudo bem não estar bem o tempo todo. Respire fundo."
    ],
    animado: [
      "Você está em alta energia! Aproveite para fazer algo que você ama.",
      "Use essa vibe positiva para conquistar seus objetivos!",
      "Compartilhe sua alegria com o mundo!",
      "Momento perfeito para começar algo novo!",
      "Sua energia contagia! Espalhe boas vibrações!"
    ],
    cansado: [
      "Você pode estar precisando de um descanso. Tire um tempo para relaxar!",
      "Não se cobre tanto. Pausas também são produtivas.",
      "Seu corpo está pedindo atenção. Ouça-o com carinho.",
      "Um cochilo, uma pausa, ou um momento de silêncio pode ajudar muito.",
      "Descanse um pouco. Você merece cuidar de si."
    ],
    padrao: [
      "Que tal tirar um tempo para cuidar do seu bem-estar?",
      "Ouça seu corpo e sua mente hoje.",
      "Um momento de autocuidado pode fazer a diferença.",
      "Aproveite para respirar e estar presente no agora.",
      "Seu bem-estar importa. Reserve um tempo para você."
    ]
  };

  const registro = JSON.parse(localStorage.getItem(STORAGE_KEY_QUIZ));

  // Se já respondeu nas últimas 24 horas
  if (registro && agora - registro.timestamp < 24 * 60 * 60 * 1000) {
  const horasRestantes = Math.ceil((24 * 60 * 60 * 1000 - (agora - registro.timestamp)) / (60 * 60 * 1000));
  document.getElementById("result").innerHTML = `
    ${registro.mensagem}
    <br>
    <span class="quiz-bloqueado">*Você já respondeu hoje! Tente novamente em ${horasRestantes} hora(s).</span>
  `;
  return;
}

  // Seleciona uma mensagem aleatória
  const lista = mensagens[feeling] || mensagens.padrao;
  const mensagemAleatoria = lista[Math.floor(Math.random() * lista.length)];

  // Mostra a mensagem
  document.getElementById("result").innerText = mensagemAleatoria;

  // Salva a resposta e a mensagem no armazenamento local
  localStorage.setItem(STORAGE_KEY_QUIZ, JSON.stringify({
    timestamp: agora,
    resposta: feeling,
    mensagem: mensagemAleatoria
  }));
}


// === GASTO CALÓRICO ===
function calcularGastoCalorico() {
  const idade = parseInt(document.getElementById("idade-calorias").value.trim());
  const peso = parseFloat(document.getElementById("peso-calorias").value.trim());
  const altura = parseFloat(document.getElementById("altura-calorias").value.trim());
  const sexo = document.getElementById("sexo-calorias").value;
  const atividade = parseFloat(document.getElementById("atividade-calorias").value);

  if (isNaN(idade) || idade <= 0 || isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0 || isNaN(atividade) || atividade <= 0) {
    document.getElementById("resultado-calorias").innerText = "Preencha todos os campos corretamente.";
    return;
  }

  let tmb = sexo === "masculino"
    ? 10 * peso + 6.25 * altura - 5 * idade + 5
    : 10 * peso + 6.25 * altura - 5 * idade - 161;

  const gastoTotal = tmb * atividade;
  document.getElementById("resultado-calorias").innerHTML = `Seu gasto calórico diário é aproximadamente <strong>${gastoTotal.toFixed(2)}</strong> calorias.`;
}

// === TREINO ===

let treinos = JSON.parse(localStorage.getItem("treinos")) || {};
let diaAtual = "treino-a";
let bloqueado = false;
let treinosFinalizados = parseInt(localStorage.getItem("treinosFinalizados")) || 0;

function atualizarContadorTreinos() {
  document.getElementById("treinosFinalizados").innerText = treinosFinalizados;
}

function trocarDia() {
  diaAtual = document.getElementById("diaSemana").value;
  renderizarExercicios();
    // Oculta a mensagem de parabéns ao trocar de treino
  const mensagem = document.getElementById("mensagemParabens");
  if (mensagem) mensagem.innerHTML = "";
}

function renderizarExercicios() {
  const container = document.getElementById("exercicios");
  const nomeTreino = document.getElementById("nomeTreino");

  if (!treinos[diaAtual]) treinos[diaAtual] = { nome: "", exercicios: [], bloqueado: false };
  nomeTreino.value = treinos[diaAtual].nome || "";
  nomeTreino.disabled = treinos[diaAtual].bloqueado;
  bloqueado = treinos[diaAtual].bloqueado;

  container.innerHTML = "";
  treinos[diaAtual].exercicios.forEach((ex, index) => {
    const bloco = document.createElement("div");
    bloco.className = "exercicio" + (ex.concluido ? " concluido" : "");
    bloco.innerHTML = `
      <strong>${ex.nome}</strong>
      ${ex.imagem ? `<img src="${ex.imagem}" style="max-width:100%; border-radius:8px; margin-bottom:10px;">` : ""}
      <div class="linha-inputs">
        <img src="serie.webp" alt="Séries">
        <input type="number" placeholder="Série" value="${ex.series}" ${bloqueado ? "disabled" : ""} onchange="atualizarCampo(${index}, 'series', this.value)">
        <img src="repeat.webp" alt="Repetições">
        <input type="number" placeholder="Repetições" value="${ex.repeticoes}" ${bloqueado ? "disabled" : ""} onchange="atualizarCampo(${index}, 'repeticoes', this.value)">
        <img src="peso.webp" alt="Carga">
        <input type="text" placeholder="Peso" value="${ex.carga}" ${bloqueado ? "disabled" : ""} onchange="atualizarCampo(${index}, 'carga', this.value)">
      </div>
      <label><input type="text" class="sem-borda" placeholder="Observação" value="${ex.obs}" ${bloqueado ? "disabled" : ""} onchange="atualizarCampo(${index}, 'obs', this.value)"></label>
      <button class="checkbox-btn ${ex.concluido ? "checked" : ""}" onclick="marcar(${index})">
        ${ex.concluido ? "Concluído" : "Concluir"}
      </button>
    `;
    container.appendChild(bloco);
  });
  salvarLocal();
  atualizarStatusExercicios(); // <-- adiciona esta linha ao final
}

function adicionarExercicio() {
  if (bloqueado) return alert("Desbloqueie para editar.");
  const nome = prompt("Nome do exercício:");
  if (nome) {
    treinos[diaAtual].exercicios.push({
      nome, series: "", repeticoes: "", carga: "", obs: "", concluido: false
    });
    renderizarExercicios();
  }
}

function marcar(index) {
  treinos[diaAtual].exercicios[index].concluido = !treinos[diaAtual].exercicios[index].concluido;
  renderizarExercicios();
}

function marcarTodos() {
  treinos[diaAtual].exercicios.forEach((e) => e.concluido = true);
  renderizarExercicios();
}

function finalizarTreino() {
  const treino = treinos[diaAtual];
  const todosConcluidos = treino.exercicios.length > 0 && treino.exercicios.every((e) => e.concluido);
  const mensagem = document.getElementById("mensagemParabens");

  if (todosConcluidos) {
mensagem.innerHTML = `
<img id="imgParabens" src="medal-150.webp" alt="Parabéns" style="width: 80px; height: auto; display: block; margin: 0 auto;">
 <p><span class="parabens-text">Parabéns!<br>Você concluiu o treino de ${treino.nome}.</span></p>

`;
  const img = document.getElementById('imgParabens');
  img.animate([
    { transform: 'rotate(0deg)', opacity: 0 },
    { transform: 'rotate(360deg)', opacity: 1 }
  ], {
    duration: 2000,
    iterations: 1,
    easing: 'ease-out',
    fill: 'forwards'
  });

  // Incrementa o contador e salva
    treinosFinalizados++;
    localStorage.setItem("treinosFinalizados", treinosFinalizados);
    atualizarContadorTreinos();

  } else {
    mensagem.innerHTML = "Ainda há exercícios pendentes!";
  }

  treino.exercicios.forEach((e) => e.concluido = false);
  renderizarExercicios();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nomeTreino").addEventListener("input", function () {
    treinos[diaAtual].nome = this.value;
    salvarLocal();
  });
  trocarDia();
  atualizarContadorTreinos(); // <-- Adicione esta linha
});


function novoTreino() {
  if (confirm("Deseja iniciar um novo treino para o dia selecionado?")) {
    treinos[diaAtual] = { nome: "", exercicios: [], bloqueado: false };
    document.getElementById("mensagemParabens").textContent = "";
    renderizarExercicios();
  }
}

function salvarTreino() {
  treinos[diaAtual].bloqueado = true;
  renderizarExercicios();
}

function editarTreino() {
  treinos[diaAtual].bloqueado = false;
  renderizarExercicios();
}

function atualizarCampo(index, campo, valor) {
  treinos[diaAtual].exercicios[index][campo] = valor;
  salvarLocal();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nomeTreino").addEventListener("input", function () {
    treinos[diaAtual].nome = this.value;
    salvarLocal();
  });
  trocarDia();
});

function salvarLocal() {
  localStorage.setItem("treinos", JSON.stringify(treinos));
}

function atualizarStatusExercicios() {
  if (!treinos[diaAtual]) return;

  const total = treinos[diaAtual].exercicios.length;
  const concluidos = treinos[diaAtual].exercicios.filter(e => e.concluido).length;

  // Atualiza o texto no menu
  document.getElementById("status-exercicios").innerText = `${concluidos} de ${total} exercícios concluídos`;

  // Atualiza a barra de progresso
  const progresso = total > 0 ? (concluidos / total) * 100 : 0;
  document.querySelector(".barra-progresso-treino").style.width = `${progresso}%`;
}

let deferredPrompt = null;

// Captura o evento que o navegador dispara quando a instalação é possível
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Ativa o link no menu
  const installLink = document.getElementById('instalarApp');
  if (installLink) {
    installLink.style.display = 'block'; // ou 'block', se quiser
    installLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('Usuário aceitou instalar');
          } else {
            console.log('Usuário recusou');
          }
          deferredPrompt = null;
        });
      }
    });
  }
});

// animação
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.box, .box2, .share-buttons');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animated');
      }, index * 150); // Delay crescente para um efeito sequencial
    });
  });

  // animação da logo
  document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("header a img");

  if (logo) {
    logo.addEventListener("click", (e) => {
      logo.classList.add("logo-animada");

      // Remove a classe após a animação terminar
      logo.addEventListener("animationend", () => {
        logo.classList.remove("logo-animada");
      }, { once: true });
    });
  }
});
// todas as imagens com opacidade
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img) {
    img.classList.add('fade-in-img');
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      });
    }
  });
});


