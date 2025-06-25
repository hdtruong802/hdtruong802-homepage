/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}*/

const sidebars = {
  docSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },

    {
      type: 'category',
      label: 'Computer Vision',
      items: [
        'Computer Vision/Gaze Estimation',
      ],
    },
  ],
};

export default sidebars;
