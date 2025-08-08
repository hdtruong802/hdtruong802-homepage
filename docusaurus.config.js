import {themes as prismThemes} from 'prism-react-renderer';
import katex from 'katex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Duc-Truong Hoang',
  tagline: "What doesn't kill you makes you stronger",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // future: {
  //   v4: true, // Improve compatibility with the upcoming Docusaurus v4
  // },

  // Set the production url of your site here
  url: 'https://hdtruong802.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hdtruong802-homepage/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hdtruong802', // Usually your GitHub org/user name.
  projectName: 'hdtruong802-homepage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'vi'], // en: English, vi: Vietnamese
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //     },
  //     vi: {
  //       label: 'Tiếng Việt',
  //     },
  //   },
  // },

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

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'blog',
  //       path: 'blog', // thư mục chứa docs của projects
  //       routeBasePath: 'blog', // URL base cho tab projects
  //       sidebarPath: require.resolve('./sidebarsBlog.js'),
  //       remarkPlugins: [remarkMath],
  //       rehypePlugins: [rehypeKatex],
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/HDT_logo.jpg',
          srcDark: 'img/HDT_logo_white.jpg',
        },
        items: [
          // {
          //   to: '/',
          //   position: 'left',
          //   className: 'navbar__icon-link',
          //   html: '<span title="Trang chủ"><svg style="width:1.5em;height:1.5em;vertical-align:middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></span>',
          // },

          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Blog',
          },

          // {
          //   to: '/blog/intro',
          //   position: 'left',
          //   label: 'Blog',
          // },

          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/hdtruong802/hdtruong802-homepage',
            // label: 'GitHub',
            html: '<span title="Github"><svg style="width:1.3em;height:1.3em;vertical-align:middle;margin-top: -3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21V19.13C6.73,19.78 6.14,17.86 6.14,17.86C5.68,16.65 5.03,16.35 5.03,16.35C4.11,15.77 5.11,15.78 5.11,15.78C6.13,15.87 6.67,16.88 6.67,16.88C7.59,18.43 9.12,17.96 9.72,17.68C9.81,17.03 10.06,16.58 10.34,16.33C7.77,16.08 5.06,15.13 5.06,10.81C5.06,9.62 5.5,8.67 6.22,7.94C6.11,7.68 5.73,6.5 6.33,4.94C6.33,4.94 7.23,4.66 9.5,6.22C10.36,5.98 11.28,5.86 12.2,5.86C13.12,5.86 14.04,5.98 14.9,6.22C17.17,4.66 18.07,4.94 18.07,4.94C18.67,6.5 18.29,7.68 18.18,7.94C18.9,8.67 19.34,9.62 19.34,10.81C19.34,15.14 16.62,16.07 14.05,16.32C14.42,16.64 14.76,17.27 14.76,18.21V21C14.76,21.27 14.92,21.59 15.43,21.5C19.39,20.17 22.26,16.42 22.26,12C22.26,6.48 17.74,2 12,2Z"/></svg></span>',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Hoang Duc Truong. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
