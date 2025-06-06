import {themes as prismThemes} from 'prism-react-renderer';
import katex from 'katex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Unlock the Future of Artificial Intelligence',
  tagline: 'AIO 2025',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // future: {
  //   v4: true, // Improve compatibility with the upcoming Docusaurus v4
  // },

  // Set the production url of your site here
  url: 'https://hdtruong802.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AIO-Conquer-2025/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hdtruong802', // Usually your GitHub org/user name.
  projectName: 'AIO-Conquer-2025', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'], // en: English, vi: Vietnamese
    localeConfigs: {
      en: {
        label: 'English',
      },
      vi: {
        label: 'Tiếng Việt',
      },
    },
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-mll67QQeFnrWgLkLrY7JU5k+hSRlP0c1A+zjKxMoj+lZeRVmJXwM1U2v4kFXC6C9',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'projects', // thư mục chứa docs của projects
        routeBasePath: 'projects', // URL base cho tab projects
        sidebarPath: require.resolve('./sidebarsProjects.js'),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'AICorner',
        path: 'AI Corner', // thư mục chứa docs của projects
        routeBasePath: 'aicorner', // URL base cho tab projects
        sidebarPath: require.resolve('./sidebarsAICorner.js'),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/aio_logo.png',
        },
        items: [
          {
            to: '/',
            position: 'left',
            className: 'navbar__icon-link',
            html: '<span title="Trang chủ"><svg style="width:1.5em;height:1.5em;vertical-align:middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></span>',
          },

          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Knowledge',
          },

          {
            to: '/projects/intro',
            position: 'left',
            label: 'Projects',
          },

          {
            to: '/aicorner/intro',
            position: 'left',
            label: 'AI Corner',
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/hdtruong802/Blogweb-AIO-2025',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'X',
        //         href: 'https://x.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} AIO Conquer. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
