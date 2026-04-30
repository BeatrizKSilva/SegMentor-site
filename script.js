const dadosProtecoes = {
    'auto': {
        titulo: 'Seguro Automóvel',
        texto: 'Proteção completa para o seu veículo contra colisões, roubo, furto, incêndio e danos a terceiros. Garantimos tranquilidade para você dirigir, além de assistência 24 horas, guincho e carro reserva conforme o seu perfil.',
        imagem: 'imagens/auto.jpg'
    },
    'residencia': {
        titulo: 'Seguro Residencial',
        texto: 'Sua casa protegida contra incêndio, roubo, danos elétricos, vendavais e quebra de vidros. Inclui serviços práticos de assistência 24h para o dia a dia, como chaveiro, encanador e eletricista.',
        imagem: ''
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
        imagem: ''
    },
    'rc': {
        titulo: 'Responsabilidade Civil Profissional',
        texto: 'Proteção para a sua carreira. Cobre despesas de defesa e indenizações em caso de falhas profissionais ou omissões que causem danos a terceiros. Ideal para médicos, engenheiros, advogados e outros.',
        imagem: "imagens/rc.avif"
    }
};

const cards = document.querySelectorAll('.item-simples');
const containerDetalhe = document.getElementById('detalhe-container');
const imgDetalhe = document.getElementById('detalhe-img');
const tituloDetalhe = document.getElementById('detalhe-titulo');
const descDetalhe = document.getElementById('detalhe-desc');

if (cards.length > 0 && containerDetalhe) {
    cards.forEach(card => {
        card.addEventListener('click', () => {

            cards.forEach(c => c.classList.remove('ativo'));

            card.classList.add('ativo');

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
    if (cardAuto) {
        cardAuto.click();
    }
}