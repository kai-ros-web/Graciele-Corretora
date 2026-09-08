(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5515997238982";

  const COOKIE_CONSENT_KEY = "gm_cookie_consent";

  const COOKIE_POLICY_URL = "politica-de-privacidade.html#cookies";

  const WHATSAPP_PROPERTY_MESSAGE =
    'Olá, Graciele! Vi o imóvel "{titulo}" no site e gostaria de mais informações.';

  const PROPERTIES = [
    {
      titulo: "Lotes no Botanic Garden",
      bairro: "Cond. Botanic Garden Itapeva/SP",
      tag: "Venda",
      preco: "A partir de R$ 164.800",
      area: "A partir de 250 m²",
      foto: "assets/images/imovel-17a.jpeg",
      fotos: [
        "assets/images/imovel-17a.jpeg",
        "assets/images/imovel-17b.jpeg",
        "assets/images/imovel-17c.jpeg",
        "assets/images/imovel-17d.jpeg",
        "assets/images/imovel-17e.jpeg",
      ],
      descricao: `LOTES DISPONÍVEIS PARA VENDA!

Bairro: Jardim Europa

Venha garantir seu lote em um dos empreendimentos mais completos de Itapeva/SP: o Botanic Garden Residencial.

Aqui você pode planejar e construir seu imóvel exatamente do seu jeito, em um ambiente pensado para proporcionar conforto, lazer e segurança para toda a família.

Lotes a partir de 250m²
Opções de até 479m²
Valores a partir de R$ 164.800,00
Loteamento fechado

Área de lazer completa
Bosque privativo
Espaço pet
Segurança e monitoramento 24h
Infraestrutura 100% concluída e pronta para construir
100% LIBERADO PARA FINANCIAMENTO

`,
    },
    {
      titulo: "Sobrado alto padrão Botanic Garden 1",
      bairro: "Cond. Botanic Garden Itapeva/SP",
      tag: "Venda",
      preco: "R$ 2.000.000",
      quartos: 3,
      banheiros: 2,
      area: "257,54 m²",
      foto: "assets/images/imovel-1d.jpg",
      fotos: [
        "assets/images/imovel-1d.jpg",
        "assets/images/imovel-1a.jpg",
        "assets/images/imovel-1c.jpg",
        "assets/images/imovel-1.jpg",
        "assets/images/imovel-1e.jpg",
        "assets/images/imovel-1f.jpg",
        "assets/images/imovel-1g.jpg",
        "assets/images/imovel-1h.jpg",
        "assets/images/imovel-1i.jpg",
        "assets/images/imovel-1j.jpg",
        "assets/images/imovel-1k.jpg",
        "assets/images/imovel-1l.jpg",
        "assets/images/imovel-1m.jpg",
        "assets/images/imovel-1n.jpg",
        "assets/images/imovel-1o.jpg",
        "assets/images/imovel-1p.jpg",
        "assets/images/imovel-1r.jpg",
        "assets/images/imovel-1s.jpg",
        "assets/images/imovel-1t.jpg",
        "assets/images/imovel-1u.jpg",
        "assets/images/imovel-1v.jpg",
        "assets/images/imovel-1w.jpg",
        "assets/images/imovel-1x.jpg",
        "assets/images/imovel-1y.jpg",
        "assets/images/imovel-1z.jpg",
        "assets/images/imovel-1ab.jpg",
        "assets/images/imovel-1ac.jpg",
        "assets/images/imovel-1ad.jpg",
        "assets/images/imovel-1ae.jpg",
        "assets/images/imovel-1af.jpg",
      ],
      descricao: `SOBRADO DISPONÍVEL PARA VENDA!

Área do terreno: 250,00m²
Área construída: 257,54m²

Distribuição dos ambientes:

Térreo:

Garagem para 2 veículos
Sala de estar integrada à cozinha americana
Área gourmet
Lavabo
Área de serviço

Piso Superior:

2 dormitórios com varanda
1 suíte com closet e varanda
Banheiro social

Diferenciais do imóvel:

Marcenaria planejada
Acabamentos de alto padrão
Piscina

Localizado no Botanic Garden Residencial, um loteamento fechado que oferece infraestrutura completa, segurança e monitoramento 24h, área de lazer, bosque privativo, espaço pet e excelente qualidade de vida para toda a família.

VALOR: R$ 2.000.000,00

Analisamos propostas!

Entre em contato para mais informações e agende sua visita.

`,
    },
    {
      titulo: "Residencial/Comercial",
      bairro: "Epaminondas Ferreira Lobo, Centro Itapeva/SP",
      tag: "Venda",
      preco: "R$ 3.500.000",
      banheiros: 3,
      area: "+600 m²",
      foto: "assets/images/imovel-2l.jpg",
      fotos: [
        "assets/images/imovel-2a.jpg",
        "assets/images/imovel-2b.jpg",
        "assets/images/imovel-2c.jpg",
        "assets/images/imovel-2d.jpg",
        "assets/images/imovel-2e.jpg",
        "assets/images/imovel-2f.jpg",
        "assets/images/imovel-2g.jpg",
        "assets/images/imovel-2h.jpg",
        "assets/images/imovel-2i.jpg",
        "assets/images/imovel-2j.jpg",
        "assets/images/imovel-2k.jpg",
        "assets/images/imovel-2l.jpg",
        "assets/images/imovel-2m.jpg",
        "assets/images/imovel-2n.jpg",
        "assets/images/imovel-2o.jpg",
        "assets/images/imovel-2p.jpg",
        "assets/images/imovel-2q.jpg",
        "assets/images/imovel-2r.jpg",
        "assets/images/imovel-2s.jpg",
        "assets/images/imovel-2t.jpg",
      ],

      descricao: `PREÇO CAIU!

De R$5.000.000,00
Para R$3.500.000,00

Rua Epaminondas Ferreira Lobo, Centro.

2 pavimentos (inferior e superior);
Sala de estar;
Cozinha;
Banheiro social;
Área de serviço;
Mais de 10 salas.
Quintal grande.

Área construída: aprox. mais de 600m²
Área terreno: 420,00m²

Auxiliamos com toda documentação.

`,
    },
    {
      titulo: "Sobrado alto padrão Botanic Garden 2",
      bairro: "Cond. Botanic Garden Itapeva/SP",
      tag: "Venda",
      preco: "R$ 1.400.000",
      quartos: 2,
      banheiros: 2,
      area: "191,08 m²",
      foto: "assets/images/imovel-3a.jpg",
      fotos: [
        "assets/images/imovel-3a.jpg",
        "assets/images/imovel-3b.jpg",
        "assets/images/imovel-3c.jpg",
        "assets/images/imovel-3d.jpg",
        "assets/images/imovel-3e.jpg",
        "assets/images/imovel-3f.jpg",
        "assets/images/imovel-3g.jpg",
        "assets/images/imovel-3h.jpg",
        "assets/images/imovel-3i.jpg",
        "assets/images/imovel-3j.jpg",
        "assets/images/imovel-3k.jpg",
        "assets/images/imovel-3l.jpg",
        "assets/images/imovel-3m.jpg",
        "assets/images/imovel-3n.jpg",
        "assets/images/imovel-3o.jpg",
        "assets/images/imovel-3p.jpg",
        "assets/images/imovel-3q.jpg",
        "assets/images/imovel-3r.jpg",
        "assets/images/imovel-3s.jpg",
        "assets/images/imovel-3t.jpg",
      ],
      descricao: `Botanic Garden Residencial – Itapeva/SP

Belíssimo sobrado de alto padrão, projetado para oferecer conforto, funcionalidade e sofisticação em um dos empreendimentos mais valorizados de Itapeva.

Área do terreno: 275,00m²
Área construída: 191,08m²

Distribuição dos ambientes:

Térreo:

Garagem para 2 veículos
Sala de estar integrada à cozinha americana
Área gourmet
Despensa
Lavabo
Lavanderia

Piso Superior:

2 dormitórios (sendo 1 com varanda)
1 suíte com closet e varanda
Banheiro social

Diferenciais do imóvel:

Marcenaria planejada
Micro-ondas
Forno elétrico
Cooktop
Acabamentos de alto padrão
Piscina

Localizado no Botanic Garden Residencial, um loteamento fechado que oferece infraestrutura completa, segurança e monitoramento 24h, área de lazer, bosque privativo, espaço pet e excelente qualidade de vida para toda a família.

Valor: R$ 1.400.000,00

Analisamos propostas!

`,
    },
    {
      titulo: "Casa térrea JD Europa IV",
      bairro: "Rua Maria d'Ávila de Carvalho, Jardim Europa Itapeva/SP",
      tag: "Venda",
      preco: "R$ 950.000",
      quartos: 3,
      banheiros: 2,
      area: "150 m²",
      foto: "assets/images/imovel-4a.jpg",
      fotos: [
        "assets/images/imovel-4a.jpg",
        "assets/images/imovel-4b.jpg",
        "assets/images/imovel-4c.jpg",
        "assets/images/imovel-4d.jpg",
        "assets/images/imovel-4e.jpg",
        "assets/images/imovel-4f.jpg",
        "assets/images/imovel-4g.jpg",
        "assets/images/imovel-4h.jpg",
        "assets/images/imovel-4i.jpg",
        "assets/images/imovel-4j.jpg",
        "assets/images/imovel-4k.jpg",
        "assets/images/imovel-4l.jpg",
        "assets/images/imovel-4m.jpg",
        "assets/images/imovel-4n.jpg",
        "assets/images/imovel-4o.jpg",
        "assets/images/imovel-4p.jpg",
        "assets/images/imovel-4q.jpg",
        "assets/images/imovel-4r.jpg",
        "assets/images/imovel-4s.jpg",
        "assets/images/imovel-4t.jpg",
        "assets/images/imovel-4u.jpg",
        "assets/images/imovel-4v.jpg",
        "assets/images/imovel-4w.jpg",
        "assets/images/imovel-4x.jpg",
        "assets/images/imovel-4y.jpg",
        "assets/images/imovel-4z.jpg",
      ],
      descricao: `Rua Maria d'Ávila de Carvalho, Jardim Europa.

03 dormitórios, sendo 01 suíte;
Sala de estar com pé direito alto;
Cozinha;
Banheiro social;
Área de serviço;
Área Gourmet com lavabo;
Spa;
Garagem.

Esquadrias em alumínio.
Elétrica em fase de finalização.
Imóvel em fase de acabamento.

Aceita financiamento!

VALOR: R$950.000,00

Área construída: 150,00m²
Área terreno: 250,00m²

`,
    },
    {
      titulo: "Casa a venda no portal Itapeva",
      bairro: "Portal Itapeva, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 510.000",
      quartos: 3,
      banheiros: 2,
      area: "115 m²",
      foto: "assets/images/imovel-5w.jpg",
      fotos: [
        "assets/images/imovel-5a.jpg",
        "assets/images/imovel-5b.jpg",
        "assets/images/imovel-5c.jpg",
        "assets/images/imovel-5d.jpg",
        "assets/images/imovel-5e.jpg",
        "assets/images/imovel-5f.jpg",
        "assets/images/imovel-5g.jpg",
        "assets/images/imovel-5h.jpg",
        "assets/images/imovel-5i.jpg",
        "assets/images/imovel-5j.jpg",
        "assets/images/imovel-5k.jpg",
        "assets/images/imovel-5l.jpg",
        "assets/images/imovel-5m.jpg",
        "assets/images/imovel-5n.jpg",
        "assets/images/imovel-5o.jpg",
        "assets/images/imovel-5p.jpg",
        "assets/images/imovel-5q.jpg",
        "assets/images/imovel-5r.jpg",
        "assets/images/imovel-5s.jpg",
        "assets/images/imovel-5t.jpg",
        "assets/images/imovel-5u.jpg",
        "assets/images/imovel-5v.jpg",
        "assets/images/imovel-5w.jpg",
        "assets/images/imovel-5x.jpg",
        "assets/images/imovel-5y.jpg",
        "assets/images/imovel-5z.jpg",
      ],
      descricao: `LINDA CASA A VENDA NO PORTAL ITAPEVA

OPORTUNIDADE !!!

BAIXOU DE $ 570 MIL PRA $ 510 MIL
Ótima localização no bairro
Terreno com 175 M²
Área construída 115 M²
Documentação OK

LAYOUT:

3 Quartos (1 Sendo suíte)
Sala de estar e jantar em ambiente aberto com pé direito alto
Cozinha americana
Banheiro Social
2 (Duas) Lavanderias
Garagem pra 2 carros
Área gourmet com churrasqueira
Quartinho de depósito
Excelente acabamento
Móveis planejados em todos os cômodos (Sala, Cozinha, Quartos e banheiros)
Piso porcelanato na área interna e externa
Esquadrias em alumínio
Acabamento em gesso

VALOR R$ 510.000,00

Aceita financiamento
Analisa proposta de carro e lote como parte de pagamento

`,
    },
    {
      titulo: "Ótima casa a venda no portal itapeva",
      bairro: "Portal Itapeva, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 590.000",
      quartos: 3,
      banheiros: 3,
      area: "120, m²",
      foto: "assets/images/imovel-6f.jpg",
      fotos: [
        "assets/images/imovel-6a.jpg",
        "assets/images/imovel-6b.jpg",
        "assets/images/imovel-6c.jpg",
        "assets/images/imovel-6d.jpg",
        "assets/images/imovel-6e.jpg",
        "assets/images/imovel-6f.jpg",
        "assets/images/imovel-6g.jpg",
        "assets/images/imovel-6h.jpg",
        "assets/images/imovel-6i.jpg",
        "assets/images/imovel-6j.jpg",
        "assets/images/imovel-6k.jpg",
        "assets/images/imovel-6l.jpg",
        "assets/images/imovel-6m.jpg",
        "assets/images/imovel-6n.jpg",
        "assets/images/imovel-6o.jpg",
        "assets/images/imovel-6p.jpg",
        "assets/images/imovel-6q.jpg",
        "assets/images/imovel-6r.jpg",
        "assets/images/imovel-6s.jpg",
        "assets/images/imovel-6t.jpg",
        "assets/images/imovel-6u.jpg",
        "assets/images/imovel-6v.jpg",
        "assets/images/imovel-6w.jpg",
        "assets/images/imovel-6x.jpg",
        "assets/images/imovel-6y.jpg",
        "assets/images/imovel-6z.jpg",
      ],
      descricao: `ÓTIMA CASA A VENDA NO PORTAL ITAPEVA

Terreno com 175 M² (7 X 25)

Área construída 120 M²

Ótimo acabamento

LAYOUT:

3 Quartos (Sendo 2 Suítes)
Sala com pé direito alto
Cozinha
Banheiro Social
Lavanderia
Jardim de inverno
Garagem para dois carros (Descoberta)

VALOR: R$ 590.000,00

Aceita financiamento

Aceita lote no Portal Itapeva como parte de pagamento

`,
    },
    {
      titulo: "Casa no JD Virginia com 3 quartos",
      bairro: "Jardim Virginia, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 450.000",
      quartos: 3,
      banheiros: 1,
      area: "206,41 m²",
      foto: "assets/images/imovel-7a.jpg",
      fotos: [
        "assets/images/imovel-7a.jpg",
        "assets/images/imovel-7b.jpg",
        "assets/images/imovel-7c.jpg",
        "assets/images/imovel-7d.jpg",
        "assets/images/imovel-7e.jpg",
        "assets/images/imovel-7f.jpg",
        "assets/images/imovel-7g.jpg",
        "assets/images/imovel-7h.jpg",
        "assets/images/imovel-7i.jpg",
        "assets/images/imovel-7j.jpg",
        "assets/images/imovel-7k.jpg",
        "assets/images/imovel-7l.jpg",
        "assets/images/imovel-7m.jpg",
        "assets/images/imovel-7n.jpg",
        "assets/images/imovel-7o.jpg",
        "assets/images/imovel-7p.jpg",
        "assets/images/imovel-7q.jpg",
        "assets/images/imovel-7r.jpg",
        "assets/images/imovel-7s.jpg",
        "assets/images/imovel-7t.jpg",
        "assets/images/imovel-7u.jpg",
        "assets/images/imovel-7v.jpg",
        "assets/images/imovel-7w.jpg",
        "assets/images/imovel-7x.jpg",
        "assets/images/imovel-7y.jpg",
        "assets/images/imovel-7z.jpg",
      ],
      descricao: `VENDO ÓTIMA CASA NO JD VIRGINIA

Terreno com 300 M² (10 X 30)
Área construída 206,41 M²
Ótima localização no bairro
Documentação OK

LAYOUT:

3 Quartos
Sala
Cozinha com móveis planejados
Banheiro social
Ampla área de serviço
Garagem coberta pra 2 carros
1 Cômodo grande com banheiro que pode ser usado como mais um quarto, escritório ou salão comercial

ÁREA DE LAZER:
Ampla área gourmet
Cozinha
Banheiro
1 Quarto
Quintal

VALOR R$ 450.000,00

Aceita financiamento bancário

`,
    },
    {
      titulo: "Casa ótima no Itapeva 4",
      bairro: "Itapeva 4, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 510.000",
      quartos: 3,
      banheiros: 3,
      area: "104.27 m²",
      foto: "assets/images/imovel-8a.jpg",
      fotos: [
        "assets/images/imovel-8a.jpg",
        "assets/images/imovel-8b.jpg",
        "assets/images/imovel-8c.jpg",
        "assets/images/imovel-8d.jpg",
        "assets/images/imovel-8e.jpg",
        "assets/images/imovel-8f.jpg",
        "assets/images/imovel-8g.jpg",
        "assets/images/imovel-8h.jpg",
        "assets/images/imovel-8i.jpg",
        "assets/images/imovel-8j.jpg",
        "assets/images/imovel-8k.jpg",
        "assets/images/imovel-8l.jpg",
        "assets/images/imovel-8m.jpg",
        "assets/images/imovel-8n.jpg",
        "assets/images/imovel-8o.jpg",
        "assets/images/imovel-8p.jpg",
        "assets/images/imovel-8q.jpg",
        "assets/images/imovel-8r.jpg",
        "assets/images/imovel-8s.jpg",
        "assets/images/imovel-8t.jpg",
        "assets/images/imovel-8u.jpg",
        "assets/images/imovel-8v.jpg",
        "assets/images/imovel-8w.jpg",
        "assets/images/imovel-8x.jpg",
        "assets/images/imovel-8y.jpg",
        "assets/images/imovel-8z.jpg",
      ],
      descricao: `ÓTIMA CASA A VENDA NO ITAPEVA 4

Terreno com 200 M² (10 X 20)
Área construída 104.27 M²
Ótima localização
A 2 minutos do SESI
CASA TODA REFORMADA

ÓTIMO ACABAMENTO:
Piso porcelanato acetinado
Cozinha com bancada em granito
Banheiros com revestimentos modernos e nicho embutido
Portão social e de garagem com design moderno

LAYOUT:

3 dormitórios (1 Sendo suíte)
2 banheiros completos
Sala de estar aconchegante
Sala de jantar ampla e iluminada
Cozinha em conceito aberto Área de serviço
Vagas de garagem para 3 veículos
Área gourmet integrada
Ambientes Integrados e lluminados

R$ 510.000,00

Aceita financiamento
Analisa proposta de carro como parte de pagamento

`,
    },
    {
      titulo: "Casa no centro",
      bairro: "Centro, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 470.000",
      quartos: 3,
      banheiros: 2,
      area: "177.60 m²",
      foto: "assets/images/imovel-9a.jpg",
      fotos: [
        "assets/images/imovel-9a.jpg",
        "assets/images/imovel-9b.jpg",
        "assets/images/imovel-9c.jpg",
        "assets/images/imovel-9d.jpg",
        "assets/images/imovel-9e.jpg",
        "assets/images/imovel-9f.jpg",
        "assets/images/imovel-9g.jpg",
        "assets/images/imovel-9h.jpg",
        "assets/images/imovel-9i.jpg",
        "assets/images/imovel-9j.jpg",
        "assets/images/imovel-9k.jpg",
        "assets/images/imovel-9l.jpg",
        "assets/images/imovel-9m.jpg",
        "assets/images/imovel-9n.jpg",
        "assets/images/imovel-9o.jpg",
        "assets/images/imovel-9p.jpg",
        "assets/images/imovel-9q.jpg",
        "assets/images/imovel-9r.jpg",
        "assets/images/imovel-9s.jpg",
        "assets/images/imovel-9t.jpg",
        "assets/images/imovel-9u.jpg",
        "assets/images/imovel-9v.jpg",
        "assets/images/imovel-9w.jpg",
        "assets/images/imovel-9x.jpg",
        "assets/images/imovel-9y.jpg",
        "assets/images/imovel-9z.jpg",
      ],
      descricao: `VENDO ÓTIMA CASA NO CENTRO DE ITAPEVA

TERRENO COM 218 M²

ÁREA CONSTRUÍDA 177.60 M²

DOCUMENTAÇÃO OK

ÓTIMA LOCALIZAÇÃO

550 METROS DA PRAÇA ANCHIETA (3 MINUTOS)

LAYOUT:

1 SUÍTE AMPLA
2 DORMITÓRIOS
SALA AMPLA
COZINHA
BANHEIRO SOCIAL
ÁREA DE SERVIÇO
QUARTINHO DE DEPÓSITO
GARAGEM COBERTA PRA 1 CARRO + 3 VAGAS DESCOBERTA

VALOR: R$ 470.000,00

ACEITA FINANCIAMENTO

ACEITA CARRO COMO PARTE DE PAGAMENTO

`,
    },
    {
      titulo: "Belissima casa",
      bairro: "Portal Itapeva, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 580.000",
      quartos: 3,
      banheiros: 2,
      area: "104.17 m²",
      foto: "assets/images/imovel-10a.jpg",
      fotos: [
        "assets/images/imovel-10a.jpg",
        "assets/images/imovel-10b.jpg",
        "assets/images/imovel-10c.jpg",
        "assets/images/imovel-10d.jpg",
        "assets/images/imovel-10e.jpg",
        "assets/images/imovel-10f.jpg",
        "assets/images/imovel-10g.jpg",
        "assets/images/imovel-10h.jpg",
        "assets/images/imovel-10i.jpg",
        "assets/images/imovel-10j.jpg",
        "assets/images/imovel-10k.jpg",
        "assets/images/imovel-10l.jpg",
        "assets/images/imovel-10m.jpg",
        "assets/images/imovel-10n.jpg",
        "assets/images/imovel-10o.jpg",
        "assets/images/imovel-10p.jpg",
        "assets/images/imovel-10q.jpg",
        "assets/images/imovel-10r.jpg",
        "assets/images/imovel-10s.jpg",
        "assets/images/imovel-10t.jpg",
        "assets/images/imovel-10u.jpg",
        "assets/images/imovel-10v.jpg",
        "assets/images/imovel-10w.jpg",
        "assets/images/imovel-10x.jpg",
        "assets/images/imovel-10y.jpg",
        "assets/images/imovel-10z.jpg",
      ],
      descricao: `BELISSIMA CASA DISPONIVEL PRA VENDA

Localizada no Residencial PORTAL ITAPEVA

Terreno com 176.52 M²
Área construída104.17 M²
Documentação OK

EXCELENTE ACABAMENTO:

Piso porcelanato polido na cozinha, Sala e Banheiro
Piso porcelanato acetinado na área externa
Piso laminado nos quartos e corredor
Esquadrias em alumínio branco
Iluminação em LED
Acabamento em gesso
Portão em alumínio branco automatizado
Móveis planejados na cozinha, no closet e nos banheiros

LAYOUT:

3 Quartos (1 sendo suíte com closet)
Sala de jantar e estar em ambiente aberto com pé direito duplo
Cozinha com churrasqueira
Banheiro social
Área de serviço coberta
Garagem coberta pra 1 carros + 1 vaga descoberta
Piscina com cascata
Churrasqueira externa

VALOR: R$ 580.000,00

Aceita financiamento bancário

`,
    },
    {
      titulo: "Casa no Centro de Itapeva",
      bairro: "Centro, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 690.000",
      quartos: 3,
      banheiros: 2,
      foto: "assets/images/imovel-11a.jpg",
      fotos: [
        "assets/images/imovel-11a.jpg",
        "assets/images/imovel-11b.jpg",
        "assets/images/imovel-11c.jpg",
        "assets/images/imovel-11d.jpg",
        "assets/images/imovel-11e.jpg",
        "assets/images/imovel-11f.jpg",
        "assets/images/imovel-11g.jpg",
        "assets/images/imovel-11h.jpg",
        "assets/images/imovel-11i.jpg",
        "assets/images/imovel-11j.jpg",
        "assets/images/imovel-11k.jpg",
        "assets/images/imovel-11l.jpg",
        "assets/images/imovel-11m.jpg",
        "assets/images/imovel-11n.jpg",
        "assets/images/imovel-11o.jpg",
        "assets/images/imovel-11p.jpg",
        "assets/images/imovel-11q.jpg",
        "assets/images/imovel-11r.jpg",
        "assets/images/imovel-11s.jpg",
        "assets/images/imovel-11t.jpg",
        "assets/images/imovel-11u.jpg",
        "assets/images/imovel-11v.jpg",
        "assets/images/imovel-11w.jpg",
        "assets/images/imovel-11x.jpg",
        "assets/images/imovel-11y.jpg",
        "assets/images/imovel-11z.jpg",
      ],
      descricao: `VENDO CASA NO CENTRO DE ITAPEVA - SP

ÓTIMA LOCALIZAÇÃO

3 QUADRAS DA PRAÇA ANCHIETA
ÓTIMO IMÓVEL PRA MONTAR CLÍNICA OU ESCRITÓRIO
DOCUMENTAÇÃO OK

LAYOUT:

3 QUARTOS (SENDO 1 SUÍTE COM ARMÁRIO EMBUTIDO)
SALA DE ESTAR
SALA DE JANTAR
COZINHA
BANHEIRO SOCIAL
ÁREA COM CHURRASQUEIRA
ÁREA DE SERVIÇO
GARAGEM COBERTA PRA 2 CARROS
QUINTAL

VALOR: R$690.000,00

ACEITA FINANCIAMENTO
ANALISA PROPOSTA DE TROCA POR APARTAMENTO EM SOROCABA

`,
    },
    {
      titulo: "Belíssimo sobrado a venda",
      bairro: "Jardim nova Itapeva, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 650.000",
      quartos: 3,
      banheiros: 2,
      area: "210 m²",
      foto: "assets/images/imovel-12a.jpg",
      fotos: [
        "assets/images/imovel-12a.jpg",
        "assets/images/imovel-12b.jpg",
        "assets/images/imovel-12c.jpg",
        "assets/images/imovel-12d.jpg",
        "assets/images/imovel-12e.jpg",
        "assets/images/imovel-12f.jpg",
        "assets/images/imovel-12g.jpg",
        "assets/images/imovel-12h.jpg",
        "assets/images/imovel-12i.jpg",
        "assets/images/imovel-12j.jpg",
        "assets/images/imovel-12k.jpg",
        "assets/images/imovel-12l.jpg",
        "assets/images/imovel-12m.jpg",
        "assets/images/imovel-12n.jpg",
        "assets/images/imovel-12o.jpg",
        "assets/images/imovel-12p.jpg",
        "assets/images/imovel-12q.jpg",
        "assets/images/imovel-12r.jpg",
        "assets/images/imovel-12s.jpg",
        "assets/images/imovel-12t.jpg",
        "assets/images/imovel-12u.jpg",
        "assets/images/imovel-12v.jpg",
        "assets/images/imovel-12w.jpg",
        "assets/images/imovel-12x.jpg",
        "assets/images/imovel-12y.jpg",
        "assets/images/imovel-12z.jpg",
      ],
      descricao: `VENDO BELÍSSIMO SOBRADO NO JARDIM NOVA ΙΤΑΡEVΑ

BAIXOU DE $ 690 MIL PRA $ 650 MIL

Terreno de esquina com 128 M²
Área construída aproximadamente 210 M²
Ótima localização
Atrás da Nutriceller
Próximo de mercado,escola,academia, etc....

όΤΙΜΟ ΑCABAMEΝΤΟ:

Piso porcelanato
Móveis planejados
Blindex
Energia solar
Vídeo porteiro
Portão eletrônico
PISO TÉRREO
Sala de estar com home planejado
Espaço pra sala de TV ou escritório
Cozinha com móveis planejado
Lavabo
Ampla Área de serviço
Garagem coberta pra 2 carros + 1 vaga descoberta

PISO SUPERIOR:

1 Suíte com móveis planejado e sacada
2 Dormitórios (1 Deles com móveis planejado)
Banheiro social

SUBSOLO:

Ampla área gourmet com churrasqueira Bancada de granito
Lavabo
Armário planejado pra apoio

VALOR: R$ 650.000,00

Aceita financiamento
Analisa proposta de carro como parte de pagamento
Analisa propostas de casa de menor valor como parte de pagamento


`,
    },
    {
      titulo: "Ótima casa na Vila Santana",
      bairro: "Vila Santana, Itapeva/Sp",
      tag: "Venda",
      preco: "R$ 600.000",
      quartos: 3,
      banheiros: 2,
      area: "179,67 m²",
      foto: "assets/images/imovel-13a.jpg",
      fotos: [
        "assets/images/imovel-13a.jpg",
        "assets/images/imovel-13b.jpg",
        "assets/images/imovel-13c.jpg",
        "assets/images/imovel-13d.jpg",
        "assets/images/imovel-13e.jpg",
        "assets/images/imovel-13f.jpg",
        "assets/images/imovel-13g.jpg",
        "assets/images/imovel-13h.jpg",
        "assets/images/imovel-13i.jpg",
        "assets/images/imovel-13j.jpg",
        "assets/images/imovel-13k.jpg",
        "assets/images/imovel-13l.jpg",
        "assets/images/imovel-13m.jpg",
        "assets/images/imovel-13n.jpg",
        "assets/images/imovel-13o.jpg",
        "assets/images/imovel-13p.jpg",
        "assets/images/imovel-13q.jpg",
        "assets/images/imovel-13r.jpg",
        "assets/images/imovel-13s.jpg",
        "assets/images/imovel-13t.jpg",
        "assets/images/imovel-13u.jpg",
        "assets/images/imovel-13v.jpg",
        "assets/images/imovel-13w.jpg",
        "assets/images/imovel-13x.jpg",
        "assets/images/imovel-13y.jpg",
        "assets/images/imovel-13z.jpg",
      ],
      descricao: `VENDO ÓTIMA CASA NA VILA SANTANA

ÓTIMA LOCALIZAÇÃO

550 METROS DA SANTA CASA
ÓTIMO IMÓVEL PRA TRANSFORMAR EM CLINICA OU ESCRITÓRIO
ÁREA TOTAL 308 M². (11 X 28)
ÁREA CONSTRUÍDA 179,67 M²

LAYOUT:

3 QUARTOS AMPLOS (1 SENDO SUÍTE)
SALA AMPLA
COZINHA AMPLA
BANHEIRO SOCIAL
ÁREA DE SERVIÇO
AMPLA ÁREA COM CHURRASQUEIRA E PIA
CORREDORES LARGOS
GARAGEM COBERTA PRA 2 CARROS + 2 VAGAS DESCOBERTA

VALOR R$600.000

ACEITA FINANCIAMENTO

`,
    },
    {
      titulo: "Casa linda no Jardim São Paulo",
      bairro: "Jardim São Paulo, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 600.000",
      quartos: 3,
      banheiros: 2,
      foto: "assets/images/imovel-14a.jpg",
      fotos: [
        "assets/images/imovel-14a.jpg",
        "assets/images/imovel-14b.jpg",
        "assets/images/imovel-14c.jpg",
        "assets/images/imovel-14d.jpg",
        "assets/images/imovel-14e.jpg",
        "assets/images/imovel-14f.jpg",
        "assets/images/imovel-14g.jpg",
        "assets/images/imovel-14h.jpg",
        "assets/images/imovel-14i.jpg",
        "assets/images/imovel-14j.jpg",
        "assets/images/imovel-14k.jpg",
        "assets/images/imovel-14l.jpg",
        "assets/images/imovel-14m.jpg",
        "assets/images/imovel-14n.jpg",
        "assets/images/imovel-14o.jpg",
        "assets/images/imovel-14p.jpg",
        "assets/images/imovel-14q.jpg",
        "assets/images/imovel-14r.jpg",
        "assets/images/imovel-14s.jpg",
        "assets/images/imovel-14t.jpg",
        "assets/images/imovel-14u.jpg",
        "assets/images/imovel-14v.jpg",
        "assets/images/imovel-14w.jpg",
        "assets/images/imovel-14x.jpg",
        "assets/images/imovel-14y.jpg",
        "assets/images/imovel-14z.jpg",
      ],
      descricao: `VENDO LINDA CASA NO JARDIM SÃO PAULO

Ótima localização

LAYOUT:

3 quartos (sendo 1 suíte com closet e todos com ar condicionado)
Sala de estar
Sala de TV
Sala de jantar
Escritório
Cozinha com móveis planejados
Despensa
Banheiro social
Área gourmet fechada de blindex, climatizada com ar condicionado contendo churrasqueira e forno de pizza
Cozinha externa com móveis planejados Lavabo
Lavanderia com móveis planejados
Garagem coberta para dois carros Energia fotovoltaica (placa solar)

R$ 600.000,00

Aceita financiamento
Analisa troca por imóvel de maior valor (Volta a diferença)

`,
    },
    {
      titulo: "Casa linda no Jardim Beija Flor",
      bairro: "Jardim Beija Flor, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 500.000",
      quartos: 3,
      banheiros: 2,
      area: "92 m²",
      foto: "assets/images/imovel-15a.jpg",
      fotos: [
        "assets/images/imovel-15a.jpg",
        "assets/images/imovel-15b.jpg",
        "assets/images/imovel-15c.jpg",
        "assets/images/imovel-15d.jpg",
        "assets/images/imovel-15e.jpg",
        "assets/images/imovel-15f.jpg",
        "assets/images/imovel-15g.jpg",
        "assets/images/imovel-15h.jpg",
        "assets/images/imovel-15i.jpg",
        "assets/images/imovel-15j.jpg",
        "assets/images/imovel-15k.jpg",
        "assets/images/imovel-15l.jpg",
        "assets/images/imovel-15m.jpg",
        "assets/images/imovel-15n.jpg",
        "assets/images/imovel-15o.jpg",
        "assets/images/imovel-15p.jpg",
        "assets/images/imovel-15q.jpg",
        "assets/images/imovel-15r.jpg",
        "assets/images/imovel-15s.jpg",
        "assets/images/imovel-15t.jpg",
        "assets/images/imovel-15u.jpg",
        "assets/images/imovel-15v.jpg",
        "assets/images/imovel-15w.jpg",
        "assets/images/imovel-15x.jpg",
        "assets/images/imovel-15y.jpg",
        "assets/images/imovel-15z.jpg",
      ],
      descricao: `VENDO LINDA CASA NO JARDIM BEIJA FLOR

OPORTUNIDADE:

BAIXOU DE $ 560 MIL PRA $ 500 MIL
Terreno com 180 M² (6 X 30)
Área construída 92 M²

ÓTIMO ACABAMENTO:

Piso porcelanato
Esquadrias em alumínio
Porta com fechadura de abertura com senha
Vidros temperado
Acabamento em gesso
Iluminação em LED
Portão Basculante

LAYOUT:

3 dormitórios (1 Sendo suíte)
Sala de estar e jantar com Pé direito alto
Cozinha integrada
Banheiro social
Lavanderia coberta
Garagem coberta pra 1 carro + 1 vaga descoberta
Quintal

VALOR: R$ 500.000,00

Aceita financiamento
Analisa proposta de lote como parte de pagamento

`,
    },
    {
      titulo: "Casa no Jardim Maringá",
      bairro: "Jardim Maringá, Itapeva/SP",
      tag: "Venda",
      preco: "R$ 480.000",
      quartos: 3,
      banheiros: 2,
      area: "140 m²",
      foto: "assets/images/imovel-16t.jpg",
      fotos: [
        "assets/images/imovel-16a.jpg",
        "assets/images/imovel-16b.jpg",
        "assets/images/imovel-16c.jpg",
        "assets/images/imovel-16d.jpg",
        "assets/images/imovel-16e.jpg",
        "assets/images/imovel-16f.jpg",
        "assets/images/imovel-16g.jpg",
        "assets/images/imovel-16h.jpg",
        "assets/images/imovel-16i.jpg",
        "assets/images/imovel-16j.jpg",
        "assets/images/imovel-16k.jpg",
        "assets/images/imovel-16l.jpg",
        "assets/images/imovel-16m.jpg",
        "assets/images/imovel-16n.jpg",
        "assets/images/imovel-16o.jpg",
        "assets/images/imovel-16p.jpg",
        "assets/images/imovel-16q.jpg",
        "assets/images/imovel-16r.jpg",
        "assets/images/imovel-16s.jpg",
        "assets/images/imovel-16t.jpg",
        "assets/images/imovel-16u.jpg",
        "assets/images/imovel-16v.jpg",
        "assets/images/imovel-16w.jpg",
        "assets/images/imovel-16x.jpg",
        "assets/images/imovel-16y.jpg",
        "assets/images/imovel-16z.jpg",
      ],
      descricao: `VENDO ÓTIMA CASA NO JARDIM MARINGÁ

Ótima localização
Divisa com jardim Califórnia
Terreno com 250 M²
Área construída 140 M²

LAYOUT:

03 quartos (01 Sendo suíte)
Sala
Cozinha
Banheiro social
Lavanderia coberta
Garagem coberta pra 1 carro + 1 vaga descoberta
Amplo quintal

VALOR: R$ 480.000,00

Aceita financiamento

`,
    },
  ];

  const TESTIMONIALS = [
    {
      texto:
        "A Graciele acompanhou cada visita com muita paciência e conhecimento técnico. Fechamos a compra em menos de um mês, sem surpresas.",
      nome: "Fernanda R.",
      cidade: "Itapeva - SP",
      estrelas: 5,
    },
    {
      texto:
        "Vendemos nosso terreno pelo valor justo graças à avaliação bem feita. Atendimento próximo do início ao fim do processo.",
      nome: "Marcelo e Ana P.",
      cidade: "Itapeva - SP",
      estrelas: 5,
    },
    {
      texto:
        "Procurava um apartamento para alugar e fui muito bem orientada sobre documentação e contrato. Recomendo de olhos fechados.",
      nome: "Juliana T.",
      cidade: "Região de Itapeva",
      estrelas: 5,
    },
  ];

  const FAQS = [
    {
      pergunta: "Como funciona a avaliação do meu imóvel?",
      resposta:
        "Faço uma visita técnica para analisar estrutura, acabamento e localização, além de comparar com imóveis semelhantes já negociados na região. Você recebe uma faixa de valor realista para vender com segurança.",
    },
    {
      pergunta: "Quais documentos preciso para vender meu imóvel?",
      resposta:
        "Em geral: matrícula atualizada, escritura, certidões negativas e documentos pessoais dos proprietários. Eu envio uma lista completa e ajudo a organizar tudo antes de anunciar.",
    },
    {
      pergunta: "Você atende só Itapeva ou também região?",
      resposta:
        "Atendo Itapeva e as cidades vizinhas. Se o seu caso for fora dessa região, me chame no WhatsApp que te oriento ou indico alguém de confiança.",
    },
    {
      pergunta: "Quanto tempo leva para vender um imóvel?",
      resposta:
        "Depende do tipo de imóvel, localização e preço, mas com anúncio bem feito e preço alinhado ao mercado, a média costuma ficar entre 60 e 120 dias.",
    },
    {
      pergunta: "Você ajuda com financiamento?",
      resposta:
        "Sim. Oriento sobre as opções disponíveis e o passo a passo junto ao banco, para que o financiamento não seja um obstáculo na hora de fechar negócio.",
    },
  ];

  function buildWhatsappUrl(message) {
    return (
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message)
    );
  }

  function renderPropertyCards(container, lista) {
    if (!container) return;

    const fragment = document.createDocumentFragment();

    lista.forEach(function (imovel) {
      const index = PROPERTIES.indexOf(imovel);

      const card = document.createElement("article");
      card.className = "property-card";
      card.dataset.tag = imovel.tag;

      const featuresParts = [];
      if (imovel.quartos > 0) {
        featuresParts.push(
          '<span><i class="fa-solid fa-bed" aria-hidden="true"></i>' +
            imovel.quartos +
            " quartos</span>",
        );
      }
      if (imovel.banheiros > 0) {
        featuresParts.push(
          '<span><i class="fa-solid fa-bath" aria-hidden="true"></i>' +
            imovel.banheiros +
            " banheiros</span>",
        );
      }
      featuresParts.push(
        '<span><i class="fa-solid fa-ruler-combined" aria-hidden="true"></i>' +
          imovel.area +
          "</span>",
      );

      const whatsappMsg = WHATSAPP_PROPERTY_MESSAGE.replace(
        "{titulo}",
        imovel.titulo,
      );

      card.innerHTML =
        '<div class="property-photo">' +
        '<img src="' +
        imovel.foto +
        '" alt="' +
        imovel.titulo +
        '" loading="lazy" onerror="this.closest(&quot;.property-photo&quot;).classList.add(&quot;is-placeholder&quot;)">' +
        '<div class="property-photo__placeholder"><i class="fa-solid fa-image" aria-hidden="true"></i><span>Foto do imóvel</span></div>' +
        '<span class="property-photo__tag">' +
        imovel.tag +
        "</span>" +
        "</div>" +
        '<div class="property-body">' +
        '<p class="property-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i>' +
        imovel.bairro +
        "</p>" +
        '<h3 class="property-title">' +
        imovel.titulo +
        "</h3>" +
        '<p class="property-price">' +
        imovel.preco +
        "</p>" +
        '<div class="property-features">' +
        featuresParts.join("") +
        "</div>" +
        '<div class="property-actions">' +
        '<a class="property-cta" target="_blank" rel="noopener" href="' +
        buildWhatsappUrl(whatsappMsg) +
        '">' +
        '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span>Tenho interesse</span>' +
        "</a>" +
        '<button type="button" class="property-cta property-cta--outline" data-property-index="' +
        index +
        '">' +
        '<i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>Descrição</span>' +
        "</button>" +
        "</div>" +
        "</div>";

      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  function renderProperties() {
    const grid = document.getElementById("propertiesGrid");
    if (!grid) return;
    renderPropertyCards(grid, PROPERTIES.slice(0, 6));
  }

  function renderAllProperties() {
    const grid = document.getElementById("allPropertiesGrid");
    if (!grid) return;
    renderPropertyCards(grid, PROPERTIES);
    setupPropertyFilter(grid);
  }

  function setupPropertyFilter(grid) {
    const filterBar = document.getElementById("propertyFilter");
    if (!filterBar) return;

    const buttons = Array.prototype.slice.call(
      filterBar.querySelectorAll("button"),
    );
    const cards = Array.prototype.slice.call(
      grid.querySelectorAll(".property-card"),
    );

    filterBar.addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;

      buttons.forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      const filtro = btn.dataset.filter;
      cards.forEach(function (card) {
        const mostrar = filtro === "Todos" || card.dataset.tag === filtro;
        card.hidden = !mostrar;
      });
    });
  }

  function renderTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dotsWrap = document.getElementById("testimonialDots");
    if (!track || !dotsWrap) return { slides: [], dots: [] };

    const trackFragment = document.createDocumentFragment();
    const dotsFragment = document.createDocumentFragment();

    TESTIMONIALS.forEach(function (item, index) {
      const slide = document.createElement("div");
      slide.className = "testimonial-slide" + (index === 0 ? " is-active" : "");
      slide.setAttribute("role", "tabpanel");

      const stars =
        '<i class="fa-solid fa-star" aria-hidden="true"></i>'.repeat(
          item.estrelas,
        );

      slide.innerHTML =
        '<div class="stars" aria-hidden="true">' +
        stars +
        "</div>" +
        "<blockquote>\u201C" +
        item.texto +
        "\u201D</blockquote>" +
        '<p class="author">' +
        item.nome +
        "<span>" +
        item.cidade +
        "</span></p>";

      trackFragment.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "is-dot" + (index === 0 ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Ver depoimento " + (index + 1));
      dot.dataset.index = String(index);

      dotsFragment.appendChild(dot);
    });

    track.appendChild(trackFragment);
    dotsWrap.appendChild(dotsFragment);

    return {
      slides: Array.prototype.slice.call(
        track.querySelectorAll(".testimonial-slide"),
      ),
      dots: Array.prototype.slice.call(dotsWrap.querySelectorAll("button")),
    };
  }

  function renderFaq() {
    const list = document.getElementById("faqList");
    if (!list) return;

    const fragment = document.createDocumentFragment();

    FAQS.forEach(function (item, index) {
      const wrapper = document.createElement("div");
      wrapper.className = "faq-item";

      const answerId = "faq-answer-" + index;

      wrapper.innerHTML =
        '<button class="faq-item__question" aria-expanded="false" aria-controls="' +
        answerId +
        '">' +
        "<span>" +
        item.pergunta +
        "</span>" +
        '<i class="fa-solid fa-plus" aria-hidden="true"></i>' +
        "</button>" +
        '<div class="faq-item__answer" id="' +
        answerId +
        '">' +
        '<div class="faq-item__answer-inner">' +
        item.resposta +
        "</div>" +
        "</div>";

      fragment.appendChild(wrapper);
    });

    list.appendChild(fragment);
  }

  function setupHeader() {
    const header = document.getElementById("header");
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("mobileMenu");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        const isOpen = !menu.hidden;
        menu.hidden = isOpen;
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-bars" aria-hidden="true"></i>'
          : '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
        document.body.style.overflow = isOpen ? "" : "hidden";
      });

      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.hidden = true;
          toggle.setAttribute("aria-expanded", "false");
          toggle.innerHTML =
            '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
          document.body.style.overflow = "";
        });
      });
    }
  }

  function setupCounters() {
    const items = document.querySelectorAll(".trust__number");
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function animateCount(el) {
      const target = parseInt(el.dataset.count, 10) || 0;
      if (prefersReducedMotion) {
        el.textContent = String(target);
        return;
      }
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupTestimonials(refs) {
    const slides = refs.slides;
    const dots = refs.dots;
    const prevBtn = document.getElementById("prevTestimonial");
    const nextBtn = document.getElementById("nextTestimonial");
    const track = document.getElementById("testimonialTrack");
    if (!slides.length) return;

    let current = 0;

    function goTo(index) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].classList.add("is-active");
    }

    if (prevBtn)
      prevBtn.addEventListener("click", function () {
        goTo(current - 1);
      });
    if (nextBtn)
      nextBtn.addEventListener("click", function () {
        goTo(current + 1);
      });
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        goTo(index);
      });
    });

    if (track) {
      let touchStartX = 0;
      track.addEventListener(
        "touchstart",
        function (e) {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );

      track.addEventListener(
        "touchend",
        function (e) {
          const touchEndX = e.changedTouches[0].screenX;
          const delta = touchEndX - touchStartX;
          if (Math.abs(delta) > 40) {
            goTo(delta > 0 ? current - 1 : current + 1);
          }
        },
        { passive: true },
      );
    }
  }

  function setupFaq() {
    const list = document.getElementById("faqList");
    if (!list) return;

    list.addEventListener("click", function (e) {
      const button = e.target.closest(".faq-item__question");
      if (!button) return;

      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-item__answer");
      const isOpen = item.classList.contains("is-open");

      list.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem
            .querySelector(".faq-item__question")
            .setAttribute("aria-expanded", "false");
          openItem.querySelector(".faq-item__answer").style.maxHeight = null;
        }
      });

      item.classList.toggle("is-open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
    });
  }

  function setupLeadForm() {
    const form = document.getElementById("leadForm");
    if (!form) return;

    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const interesse = document.getElementById("interesse");
    const mensagem = document.getElementById("mensagem");
    const note = document.getElementById("leadFormNote");

    function setError(fieldRow, errorEl, message) {
      fieldRow
        .closest(".form-row")
        .classList.toggle("has-error", Boolean(message));
      errorEl.textContent = message || "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      if (!nome.value.trim()) {
        setError(nome, document.getElementById("erroNome"), "Digite seu nome.");
        isValid = false;
      } else {
        setError(nome, document.getElementById("erroNome"), "");
      }

      const digits = telefone.value.replace(/\D/g, "");
      if (digits.length < 10) {
        setError(
          telefone,
          document.getElementById("erroTelefone"),
          "Digite um WhatsApp válido com DDD.",
        );
        isValid = false;
      } else {
        setError(telefone, document.getElementById("erroTelefone"), "");
      }

      if (!isValid) {
        note.textContent = "Confira os campos destacados antes de enviar.";
        return;
      }

      const partes = [
        "Olá, Graciele! Meu nome é " + nome.value.trim() + ".",
        interesse.value ? "Tenho interesse em: " + interesse.value + "." : "",
        mensagem.value.trim() ? "Mensagem: " + mensagem.value.trim() : "",
        "Meu WhatsApp para contato: " + telefone.value.trim(),
      ]
        .filter(Boolean)
        .join(" ");

      window.open(buildWhatsappUrl(partes), "_blank", "noopener");

      note.textContent =
        "Abrindo o WhatsApp em uma nova aba. Se não abrir, toque no botão flutuante no canto da tela.";
      form.reset();
    });
  }

  function setupBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      function () {
        const shouldShow = window.scrollY > 700;
        btn.hidden = false;
        btn.classList.toggle("is-visible", shouldShow);
        if (!shouldShow) {
          window.setTimeout(function () {
            if (!btn.classList.contains("is-visible")) btn.hidden = true;
          }, 250);
        }
      },
      { passive: true },
    );

    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    });
  }

  function setupPropertyModal() {
    const modal = document.getElementById("propertyModal");
    if (!modal) return;

    const gallery = document.getElementById("propertyModalGallery");
    const track = document.getElementById("propertyModalTrack");
    const dotsWrap = document.getElementById("propertyModalDots");
    const prevBtn = document.getElementById("propertyModalPrev");
    const nextBtn = document.getElementById("propertyModalNext");
    const closeBtn = document.getElementById("propertyModalClose");
    const overlay = modal.querySelector(".property-modal__overlay");

    const locationEl = document.getElementById("propertyModalLocation");
    const titleEl = document.getElementById("propertyModalTitle");
    const priceEl = document.getElementById("propertyModalPrice");
    const featuresEl = document.getElementById("propertyModalFeatures");
    const descriptionEl = document.getElementById("propertyModalDescription");
    const ctaEl = document.getElementById("propertyModalCta");

    let slideIndex = 0;

    function goToSlide(index) {
      const slideCount = track.children.length;
      if (!slideCount) return;
      slideIndex = (index + slideCount) % slideCount;
      track.style.transform = "translateX(-" + slideIndex * 100 + "%)";
      dotsWrap.querySelectorAll("button").forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === slideIndex);
      });
    }

    function buildGallery(fotos, titulo) {
      track.innerHTML = "";
      dotsWrap.innerHTML = "";
      slideIndex = 0;

      if (!fotos || !fotos.length) {
        track.innerHTML =
          '<div class="property-modal__slide is-placeholder"><div class="property-modal__slide-placeholder"><i class="fa-solid fa-image" aria-hidden="true"></i><span>Sem fotos</span></div></div>';
        gallery.setAttribute("data-count", "1");
        return;
      }

      fotos.forEach(function (src, i) {
        const slide = document.createElement("div");
        slide.className = "property-modal__slide";
        slide.innerHTML =
          '<img src="' +
          src +
          '" alt="' +
          titulo +
          " - foto " +
          (i + 1) +
          '" loading="lazy" onerror="this.closest(&quot;.property-modal__slide&quot;).classList.add(&quot;is-placeholder&quot;)">' +
          '<div class="property-modal__slide-placeholder"><i class="fa-solid fa-image" aria-hidden="true"></i><span>Foto indisponível</span></div>';
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Ver foto " + (i + 1));
        if (i === 0) dot.classList.add("is-active");
        dot.addEventListener("click", function () {
          goToSlide(i);
        });
        dotsWrap.appendChild(dot);
      });

      gallery.setAttribute("data-count", String(fotos.length));
      track.style.transform = "translateX(0%)";
    }

    function openModal(imovel) {
      const fotos =
        imovel.fotos && imovel.fotos.length ? imovel.fotos : [imovel.foto];
      buildGallery(fotos, imovel.titulo);

      locationEl.innerHTML =
        '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>' +
        imovel.bairro;
      titleEl.textContent = imovel.titulo;
      priceEl.textContent = imovel.preco;

      const featuresParts = [];
      if (imovel.quartos > 0)
        featuresParts.push(
          '<span><i class="fa-solid fa-bed" aria-hidden="true"></i>' +
            imovel.quartos +
            " quartos</span>",
        );
      if (imovel.banheiros > 0)
        featuresParts.push(
          '<span><i class="fa-solid fa-bath" aria-hidden="true"></i>' +
            imovel.banheiros +
            " banheiros</span>",
        );
      featuresParts.push(
        '<span><i class="fa-solid fa-ruler-combined" aria-hidden="true"></i>' +
          imovel.area +
          "</span>",
      );
      featuresEl.innerHTML = featuresParts.join("");

      descriptionEl.textContent = imovel.descricao || "";

      const whatsappMsg = WHATSAPP_PROPERTY_MESSAGE.replace(
        "{titulo}",
        imovel.titulo,
      );
      ctaEl.href = buildWhatsappUrl(whatsappMsg);

      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }

    function closeModal() {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-property-index]");
      if (!btn) return;
      const imovel = PROPERTIES[Number(btn.dataset.propertyIndex)];
      if (imovel) openModal(imovel);
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
    if (prevBtn)
      prevBtn.addEventListener("click", function () {
        goToSlide(slideIndex - 1);
      });
    if (nextBtn)
      nextBtn.addEventListener("click", function () {
        goToSlide(slideIndex + 1);
      });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    let touchStartX = 0;
    track.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      function (e) {
        const touchEndX = e.changedTouches[0].screenX;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) > 40) {
          goToSlide(delta > 0 ? slideIndex - 1 : slideIndex + 1);
        }
      },
      { passive: true },
    );
  }

  function setupFooterYear() {
    const el = document.getElementById("anoAtual");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function syncWhatsappLinks() {
    document
      .querySelectorAll('a[href^="https://wa.me/"]')
      .forEach(function (link) {
        const url = new URL(link.href);
        url.pathname = "/" + WHATSAPP_NUMBER;
        link.href = url.toString();
      });
  }

  function setupCookieConsent() {
    let choice = null;
    try {
      choice = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch (e) {
      choice = null;
    }

    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.id = "cookieBanner";
    banner.hidden = true;
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML =
      '<div class="cookie-banner__inner">' +
      '<p class="cookie-banner__text">' +
      "Usamos cookies essenciais para o site funcionar e, somente com o seu consentimento, cookies para entender melhor a navegação. Saiba mais na nossa " +
      '<a href="' +
      COOKIE_POLICY_URL +
      '">Política de Privacidade</a>.' +
      "</p>" +
      '<div class="cookie-banner__actions">' +
      '<button type="button" class="btn btn--outline btn--sm" id="cookieRejectBtn">Só os essenciais</button>' +
      '<button type="button" class="btn btn--primary btn--sm" id="cookieAcceptBtn">Aceitar todos</button>' +
      "</div>" +
      "</div>";
    document.body.appendChild(banner);

    function showBanner() {
      banner.hidden = false;
      document.body.classList.add("has-cookie-banner");
      window.requestAnimationFrame(function () {
        banner.classList.add("is-visible");
      });
    }

    function hideBanner() {
      banner.classList.remove("is-visible");
      document.body.classList.remove("has-cookie-banner");
      window.setTimeout(function () {
        banner.hidden = true;
      }, 300);
    }

    function saveChoice(value) {
      try {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
      } catch (e) {}
      hideBanner();
    }

    if (!choice) showBanner();

    banner
      .querySelector("#cookieAcceptBtn")
      .addEventListener("click", function () {
        saveChoice("aceitos");
      });
    banner
      .querySelector("#cookieRejectBtn")
      .addEventListener("click", function () {
        saveChoice("essenciais");
      });

    document.querySelectorAll("[data-cookie-settings]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        showBanner();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProperties();
    renderAllProperties();
    const testimonialRefs = renderTestimonials();
    renderFaq();

    setupHeader();
    setupCounters();
    setupTestimonials(testimonialRefs);
    setupFaq();
    setupPropertyModal();
    setupLeadForm();
    setupBackToTop();
    setupFooterYear();
    syncWhatsappLinks();
    setupCookieConsent();
  });
})();
