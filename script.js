// FRASE DO DIA
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

const frases = [
    "A saúde é o maior presente, cultive-a bem.",
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
    "A felicidade se constrói dia após dia."
];

let ultimoIndice = -1;

function obterFraseAleatoria() {
    let indice;
    do {
        indice = Math.floor(Math.random() * frases.length);
    } while (indice === ultimoIndice); // Evita repetição consecutiva
    ultimoIndice = indice;
    return frases[indice];
}

function exibirFraseAleatoria() {
    document.getElementById("frase").innerText = obterFraseAleatoria();
}

// Atualiza a frase a cada 24 horas (86.400.000 milissegundos)
setInterval(exibirFraseAleatoria, 86400000);

// Exibe uma frase ao carregar a página
document.addEventListener("DOMContentLoaded", exibirFraseAleatoria);

 // CALCULADORA DE IMC
 function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var alturaCm = parseFloat(document.getElementById("altura").value);
    var resultadoDiv = document.getElementById("resultadoIMC");

    if (!peso || !alturaCm || alturaCm <= 0) {
        resultadoDiv.innerText = "Insira valores válidos.";
        resultadoDiv.className = ""; // Remove qualquer classe anterior
        return;
    }

    var altura = alturaCm / 100; // Converte centímetros para metros
    var imc = peso / (altura * altura);
    var classificacao = imc < 18.5 ? "Abaixo do peso" : imc < 24.9 ? "Peso normal" : imc < 29.9 ? "Sobrepeso" : "Obesidade";

    resultadoDiv.innerHTML = `
<div class="imc">IMC: ${imc.toFixed(2)}</div>
<div class="classificacao">${classificacao} ${getInfoIcon(classificacao)}</div>
`;


    // Remove classes anteriores e adiciona a nova classe correspondente
    resultadoDiv.className = "";
    if (classificacao === "Abaixo do peso") resultadoDiv.classList.add("abaixo-do-peso");
    else if (classificacao === "Peso normal") resultadoDiv.classList.add("peso-normal");
    else if (classificacao === "Sobrepeso") resultadoDiv.classList.add("sobrepeso");
    else if (classificacao === "Obesidade") resultadoDiv.classList.add("obesidade");
}

function getInfoIcon(classificacao) {
    const infoTexts = {
        "Abaixo do peso": "Estar abaixo do peso pode levar a deficiências nutricionais e problemas de saúde.",
        "Peso normal": "Estar com o peso normal reduz o risco de várias doenças e promove o bem-estar geral.",
        "Sobrepeso": "Estar com sobrepeso pode aumentar o risco de doenças cardíacas, diabetes e outras condições.",
        "Obesidade": "A obesidade está associada a um maior risco de doenças graves, incluindo diabetes tipo 2 e doenças cardíacas."
    };
    return `
    <div class="info-container">
        <div class="info-icon" onclick="toggleInfoText(event)">?</div>
        <div class="info-text">${infoTexts[classificacao]}</div>
    </div>
`;
}

function toggleInfoText(event) {
    const infoText = event.target.nextElementSibling;
    infoText.style.display = infoText.style.display === "block" ? "none" : "block";
}

   // CONTADOR DE ÁGUA
   let totalAgua = 0;
   function atualizarProgresso() {
       let meta = parseInt(document.getElementById("meta-agua").value);
       let progresso = (totalAgua / meta) * 100;
       document.getElementById("progress-bar").style.width = `${Math.min(progresso, 100)}%`;
       document.getElementById("agua-total").innerText = totalAgua;
       document.getElementById("progress-text").innerText = `Consumido: ${totalAgua}ml`;
   }
   function adicionarAgua(qtd) { totalAgua += qtd; document.getElementById("agua-total").innerText = totalAgua; atualizarProgresso(); }
   function adicionarAguaCustom() { let qtd = parseInt(document.getElementById("agua-custom").value); if (qtd > 0) adicionarAgua(qtd); }
   function resetarAgua() { totalAgua = 0; document.getElementById("agua-total").innerText = 0; atualizarProgresso(); }

   window.onload = exibirFraseAleatoria;

   // LEMBRE-SE DE BEBER ÁGUA
function agendarNotificacao() {
    let horas = parseInt(document.getElementById('horas').value) || 0;
    let minutos = parseInt(document.getElementById('minutos').value) || 0;
    let segundos = parseInt(document.getElementById('segundos').value) || 0;

    let tempoTotal = (horas * 3600) + (minutos * 60) + segundos;

    if (tempoTotal <= 0) {
        alert('Por favor, insira um tempo válido.');
        return;
    }

    if (!('Notification' in window)) {
        alert('Seu navegador não suporta notificações.');
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            setTimeout(() => {
                let notification = new Notification('Beba água!', {
                    body: 'Para manter sua meta diária de água.',
                    icon: 'icon-180.png'
                });

                notification.onclick = () => {
                    window.open('https://tomdrd.github.io/home/', '_blank');
                };
            }, tempoTotal * 1000);
        } else {
            alert('Você precisa permitir notificações para usar este recurso.');
        }
    });
}

   //COMPARTILHE
   function shareWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Confira este site incrível!");
    window.open(`https://api.whatsapp.com/send?text=${text} ${url}`, '_blank');
}

function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareEmail() {
    const subject = encodeURIComponent("Confira este site incrível!");
    const body = encodeURIComponent(`Dê uma olhada neste site: ${window.location.href}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
}

function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Confira este site incrível!");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}
// QUIZ
function calculateResult(feeling) {
    let resultMessage = "";

    if (feeling === "triste") {
        resultMessage = "Você parece sentir um pouco de saudade. Que tal ouvir uma música que te reconforte ou escrever sobre suas memórias?";
    } else if (feeling === "animado") {
        resultMessage = "Você está em alta energia! Aproveite para fazer algo que você ama.";
    } else if (feeling === "cansado") {
        resultMessage = "Você pode estar precisando de um descanso. Tire um tempo para relaxar!";
    } else {
        resultMessage = "Que tal tirar um tempo para cuidar do seu bem-estar?";
    }

    document.getElementById('result').innerText = resultMessage;
}

// CALORIAS

function calcularGastoCalorico() {
    const idade = parseInt(document.getElementById('idade-calorias').value.trim());
    const peso = parseFloat(document.getElementById('peso-calorias').value.trim());
    const altura = parseFloat(document.getElementById('altura-calorias').value.trim());
    const sexo = document.getElementById('sexo-calorias').value;
    const atividade = parseFloat(document.getElementById('atividade-calorias').value);

    // Verificar se os valores são válidos
    if (isNaN(idade) || idade <= 0) {
        document.getElementById('resultado-calorias').innerText = "Por favor, insira uma idade válida.";
        return;
    }
    if (isNaN(peso) || peso <= 0) {
        document.getElementById('resultado-calorias').innerText = "Por favor, insira um peso válido.";
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        document.getElementById('resultado-calorias').innerText = "Por favor, insira uma altura válida.";
        return;
    }
    if (isNaN(atividade) || atividade <= 0) {
        document.getElementById('resultado-calorias').innerText = "Por favor, selecione um nível de atividade válido.";
        return;
    }

    // Calcular a Taxa Metabólica Basal (TMB)
    let taxaMetabolicaBasal;
    if (sexo === "masculino") {
        taxaMetabolicaBasal = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        taxaMetabolicaBasal = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    // Calcular o gasto calórico total
    const gastoCaloricoTotal = taxaMetabolicaBasal * atividade;

    // Exibir o resultado
    document.getElementById('resultado-calorias').innerHTML = `Seu gasto calórico diário é aproximadamente <strong>${gastoCaloricoTotal.toFixed(2)}</strong> calorias.`;
}

// treino

let treinos = JSON.parse(localStorage.getItem("treinos")) || {};
let diaAtual = "treino-a";
let bloqueado = false;

function trocarDia() {
    diaAtual = document.getElementById("diaSemana").value;
    renderizarExercicios();
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
        <img src="serie.png" alt="Séries">
        <input type="number" placeholder="Série"  value="${ex.series}" ${bloqueado ? 'disabled' : ''} onchange="atualizarCampo(${index}, 'series', this.value)">
        <img src="repeat.png" alt="Repetições">
        <input type="number" placeholder="Repetições" value="${ex.repeticoes}" ${bloqueado ? 'disabled' : ''} onchange="atualizarCampo(${index}, 'repeticoes', this.value)">
        <img src="peso.png" alt="Carga">
        <input type="text" placeholder="Peso" value="${ex.carga}" ${bloqueado ? 'disabled' : ''} onchange="atualizarCampo(${index}, 'carga', this.value)">
      </div>
      <label><input type="text" class="sem-borda" placeholder="Observação" value="${ex.obs}" ${bloqueado ? 'disabled' : ''} onchange="atualizarCampo(${index}, 'obs', this.value)"></label>

      <button class="checkbox-btn ${ex.concluido ? 'checked' : ''}" onclick="marcar(${index})">
        ${ex.concluido ? '✔ Concluído' : 'Concluído'}
      </button>
    `;
        container.appendChild(bloco);
    });
    salvarLocal();
}

function adicionarExercicio() {
    if (bloqueado) return alert("Desbloqueie para editar.");

    const nome = prompt("Nome do exercício:");
    if (nome) {
        treinos[diaAtual].exercicios.push({
            nome: nome,
            series: "",
            repeticoes: "",
            carga: "",
            obs: "",
            concluido: false
        });
        renderizarExercicios();
    }
}

function marcar(index) {
    treinos[diaAtual].exercicios[index].concluido = !treinos[diaAtual].exercicios[index].concluido;
    renderizarExercicios();
}

function marcarTodos() {
    treinos[diaAtual].exercicios.forEach(e => e.concluido = true);
    renderizarExercicios();
}

function finalizarTreino() {
    const treino = treinos[diaAtual];
    const todosConcluidos = treino.exercicios.length > 0 && treino.exercicios.every(e => e.concluido);
    const mensagem = document.getElementById("mensagemParabens");
    mensagem.textContent = todosConcluidos ? `Parabéns! Você concluiu o treino de ${treino.nome}!` : "Ainda há exercícios pendentes!";
}

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

document.getElementById("nomeTreino").addEventListener("input", function() {
    treinos[diaAtual].nome = this.value;
    salvarLocal();
});

function salvarLocal() {
    localStorage.setItem("treinos", JSON.stringify(treinos));
}

window.onload = () => {
    trocarDia();
};
