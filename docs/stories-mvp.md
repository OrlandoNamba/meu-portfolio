# Stories MVP — Portfólio Orlando Namba

> Fonte: `pf-ba` (2026-08-10). Baseado em `docs/mvp-produto.md` e `docs/contexto-projeto.md`.  
> Objetivo: requisitos implementáveis e verificáveis por QA **antes** de código de produção.

---

## Personas (referência)

| ID | Persona | Job-to-be-done |
|----|---------|----------------|
| P1a | Recrutador / tech lead | Entender stack, maturidade (demos) e se vale contato em &lt;30s |
| P1b | Cliente freela | Ver se entrega site/app útil e como contratar (WhatsApp) |
| P2 | Peer técnico | Credibilidade — não otimizar MVP para este público |

---

## Epics

| Epic | Nome | Seções |
|------|------|--------|
| E1 | Landing e navegação | Estrutura single-page, âncoras, idioma PT |
| E2 | Hero e identidade | Hero |
| E3 | Sobre | Sobre |
| E4 | Projetos com preview | Projetos (2 cases) |
| E5 | Skills | Skills / stack |
| E6 | Contato por links | Contato |
| E7 | Tema light/dark | Toggle + persistência |
| E8 | A11y e responsivo | Transversal |

---

## E1 — Landing e navegação

### Requisito E1-S1 — Página única em português

- **Story:** Como visitante (P1a/P1b), quero uma landing única em português, para entender quem é Orlando sem mudar de idioma ou navegar várias páginas.
- **Critérios de aceite:**
  - Given o visitante abre a URL do site, When a página carrega, Then existe uma única rota/página principal com as seções Hero, Sobre, Projetos, Skills e Contato nesta ordem lógica (Hero primeiro; Contato por último ou acessível via âncora).
  - Given qualquer seção acima, When o conteúdo é inspecionado, Then todo o copy visível está em português (sem strings de UI em inglês, exceto nomes próprios de tecnologias: TypeScript, Angular, etc.).
  - Given o visitante, When usa o menu/âncoras (se existirem), Then cada item leva à seção correspondente sem abrir nova página.
- **Regras / conteúdo:** Idioma = somente PT (decisão PO). Sem i18n.
- **Edge cases:** Deep link `#projetos` (ou equivalente) deve posicionar a seção Projetos na viewport (ou o mais próximo possível no mobile).
- **Fora de escopo:** Blog, CMS, rotas por projeto, domínio próprio.
- **Dependências:** Arquitetura de hosting (Arquiteto/DevOps); design de nav (UX/UI).

### Requisito E1-S2 — Tempo de compreensão (go-live PO)

- **Story:** Como recrutador, quero identificar nome, papel e abertura a vagas/freelas em poucos segundos, para decidir se continuo lendo.
- **Critérios de aceite (checklist):**
  - [ ] No primeiro viewport (desktop e mobile), o nome **Orlando Namba** é legível sem scroll.
  - [ ] No primeiro viewport, o papel **full-stack** (ou equivalente aprovado) é legível.
  - [ ] No primeiro viewport, fica explícito que está aberto a **vagas** e **freelas** (headline ou CTA).
  - [ ] QA cronometra ≤10s até localizar nome + papel + abertura (critério de sucesso do PO).
- **Regras / conteúdo:** Ver E2 (Hero).
- **Edge cases:** Zoom 200% / viewport estreito — nome e papel ainda legíveis sem overflow destrutivo.
- **Fora de escopo:** Métricas analytics avançadas.
- **Dependências:** Copy Hero validada por Orlando; direção visual UX/UI.

---

## E2 — Hero e identidade

### Requisito E2-S1 — Hero com marca e CTAs

- **Story:** Como visitante, quero ver a marca Orlando Namba em destaque com CTAs claros para Contato e Projetos, para agir sem caçar links.
- **Critérios de aceite:**
  - Given a home carregada, When olho o primeiro viewport, Then o nome **Orlando Namba** é o sinal de marca dominante (não apenas texto de nav).
  - Given o Hero, When leio a headline, Then comunica desenvolvedor **full-stack** e abertura a **vagas** e/ou **freelas**.
  - Given o Hero, When existem CTAs, Then há pelo menos: (1) ação para Contato e (2) ação para Projetos (âncora ou scroll).
  - Given clique em CTA Contato, When a navegação ocorre, Then a seção Contato fica visível.
  - Given clique em CTA Projetos, When a navegação ocorre, Then a seção Projetos fica visível.
- **Regras / conteúdo (copy mínima — placeholders):**

  | Campo | Conteúdo MVP | Status |
  |-------|--------------|--------|
  | Marca | Orlando Namba | ✅ fixo |
  | Headline | Desenvolvedor full-stack. Aberto a vagas e freelas. | ⏳ validar |
  | Apoio (1 frase) | Sites e apps de ponta a ponta — da ideia ao ar. | ⏳ validar |
  | CTA primário | Falar comigo → `#contato` | ⏳ validar label |
  | CTA secundário | Ver projetos → `#projetos` | ⏳ validar label |

- **Edge cases:** Sem imagem de hero — layout ainda cumpre marca + headline + 1 frase + CTAs (não bloquear MVP por asset).
- **Fora de escopo:** Stats, badges flutuantes, carrossel, vídeo.
- **Dependências:** UX/UI (composição, tipografia, atmosfera); Frontend.

---

## E3 — Sobre

### Requisito E3-S1 — Sobre verdadeiro

- **Story:** Como recrutador ou cliente, quero um resumo curto e verdadeiro sobre Orlando, para calibrar seniority e contexto sem inventar narrativa.
- **Critérios de aceite:**
  - Given a seção Sobre, When leio o texto, Then menciona que está **cursando Análise e Desenvolvimento de Sistemas**.
  - Given a seção Sobre, When leio o texto, Then o posicionamento é coerente com **full-stack** e abertura a vagas/freelas (sem cargos ou empresas inventadas).
  - Given a seção Sobre, When verifico fatos, Then não há skills/projetos/cargos que não existam em `docs/contexto-projeto.md` ou validados por Orlando.
- **Regras / conteúdo:**

  | Campo | Conteúdo | Status |
  |-------|----------|--------|
  | Título da seção | Sobre | ⏳ validar label |
  | Corpo (2–4 frases) | Ver `docs/direcao-visual-mvp.md` (microcopy) | ⏳ |
  | Fatos obrigatórios | ADS em curso; não inventar empresa/cargo | ✅ regra |

- **Edge cases:** Texto longo demais no mobile — ainda legível; sem truncar mid-word de forma quebrada.
- **Fora de escopo:** Timeline de carreira, depoimentos, foto obrigatória.
- **Dependências:** Copy final Orlando; UX/UI.

---

## E4 — Projetos com preview

### Requisito E4-S1 — Dois cases com URL ao vivo (sem GitHub)

- **Story:** Como recrutador ou cliente, quero ver dois projetos reais com link para a demo no ar, para avaliar o trabalho sem precisar do repositório.
- **Critérios de aceite:**
  - Given a seção Projetos, When conto os cases, Then há **exatamente 2** projetos listados no MVP.
  - Given cada case, When inspeciono links, Then existe link para a **URL ao vivo** e **não** existe link para repositório GitHub do projeto.
  - Given o case “Disparo Inteligente”, When abro o link, Then a URL é `https://disparointeligente.app.br` (abre em nova aba com `rel` seguro: `noopener noreferrer`).
  - Given o case “Igreja do Nazareno São Bernardo Central”, When abro o link, Then a URL é `https://nazarenosaobernardocentral.netlify.app/` (mesma regra de nova aba).
  - Given qualquer link de projeto, When QA verifica, Then o destino responde (sem 404 óbvio / link morto no momento do go-live).
- **Regras / conteúdo por case:**

  | Campo | Disparo Inteligente | Igreja do Nazareno SBC |
  |-------|---------------------|-------------------------|
  | Nome | Disparo Inteligente | Igreja do Nazareno São Bernardo Central |
  | URL | https://disparointeligente.app.br | https://nazarenosaobernardocentral.netlify.app/ |
  | Descrição curta | Ver direção visual (provisória) | Ver direção visual (provisória) |
  | Link GitHub | **Proibido no MVP** | **Proibido no MVP** |
  | Preview | Obrigatório (ver E4-S2) | Obrigatório (ver E4-S2) |

- **Edge cases:** Site do case offline temporariamente no go-live — documentar bloqueio; não substituir por link de repo.
- **Fora de escopo:** Cases sem URL pública; B2B Salões; galeria com &gt;2; filtros; modal complexo.
- **Dependências:** Copy/descrição Orlando; captura de preview; Frontend.

### Requisito E4-S2 — Preview visual capturado

- **Story:** Como visitante, quero um preview visual da home/tela principal de cada projeto, para reconhecer o produto antes de clicar.
- **Critérios de aceite:**
  - Given cada case, When a seção Projetos renderiza, Then há uma imagem de preview (screenshot) da home/tela principal do produto no ar.
  - Given a imagem, When o arquivo falha (404/broken), Then há **fallback** visível — layout não “quebra” nem some o case.
  - Given a imagem, When leitores de tela leem, Then o `alt` descreve o preview de forma útil.
  - Given clique no preview **ou** no CTA “Ver demo”, When o usuário age, Then abre a URL ao vivo (mesmo destino).
- **Requisitos de preview (formato):**

  | Item | Requisito |
  |------|-----------|
  | Fonte | Captura da URL ao vivo (home/tela principal) |
  | Formato | WebP preferencial; `public/previews/` |
  | Aspect ratio | **16:10** (ambos) |
  | Nomeação | `disparo-inteligente.webp`, `nazareno-sbc.webp` |
  | Peso | Orientação &lt;300KB; QA flag se &gt;500KB |
  | Lazy load | Permitido |

- **Fora de escopo:** Screenshot automatizado em CI no MVP; vídeo; iframe do site ao vivo.
- **Dependências:** Frontend captura assets; UX define moldura.

---

## E5 — Skills

### Requisito E5-S1 — Lista de skills reais

- **Story:** Como recrutador, quero ver as tecnologias que Orlando realmente usa, para filtrar fit sem hype.
- **Critérios de aceite:**
  - Given a seção Skills, When listo os itens, Then aparecem: **ADVPL, TypeScript, Java, Python, JavaScript, Angular, HTML, CSS, Node, Express**.
  - Given a seção, When verifico, Then **não** há barras de % inventados.
- **Proibido:** Skills inventadas.
- **Dependências:** UX (hierarquia visual).

---

## E6 — Contato por links

### Requisito E6-S1 — Contatos primários em 1 clique

- **Story:** Como recrutador ou cliente, quero contatar Orlando por WhatsApp, e-mail ou LinkedIn em um clique, para conversar sem formulário.
- **Critérios de aceite:**
  - Given a seção Contato, When visualizo, Then há links para **WhatsApp**, **e-mail** e **LinkedIn** (primários).
  - Given WhatsApp, When clico, Then abre `https://wa.me/5511974213357`.
  - Given e-mail, When clico, Then o `mailto:` usa `dev.onamba@gmail.com`.
  - Given LinkedIn, When clico, Then abre `https://www.linkedin.com/in/orlando-namba/` com `noopener noreferrer`.
  - Given a seção Contato, When verifico o MVP, Then **não** há formulário server-side.
  - Given GitHub e Instagram, When existem, Then são **secundários**.
- **Fora de escopo:** Formulário, captcha, CRM, webhook.
- **Dependências:** Frontend apenas; **sem Backend**.

---

## E7 — Tema light / dark

### Requisito E7-S1 — Default light + toggle com persistência

- **Story:** Como visitante, quero o site em tema claro por padrão e poder alternar para escuro, para ler com conforto sem perder a preferência na próxima visita.
- **Critérios de aceite:**
  - Given primeira visita **sem** preferência salva, When a página carrega, Then o tema ativo é **light**.
  - Given o toggle, When clico, Then a UI alterna light ↔ dark globalmente.
  - Given escolha dark, When recarrega, Then dark permanece (`localStorage` chave `portfolio-theme`).
  - Given o toggle, When uso teclado, Then é focável e acionável; nome acessível.
  - Contraste AA aproximado em light e dark (ver E8).
- **Regras:** Não usar `prefers-color-scheme` na 1ª visita. Anti-FOUC obrigatório.
- **Dependências:** Tokens UX/UI; Frontend.

---

## E8 — Acessibilidade e responsivo (mínimos)

### Requisito E8-S1 — A11y básica

Checklist QA: `h1` único; seções `h2`; links/botões com nome; alt em previews; foco visível; teclado; contraste AA; `lang="pt-BR"`; alvos ≥44×44px; `prefers-reduced-motion` respeitado.

### Requisito E8-S2 — Responsivo

- ~375px: sem scroll horizontal de layout.
- ~1280px: Hero = uma composição (marca + headline + CTAs).
- Ordem: Hero → Sobre → Projetos → Skills → Contato.

---

## NFRs transversais (MVP)

| ID | Requisito |
|----|-----------|
| NFR-1 | Conteúdo verdadeiro apenas |
| NFR-2 | Sem links mortos nos destinos MVP |
| NFR-3 | Performance razoável; previews lazy ok |
| NFR-4 | `title` + `meta description` em PT |
| NFR-5 | Sem formulário / sem secrets de contato server |

---

## Definition of Done — MVP

1. Landing PT com Hero, Sobre, Projetos, Skills, Contato.
2. Hero: nome, full-stack, vagas/freelas, CTAs Contato + Projetos.
3. Sobre: ADS em curso + posicionamento verdadeiro.
4. 2 projetos com URL ao vivo, sem GitHub, preview + alt + fallback.
5. Skills: lista base + Node + Express.
6. Contato: WhatsApp, e-mail, LinkedIn; sem form; GitHub/Instagram secundários.
7. Light default + dark persistente.
8. A11y + responsivo E8 ok.
9. Copy ⏳ aceita como provisória ou validada por Orlando.
10. Deploy via `pf-devops` após QA.
11. Zero conteúdo inventado; NFR-1 e NFR-2 ok.

---

## Decisões provisórias do PE

1. Copy dos cases: provisória da direção visual até Orlando validar.
2. Skills extras: **Node** e **Express** no MVP.
3. GitHub/Instagram: secundários no Contato/footer.

---

## Changelog

| Data | Autor | Mudança |
|------|-------|---------|
| 2026-08-10 | pf-ba | Criação a partir de `mvp-produto.md` |
| 2026-08-10 | Prompt Engineer | Persistência + decisões provisórias; chave tema `portfolio-theme` |
