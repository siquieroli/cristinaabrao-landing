<div align="center">

<img src="assets/images/logo.svg" alt="Dra. Cristina Abrão" width="220"/>

# Dra. Cristina Abrão — Site Profissional

**Ortodontia · Harmonização Orofacial · Brasília, DF**

[![Deploy](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://cristinaabrao-landing.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Ver Site ao Vivo](https://cristinaabrao-landing.vercel.app) · [Agendar Consulta](https://cristinaabrao-landing.vercel.app/#contato)

</div>

---

## Sobre o Projeto

Landing page profissional da **Dra. Cristina S. Abrão**, Mestre em Odontologia (UnB), Especialista em Ortodontia (UNESP) e Harmonização Orofacial (FACSETE), com mais de 30 anos de atuação clínica em Brasília, DF.

O site foi projetado para transmitir autoridade, sofisticação e acolhimento — combinando um design moderno de glassmorphism com animações suaves, acessibilidade e desempenho.

---

## Design & Funcionalidades

### Interface

- **Glassmorphism** — painéis translúcidos com blur e bordas sutis
- **Hero animado** — blobs flutuantes com gradientes em camadas e parallax suave
- **Grain noise overlay** — textura fina para profundidade visual
- **Tipografia Inter** — leitura limpa e hierarquia clara
- **Paleta cromática** — tons índigo / violeta / teal com gradientes
- **Totalmente responsivo** — mobile-first, menu hambúrguer animado

### Seções

| Seção | Conteúdo |
|---|---|
| **Hero** | Foto, credenciais, badge de especialidade e CTA de agendamento |
| **Stats Bar** | 30+ anos de experiência · 3 especializações · MSc UnB |
| **Especialidades** | Ortodontia · Harmonização Orofacial · Implantodontia |
| **Sobre** | Trajetória, áreas de interesse e afiliações profissionais |
| **Formação** | Timeline acadêmica — UFU, UNESP, UnB, FACSETE |
| **Experiência** | Timeline profissional desde 1999 |
| **Pesquisa** | Dissertação de Mestrado (UnB, 2017) |
| **Contato** | Formulário com captcha, mapa integrado e links diretos |

### Integrações

- **EmailJS** — envio de mensagens do formulário de contato diretamente por e-mail
- **hCaptcha** — proteção contra bots no formulário
- **Google Maps embed** — mapa interativo com localização do consultório
- **WhatsApp flutuante** — botão fixo para contato rápido via WhatsApp
- **Iconify** — biblioteca de ícones vetoriais renderizados via web component

### Performance & Acessibilidade

- Zero dependências de framework — HTML, CSS e JS puros
- Animações com **Intersection Observer API** (sem layout thrashing)
- Atributos `aria-label`, `role` e semântica HTML5 completa
- Imagens com `loading="lazy"` e `alt` descritivo
- Fonte carregada com `font-display: swap`

---

## Estrutura do Projeto

```
cristinaabrao-landing/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos (661 linhas) — design system completo
├── js/
│   └── main.js             # Lógica — menu, animações, formulário, contato
└── assets/
    └── images/
        ├── logo.svg         # Logotipo vetorial da Dra. Cristina
        ├── cristina.jpg     # Foto principal (hero)
        └── about.jpg        # Foto da seção Sobre
```

---

## Rodando Localmente

Não há build step — abra direto no navegador:

```bash
git clone https://github.com/siquieroli/cristinaabrao-landing.git
cd cristinaabrao-landing

# Com Python
python3 -m http.server 3000

# Com Node.js / npx
npx serve .
```

Acesse `http://localhost:3000`.

---

## Deploy

O site é hospedado na **Vercel** com deploy contínuo a partir da branch `main`.

Cada push dispara um novo deploy automaticamente.

```bash
# Deploy de produção via Vercel CLI
vercel --prod
```

---

## Sobre a Dra. Cristina

- **Graduação** em Odontologia — Universidade Federal de Uberlândia (UFU), 1993
- **Especialização** em Ortodontia e Ortopedia Facial — UNESP Araçatuba, 1999
- **Mestrado** em Odontologia — Universidade de Brasília (UnB), 2017 · Bolsista CAPES
- **Especialização** em Harmonização Orofacial — FACSETE, 2023
- Membro do **CRO-DF** desde 1993
- **Instrutora clínica** de pós-graduação por mais de 14 anos (IOA, Uningá, Lago Sul)
- Consultório particular no **Setor Sudoeste, Brasília, DF** desde 2004

---

## Contato

| Canal | Informação |
|---|---|
| WhatsApp | [(61) 98173-3211](https://wa.me/5561981733211) |
| E-mail | [cristinaabrao@hotmail.com](mailto:cristinaabrao@hotmail.com) |
| Endereço | Setor Sudoeste Lote 3, Centro Clínico, Sala 234 — Brasília, DF |

---

<div align="center">

Desenvolvido por **Eduardo Siquieroli**

</div>
