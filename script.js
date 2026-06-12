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

// Base de conhecimento das fases de transição sustentável 2050
const fluxoEtapas = {
    irrigacao: {
        status: "Fase 1: Gotejamento automatizado ativado.",
        titulo: "Gestão Hídrica Consciente",
        descricao: "Os sistemas de irrigação coletam energia dos painéis fotovoltaicos superiores. A água só é liberada após sensores de subsuperfície validarem a real necessidade hídrica da soja, eliminando perdas por evaporação."
    },
    colheita: {
        status: "Fase 2: Maquinário inteligente operando em campo.",
        titulo: "Eficiência Máxima no Campo (Combustível Limpo)",
        descricao: "A colheitadeira guiada por geoprocessamento avança com precisão milimétrica. A IA otimiza as manobras para gastar menos energia e evitar o esmagamento do solo, provando a força industrial aliada à conservação."
    },
    armazenamento: {
        status: "Fase 3: Silo abastecido com monitoramento termo-digital.",
        titulo: "Estocagem Inteligente com Emissão Zero",
        descricao: "Os grãos chegam ao Silo 2050. Todo o sistema de ventilação, resfriamento e conservação dos grãos é mantido de forma autônoma pela energia solar armazenada em baterias, zerando a pegada de carbono pós-colheita."
    }
};

// Ação 1: Irrigação e Desenvolvimento da Cultura
btnIrrigar.addEventListener('click', () => {
    statusEtapa.innerText = fluxoEtapas.irrigacao.status;
    efeitoIrrigacao.classList.remove('esconder');
    
    infoTitulo.innerText = fluxoEtapas.irrigacao.titulo;
    infoDescricao.innerText = fluxoEtapas.irrigacao.descricao;
    
    btnIrrigar.disabled = true;
    btnIrrigar.classList.remove('active');

    setTimeout(() => {
        efeitoIrrigacao.classList.add('esconder');
        plantaSoja.innerText = "🌿";
        plantaSoja.classList.add('crescida');
        statusEtapa.innerText = "Soja Desenvolvida e Pronta para Processamento.";
        
        btnColher.disabled = false;
        btnColher.classList.add('active');
    }, 2000); 
});

// Ação 2: Entrada da Colheitadeira Inteligente
btnColher.addEventListener('click', () => {
    statusEtapa.innerText = fluxoEtapas.colheita.status;
    colheitadeira.classList.remove('esconder');
    colheitadeira.classList.add('mover');
    
    infoTitulo.innerText = fluxoEtapas.colheita.titulo;
    infoDescricao.innerText = fluxoEtapas.colheita.descricao;
    
    btnColher.disabled = true;
    btnColher.classList.remove('active');

    setTimeout(() => {
        plantaSoja.classList.add('colhida');
        statusEtapa.innerText = "Volume colhido direcionado para a central de estocagem.";
        
        btnArmazenar.disabled = false;
        btnArmazenar.classList.add('active');
    }, 2200);
});

// Ação 3: Enchimento do Silo Verde
btnArmazenar.addEventListener('click', () => {
    statusEtapa.innerText = fluxoEtapas.armazenamento.status;
    nivelSilo.style.height = "100%"; // Sobe o nível da soja no silo
    colheitadeira.classList.add('esconder');
    
    infoTitulo.innerText = fluxoEtapas.armazenamento.titulo;
    infoDescricao.innerText = fluxoEtapas.armazenamento.descricao;
    
    btnArmazenar.disabled = true;
    btnArmazenar.classList.remove('active');

    setTimeout(() => {
        statusEtapa.innerText = "Ciclo Logístico Sustentável 2050 Concluído.";
    }, 2500);
});