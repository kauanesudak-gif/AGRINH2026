// Seleção de elementos do DOM
const btnChuva = document.getElementById('btn-chuva');
const btnColher = document.getElementById('btn-colher');
const chuvaContainer = document.getElementById('chuva-container');
const campo = document.getElementById('campo');
const maquina = document.getElementById('maquina');
const painelSilo = document.getElementById('Painel-silo');

// Configuração inicial da plantação
const totalPlantas = 20;
let estagioCrescimento = 0; // 0: Semente, 1: Broto Verde, 2: Maduro Pronto

// Emojis representando a evolução da soja até a colheita
const fasesSoja = {
    semente: '🌱', // Pequeno broto inicial
    brotando: '🌿', // Planta crescendo verde
    madura: '🌾'   // Soja dourada pronta para colheita
};

// Inicializa o campo com sementes
function iniciarPlantacao() {
    campo.innerHTML = '';
    for (let i = 0; i < totalPlantas; i++) {
        const planta = document.createElement('div');
        planta.classList.add('soja');
        planta.innerText = fasesSoja.semente;
        campo.appendChild(planta);
    }
}

// Mecanismo de Chuva e Crescimento Sustentável
btnChuva.addEventListener('click', () => {
    // Ativa o visual da chuva
    chuvaContainer.className = 'chuva-ativa';
    btnChuva.disabled = true;

    // Simula o ciclo de crescimento com a água
    setTimeout(() => {
        atualizarPlantacao('brotando', fasesSoja.brotando);
    }, 2000);

    setTimeout(() => {
        atualizarPlantacao('madura', fasesSoja.madura);
        chuvaContainer.className = 'chuva-escondida'; // Desliga a chuva
        btnColher.disabled = false; // Libera a colheitadeira
    }, 5000);
});

function atualizarPlantacao(classe, emoji) {
    const plantas = document.querySelectorAll('.soja');
    plantas.forEach(planta => {
        planta.className = `soja ${classe}`;
        planta.innerText = emoji;
    });
}

// Mecanismo de Colheita Autônoma Inteligente
btnColher.addEventListener('click', () => {
    btnColher.disabled = true;
    
    // Move a colheitadeira cruzando o campo (Animação CSS via JS)
    maquina.style.left = '750px';

    // Simula o corte da soja conforme a máquina passa
    const plantas = document.querySelectorAll('.soja');
    
    plantas.forEach((planta, index) => {
        setTimeout(() => {
            planta.classList.add('colhida');
            // Atualiza o painel digital do silo proporcionalmente
            let progresso = Math.round(((index + 1) / totalPlantas) * 100);
            painelSilo.innerText = `${progresso}%`;
        }, index * 200); // Efeito cascata de colheita
    });

    // Reseta o ciclo após o término da colheita para permitir jogar novamente
    setTimeout(() => {
        alert("Colheita de 2050 concluída com sucesso! Alta produtividade com pegada zero de carbono.");
        maquina.style.left = '-180px'; // Retorna a máquina
        painelSilo.innerText = '100% Cheio';
        
        // Reiniciar após alguns segundos
        setTimeout(() => {
            painelSilo.innerText = '0%';
            btnChuva.disabled = false;
            iniciarPlantacao();
        }, 3000);

    }, 5500);
});

// Inicializa a fazenda ao carregar a página
iniciarPlantacao();