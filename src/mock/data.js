import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'This is ',
  name: 'Kubra Kai',
  subtitle: 'The one stop shop for your kubernetes metric tracking needs',
  cta: 'github',
};

// ABOUT DATA
export const aboutData = {
  img: 'https://miro.medium.com/max/404/1*AFoartV9eLHjxw6N6XO0PA.gif',
  paragraphOne:
    'KubraKai is an open-source Web Application for Kubernetes monitoring for engineers who don’t want to be tied to their computer.',
  paragraphTwo:
    'KubraKai allows Users to create a profile for storing and tracking numerous Kubernetes Clusters, all within a mobile-first environment!',
  paragraphThree:
    'Users are able to create personalized profiles to store the IP addresses of their Kubernetes Clusters. Once set up, users are able to monitor the metrics of their Clusters. Every users information is safely encrypted to ensure premium data security.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'danny.jpg',
    title: 'Danny',
    url: 'https://www.linkedin.com/in/dannyb1983/',
  },
  {
    id: nanoid(),
    img: 'jordan.png',
    title: 'Jordan',
    url: 'https://www.linkedin.com/in/jordan-king7/',
  },
  {
    id: nanoid(),
    img: 'anthony.jpg',
    title: 'Anthony',
    url: 'https://www.linkedin.com/in/anthony-martinez-8609683/',
  },
  {
    id: nanoid(),
    img: 'taylor.png',
    title: 'Taylor',
    url: 'https://www.linkedin.com/in/taylor-davis-6b725b1ba/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};
