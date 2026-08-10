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

## Regras críticas do projeto

- Portfólio **pessoal** — marca = Orlando Namba; não inventar persona
- Conteúdo verdadeiro: projetos e skills reais (ver GitHub / chats / `docs/contexto-projeto.md`)
- Primeiro viewport e design: seguir regras de frontend do Orlando (composição única, brand forte, tipografia expressiva, sem looks genéricos de IA)
- Mobile e desktop devem carregar bem
- **Deploy/merge/infra:** sempre `pf-devops` — chat pai nunca executa direto
