# QA MVP — Portfólio Orlando Namba

> Autor: `pf-qa` · 2026-08-10 · Branch: `dev`  
> Recomendação: **GO** para DevOps (com polish Frontend dos majors abaixo)

## DoD

| # | Critério | Status |
|---|----------|--------|
| 1–7, 9 | Landing, hero, sobre, projetos, skills, contato, tema, copy provisória | PASS |
| 8 | A11y + responsivo | PASS após fix Frontend (BUG-01/02) |
| 10 | Deploy | N/A — próximo DevOps |
| 11 | Conteúdo verdadeiro / links | PASS* (Disparo lento no fetch QA) |

Build `astro build`: **PASS**.

## Bugs

| ID | Sev | Problema | Dono |
|----|-----|----------|------|
| BUG-01 | major | Nav mobile `min-height: 40px` (&lt;44) | **Corrigido** (Frontend) |
| BUG-02 | major | `.project-card { opacity: 0 }` some sem JS | **Corrigido** (Frontend) |
| BUG-03 | major (externo) | Disparo Inteligente timeout no fetch QA | Infra do produto |

## Recomendação

**GO** para deploy. Smoke: confirmar `https://disparointeligente.app.br` no go-live.
