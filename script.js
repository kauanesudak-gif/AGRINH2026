// Captura de Elementos da Interface
const btnIrrigar = document.getElementById('btn-irrigar');
const btnColher = document.getElementById('btn-colher');
const chuvaIrrigacao = document.getElementById('chuva-irrigacao');
const areaPlantacao = document.getElementById('area-plantacao');
const maquinaAgro = document.getElementById('maquina-agro');
const medidorSilo = document.getElementById('medidor-silo');

const totalPlantas = 12;
const emojisCiclo = { semente: '🌱', broto: '🌿', madura: '🌾' };

// Inicia o campo com sementes sob a terra fértil
function inicializarCampo() {
    areaPlantacao.innerHTML = '';
    for (let i = 0; i < totalPlantas; i++) {
        const planta = document.createElement('div');
        planta.classList.add('soja-planta');
        planta.innerText = emojisCiclo.semente;
        areaPlantacao.appendChild(planta);
    }
}

// Lógica de Irrigação e Mudança de Cor/Crescimento da Soja
btnIrrigar.addEventListener('click', () => {
    btnIrrigar.disabled = true;
    chuvaIrrigacao.className = 'irrigacao-ativa';

    // 1º Estágio: Broto verde em pleno desenvolvimento
    setTimeout(() => {
        atualizarEstagioPlantas('crescendo', emojisCiclo.broto);
    }, 2000);

    // 2º Estágio: Soja madura, forte e pronta para colher
    setTimeout(() => {
        atualizarEstagioPlantas('madura', emojisCiclo.madura);
        chuvaIrrigacao.className = 'irrigacao-desativada'; // Desliga a água automaticamente
        btnColher.disabled = false; // Habilita o maquinário
    }, 4500);
});

function atualizarEstagioPlantas(classeCSS, emojiFase) {
    const plantas = document.querySelectorAll('.soja-planta');
    plantas.forEach(planta => {
        planta.className = `soja-planta ${classeCSS}`;
        planta.innerText = emojiFase;
    });
}

// Lógica de Colheita e Armazenamento no Silo
btnColher.addEventListener('click', () => {
    btnColher.disabled = true;
    
    // Move a colheitadeira cruzando a plantação
    maquinaAgro.style.left = '950px';

    const plantasNoCampo = document.querySelectorAll('.soja-planta');
    
    // Conforme a plataforma de corte passa, a soja é armazenada
    plantasNoCampo.forEach((planta, index) => {
        setTimeout(() => {
            planta.classList.add('colhida');
            
            // Atualiza o painel digital do silo da fazenda
            let capacidade = Math.round(((index + 1) / totalPlantas) * 100);
            medidorSilo.innerText = `${capacidade}%`;
        }, index * 300 + 900); // Sincronia com o chassi do veículo
    });

    // Finaliza o processo com mensagem explicativa sobre sustentabilidade
    setTimeout(() => {
        medidorSilo.innerText = "100%";
        alert("Sucesso! Colheita realizada mostrando a força do agro tecnológico e o respeito total ao meio ambiente!");
        
        // Retorna ao estado inicial após 4 segundos para nova simulação
        setTimeout(() => {
            maquinaAgro.style.left = '-240px';
            medidorSilo.innerText = "0%";
            btnIrrigar.disabled = false;
            inicializarCampo();
        }, 4000);

    }, 5500);
});

// Inicialização do Simulador
inicializarCampo();