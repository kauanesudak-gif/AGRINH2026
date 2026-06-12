// Seleção dos elementos do DOM
const btnIrrigar = document.getElementById('btn-irrigar');
const btnColher = document.getElementById('btn-colher');
const btnArmazenar = document.getElementById('btn-armazenar');

const soja = document.getElementById('soja');
const maquina = document.getElementById('maquina');
const progressoSilo = document.getElementById('progresso-silo');
const statusAgro = document.getElementById('status-agro');
const infoCard = document.getElementById('info-card');

// Textos educativos e técnicos
const informacoes = {
    irrigacao: {
        titulo: "💧 Irrigação de Precisão (Gotejamento Inteligente)",
        texto: "A força do agro moderno começa no uso eficiente da água. Sensores no solo detectam a umidade exata de que a planta precisa, evitando o desperdício. Menos água consumida, máxima produtividade por hectare."
    },
    colheita: {
        titulo: "🚜 Colheitadeira Inteligente e Autônoma",
        texto: "Equipadas com inteligência artificial, telemetria e GPS, as colheitadeiras atuais mapeiam o rendimento do solo em tempo real. Elas reduzem o esmagamento de plantas e otimizam o combustível, mostrando a potência tecnológica do setor."
    },
    silo: {
        titulo: "🌾 Armazenamento Sustentável e Segurança Alimentar",
        texto: "O silo vertical otimiza o espaço físico e possui controle digital de temperatura para evitar perdas pós-colheita. O Brasil alimenta milhões de pessoas usando tecnologia de ponta para garantir grãos de alta qualidade com baixa pegada de carbono."
    }
};

// Passo 1: Irrigação e Crescimento
btnIrrigar.addEventListener('click', () => {
    statusAgro.innerText = "Irrigando com Precisão... A Soja está crescendo!";
    soja.innerText = "🌿";
    soja.classList.add('crescida');
    
    // Atualiza o card informativo
    infoCard.querySelector('h3').innerText = informacoes.irrigacao.titulo;
    infoCard.querySelector('p').innerText = informacoes.irrigacao.texto;

    // Gerencia botões
    btnIrrigar.disabled = true;
    btnColher.disabled = false;
});

// Passo 2: Colheitadeira em ação
btnColher.addEventListener('click', () => {
    statusAgro.innerText = "Colheitadeira Inteligente em Campo!";
    maquina.classList.remove('oculta');
    maquina.classList.add('movimento');
    
    setTimeout(() => {
        soja.classList.add('colhida');
        statusAgro.innerText = "Soja Colhida com Sucesso! Pronta para o Silo.";
    }, 1200);

    infoCard.querySelector('h3').innerText = informacoes.colheita.titulo;
    infoCard.querySelector('p').innerText = informacoes.colheita.texto;

    btnColher.disabled = true;
    btnArmazenar.disabled = false;
});

// Passo 3: Encher o Silo
btnArmazenar.addEventListener('click', () => {
    statusAgro.innerText = "Silo Abastecido e Monitorado via Software";
    progressoSilo.style.height = "100%";
    maquina.classList.add('oculta');

    infoCard.querySelector('h3').innerText = informacoes.silo.titulo;
    infoCard.querySelector('p').innerText = informacoes.silo.texto;

    btnArmazenar.disabled = true;
});