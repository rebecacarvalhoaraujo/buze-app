# BuZe App - Proposta de Design

## Três Abordagens Estilísticas

### 1. **Playful Empowerment** (Diversão com Propósito)
Uma abordagem vibrante e energética que torna o aprendizado sobre bullying divertido e empoderador. Design colorido, ilustrações amigáveis, gamificação forte com badges e progresso visual.  
**Probabilidade:** 0.08

### 2. **Serious Awareness** (Educação Clara e Direta)
Design minimalista, tons mais sérios (azul e cinza), foco em dados e informações. Menos jogo, mais conscientização. Apropriado para ambientes escolares formais.  
**Probabilidade:** 0.04

### 3. **Hopeful Connection** (Esperança e Comunidade)
Design caloroso com tons naturais (verde, laranja, amarelo), ilustrações inclusivas, foco em histórias de superação e apoio comunitário. Balanceia diversão com mensagem importante.  
**Probabilidade:** 0.07

---

## Design Escolhido: **Playful Empowerment**

### Design Movement
**Neomorphism + Gamification Design** — uma evolução do design flat que combina elementos 3D suaves com a simplicidade moderna. Inspirado em interfaces de jogos educativos contemporâneos (Duolingo, Kahoot) que tornam aprendizado engajante.

### Core Principles

1. **Diversão com Propósito:** O jogo é o veículo principal de aprendizado. Cada interação deve ser satisfatória e recompensadora.
2. **Inclusão Visual:** Ilustrações que representam diversidade (diferentes etnias, gêneros, corpos). Alana é uma personagem relatable.
3. **Progresso Visível:** Sistema de pontos, badges e níveis que motivam o jogador a continuar.
4. **Mensagem Clara:** Sem suavizar — bullying é crime, e há consequências legais reais.

### Color Philosophy

**Paleta Principal:**
- **Primária:** Laranja vibrante (`#FF6B35`) — energia, ação, esperança
- **Secundária:** Azul amigável (`#4A90E2`) — confiança, segurança
- **Destaque:** Verde esperança (`#2ECC71`) — sucesso, vitória
- **Neutra:** Branco e cinza claro — clareza, acessibilidade
- **Alerta:** Vermelho suave (`#E74C3C`) — atenção sem agressividade

**Intenção Emocional:** As cores transmitem que este é um espaço seguro, divertido e empoderador. Laranja e verde juntos criam sensação de movimento e progresso.

### Layout Paradigm

**Estrutura em Camadas Fluidas:**
- **Hero Section:** Grande ilustração de Alana com CTA principal ("Começar o Jogo")
- **Game Board:** Cards de cartas em grid responsivo (2-3 colunas), com animações ao passar do mouse
- **Stats Sidebar:** Barra lateral com pontuação, badges conquistadas, progresso de nível
- **Educational Hub:** Seção separada com dados, dicas e histórias de superação
- **Footer Comunitário:** Links para recursos de ajuda, contato com criadora

**Não usar:** Layout centralizado genérico. Preferir assimetria com sidebar flutuante.

### Signature Elements

1. **Lightbulb Icon com Alana:** Logo marca que representa "iluminação" (ideia) + personagem. Símbolo de esperança.
2. **Card Flip Animation:** Cartas do jogo com efeito 3D flip ao clicar — satisfação tátil digital.
3. **Confetti Celebration:** Ao completar desafios, confete cai com sons suaves — recompensa visual.

### Interaction Philosophy

- **Cliques Responsivos:** Feedback imediato em cada ação (som suave, mudança de cor, animação)
- **Hover States Visuais:** Botões crescem levemente, cards ganham sombra
- **Transições Suaves:** Nada é instantâneo — tudo tem movimento gracioso (200-300ms)
- **Acessibilidade:** Todas as animações respeitam `prefers-reduced-motion`

### Animation Guidelines

- **Card Reveal:** Rotação 3D suave (400ms ease-out) ao clicar em uma carta
- **Challenge Completion:** Escala 1.05 + confete (300ms) quando desafio é concluído
- **Badge Unlock:** Pop-in com bounce (500ms cubic-bezier) quando badge é conquistada
- **Page Transitions:** Fade + slide suave entre seções (250ms)
- **Loading State:** Spinner com cores animadas (laranja → verde)

### Typography System

**Fonts:**
- **Display/Headlines:** `Fredoka One` (Google Fonts) — arredondada, amigável, memorável
- **Body/UI:** `Poppins` (Google Fonts) — moderna, legível, com bom spacing

**Hierarquia:**
- **H1:** Fredoka One, 48px, laranja vibrante (hero title)
- **H2:** Fredoka One, 32px, azul (section titles)
- **H3:** Poppins 600, 20px, cinza escuro (card titles)
- **Body:** Poppins 400, 16px, cinza médio (descrições)
- **Small:** Poppins 400, 14px, cinza claro (metadata)

### Brand Essence

**Posicionamento:** BuZe é um jogo educativo que transforma bullying em aprendizado através de desafios divertidos, mostrando que até quem fica de fora tem poder de mudar a história.

**3 Personality Adjectives:**
1. **Empoderador** — Dá voz e agência ao jogador
2. **Inclusivo** — Representa diversidade e acolhe todos
3. **Esperançoso** — Mostra que é possível mudar, que há saída

### Brand Voice

**Tons de Voz:**
- **Headlines:** Diretas, motivadoras, sem jargão ("Vamos proteger Alana!", "Você é o herói desta história")
- **CTAs:** Ação clara e positiva ("Começar Desafio", "Descartar Carta", "Próximo Nível")
- **Microcopy:** Encorajador, nunca condescendente ("Ótimo! Você acertou.", "Tente novamente — você consegue!")

**Exemplos:**
- ❌ "Bem-vindo ao nosso site"
- ✅ "Você está pronto para proteger Alana?"
- ❌ "Clique aqui para começar"
- ✅ "Vamos começar o jogo!"

### Wordmark & Logo

**Conceito:** Uma lâmpada estilizada com a silhueta de uma pessoa dentro, em laranja vibrante. A lâmpada representa "iluminação" (ideia, conscientização). Sem texto — apenas o símbolo.

**Uso:**
- Header (favicon + logo)
- Badges de conquista
- Marca d'água suave em backgrounds

### Signature Brand Color

**Laranja Vibrante (`#FF6B35`)** — Cor que é imediatamente reconhecível como BuZe. Usada em:
- Botões principais
- Highlights de texto
- Borders de cards importantes
- Animações de sucesso

---

## Estrutura do App

### Páginas Principais

1. **Home/Landing:** Apresentação do jogo, CTA principal, estatísticas sobre bullying
2. **Game Board:** Interface principal do jogo com cartas
3. **Challenge Detail:** Exibe desafio completo e permite resposta
4. **Stats/Profile:** Pontuação, badges, histórico
5. **Educational Hub:** Dados, dicas, histórias de superação
6. **About:** Sobre BuZe, criadora, contato

### Funcionalidades MVP

- ✅ Jogo interativo com 20 cartas
- ✅ Sistema de pontos e badges
- ✅ Modo solo (jogar sozinho)
- ✅ Seção educativa com dados sobre bullying
- ✅ Responsivo (mobile-first)
- ✅ Sem backend necessário (GitHub Pages)

### Funcionalidades Futuras

- 🔄 Modo multiplayer (local ou online)
- 🔄 Histórias expandidas de Alana
- 🔄 Quiz sobre leis de bullying
- 🔄 Comunidade de jogadores
- 🔄 Integração com escolas

---

## Tecnologia

- **Frontend:** React 19 + Tailwind CSS 4 + shadcn/ui
- **Hosting:** GitHub Pages (estático)
- **Build:** Vite
- **Sem Backend:** Dados armazenados localmente (localStorage)

