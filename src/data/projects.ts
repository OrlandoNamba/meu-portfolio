export type Project = {
  slug: string;
  name: string;
  summary: string;
  liveUrl: string;
  previewSrc: string;
  previewAlt: string;
};

export const projects: Project[] = [
  {
    slug: "disparo-inteligente",
    name: "Disparo Inteligente",
    summary:
      "Produto web para disparos e operação — stack Node, Express e Angular.",
    liveUrl: "https://disparointeligente.app.br",
    previewSrc: "/previews/disparo-inteligente.webp",
    previewAlt: "Prévia do site Disparo Inteligente",
  },
  {
    slug: "nazareno-sbc",
    name: "Igreja do Nazareno São Bernardo Central",
    summary:
      "Site institucional: presença online clara, com foco em mensagem e comunidade.",
    liveUrl: "https://nazarenosaobernardocentral.netlify.app/",
    previewSrc: "/previews/nazareno-sbc.webp",
    previewAlt: "Prévia do site Igreja do Nazareno São Bernardo Central",
  },
  {
    slug: "cha-de-cozinha",
    name: "Lista de Presentes para Chá de Cozinha",
    summary:
      "Lista de presentes interativa: reserva de item em tempo real, evitando presentes duplicados.",
    liveUrl: "https://chadecozinha-melissa-e-orlando.netlify.app/",
    previewSrc: "/previews/cha-de-cozinha.webp",
    previewAlt: "Prévia do site Lista de Presentes para Chá de Cozinha",
  },
];
