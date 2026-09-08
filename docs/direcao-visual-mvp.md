# Direção visual — MVP Portfólio Orlando Namba

> Autor: `pf-ux-ui` · 2026-08-10  
> Fontes: `docs/contexto-projeto.md`, `docs/mvp-produto.md`, `docs/stories-mvp.md`  
> Status: handoff Frontend — microcopy com **[validar]** onde Orlando deve confirmar

---

## 1. Conceito / mood

**“Sinal preciso”** — portfólio de quem entrega produto de ponta a ponta: composição calma, tipografia geométrica com presença, atmosfera de grade técnica suave (não flat, não neon). A marca **Orlando Namba** é o sinal dominante; o teal funciona como “cursor” de ação (CTAs e links), não como tema roxo de SaaS. Sensação: oficina digital limpa — confiança de engenharia sem frieza de terminal.

---

## 2. Paleta (light + dark)

### Light (default)

```css
:root,
[data-theme="light"] {
  --bg: #F0F3F5;
  --bg-elevated: #FFFFFF;
  --bg-muted: #E4E9ED;
  --ink: #0B1220;
  --ink-muted: #3D4A5C;
  --ink-subtle: #6B7787;
  --border: #C9D2DB;
  --border-strong: #9AA8B5;
  --signal: #0F766E;
  --signal-hover: #0D9488;
  --signal-soft: #CCFBF1;
  --atmosphere-a: #D7E3EA;
  --atmosphere-b: #E8F0F2;
  --atmosphere-accent: #99F6E4;
  --focus-ring: #0D9488;
  --danger: #B42318;
}
```

### Dark

```css
[data-theme="dark"] {
  --bg: #070B12;
  --bg-elevated: #121A24;
  --bg-muted: #1A2430;
  --ink: #E8EEF4;
  --ink-muted: #A8B4C2;
  --ink-subtle: #7A8796;
  --border: #2A3644;
  --border-strong: #3D4D5F;
  --signal: #2DD4BF;
  --signal-hover: #5EEAD4;
  --signal-soft: #134E4A;
  --atmosphere-a: #0C1A22;
  --atmosphere-b: #0A121C;
  --atmosphere-accent: #115E59;
  --focus-ring: #2DD4BF;
  --danger: #F97066;
}
```

**Não usar** roxo/índigo como cor de marca; teal é o único acento cromático forte.

---

## 3. Tipografia

| Papel | Família | Pesos | Uso |
|-------|---------|-------|-----|
| **Display / brand** | Space Grotesk | 700 | “Orlando Namba” (H1 hero), títulos de seção, marca no header |
| **Headline / UI** | IBM Plex Sans | 500, 600 | Headline do hero (abaixo da marca) |
| **Body / UI** | IBM Plex Sans | 400, 500, 600 | Apoio, Sobre, Skills, Contato, labels |

Escala: `--type-brand` `clamp(2.25rem, 4.5vw, 3.5rem)`; `--type-headline` `clamp(1.35rem, 2.6vw, 1.75rem)`; body ~1.0625–1.125rem. Marca hero-level, sem tipografia “grandona”.

---

## 4. Wireframes textuais

Âncoras: `#sobre` `#projetos` `#skills` `#contato`. Nav discreta. Cards **somente** em Projetos.

### Hero

```
[nav: Sobre · Projetos · Skills · Contato]   [tema]
atmosfera: grade suave + gradiente ink→teal fraco

ORLANDO NAMBA
Desenvolvedor full-stack. Aberto a vagas e freelas.
Sites e apps de ponta a ponta — da ideia ao ar.
[ Falar comigo ]  [ Ver projetos ]
(sem stats, chips, cards, badges)
```

### Sobre / Projetos / Skills / Contato

- **Sobre:** full-stack + ADS + vaga/freela
- **Projetos:** 2× preview 16:10 + nome + blurb + Ver projeto
- **Skills:** lista tipográfica (não tag cloud)
- **Contato:** WhatsApp · E-mail · LinkedIn (primários); GitHub (secundário) — sem Instagram no site

---

## 5. Microcopy provisório

### Meta

| Campo | Texto |
|-------|--------|
| Title | Orlando Namba — Desenvolvedor full-stack |
| Description | Portfólio de Orlando Namba: desenvolvedor full-stack aberto a vagas e freelas. Projetos no ar e formas de contato. **[validar]** |

### Hero

| Elemento | Texto |
|----------|--------|
| Brand | Orlando Namba |
| Headline | Desenvolvedor full-stack. Aberto a vagas e freelas. |
| Apoio | Sites, sistemas e aplicativos de ponta a ponta — da ideia ao ar. |
| CTA primário | Falar comigo → `#contato` |
| CTA secundário | Ver projetos → `#projetos` |

### Sobre

Desenvolvo soluções digitais do zero à entrega final. Unindo visão estratégica de produto, design de interfaces e engenharia de software robusta, acompanho seu projeto desde o planejamento inicial até o código em produção.

### Projetos

| Case | Blurb | URL |
|------|-------|-----|
| Disparo Inteligente | Produto web para disparos e operação — stack Node, Express e Angular. **[validar]** | https://disparointeligente.app.br |
| Igreja do Nazareno São Bernardo Central | Site institucional: presença online clara, com foco em mensagem e comunidade. **[validar]** | https://nazarenosaobernardocentral.netlify.app/ |

Apoio da seção: Dois produtos no ar. Abra e veja o resultado.

### Skills

Linguagens e plataformas: ADVPL · TypeScript · Java · Python · JavaScript · Node  
Web: Angular · HTML · CSS · Express

### Contato

Apoio: Prefere WhatsApp para freela; LinkedIn ou e-mail também funcionam. **[validar]**  
WhatsApp `https://wa.me/5511974213357` · e-mail `dev.onamba@gmail.com` · LinkedIn / GitHub. Instagram fora do site (pedido Orlando).

---

## 6. Toggle + previews

| Item | Spec |
|------|------|
| Default | Light |
| Persistência | `localStorage` chave **`portfolio-theme`** = `light` \| `dark` |
| 1ª visita | Light (produto) |
| Preview ratio | **16 / 10** |
| Moldura | Borda `--border`, raio 6–10px, sem sombra multicamada |
| Image | `object-fit: cover`; `object-position: top`; lazy |
| Alt | “Prévia do site [nome]” |

---

## 7. Motion (2–3)

1. Entrada do hero — stagger opacity + translateY 8–12px (~400–600ms); `prefers-reduced-motion`
2. Atmosfera — drift lento do gradiente/grade no fundo
3. Projetos no scroll — reveal + hover de borda (~150ms)

Não: partículas, glow pulsante, typewriter, bounce.

---

## 8. Do’s / Don’ts — Frontend

**Do’s:** brand hero-level; 1 composição no 1º viewport; atmosfera; Space Grotesk + IBM Plex; tokens light/dark; cards só em Projetos; demos ao vivo; 2–3 motions; reduced-motion.

**Don’ts:** Inter/Roboto/Arial/system; purple/indigo AI; cream+terracotta; broadsheet; stats/chips/cards no hero; glow/pills/emojis; link de repo; inventar skills; default dark.

---

## Changelog

| Data | Autor | Nota |
|------|-------|------|
| 2026-08-10 | pf-ux-ui | Conceito Sinal preciso; paleta teal; Syne + IBM Plex |
| 2026-08-10 | Prompt Engineer | Persistência; chave tema alinhada a `portfolio-theme`; Node/Express nas skills |
| 2026-08-10 | pf-frontend | Display Syne → Space Grotesk 700; brand `clamp(2.25–3.5rem)`; headline IBM Plex |
