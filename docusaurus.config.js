// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LadysVoa',
  tagline: 'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://lbykoo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lbykoo', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [ 'en','zh-Hans', 'zh-Hant','es','fr','ru','ar','pt-br','pt-pt'],
    localeConfigs: {     
      // 如果不需要重写默认值，可以忽略 locale (例如 fr)
      en: {
        htmlLang: 'en-GB',
        path: 'en',
      },
      'zh-Hans': {
        htmlLang: 'zh-CN',
        path: 'zh-Hans',
      },
      'zh-Hant': {
        htmlLang: 'zh-TW',
      },
      'es': {
        htmlLang: 'es',
      },
      'fr': {
        htmlLang: 'fr',
      },
      'ru': {
        htmlLang: 'ru',
      },
      'ar': {
        htmlLang: 'ar',
        direction: 'rtl',
      },
      'pt-br': {
        htmlLang: 'pt-BR',
      },
      'pt-pt': {
        htmlLang: 'pt-PT',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //  editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LadysVoa',
        logo: {
          alt: 'LadysVoa Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blogsb', label: 'Blogsb', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Information',
            items: [
              {
                label: 'About',
                to: '/info/site-info/about',
              },
              {
                label: 'Privacy Policy',
                to: '/info/site-info/privacy-policy',
              },
              {
                label: 'FAQ',
                to: '/info/site-info/faq',
              },
              {
                label: 'Contact Us',
                to: '/info/site-info/contact',
              },
              {
                label: 'Advertise with us',
                to: '/info/site-info/ads',
              },
            ],
          },
          {
            title: 'Submission Entrance',
            items: [
              {
                label: 'Significance of Submissions',
                to: '/info/submission/significance-of-submissions',
              },
              {
                label: 'Submission Rules',
                to: '/info/submission/submission-rules',
              },
              {
                label: 'Submit prerequisites',
                to: '/info/submission/submit-prerequisites',
              },
              {
                label: 'How to Submit',
                to: '/info/submission/how-to-submit',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright 2024 <a href="/">LadysVoa</a> All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'info', 
          path: 'info', 
          routeBasePath: 'info',
          sidebarPath: require.resolve('./infosidebars.js'), 
        },
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'blogsb',
          routeBasePath: 'blogsb', 
          path: 'blogsb', 
          blogTitle: 'My Blog', 
          blogDescription: 'A blog about my projects', 
        },
      ],
    ],
};

export default config;
