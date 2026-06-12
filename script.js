// Seleção dos elementos do DOM
const btnIrrigar = document.getElementById('btn-irrigar');
const btnColher = document.getElementById('btn-colher');
const btnArmazenar = document.getElementById('btn-armazenar');

const plantaSoja = document.getElementById('soja-planta');
const colheitadeira = document.getElementById('colheitadeira');
const nivelSilo = document.getElementById('silo-nivel');
const efeitoIrrigacao = document.getElementById('irrigacao-efeito');
const statusEtapa = document.getElementById('status-etapa');

const infoTitulo = document.getElementById('info-titulo');
const infoDescricao = document.getElementById('info-descricao');

// Dados explicativos para cada etapa (Unindo Agro e Sustentabilidade)
const textosInformativos = {
    irrigacao: {
        titulo: "Etapa 1: Irrigação Inteligente e Sustentável",
        descricao: "Utilizamos sensores de umidade no solo e previsões climáticas em tempo real. A água é aplicada na quantidade exata, evitando desperdício e protegendo os lençóis freáticos, garantindo uma produção forte com baixo impacto hídrico."
    },
    colheita: {
        titulo: "Etapa 2: A Força da Colheita Autônoma e Eficiente",
        descricao: "A Colheitadeira Inteligente entra em ação. Guiada por GPS de alta precisão e equipada com Inteligência Artificial, ela mapeia o rendimento da lavoura e otimiza a rota, reduzindo o consumo de combustível e a compactação do solo, demonstrando o poder da tecnologia no campo."
    },
    armazenamento: {
        titulo: "Etapa 3: Rastreabilidade e Segurança Alimentar",
        descricao: "O silo se enche. Com monitoramento digital de temperatura e umidade, garantimos a qualidade dos grãos por mais tempo, reduzindo perdas pós-colheita e garantindo a rastreabilidade necessária para os mercados mais exigentes."
    }
};

// Funções de interação

// 1. Ativar Irrigação e Crescer a Soja
btnIrrigar.addEventListener('click', () => {
    // Feedback visual imediato
    statusEtapa.innerText = "Irrigando a Lavour... Aguarde o crescimento.";
    efeitoIrrigacao.classList.remove('esconder');
    
    // Atualizar card de texto
    infoTitulo.innerText = textosInformativos.irrigacao.titulo;
    infoDescricao.innerText = textosInformativos.irrigacao.descricao;
    
    // Gerenciar Botões
    btnIrrigar.disabled = true;
    btnIrrigar.classList.remove('active');

    // Simulação do crescimento após a irrigação
    setTimeout(() => {
        efeitoIrrigacao.classList.add('esconder');
        plantaSoja.innerText = "🌿";
        plantaSoja.classList.add('crescida');
        statusEtapa.innerText = "Soja Pronta para a Colheita!";
        
        // Habilitar o próximo passo
        btnColher.disabled = false;
        btnColher.classList.add('active');
    }, 2500); // 2.5 segundos de "chuva"
});

// 2. Ativar a Colheitadeira
btnColher.addEventListener('click', () => {
    statusEtapa.innerText = "A Tecnologia Agro em Ação!";
    colheitadeira.classList.remove('esconder');
    colheitadeira.classList.add('mover');
    
    // Atualizar card de texto
    infoTitulo.innerText = textosInformativos.colheita.titulo;
    infoDescricao.innerText = textosInformativos.colheita.descricao;
    
    // Gerenciar Botões
    btnColher.disabled = true;
    btnColher.classList.remove('active');

    // Simulação do tempo de colheita
    setTimeout(() => {
        plantaSoja.classList.add('colhida');
        colheitadeira.classList.remove('mover'); // Para a animação
        statusEtapa.innerText = "Colheita Finalizada. Partindo para Armazenagem.";
        
        // Habilitar o próximo passo
        btnArmazenar.disabled = false;
        btnArmazenar.classList.add('active');
    }, 2500); // Tempo da animação da colheitadeira
});

// 3. Encher o Silo
btnArmazenar.addEventListener('click', () => {
    statusEtapa.innerText = "Soja Segura e Monitorada Digitalmente.";
    nivelSilo.style.height = "100%"; // Enche o silo visualmente
    colheitadeira.classList.add('esconder'); // Colheitadeira sai de cena
    
    // Atualizar card de texto
    infoTitulo.innerText = textosInformativos.armazenamento.titulo;
    infoDescricao.innerText = textosInformativos.armazenamento.descricao;
    
    // Gerenciar Botões
    btnArmazenar.disabled = true;
    btnArmazenar.classList.remove('active');

    setTimeout(() => {
        statusEtapa.innerText = "Ciclo Agro 4.0 Concluído!";
        infoTitulo.innerText = "Sustentabilidade + Produtividade";
        infoDescricao.innerText = "Este cenário demonstrou como a tecnologia de ponta permite que o agronegócio seja extremamente produtivo (força) enquanto utiliza recursos de forma inteligente (sustentabilidade).";
    }, 2000);
});