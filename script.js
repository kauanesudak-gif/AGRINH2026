// Controle de Elementos do Game
const btnChuva = document.getElementById('btn-chuva');
const btnColher = document.getElementById('btn-colher');
const chuvaEfeito = document.getElementById('chuva-efeito');
const campoSoja = document.getElementById('campo-soja');
const veiculoAgricola = document.getElementById('veiculo-agricola');
const displaySilo = document.getElementById('display-silo');

const qtdPlantas = 10; // Reduzido para aumentar o espaçamento e visualização
const iconesCiclo = { semente: '🌱', broto: '🌿', maduro: '🌾' };

// Função Inicial: Preparar o Solo com Sementes
function iniciarNovoJogo() {
    campoSoja.innerHTML = '';
    for (let i = 0; i < qtdPlantas; i++) {
        const planta = document.createElement('div');
        planta.classList.add('planta-soja');
        planta.innerText = iconesCiclo.semente;
        campoSoja.appendChild(planta);
    }
}

// Mecanismo 1: Sistema de Chuva e Crescimento Foliar
btnChuva.addEventListener('click', () => {
    btnChuva.disabled = true;
    chuvaEfeito.className = 'chuva-ligada';

    // Tempo 1: Soja absorve água e vira broto verde
    setTimeout(() => {
        mudarEstagioSoja('fase-broto', iconesCiclo.broto);
    }, 2000);

    // Tempo 2: Soja atinge maturação dourada ideal
    setTimeout(() => {
        mudarEstagioSoja('fase-madura', iconesCiclo.maduro);
        chuvaEfeito.className = 'chuva-desligada'; // Desliga automação de água
        btnColher.disabled = false; // Desbloqueia controle da máquina
    }, 4500);
});

function mudarEstagioSoja(novaClasse, novoEmoji) {
    const sementes = document.querySelectorAll('.planta-soja');
    sementes.forEach(item => {
        item.className = `planta-soja ${novaClasse}`;
        item.innerText = novoEmoji;
    });
}

// Mecanismo 2: Colheita Mecanizada e Armazenamento em Silo
btnColher.addEventListener('click', () => {
    btnColher.disabled = true;
    
    // Movimenta o vetor da colheitadeira ao longo do eixo X (horizontal)
    veiculoAgricola.style.left = '950px';

    const plantasNoCampo = document.querySelectorAll('.planta-soja');
    
    // Efeito de corte progressivo baseado na passagem física do maquinário
    plantasNoCampo.forEach((alvo, posicao) => {
        setTimeout(() => {
            alvo.classList.add('fase-colhida');
            
            // Incremento digital imediato do silo acoplado à fazenda
            let cargaAtual = Math.round(((posicao + 1) / qtdPlantas) * 100);
            displaySilo.innerText = `${cargaAtual}%`;
        }, posicao * 350 + 1000); // Sincronização calculada
    });

    // Fim da rodada e ciclo de sustentabilidade concluído
    setTimeout(() => {
        displaySilo.innerText = "100%";
        alert("Parabéns! Missão Cumprida: Alimento colhido com sucesso e armazenado no silo usando 100% de energia limpa!");
        
        // Sistema de auto-reset para demonstração infinita no estande do Agrinho
        setTimeout(() => {
            veiculoAgricola.style.left = '-240px';
            displaySilo.innerText = "0%";
            btnChuva.disabled = false;
            iniciarNovoJogo();
        }, 3000);

    }, 5500);
});

// Inicialização Automática do Game
iniciarNovoJogo();