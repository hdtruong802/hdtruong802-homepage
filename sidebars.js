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
      label: 'Fundamentals of Python and Structures',
      items: [
        'Fundamentals of Python and Structures/Basic Python', 
        'Fundamentals of Python and Structures/Data Structure',
        'Fundamentals of Python and Structures/OOP with Python',
      ],
    },
  ],
};

export default sidebars;
