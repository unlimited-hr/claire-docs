import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd7c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '602'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'bca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a1b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5c9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '277'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4c3'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '621'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/',
        component: ComponentCreator('/docs/api/', '240'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/development-setup',
        component: ComponentCreator('/docs/api/development-setup', '758'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/endpoints',
        component: ComponentCreator('/docs/api/endpoints', '070'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/intro',
        component: ComponentCreator('/docs/api/intro', '0c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '99a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/oauth/',
        component: ComponentCreator('/docs/oauth/', '4d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/oauth/intro',
        component: ComponentCreator('/docs/oauth/intro', '341'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/oauth/mobile-app',
        component: ComponentCreator('/docs/oauth/mobile-app', 'c5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/oauth/register-user',
        component: ComponentCreator('/docs/oauth/register-user', '388'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sensor/',
        component: ComponentCreator('/docs/sensor/', 'ed8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sensor/installation',
        component: ComponentCreator('/docs/sensor/installation', '22e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '911'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
