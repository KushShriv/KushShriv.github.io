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
        limit: 6,
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        projects: [
          'KushShriv/KushShriv.github.io',
          'KushShriv/Distributed-Load-Testing-System',
          'KushShriv/Vercel-Clone-for-React-Projects',
          'KushShriv/Decentralised-Voting-System-Solidity-JS',
          'KushShriv/Monolithic-to-Microservices-CC',
          'KushShriv/Secure-File-Sharing-Java-Spring',
          'KushShriv/portfolio',
          'KushShriv/Python-Projects',
          'KushShriv/OnlineJobPostings-Infographic',
          'KushShriv/C-Projects',
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Distributed Load Testing System',
          description: `Developed a distributed performance testing system with Python, Kafka, and Flask, featuring real-time metrics
            visualization and a user-friendly interface for load testing using Tsunami and Avalanche tests capable of handling over
            12000 concurrent requests with an average response time of 120ms.`,
          imageUrl:
            'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Kafka.component.complex-narrative-xl.ts=1690916983558.png/content/adobe-cms/mx/es/products/instana/supported-technologies/apache-kafka-observability/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage',
          link: 'https://github.com/KushShriv/Distributed-Load-Testing-System',
        },
        {
          title: 'Real-Time Reddit-like Data Processing',
          description: `Leveraged Spark Streaming and Kafka to conduct comparative analysis of stream and batch processing using simulated
            Reddit-like data. Evaluated performance across various parameters, including window types and sizes, client counts, and
            data volumes ranging from 300 per request to 10 second windows taking in thousands of datapoints per mini-batch.`,
          imageUrl:
            'https://ih1.redbubble.net/image.4806407216.7609/raf,360x360,075,t,fafafa:ca443f4786.jpg',
          link: '',
        },
        {
          title:
            'Monolithic to Microservices Application Migration with Basic CI/CD',
          description: `Migrated a Monolithic E-Commerce platform application built with Next.js to a microservices architecture using Docker
                        and K8s, then set up automated testing and deployment using Jenkins and GitHub Webhooks.`,
          imageUrl:
            'https://logowik.com/content/uploads/images/kubernetes-icon1721066686.logowik.com.webp',
          link: 'https://github.com/KushShriv/Monolithic-to-Microservices-CC',
        },
        {
          title: 'Vercel Clone for React Projects',
          description: `Developed a website to clone Vercel’s website deployment features for React Projects using Typescript, Node.js, React, Redis and Cloudflare which has an architecture extensible to AWS services.`,
          imageUrl:
            'https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png',
          link: 'https://github.com/KushShriv/Vercel-Clone-for-React-Projects',
        },
      ],
    },
  },
  seo: {
    title: 'Kushaagra Shrivastava',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kushaagra-shrivastava',
    X: 'Kush_Shriv',
    researchGate: '',
    facebook: '',
    instagram: 'kush_shriv',
    reddit: '',
    threads: '',
    youtube: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    telegram: '',
    website: '',
    phone: '+91 9642608472',
    email: 'kushaagrashrivastava@gmail.com',
  },
  portfolio: {
    resumeFileUrl:
      'https://drive.google.com/file/d/1vZqIans-_TQ95qf0L1oks-QsTCX7VEId/view?usp=sharing',
    cvFileUrl: '',
    detailedPortfolioUrl: 'https://kushshriv.github.io/portfolio',
  },
  skills: [
    'Python',
    'REST API',
    'AWS',
    'Oracle Cloud',
    'Kafka',
    'Spark',
    'JavaScript',
    'Django',
    'Flask',
    'TypeScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'Kubernetes',
  ],
  experiences: [
    {
      company: 'Linksmart Technologies',
      position: 'Summer Tech Intern',
      certificateLink:
        'https://drive.google.com/file/d/178JugxFHXWHItyNAu8ifGu2fZW_FdcSB/view?usp=sharing',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://www.linksmartdna.com/',
      description: `• Created a registration portal for collecting data and displaying analytics from marketing events held by the company.
                    • I implemented subtle enhancements to the company website after prototyping React based frontends, finally implementing the design which met the company's expectations meeting the company's design expectations.
                    • Integrated Google Maps and Open Street Maps with Django's admin portal and created analytics view for the same.
                    • Implemented 2FA through SMS and Email using AWS services such as Dynamo DB, SNS, API Gateway and Lambda, then integrated it in with Django.
                    • Switched from HTTP to WebRTC socket connection for quicker image transfer from client to server during label scanning. Implemented ASGI with Django and Apache to do the same on the server side.
                    • Built multiple iterations and configurations of classification CNNs to classify images into multiple classes. Used PyTorch and TorchVision with the RESNET model to build the CNN required. Achieved desired results within 2 weeks.`,
    },
  ],
  educations: [
    {
      institution: 'PES University',
      institutionLink: 'https://pes.edu/',
      degree: 'B.Tech in Computer Science and Engineering',
      degreeLink: '',
      from: '2021',
      to: '2025',
      grade: '8.68 CGPA',
      achievements: ['Awarded top 20% of the batch.'],
    },
    {
      institution: 'AECS Magnolia Maaruti Public School',
      institutionLink:
        'https://www.aecsgroup.in/magnolia-maaruti-public-school',
      degree: 'High School',
      degreeLink: '',
      from: '2008',
      to: '2021',
      grade: '86.4% Aggregate',
      achievements: [],
    },
  ],
  certifications: [
    {
      name: 'Google Data Analytics Professional Certificate',
      givenBy: 'Google & Coursera',
      body: 'Certified comprehensive skills in data analysis, including data cleaning, visualization, and using tools like SQL and R for data-driven decision-making.',
      year: 'January 2024',
      link: 'https://drive.google.com/file/d/19UgTT-YihCOOCe681FH8BxjyXK6qd1mZ/view?usp=drive_link',
    },
    {
      name: 'Oracle Cloud Associate Foundations Certificate',
      givenBy: 'Oracle',
      body: 'Certified foundational knowledge of Oracle Cloud services, including cloud concepts, infrastructure, and basic cloud management.',
      year: 'June 2024',
      link: 'https://drive.google.com/file/d/1WZtOKVkzdPbUYiBMK3eOIaNTuDyzheHp/view?usp=drive_link',
    },
    {
      name: 'Jira Work Management Fundamentals Badge',
      givenBy: 'Atlassian',
      body: 'Certified expertise in using Jira Work Management for organizing, tracking, and managing tasks and projects effectively within teams.',
      year: 'November 2023',
      link: 'https://drive.google.com/file/d/1NWKiURLvZt08IHw1Emxz8h_ukgXu97kb/view?usp=drive_link',
    },
    {
      name: 'Trello Fundamentals Badge',
      givenBy: 'Atlassian',
      body: 'Certified proficiency in using Trello for task management, including board creation, card management, and collaboration tools.',
      year: 'January 2024',
      link: 'https://drive.google.com/file/d/1R8CMhYLxNFJTzYJ4r7BCz0qe3kwY4kTQ/view?usp=drive_link',
    },
    {
      name: 'Spark Twitter Streaming Certificate',
      givenBy: 'Great Learning',
      body: 'Validated skills in using Apache Spark for real-time processing and analysis.',
      year: 'April 2024',
      link: 'https://drive.google.com/file/d/1YWt1B1LJNkDCuEAKYQYxgWzB435tCwbR/view?usp=sharing',
    },
  ],
  publications: [
    {
      //   title: '',
      //   conferenceName: '',
      //   journalName: '',
      //   authors: '',
      //   link: '',
      //   description: '',
    },
  ],

  blog: {
    // source: '', // medium | dev
    // username: '',
    // limit: , // Max is 10.
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
  // footer: `Check Detailed Portfolio at <a href="https://kushshriv.github.io/portfolio">kushshriv.github.io/portfolio</a>`,
};

export default CONFIG;
