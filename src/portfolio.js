// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: 'UA-174238252-2',
};

//Home Page
const greeting = {
  title: 'Hello 👋.',
  title2: 'Ines Bourguiba',
  logo_name: 'inesBourguiba()',
  nickname: 'Ines',
  full_name: 'Ines Bourguiba a Full-stack Web Developer.',
  subTitle: '',
  quote: ' Results happen over time, not overnight. So, never stop learning !',
  resumeLink:
    'https://drive.google.com/file/d/1nqJZk_7IC-eQ3ai3h0_V_ktpiHiByk8J/view?usp=sharing',
  mail: 'mailto:ines.bourguiba.enit@gmail.com',
};

const socialMediaLinks = {
  /* Social Media Link */
  github: 'https://github.com/Inesbourguibaweb',
  linkedin: 'https://www.linkedin.com/in/ines-bourguiba',
  gmail: 'ines.bourguiba.enit@gmail.com',
};

const skills = {
  data: [
    {
      title: 'Frontend Developer',
      fileName: 'FrontendImg',
      skills: [
        '⚡ Develop highly interactive Front end / User Interfaces for your website',
        '⚡ Building responsive website front end using ReactJS / Angular',
        '⚡ Building responsive Apps using React Native',
        '⚡ Integrating the frontend interfaces with REST APIs',
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'simple-icons:html5',
          style: {
            color: '#E34F26',
          },
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'Tailwind Css',
          fontAwesomeClassname: 'logos:tailwindcss-icon',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'Sass',
          fontAwesomeClassname: 'logos:sass',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#FFFFFF',
            color: '#F7DF1E',
          },
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassname: 'vscode-icons:file-type-typescript',
          style: {
            color: '#0865A6',
          },
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'simple-icons:react',
          style: {
            color: '#61DAFB',
          },
        },
        {
          skillName: 'React Native',
          fontAwesomeClassname: 'tabler:brand-react-native',
          style: {
            color: '#61DAFB',
          },
        },
        {
          skillName: 'Angular',
          fontAwesomeClassname: 'devicon:angular',
          style: {
            color: '#207297',
          },
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'simple-icons:github',
          style: {
            color: 'dark',
          },
        },
      ],
    },
    {
      title: 'Backend Developer',
      fileName: 'BackendImg',
      skills: [
        '⚡ Build high-quality applications built with Node, Express, and MongoDB.',
        '⚡ Apply best practices to build fast, scalable, and secure apps.',
        '⚡ Build the back-end of a web/Mobile application.',
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#FFFFFF',
            color: '#F7DF1E',
          },
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassname: 'simple-icons:node-dot-js',
          style: {
            color: '#339933',
          },
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#439743',
          },
        },
        {
          skillName: 'Big Query',
          fontAwesomeClassname: 'skill-icons:gcp-light',
          style: {
            color: '#4479A1',
          },
        },
        {
          skillName: 'Firebase',
          fontAwesomeClassname: 'logos-firebase',
          style: {
            color: '#ffa000',
          },
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'simple-icons:github',
          style: {
            color: 'dark',
          },
        },
      ],
    },

    // {
    //   title: "Technical support Technician",
    //   fileName: "EmbeddedSysImg",
    //   skills: [
    //     "⚡ Install, maintain or repair equipment in accordance with commitments made with customers.",
    //     "⚡ Diagnose any malfunctions and define the appropriate solutions.",
    //     "⚡ Provide strong support and expertise to customers.",
    //     "⚡ Identifying potential additional sales (spare parts, maintenance contracts, etc.) in agreement with the sales teams.",
    //   ],
    //   Customer: [
    //     {
    //       CustomerName: "NUTEK",
    //       logo_path: "Nutek.jpg",
    //     },
    //     {
    //       CustomerName: "Cyberoptics",
    //       logo_path: "Cyber.png",
    //     }
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: 'Coding Dojo',
      subtitle: 'Software Development ',
      logo_path: 'codingDojo.png',
      alt_name: 'Coding Dojo',
      duration: 'Feb 2022 - Jun 2022',
      descriptions: [
        '⚡ Learn strong knwowelege in web fundamentals & Immersive Full-Stack Training Program in JavaScript.',
        '⚡ Solve algorithms and bring out these skills to build 2 final projects.',
        '⚡ Pass skills validation exams by developing a functional full-stack web application.',
        '⚡ Soft skills training to enhance communication and team collaboration.',
      ],
      website_link: 'https://www.codingdojo.africa/',
    },

    // {
    //   title: "Higher Institute of Computer Science and Mathematics of Monastir, Tunisia",
    //   subtitle: "Master in MicroElectronics and Instrumentation",
    //   logo_path: "isimm.png",
    //   alt_name: "ISIMM",
    //   duration: "2021 - Present",
    //   descriptions: [
    //     "⚡ I'm currently pursuing my master degree in µElectronics and instrumentation."
    //   ],
    //   website_link: "http://www.isimm.rnu.tn/public/",
    // },
    {
      title: 'National Engineering School of Tunis, Tunisia',
      subtitle: 'Electrical Engineering Diploma',
      logo_path: 'enit.png',
      alt_name: 'ENIT',
      duration: 'Sep 2012 - Jun 2015',
      descriptions: [
        '⚡ Gaining a solid foundation in both theoretical and practical aspects in the electrical field.',
        '⚡ The training provides basic knowledge in the fields of electrotechnics, electrical systems, electronics, microelectronics, and embedded systems',
        '⚡ I have acquired knowledge in a wide spectrum of modern Electrical Engineering disciplines through a comprehensive curriculum ',
      ],
      website_link: 'https://enit.rnu.tn/',
    },
    {
      title:
        'Preparatory School for Engineering Studies Entry (Mathematic, Physic)',
      subtitle: 'Preparatory School ',
      logo_path: 'ipeiem.jpg',
      alt_name: 'ipeiem',
      duration: 'Sept 2010 - Jun 2012',
      descriptions: [
        '⚡ Two-year of intensive program preparing for the national exam to integrate engineering school',
      ],
      website_link: 'https://ipeiem.rnu.tn/',
    },
  ],
};

// Experience Page
const experience = {
  title: 'Work Experience',
  subtitle: ' ',
  description: [
    'I am a passionate Full-stack Web Developer 💻 with knowledge of different programming languages, framework and libraries. ',
    'Moreover, I’ve built a strong knowledge of Problem Solving 💡, Project Management and Communication skills through my 6 years of experience in the Quality Department across automotive and electronic industries.',
  ],
  header_image_path: 'experience.svg',
  sections: [
    {
      title: 'Work Experience',
      experiences: [
        {
          title: 'Full-stack Web Developer',
          company: 'Shipzzer',
          company_url: 'https://shipzzer.com/',
          logo_path: 'Logo-shipzzer.svg',
          duration: 'Jul 2023 - Present',
          location: 'Tunis - Tunisia',
          description: [
            '⚡ Participating actively in project planning and task definition, contributing to successful project execution and meeting project objectives on time.',
            '⚡ Providing technical support and developing necessary fixes to resolve issues and ensure the proper functioning of the solution for end-users.',
            '⚡ Conducting thorough testing and validation of developed modules and services, ensuring the reliability and quality of the software.',
            '-Technologies : React Js, React Native, Angular, Javascript, Typescript, NodeJs, expressJs, REST API, Firebase, BigQuery, GCP',
          ],
          color: '#4285F4',
        },
        {
          title: 'Customer Quality Engineer',
          company: 'Asteelflash',
          company_url: 'https://www.asteelflash.com/fr/a-propos/',
          logo_path: 'asteelflash.jpg',
          duration: 'Jan 2022 - Nov 2023',
          location: 'Tunis - Tunisia',
          description: [
            '⚡ Manage Customer satisfaction and lead analysis for claims and ensure the implementation of the action plan using PDCA.',
            '⚡ Be responsible for acting on Customer rating and Scorecards’ improvement and contribute to the management for newprojects.',
            '-Technologies : PDCA, Kanban, 5W2H, Problem Solving.',
          ],
          color: '#4285F4',
        },
        {
          title: 'Quality Project Launch Engineer',
          company: 'Valeo',
          company_url: 'https://www.valeo.com/fr/',
          logo_path: 'valeo.png',
          duration: 'Jan 2021 - Jun 2022',
          location: 'Tunis - Tunisia',
          description: [
            '⚡ Manage communication with customers during the project phase.',
            '⚡ Take part in customer’s audits and risk assessment.',
            '⚡ Analyze quality KPIs and develop visual reports using iterative steps.',
            '-Technologies : PDCA, Kanban, 5W2H, Problem Solving.',
          ],
          color: '#4285F4',
        },
        {
          title: 'Customer Claim Engineer',
          company: 'Valeo',
          company_url: 'https://www.valeo.com/fr/',
          logo_path: 'valeo.png',
          duration: 'Feb 2017 - Dec 2019',
          location: 'Tunis - Tunisia',
          description: [
            '⚡ Lead problem solving for Peugeot Group for warranty claims using PDCA-Agile.',
            '⚡ Be the interface for Peugeot Group. Create a dashboard to track warranty KPIs.',
            '⚡ Perform investigations on claimed products and manage backlog for warranty Items.',
            '-Technologies : PDCA, Kanban, 5W2H, Problem Solving.',
          ],
          color: '#4285F4',
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     // {
    //     //   title: "End of studies project",
    //     //   company: "MT Electronics",
    //     //   logo_path: "MT.png",
    //     //   duration: "Feb 2019 - Jun 2019",
    //     //   location: "Remote Work",
    //     //   description: [
    //     //     `⚡ Study and realization of prototype for home automation system " SMART HOUSE " `,
    //     //   ],
    //     //   color: "#4285F4",
    //     // },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: 'Projects',
  description:
    'My projects make use of a vast variety of latest technology tools.',
  avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    profile_image_path: 'me.jpg',
    description:
      "Please don't hesitate to contact me. You are always welcome ! ",
  },
};

const projects = {
  data: [
    {
      id: '0',
      name: 'Recipe App',
      url: 'https://recipeproject-ed74c.web.app/auth',
      description:
        'The Recipes app enables users to discover, save, and organize their favorite recipes. Users can create their own recipes, build personalized recipe collections, and generate shopping lists.',
      languages: [
        {
          name: 'Angular',
          iconifyClass: 'logos-angular',
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'TypeScript',
          iconifyClass: 'logos-typescript',
        },
        {
          name: 'Firebase',
          iconifyClass: 'logos-firebase',
        },
      ],
    },
    {
      id: '1',
      name: 'Book Club',
      url: 'https://github.com/Inesbourguibaweb/Book-Club-Project',
      description:
        ' React single-page app to share with users favorite books with a smooth managing state that allows users to browse the site and utilize CRUD.',
      languages: [
        {
          name: 'React',
          iconifyClass: 'logos-react',
        },
        {
          name: 'Express',
          iconifyClass: 'logos-express',
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'MongoDB',
          iconifyClass: 'logos-Mongoose',
        },
      ],
    },
    {
      id: '2',
      name: 'E-commerce website',
      url: 'https://github.com/Inesbourguibaweb/GroupProjectEcommerce',
      description:
        'An e-commerce website that allows people to buy and sell physical goods, services, and digital products over the internet',
      languages: [
        {
          name: 'React',
          iconifyClass: 'logos-react',
        },
        {
          name: 'Express',
          iconifyClass: 'logos-express',
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'MongoDB',
          iconifyClass: 'logos-Mongoose',
        },
      ],
    },
    {
      id: '3',
      name: 'My Portfolio',
      url: 'https://inesbourguibaweb-github.vercel.app/#/home',
      description: 'A Software development Portfolio .',
      languages: [
        {
          name: 'React',
          iconifyClass: 'logos-react',
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
      ],
    },
    {
      id: '8',
      name: 'Tic-Tac-Toe',
      url: 'https://tic-tac-toe-indol-pi.vercel.app/',
      description:
        'Tic Tac Toe is a two-player game in which the objective is to take turns and mark the correct spaces in a 3x3 (or larger) grid. In this app, I used SVG to draw the different forms',
      languages: [
        {
          name: 'REACT',
          iconifyClass: 'logos-react',
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'Vercel',
          iconifyClass: 'logos:vercel-icon',
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
