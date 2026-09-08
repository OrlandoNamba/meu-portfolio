# Portfolio — Equipe de IA

Site de portfólio pessoal do **Orlando Namba** (desenvolvedor).

## Stack

A definir pelo Arquiteto na fase inicial. Expectativa: site estático/SSR (ex.: Next.js, Astro ou similar) + hospedagem (ex.: Vercel). Backend só se houver formulário de contato, CMS ou API.

## Objetivo do produto

Converter visitantes (recrutadores, clientes, peers) em contato: mostrar quem é Orlando, stack, projetos e forma de falar com ele.

## Git e deploy

- Branch atual: `main` (criar fluxo `dev` → PR → `main` quando houver produção estável)
- Deploy/infra: sempre subagente `pf-devops`
- Nunca push destrutivo sem pedido explícito do Orlando

## Chat central = Prompt Engineer

Orlando envia ideias, dúvidas e problemas **neste chat**. O agente atua como **Prompt Engineer & Roteador**:

1. Entende e clarifica (máx. 2–3 perguntas se necessário)
2. Delega para subagentes via Task (prompt autocontido)
3. Sintetiza resultados para Orlando
4. Mantém `docs/equipe-ia.md` atualizado

## Subagentes (`.cursor/agents/`)

| Subagente | Papel |
|-----------|-------|
| `pf-po` | Priorização, MVP, valor de marca pessoal |
| `pf-ba` | User stories, critérios de aceite, conteúdo/seções |
| `pf-arquiteto` | Trade-offs, stack, estrutura do site |
| `pf-backend` | API routes, formulário, CMS, integrações |
| `pf-frontend` | UI, páginas, responsivo, performance web |
| `pf-devops` | Hosting, CI/CD, domínio, DNS, preview |
| `pf-qa` | Testes, regressão visual/a11y, validação pré-deploy |
| `pf-appsec` | XSS, spam em contato, secrets, headers |
| `pf-ux-ui` | Jornada, visual, microcopy, hierarquia |

Invocação explícita: `/pf-po`, `/pf-frontend`, etc.

## Fontes de verdade

| Recurso | Caminho |
|---------|---------|
| Equipe e fluxo | `docs/equipe-ia.md` |
| Skills por papel | `.cursor/skills/pf-*/SKILL.md` |
| Contexto do projeto | `docs/contexto-projeto.md` |
| Roteamento | `.cursor/rules/equipe-ia-roteamento.mdc` |

## Economia de contexto + componentização dura

Você é um executor **sênior**. Feature nova **compõe** primitivos do produto; não duplica layout nem regras de domínio em telas monólito. Não inventa o terceiro controle "parecido". Não reexplora o repositório se já existir inventário (este aqui).

Idioma: **português**. Dono de produto: **Orlando**. Design system / pasta de primitivos: **`src/components/`** (não há subpasta separada tipo `ui/` — todo componente `.astro` mora direto ali; ver gap na tabela abaixo). Template de referência: **nenhum** — projeto Astro puro (`astro` + `typescript` como únicas dependências, sem React/Vue/Svelte, sem Berry/shadcn/MUI). Não há template externo pra consultar; toda decisão visual é autoral do Orlando.

### 1. Senioridade (código de feature)
- `src/pages/index.astro` (16 linhas) já é só orquestração — importa `Hero`, `Sobre`, `Skills`, `Projetos`, `Contato` de `src/components/`. Manter assim: nova seção de página = novo componente importado, não markup inline na page.
- Layout repetível → primitivo em `src/components/`.
- Regras de domínio/conteúdo (textos, links, listas de skills/projetos) já vivem separadas em `src/data/` (`site.ts`, `projects.ts`, `skills.ts`) — **não** hardcodar texto novo direto no `.astro`, seguir esse padrão.
- Mesmo tipo de superfície = mesmo primitivo (não um card ad hoc por seção).

### 2. Inventário real (rodado em 16/08/2026 via grep/wc -l — honesto, não maquiado)

**Único primitivo de verdade hoje:** `ProjectCard.astro` (118 linhas, `src/components/ProjectCard.astro`) — componente nomeado, props tipadas (`Project` de `src/data/projects.ts`), usado em loop dentro de `Projetos.astro`. É o único caso que já cumpre a definição de primitivo do documento original.

**Padrões repetidos que NÃO são primitivos ainda** (são só convenção de classes CSS, coladas à mão em cada `.astro`):
- Esqueleto de seção — `<section class="section">` → `<div class="section__inner">` → `<h2 class="section__label">` (+ `.section__support` opcional) — repetido igual em `Hero.astro`, `Sobre.astro`, `Skills.astro`, `Projetos.astro`, `Contato.astro` (5 arquivos, classes definidas em `src/styles/global.css:76-97`). Não existe um componente `<Section>` que encapsule isso.
- Botão/CTA — classes `.btn`, `.btn--primary`, `.btn--ghost` (definidas em `src/styles/global.css:100-142`), reaplicadas cru em `Hero.astro`, `Contato.astro` e `ProjectCard.astro`. Não existe componente `<Button>`.
- Badge de tecnologia/skill — **não existe**. `Skills.astro` lista skills como texto plano separado por `·` (`skills__items`/`skills__sep`), não como badges visuais.

Catálogo mínimo (o que existe de fato, sem inventar):

| Necessidade | Usar (primitivo do produto) | Evitar |
|---|---|---|
| Card de projeto | `ProjectCard.astro` | Novo card ad hoc em outra seção |
| Esqueleto de seção (wrapper + título) | Convenção de classes `.section`/`.section__inner`/`.section__label` (ainda **não** é componente) | Copiar/colar o markup da seção com classes diferentes |
| Botão / CTA | Classes `.btn.btn--primary` / `.btn.btn--ghost` (ainda **não** é componente) | CSS de botão solto novo |
| Badge de skill/tecnologia | Não existe hoje | Inventar um badge visual sem perguntar ao Orlando |
| Header/navegação | `SiteHeader.astro` (uso singleton — 1 instância só, não é um primitivo replicável) | — |

**Gate antes de UI nova:** procurar em `src/components/` primeiro; se não houver primitivo adequado (ex.: quiser extrair `<Section>` ou `<Button>` de verdade, ou criar o primeiro badge), **parar** e perguntar ao Orlando com 2–3 opções (reusar convenção de classe existente / promover a componente novo / one-off justificado). Sem OK dele, não criar componente novo nem improvisar controle ad hoc.

### 3. Limiar de tamanho (arquivo-fonte)

| Linhas | Ação |
|--------|------|
| até ~800 | Ok se já usa primitivos |
| ~800–1200 | **Avaliar** split **antes** de mais feature |
| acima de ~1200 | **Obrigatório** fatiar neste ID ou abrir follow-up |

Estado atual (16/08/2026): nenhum arquivo perto do limiar. O maior é `src/components/SiteHeader.astro` com 334 linhas — bem abaixo de 800, sem necessidade de split agora. Demais componentes ficam entre 20 e 118 linhas; `src/pages/index.astro` tem 16 linhas. Reavaliar esta seção se `SiteHeader.astro` crescer bastante (ex.: menu mobile ganhar mais estado/lógica).

### 4. Anti-custo de tokens (duro em toda sessão)
1. **Um alvo por turno:** 1 página/componente principal por vez.
2. **Inventário = artefato.** Este aqui é o artefato — não rode `grep`/exploração ampla de novo em `src/components` sem motivo (o catálogo acima já é atual em 16/08/2026; reconfirme só se a estrutura mudou).
3. Sem template externo neste projeto — não aplicável o item de "dump de design", mas vale o espírito: não colar HTML/CSS de referência inteiro no contexto.
4. **Não reler** este bloco inteiro se a sessão já carregou o brief.
5. **Modelo:** migração mecânica → modelo barato/Auto. Modelo forte só pra decisão de split, gap de primitivo (`<Section>`/`<Button>`/badge) e regra de conteúdo.
6. **Subagente** com prompt estreito: paths explícitos + DoD em ≤5 linhas + "não abrir outros arquivos".
7. **Relatório** ao fechar: ≤15 linhas. Sem diff colado.
8. **Verificação mínima** do arquivo tocado.
9. Não expandir escopo ("já que estou aqui").
10. Sem primitivo → **perguntar**, não implementar.

## Regras críticas do projeto

- Portfólio **pessoal** — marca = Orlando Namba; não inventar persona
- Conteúdo verdadeiro: projetos e skills reais (ver GitHub / chats / `docs/contexto-projeto.md`)
- Primeiro viewport e design: seguir regras de frontend do Orlando (composição única, brand forte, tipografia expressiva, sem looks genéricos de IA)
- Mobile e desktop devem carregar bem
- **Deploy/merge/infra:** sempre `pf-devops` — chat pai nunca executa direto
