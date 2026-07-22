const dadosProtecoes = {
    // --- PESSOA FÍSICA ---
    'auto': {
        titulo: 'Seguro Automóvel',
        texto: 'Proteção completa para o seu veículo contra colisões, roubo, furto, incêndio e danos a terceiros. Garantimos tranquilidade para você dirigir, além de assistência 24 horas, guincho e carro reserva conforme o seu perfil.',
        imagem: 'imagens/auto.jpg'
    },
    'residencia': {
        titulo: 'Seguro Residencial',
        texto: 'Sua casa protegida contra incêndio, roubo, danos elétricos, vendavais e quebra de vidros. Inclui serviços práticos de assistência 24h para o dia a dia, como chaveiro, encanador e eletricista.',
        imagem: 'imagens/residencial.jpg'
    },
    'vida': {
        titulo: 'Seguro de Vida',
        texto: 'Garantia de segurança financeira para você e sua família em momentos imprevistos. Coberturas personalizáveis para morte, invalidez por acidente ou doença, e diagnóstico de doenças graves.',
        imagem: 'imagens/vida.jpg'
    },
    'fianca': {
        titulo: 'Fiança Locatícia',
        texto: 'A solução ideal para alugar um imóvel sem a necessidade de um fiador ou caução. Agiliza o processo de locação e oferece garantias sólidas para o proprietário e facilidade para o inquilino.',
        imagem: 'imagens/fianca.jpg'
    },
    'bike': {
        titulo: 'Seguro Bike',
        texto: 'Pedale com segurança! Cobertura contra roubo, furto qualificado, danos acidentais e responsabilidade civil, seja para uso esportivo, lazer ou locomoção diária.',
        imagem: 'imagens/bike.jpg'
    },
    'viagem': {
        titulo: 'Seguro Viagem',
        texto: 'Viaje pelo Brasil ou pelo mundo sem preocupações. Cobertura para despesas médicas, hospitalares, odontológicas, extravio de bagagem e repatriação.',
        imagem: 'imagens/viagem.jpg'
    },
    'equipamento': {
        titulo: 'Celular e Equipamentos',
        texto: 'Proteja seus eletrônicos portáteis (smartphones, notebooks, tablets e câmeras) contra roubo, furto qualificado, quebra acidental e danos por líquidos.',
        imagem: 'imagens/celular.jpeg'
    },
    'rc': {
        titulo: 'Responsabilidade Civil Profissional',
        texto: 'Proteção para a sua carreira. Cobre despesas de defesa e indenizações em caso de falhas profissionais ou omissões que causem danos a terceiros. Ideal para médicos, engenheiros, advogados e outros.',
        imagem: "imagens/rc.avif"
    },
// --- AGRONEGÓCIO ---
    'lavoura': {
        titulo: 'Agrícola (Lavoura)',
        texto: 'Proteção essencial para as suas safras contra intempéries climáticas como granizo, geada, chuvas excessivas e secas. Garantimos a tranquilidade do produtor rural em todas as etapas do cultivo.',
        imagem: "imagens/lavoura.jpg"
    },
    'fazendas': {
        titulo: 'Agro Fazendas',
        texto: 'Solução completa de "porteira fechada" para a sua propriedade. Cobre desde os galpões, silos e casas de funcionários até o maquinário e insumos armazenados contra incêndios, raios e vendavais.',
        imagem: "imagens/fazenda.jpg"
    },
    'equipamentos_agro': {
        titulo: 'RD Equipamentos Agrícolas',
        texto: 'Segurança fundamental para tratores, colheitadeiras, pivôs de irrigação e implementos. Cobre danos acidentais, incêndio, roubo e furto qualificado, operando dentro da fazenda ou durante o transporte.',
        imagem: "imagens/equipamentos-agro.jpg"
    },
    'animais': {
        titulo: 'Seguro de Animais',
        texto: 'Cobertura especializada voltada para a proteção de rebanhos de elite, reprodutores e animais de produção. Protege seu investimento contra morte por doença, acidentes e incidentes durante o transporte.',
        imagem: "imagens/animais.jpg"
    },

 // --- EMPRESAS ---
    'engenharia': {
        titulo: 'Riscos de Engenharia',
        texto: 'Ampla proteção para obras civis, infraestrutura, instalações e montagens industriais. Cobre danos materiais causados por acidentes de origem súbita e imprevista durante a execução do projeto, além de despesas extraordinárias.',
        imagem: "imagens/engenharia.jpg"
    },
    'garantia': {
        titulo: 'Seguro Garantia',
        texto: 'A alternativa com melhor custo-benefício para garantir o cumprimento de obrigações contratuais (Licitante, Performance) ou como substituição de depósitos em processos judiciais e recursos.',
        imagem: "imagens/garantia.jpg"
    },
    'rc_empresas': {
        titulo: 'Responsabilidade Civil Corporativa',
        texto: 'Proteção do patrimônio da empresa em casos de reclamações de terceiros por danos corporais ou materiais decorrentes das operações, obras ou prestação de serviços (RC Geral, Obras e Profissional).',
        imagem: "imagens/rc-empresas.jpg"
    },
    'transportes': {
        titulo: 'Seguro de Transportes',
        texto: 'Garantia de segurança para a sua cadeia logística. Coberturas completas para danos à carga em transportes nacionais, acidentes, tombamentos e roubo para embarcadores e transportadores.',
        imagem: "imagens/transportes.jpg"
    }
};

const cards = document.querySelectorAll('.item-simples, .card-foco');
const containerDetalhe = document.getElementById('detalhe-container');
const imgDetalhe = document.getElementById('detalhe-img');
const tituloDetalhe = document.getElementById('detalhe-titulo');
const descDetalhe = document.getElementById('detalhe-desc');

if (cards.length > 0 && containerDetalhe) {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('ativo'));

            card.classList.add('ativo');

            // Pega qual foi o tipo clicado
            const tipo = card.getAttribute('data-tipo');
            const dados = dadosProtecoes[tipo];

            if (dados) {
                tituloDetalhe.textContent = dados.titulo;
                descDetalhe.textContent = dados.texto;
                imgDetalhe.src = dados.imagem;

                containerDetalhe.style.display = 'flex';
            }
        });
    });

    const cardAuto = document.querySelector('[data-tipo="auto"]');
    if (cardAuto) cardAuto.click();

    const cardLavoura = document.querySelector('[data-tipo="lavoura"]');
    if (cardLavoura) cardLavoura.click();

    const cardEngenharia = document.querySelector('[data-tipo="engenharia"]');
    if (cardEngenharia) cardEngenharia.click();

}

document.addEventListener('DOMContentLoaded', () => {
    const btnCopiarEmail = document.getElementById('copiar-email');
    const toastAviso = document.getElementById('toast-aviso');

    if (btnCopiarEmail && toastAviso) {
        btnCopiarEmail.addEventListener('click', (e) => {
            e.preventDefault();

            const email = 'segmentorseguros@gmail.com';

            navigator.clipboard.writeText(email).then(() => {

                toastAviso.classList.add('mostrar');


                setTimeout(() => {
                    toastAviso.classList.remove('mostrar');
                }, 3000);
            }).catch(err => {
                console.error('Falha ao copiar o e-mail: ', err);
            });
        });
    }
});