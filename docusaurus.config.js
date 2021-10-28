// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Covid Alert Specs",
  tagline: "Regroupe les spécifications du projet",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/specs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "com.github.covid-alert-microservices", // Usually your GitHub org/user name.
  projectName: "specs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/covid-alert-microservices/specs/edit/master/",
          remarkPlugins: [require("mdx-mermaid")],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Covid Alert Specs",
        logo: {
          alt: "Logo du site",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "contexte",
            position: "left",
            label: "Spécifications",
          },
          {
            href: "https://github.com/Covid-Alert-Microservices/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Contexte",
                to: "/docs/contexte",
              },
            ],
          },
          {
            title: "L'équipe",
            items: [
              {
                label: "Axel Duval",
                href: "https://www.linkedin.com/in/axel-duval-se/",
              },
              {
                label: "Florent Hugouvieux",
                href: "https://www.linkedin.com/in/florent-hugouvieux/",
              },
              {
                label: "Keven Dvorianoff",
                href: "https://www.linkedin.com/in/keven-dvorianoff/",
              },
            ],
          },
          {
            title: "Le code",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Covid-Alert-Microservices/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Covid Alert Microservices.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
