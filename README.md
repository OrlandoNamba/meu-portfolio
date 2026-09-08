# Portfólio — Orlando Namba

Site pessoal de portfólio (landing em português): identidade, projetos no ar, skills e contato.

## Stack

- [Astro](https://astro.build) 5
- TypeScript
- CSS nativo (tokens light/dark)

## Como rodar local

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (geralmente `http://localhost:4321`).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build estático em `dist/` |
| `npm run preview` | Preview do build |

## Estrutura

- `src/pages/index.astro` — página única
- `src/components/` — Hero, Sobre, Projetos, Skills, Contato, header/tema
- `src/data/` — conteúdo tipado (site, projetos, skills)
- `src/styles/` — tokens e estilos globais
- `public/previews/` — capturas WebP dos projetos

## Tema

- Default: **light**
- Persistência: `localStorage` chave `portfolio-theme`
- Toggle no header (não usa `prefers-color-scheme` na primeira visita)
