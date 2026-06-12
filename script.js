// Captura de Elementos
const btnChuva = document.getElementById('btn-chuva');
const btnColher = document.getElementById('btn-colher');
const chuvaContainer = document.getElementById('chuva-container');
const campo = document.getElementById('campo');
const maquina = document.getElementById('maquina');
const statusSilo = document.getElementById('status-silo');

const numPlantas = 16;
const fasesSoja = { semente: '🌱', broto: '🌿', madura: '🌾' };

// Popula o campo inicialmente
function gerarCampo() {
    campo.innerHTML = '';
    for (let i = 0; i < numPlantas; i++) {
        const planta = document.createElement('div');
        planta.classList.add('soja');
        planta.innerText = fasesSoja.semente;
        campo.appendChild(planta);
    }
}

// Lógica da Chuva Inteligente e Crescimento
btnChuva.addEventListener('click', () => {
    btnChuva.disabled = true;
    chuvaContainer.className = 'chuva-ativa';

    // Crescendo para broto verde
    setTimeout(() => {
        ajustarFasePlanta('crescendo', fasesSoja.broto);
    }, 2000);

    // Amadurecendo para soja dourada pronta
    setTimeout(() => {
        ajustarFasePlanta('madura', fasesSoja.madura);
        chuvaContainer.className = 'chuva-desativada'; // Desliga a chuva automaticamente
        btnColher.disabled = false; // Habilita a colheitadeira
    }, 4500);
});

function ajustarFasePlanta(classeCSS, emoji) {
    const plantas = document.querySelectorAll('.soja');
    plantas.forEach(planta => {
        planta.className = `soja ${classeCSS}`;
        planta.innerText = emoji;
    });
}

// Lógica de Movimentação da Colheitadeira e Armazenamento no Silo
btnColher.addEventListener('click', () => {
    btnColher.disabled = true;
    
    // Move a máquina da esquerda para a direita atravessando a plantação
    maquina.style.left = '750px';

    const plantas = document.querySelectorAll('.soja');
    
    // Executa a colheita em sincronia com o movimento da máquina
    plantas.forEach((planta, index) => {
        setTimeout(() => {
            planta.classList.add('colhida');
            
            // Atualiza a porcentagem de armazenamento do silo em tempo real
            let totalColhido = Math.round(((index + 1) / numPlantas) * 100);
            statusSilo.innerText = `${totalColhido}%`;
        }, index * 250 + 1200); // Delay calculado para acompanhar a posição da colheitadeira
    });

    // Finaliza o ciclo e prepara o reset sustentável
    setTimeout(() => {
        statusSilo.innerText = "100% Cheio";
        statusSilo.style.color = "#2e7d32";
        alert("Colheita Sustentável concluída! Alimentos colhidos e armazenados com energia limpa e automação.");
        
        // Reseta o cenário para nova demonstração após 4 segundos
        setTimeout(() => {
            maquina.style.left = '-160px';
            statusSilo.innerText = "0%";
            statusSilo.style.color = "#1b5e20";
            btnChuva.disabled = false;
            gerarCampo();
        }, 4000);

    }, 5500);
});

// Inicialização
gerarCampo();