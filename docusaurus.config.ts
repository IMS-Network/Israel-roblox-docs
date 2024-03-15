import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'בדיקה!',
  tagline: 'פרויקט קהילתי לקידום תכנות אצל צעירים',
  favicon: 'img/icon.ico',

  // Set the production url of your site here
  url: 'https://רובלוקס.גיימינג.ישראל',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/icon.png',
    navbar: {
      title: 'הַדּוֹקוֹמֶנְטַצְיָה הָעִבְרִית • רובלוקס',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'דוקיומנטציה',
        },
        { to: '/blog', label: 'בלוג', position: 'left' },
        {
          href: 'https://github.com/IMS-Network/Israel-roblox-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'פרויקט על ידי',
          items: [
            {
              label: 'גיימינג ישראל',
              href: 'https://גיימינג.ישראל',
            },
            {
              label: 'ארגון Niro Team',
              href: 'https://niro.team',
            },
          ],
        },
        {
          title: 'קהילות תומכות',
          items: [
            {
              label: 'רובלוקס ישראל',
              href: 'https://discord.gg/robloxisrael',
            },
            {
              label: 'IMS-Network',
              href: 'https://ims-network.net',
            },
             {
              label: 'Roblox Studios IL',
              href: 'https://discord.com/invite/roblox-studio-il-1098908799340908565',
            },

          ],
        },
        {
          title: 'עוד',
          items: [
            {
              label: 'בלוג',
              to: '/blog',
            },
            {
              label: 'גיטהאב',
              href: 'https://github.com/IMS-Network/Israel-roblox-docs',
            },
            {
              label: 'אילוסטרציות על ידי Storyset',
              href: 'https://storyset.com/',
            },
          ],
        },
      ],
      copyright: `©️ זכויות שמורות לפרויקט "הַדּוֹקוֹמֶנְטַצְיָה הָעִבְרִית" על ידי גיימינג ישראל בשת"פ עם Niro Team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
