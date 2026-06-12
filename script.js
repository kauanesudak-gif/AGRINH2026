// Captura dos Elementos do Mini Game
const btnChuva = document.getElementById('btn-chuva');
const btnColher = document.getElementById('btn-colher');
const chuvaSensor = document.getElementById('chuva-sensor');
const campoPlantas = document.getElementById('campo-plantas');
const veiculoColheita = document.getElementById('veiculo-colheita');
const progressoSilo = document.getElementById('progresso-silo');

const totalDePlantas = 12; // Quantidade balanceada para preencher o espaço mantendo o tamanho grande
const estagiosSoja = { semente: '🌱', broto: '🌿', madura: '🌾' };

// Inicializa a lavoura preparando a terra com pequenas sementes
function carregarNovoJogo() {
    campoPlantas.innerHTML = '';
    for (let i = 0; i < totalDePlantas; i++) {
        const planta = document.createElement('div');
        planta.classList.add('soja-unidade');
        planta.innerText = estagiosSoja.semente;
        campoPlantas.appendChild(planta);
    }
}

// Mecânica 1: Ativação da Chuva Inteligente e Evolução do Plantio
btnChuva.addEventListener('click', () => {
    btnChuva.disabled = true;
    chuvaSensor.className = 'chuva-ligada';

    // Fase de Crescimento Foliar (2 segundos de chuva)
    setTimeout(() => {
        transformarLavoura('vegetativo', estagiosSoja.broto);
    }, 2000);

    // Fase de Maturação Final / Grãos Dourados (4.5 segundos de chuva)
    setTimeout(() => {
        transformarLavoura('maduro-colheita', estagiosSoja.madura);
        chuvaSensor.className = 'chuva-desligada'; // Desliga a água automaticamente
        btnColher.disabled = false; // Habilita o comando da colheitadeira
    }, 4500);
});

function transformarLavoura(classeAplicada, emojiFase) {
    const plantasAtuais = document.querySelectorAll('.soja-unidade');
    plantasAtuais.forEach(planta => {
        planta.className = `soja-unidade ${classeAplicada}`;
        planta.innerText = emojiFase;
    });
}

// Mecânica 2: Movimentação do Condutor e Abastecimento Automático do Silo
btnColher.addEventListener('click', () => {
    btnColher.disabled = true;
    
    // Desloca a colheitadeira cruzando toda a extensão do eixo horizontal
    veiculoColheita.style.left = '1000px';

    const plantasParaColher = document.querySelectorAll('.soja-unidade');
    
    // Simula o corte da soja sequencialmente conforme o avanço da máquina
    plantasParaColher.forEach((alvoPlanta, posicao) => {
        setTimeout(() => {
            alvoPlanta.classList.add('colhido-sucesso');
            
            // Incrementa a medição do silo proporcionalmente à quantidade recolhida
            let percentualSilo = Math.round(((posicao + 1) / totalDePlantas) * 100);
            progressoSilo.innerText = `${percentualSilo}%`;
        }, posicao * 320 + 900); // Ajuste fino para bater com o movimento visual do veículo
    });

    // Fim da rodada com feedback de sustentabilidade
    setTimeout(() => {
        progressoSilo.innerText = "100%";
        alert("Excelente trabalho! Safra 2050 colhida com sucesso, protegendo a biodiversidade e utilizando energia renovável.");
        
        // Reseta o jogo para permitir novas jogadas no estande do Agrinho
        setTimeout(() => {
            veiculoColheita.style.left = '-250px';
            progressoSilo.innerText = "0%";
            btnChuva.disabled = false;
            carregarNovoJogo();
        }, 3000);

    }, 5500);
});

// Inicialização imediata ao abrir o simulador
carregarNovoJogo();