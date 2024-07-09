const CONFIG = {
  github: {
    username: 'KushShriv',
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4,
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        projects: [
          'KushShriv/Distributed-Load-Testing-System',
          'KushShriv/Decentralised-Voting-System-Solidity-JS',
          'KushShriv/Monolithic-to-Microservices-CC',
          'KushShriv/Python-Projects',
          'KushShriv/OnlineJobPostings-Infographic',
          'KushShriv/C-Projects',
        ],
      },
    },
    seo: {
        title: 'Kushaagra Shrivastava',
        description: '',
        imageURL: '',
    },
    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        defaultTheme: 'light',

    // Hides the switch in the navbar
    disableSwitch: false,

    displayAvatarRing: true,
    themes: ['light', 'dark'],

    // Light theme, applied to `light` theme
    lightTheme: {
      primary: '#1E1E1E',
      secondary: '#D6D6D6',
      accent: '#1E1E1E',
      neutral: '#D6D6D6',
      'base-100': '#F5F5F5',
      '--rounded-box': '0rem',
      '--rounded-btn': '0rem',
    },

    // Dark theme, applied to `dark` theme
    darkTheme: {
      primary: '#DADADB',
      secondary: '#414244',
      accent: '#DADADB',
      neutral: '#414244',
      'base-100': '#1D1E20',
      '--rounded-box': '0rem',
      '--rounded-btn': '0rem',
    },
  },
}};

export default CONFIG;
