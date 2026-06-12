const btnChuva = document.getElementById('btn-chuva');
const btnColher = document.getElementById('btn-colher');
const chuvaContainer = document.getElementById('chuva-container');
const campo = document.getElementById('campo');
const maquina = document.getElementById('maquina');
const statusSilo = document.getElementById('status-silo');

const numPlantas = 12; // Menos plantas para que fiquem maiores na tela
const fasesSoja = { semente: '🌱', broto: '🌿', madura: '🌾' };

// Desenha a plantação inicial na tela
function construirPlantacao() {
    campo.innerHTML = '';
    for (let i = 0; i < numPlantas; i++) {
        const planta = document.createElement('div');
        planta.classList.add('soja');
        planta.innerText = fasesSoja.semente;
        campo.appendChild(planta);
    }
}

// Ativa a chuva inteligente e faz a soja crescer e mudar de cor
btnChuva.addEventListener('click', () => {
    btnChuva.disabled = true;
    chuvaContainer.className = 'chuva-ativa';

    // 1º Estágio: Broto verde crescendo
    setTimeout(() => {
        atualizarSoja('crescendo', fasesSoja.broto);
    }, 2000);

    // 2º Estágio: Maduro e Dourado pronto para a colheitadeira
    setTimeout(() => {
        atualizarSoja('madura', fasesSoja.madura);
        chuvaContainer.className = 'chuva-desativada'; // Desliga a água
        btnColher.disabled = false; // Libera o botão de colher
    }, 4500);
});

function atualizarSoja(classeVisual, emoji) {
    const plantas = document.querySelectorAll('.soja');
    plantas.forEach(planta => {
        planta.className = `soja ${classeVisual}`;
        planta.innerText = emoji;
    });
}

// Faz a grande colheitadeira passar colhendo e enchendo o silo perto da fazenda
btnColher.addEventListener('click', () => {
    btnColher.disabled = true;
    
    // Movimenta a grande máquina até o outro lado da tela
    maquina.style.left = '900px';

    const plantas = document.querySelectorAll('.soja');
    
    // Sumir com as plantas à medida que a máquina passa e alimentar o Silo
    plantas.forEach((planta, index) => {
        setTimeout(() => {
            planta.classList.add('colhida');
            
            // Cálculos de porcentagem de armazenamento do silo
            let totalSilo = Math.round(((index + 1) / numPlantas) * 100);
            statusSilo.innerText = `${totalSilo}%`;
        }, index * 300 + 1000); // Sincronia perfeita com o tamanho da máquina
    });

    // Conclusão e reinício automático
    setTimeout(() => {
        statusSilo.innerText = "100%";
        alert("Sucesso! Colheita realizada com tecnologia sustentável de alta produtividade!");
        
        // Retorna tudo ao padrão para demonstração contínua
        setTimeout(() => {
            maquina.style.left = '-220px';
            statusSilo.innerText = "0%";
            btnChuva.disabled = false;
            construirPlantacao();
        }, 3000);

    }, 5500);
});

// Inicializa a maquete digital
construirPlantacao();