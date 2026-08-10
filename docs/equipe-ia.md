# Equipe de IA — Portfolio

> Documento vivo mantido pelo chat **Prompt Engineer & Roteador**.
> Atualizado a cada mudança na equipe, nos prompts, no fluxo de trabalho ou no contexto do projeto.
>
> **Última atualização:** 10/08/2026 (bootstrap da equipe + subagentes)

---

## Índice

1. [Visão geral](#1-visão-geral)
2. [Uso no dia a dia](#2-uso-no-dia-a-dia)
3. [Chat central (Prompt Engineer)](#3-chat-central-prompt-engineer)
4. [Equipe (9 subagentes)](#4-equipe-9-subagentes)
5. [Fluxo de trabalho e roteamento](#5-fluxo-de-trabalho-e-roteamento)
6. [Contrato Task (handoff)](#6-contrato-task-handoff)
7. [Skills e subagentes (arquivos)](#7-skills-e-subagentes-arquivos)
8. [Regras de atualização](#8-regras-de-atualização)
9. [Changelog](#9-changelog)

---

## 1. Visão geral

Equipe de IA enxuta para o **Portfolio** — site pessoal do desenvolvedor Orlando Namba (marca, projetos, contato).

| Item | Valor |
|------|-------|
| Modelo | 1 chat central (PE) + 9 subagentes |
| Prefixo | `pf-` |
| Repositório | `Portfolio` |
| Branch atual | `main` (a criar) |
| Contexto técnico | `docs/contexto-projeto.md` |
| Skills (SSOT) | `.cursor/skills/pf-*/SKILL.md` |
| Subagentes | `.cursor/agents/pf-*.md` |
| Rule alwaysApply | `.cursor/rules/equipe-ia-roteamento.mdc` |

### Skills vs subagentes

| Camada | Função |
|--------|--------|
| **Skill** | Fonte de verdade do papel (conhecimento completo) |
| **Subagente** | Frontmatter + “leia a skill” + restrições críticas — contexto isolado via Task |
| **Prompt Engineer** | Chat pai — **não** tem subagente |

Não duplicar prompts longos entre skill e subagente.

---

## 2. Uso no dia a dia

| Situação | Onde |
|----------|------|
| Equipe + metodologia + evolução deste doc | **Este chat** (`Prompt Engineer — Portfolio`) |
| Bugs, features, ideias | **Chat novo** — age como PE pela rule alwaysApply; sem prompt especial |
| Roteamento estranho | Feedback: *"quais subagentes usou?"* |
| Papel pontual | Invocação explícita `/pf-po`, `/pf-frontend`, etc. |

Fluxo mental:

```
Orlando → chat (PE) → Task(subagente) → síntese → próximo passo
```

Deploy/infra **sempre** via `pf-devops`.

---

## 3. Chat central (Prompt Engineer)

**Nome do chat:** `Prompt Engineer — Portfolio`

### Responsabilidades

1. Ouvir ideias, dúvidas e problemas do Orlando
2. Clarificar ambiguidades (máx. 2–3 perguntas, só se necessário)
3. Decidir qual(is) subagente(s) deve(m) atuar
4. Montar Task com [contrato](#6-contrato-task-handoff) autocontido
5. Sintetizar resultado e indicar próximo handoff
6. Manter este arquivo atualizado

### Formato de resposta padrão

```markdown
### Entendimento
[1–2 frases]

### Roteamento
- **Chat:** [nome]
- **Ordem:** [1 de N]
- **Por quê:** [justificativa]

### Prompt / Task
[prompt autocontido]

### Entregável esperado
[o que trazer de volta]

### Atualização do docs/equipe-ia.md
[alteração ou "Nenhuma alteração necessária"]
```

Skill do PE: `.cursor/skills/pf-prompt-engineer/SKILL.md` (referência; o chat pai *é* o orquestrador).

---

## 4. Equipe (9 subagentes)

| # | Subagente | Escopo neste projeto | Quando acionar |
|---|-----------|----------------------|----------------|
| 1 | `pf-po` | Priorização, roadmap, valor de marca pessoal | "Vale a pena?", escopo, MVP |
| 2 | `pf-ba` | Stories, aceite, seções de conteúdo | Antes de implementar |
| 3 | `pf-arquiteto` | Stack, estrutura, trade-offs hosting | Impacto multi-camada / bootstrap |
| 4 | `pf-backend` | Contato, API routes, CMS, integrações | Só se houver server-side |
| 5 | `pf-frontend` | Páginas, UI, responsivo, performance | Maioria das features |
| 6 | `pf-devops` | Hosting, CI/CD, domínio, preview | Infra, deploy, incidentes |
| 7 | `pf-qa` | Regressão visual/a11y, links, forms | Pré-deploy / pós-fix |
| 8 | `pf-appsec` | XSS, spam, secrets, headers | Segurança |
| 9 | `pf-ux-ui` | Jornada, visual, microcopy, hierarquia | Experiência e look |

Adaptações vs. template genérico:

- **Frontend** é o papel dominante — portfólio é produto visual.
- **Backend** só entra com formulário/API/CMS; senão o PE pula o passo.
- **UX/UI** costuma vir cedo (antes ou junto do Arquiteto no bootstrap visual).
- **DevOps** foca hosting (ex. Vercel) + domínio + preview — sem VPS obrigatória.
- **PO** otimiza conversão recrutador/cliente, não roadmap SaaS.

---

## 5. Fluxo de trabalho e roteamento

```
Orlando
  │
  ▼
[Chat = Prompt Engineer]
  AGENTS.md + rule alwaysApply + skill pf-prompt-engineer
  │
  ├── entende, clarifica, monta Task autocontido
  ├── delega → .cursor/agents/pf-*.md
  ├── sintetiza para Orlando
  └── atualiza docs/equipe-ia.md quando necessário
  │
  ├── PO ──► BA ──► Arquiteto ──► Backend / Frontend
  │                                      │
  │                                      ▼
  │                              QA ──► DevOps (deploy)
  │
  └── UX/UI (upstream ou após PO) · AppSec (quando segurança)
```

| Tipo | Sequência |
|------|-----------|
| Feature nova | PO → BA → Arquiteto → Backend/Frontend → QA → DevOps |
| Bug fix | Backend ou Frontend → **DevOps** → QA |
| Incidente | DevOps → Backend (se código) → **DevOps** → QA |
| Dúvida produto | PO |
| Segurança | AppSec → Backend/DevOps |
| UX | UX/UI → Frontend → QA |
| Só infra/deploy | DevOps |

Regras:

- Sequência só com dependência real
- Subagentes **não** delegam entre si — só o PE orquestra
- Chat pai **nunca** executa deploy/infra direto

---

## 6. Contrato Task (handoff)

Todo prompt enviado via Task **deve** incluir:

```markdown
## Contexto do projeto
[stack + 2–4 regras críticas; apontar docs/contexto-projeto.md]

## Tarefa
[o que fazer]

## Input do passo anterior
[spec, decisão ou resumo — se houver]

## Entregável esperado
[formato do papel]

## Restrições
- Portfólio pessoal Orlando Namba — conteúdo verdadeiro
- Design memorável; mobile + desktop
- [restrições específicas da área]
```

---

## 7. Skills e subagentes (arquivos)

```
Portfolio/
├── AGENTS.md
├── docs/
│   ├── equipe-ia.md           ← este arquivo
│   └── contexto-projeto.md
└── .cursor/
    ├── rules/equipe-ia-roteamento.mdc
    ├── skills/
    │   ├── pf-prompt-engineer/SKILL.md
    │   ├── pf-po/SKILL.md
    │   ├── pf-ba/SKILL.md
    │   ├── pf-arquiteto/SKILL.md
    │   ├── pf-backend/SKILL.md
    │   ├── pf-frontend/SKILL.md
    │   ├── pf-devops/SKILL.md
    │   ├── pf-qa/SKILL.md
    │   ├── pf-appsec/SKILL.md
    │   └── pf-ux-ui/SKILL.md
    └── agents/
        ├── pf-po.md
        ├── pf-ba.md
        ├── pf-arquiteto.md
        ├── pf-backend.md
        ├── pf-frontend.md
        ├── pf-devops.md
        ├── pf-qa.md
        ├── pf-appsec.md
        └── pf-ux-ui.md
```

| Chat | Skill | Subagente |
|------|-------|-----------|
| Prompt Engineer *(pai)* | `pf-prompt-engineer` | — |
| PO | `pf-po` | `pf-po.md` |
| BA | `pf-ba` | `pf-ba.md` |
| Arquiteto | `pf-arquiteto` | `pf-arquiteto.md` |
| Backend | `pf-backend` | `pf-backend.md` |
| Frontend | `pf-frontend` | `pf-frontend.md` |
| DevOps | `pf-devops` | `pf-devops.md` |
| QA | `pf-qa` | `pf-qa.md` |
| AppSec | `pf-appsec` | `pf-appsec.md` |
| UX/UI | `pf-ux-ui` | `pf-ux-ui.md` |

Conteúdo detalhado de cada papel: **só na skill**. Subagente = ponte curta.

### Status MVP do produto (contexto para roteamento)

| Item | Status |
|------|--------|
| Stack escolhida | ❌ |
| Site no ar | ❌ |
| Seções MVP (hero, sobre, projetos, skills, contato) | ❌ |

### Fase 2 da automação (pendente)

- Paralelo Backend ∥ Frontend após contratos estáveis
- Background/cloud agents para tarefas longas
- Pin de model por papel
- Fluxo git `dev` → PR → `main` quando houver produção

---

## 8. Regras de atualização

O Prompt Engineer edita este arquivo quando:

| Evento | O que atualizar |
|--------|-----------------|
| Papel adicionado/removido | §4 + §7 + Changelog |
| Skill/subagente alterado | §7 + Changelog (sem colar prompt inteiro) |
| Fluxo/roteamento mudou | §5 + Changelog |
| Decisão de produto/arquitetura relevante à equipe | seção adequada + Changelog |

### Formato no Changelog

```markdown
### YYYY-MM-DD — [título curto]
- **Autor:** Prompt Engineer (via Orlando)
- **Motivo:** ...
- **Alterações:** ...
```

---

## 9. Changelog

### 2026-08-10 — Bootstrap equipe de IA
- **Autor:** Prompt Engineer (via Orlando)
- **Motivo:** Replicar metodologia do Disparo Inteligente / B2B Salões neste repo, adaptada ao portfólio pessoal
- **Alterações:**
  - Criados `AGENTS.md`, rule alwaysApply, 10 skills `pf-*`, 9 subagentes
  - Criados `docs/equipe-ia.md` e `docs/contexto-projeto.md`
  - Chat central: `Prompt Engineer — Portfolio`
  - Adaptações: Frontend/UX dominantes; Backend opcional; DevOps = hosting/domínio; stack a definir
