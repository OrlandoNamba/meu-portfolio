export const site = {
  name: "Orlando Namba",
  title: "Orlando Namba — Desenvolvedor full-stack",
  description:
    "Portfólio de Orlando Namba: desenvolvedor full-stack. Projetos no ar e formas de contato.",
  lang: "pt-BR",
  hero: {
    brand: "Orlando Namba",
    headline: "Desenvolvedor full-stack.",
    support: "Sites, sistemas e aplicativos de ponta a ponta — da ideia ao ar.",
    ctaPrimary: {
      label: "Falar comigo",
      href: "https://wa.me/5511974213357?text=Ol%C3%A1%2C%20Orlando!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
    },
    ctaSecondary: { label: "Ver projetos", href: "#projetos" },
  },
  about: {
    title: "Sobre",
    body: "Desenvolvo soluções digitais do zero à entrega final, unindo visão estratégica de produto, design de interfaces e engenharia de software robusta. Sou formado em Análise e Desenvolvimento de Sistemas e aplico esse repertório em projetos reais, acompanhando cada entrega do planejamento ao código em produção.",
  },
  projects: {
    title: "Projetos",
    support: "Três produtos no ar. Abra e veja o resultado.",
    github: {
      label: "Confira meu GitHub",
      href: "https://github.com/OrlandoNamba",
      lead: "Quer ver mais do meu trabalho?",
    },
  },
  skills: {
    title: "Skills",
  },
  contact: {
    title: "Contato",
    support: "Prefere WhatsApp para freela; LinkedIn ou e-mail também funcionam.",
  },
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Skills", href: "#skills" },
    { label: "Contato", href: "#contato" },
  ],
  links: {
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/5511974213357",
      primary: true,
    },
    email: {
      label: "E-mail",
      href: "mailto:dev.onamba@gmail.com",
      primary: true,
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/orlando-namba/",
      primary: true,
    },
  },
} as const;
