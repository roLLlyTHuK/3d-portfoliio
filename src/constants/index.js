import { frog, law, self, wego } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    bookshelf,
    cz,
    water,
    weather,
    yachts,
    campers,
    telegram,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Chief specialist in IT department",
        company_name: "Kyiv Court of Appeal",
        icon: law,
        iconBg: "#accbe1",
        date: "October 2014 - March 2023",
        points: [
            "Assurance of user workstation availability.",
            "Timely troubleshooting of user and office equipment issues.",
            "Implementing latest technologies and user training.",
            "In - house software management and enhancement.",
        ],
    },
    {
        title: "Freelance Frontend Developer",
        company_name: "Selfemployed",
        icon: self,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - April 2023",
        points: [
            "Developing and maintaining web sites using AI tools and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "IT-Frogs",
        icon: frog,
        iconBg: "#b7e4c7",
        date: "May 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend React Developer",
        company_name: "WeGO",
        icon: wego,
        iconBg: "#a2d2ff",
        date: "Feb 2024 - April 2024",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Freelance Fullstack Developer",
        company_name: "Selfemployed",
        icon: self,
        iconBg: "#fbc3bc",
        date: "May 2024 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Resolving technical issues and providing support to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/roLLlyTHuK',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/andrii-dovhaniuk-ua',
    },
    {
        name: 'Telegram',
        iconUrl: telegram,
        link: 'https://t.me/AndriyDovhaniuk',
    },
];

export const projects = [
    {
        iconUrl: bookshelf,
        theme: 'btn-back-red',
        name: 'Bookshelf Web App',
        description: 'Team project. A website with a responsive layout, included auth, filters, add book to wishlist. Role: SCRUM Master, developer. Worked on header/modal/authorization. Stack: HTML, CSS, JavaScript, REST API, Firebase.',
        link: 'https://github.com/roLLlyTHuK/BookShelf',
        liveLink: 'https://rolllythuk.github.io/BookShelf'
    },
    {
        iconUrl: yachts,
        theme: 'btn-back-green',
        name: 'Yachts Adventure',
        description: 'Team project. A website with a pesponsive layout. Role: SCRUM Master, developer. Worked on gallery section/page animations. Stack: HTML, CSS, JavaScript, AOS, Swiper',
        link: 'https://github.com/roLLlyTHuK/yachts-adventures',
        liveLink: 'https://bonny-art.github.io/project-tp-01'
    },
    {
        iconUrl: cz,
        theme: 'btn-back-blue',
        name: 'Daycare center Landing Page',
        description: 'Individual project. A landing page with a pesponsive layout for daycare center. Stack: HTML, CSS, JavaScript, AOS, Swiper',
        link: 'https://github.com/roLLlyTHuK/cz_v2',
        liveLink: 'https://charivne-zerniatko.netlify.app'
    },
    {
        iconUrl: water,
        theme: 'btn-back-pink',
        name: 'Water Tracker App',
        description: 'Team project. Healthy app for tracking water intake. Role: SCRUM Master, frontend developer. Worked on state management, API, modals, animation, loader, error page, authorisations form, services, ratio panel, notifications. Stack: React, Styled- components, Framer Motion, Redux Toolkit, Node, Express, MongoDB, Swagger, Vite.',
        link: 'https://github.com/roLLlyTHuK/WaterTrackerFrontend',
        liveLink: 'https://nadiiapavliuchenko.github.io/WaterTrackerFrontend/'
    },
    {
        iconUrl: campers,
        theme: 'btn-back-yellow',
        name: 'Rent Campers App',
        description: 'Individual project. App for rent campers company(no responsive). Stack: React, Styled-components, Redux Toolkit, REST Api, Vite.',
        link: 'https://github.com/roLLlyTHuK/test-campers',
        liveLink: 'https://rolllythuk.github.io/test-campers/'
    },
    {
        iconUrl: weather,
        theme: 'btn-back-black',
        name: 'Weather Forecast Hero Page',
        description: 'Individual project. Hero page for weather forecast. Stack: HTML, CSS, JavaScript.',
        link: 'https://github.com/roLLlyTHuK/lens_effect',
        liveLink: 'https://rolllythuk.github.io/lens_effect/'
    },
];