import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    presta,
    project1,
    project2,
    tripguide,
    threejs,
    azure,
    aws,
    linux,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Development",
      icon: web,
    },
    {
      title: "Network Analysis",
      icon: mobile,
    },
    {
      title: "Quality Assurance",
      icon: backend,
    },
    {
      title: "Risk Management",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
     {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Presta Capital Limited",
      icon: presta,
      iconBg: "#383E56",
      date: "July 2022 - October 2022",
      points: [
        "Worked closely with development team members to identify and remove software bugs.",
        "Running and testing new app and software",
        "Updated software documentation and user guides to align with current features and comply with best practice standards.",
        "Worked with software team members to enhance and sustain automated builds and integration tests",
        "Provided technical support.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "End to End Audio Encrypted Teleconsultation System",
      description:
        "MedTalk is an End to End audio encrypted teleconsultation system used by practioners to communicate virtually with their paitents. Using Webrtc and Aes algorithm for encrption",
      tags: [
        {
          name: "WebRTC",
          color: "green-text-gradient",
        },
        {
          name: "AES 256",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/IsabellaAbuor/MedTalk",
    },
    {
      name: "Application Logs Management Software ",
      description:
        "The application manages mobile ecommerce logs for all its microservices, It receives logs from the microservices and records them in a common storage. The logs are then displayed according to cruciality and alert is sent to support engineers when a FATAL error is logged.",
      tags: [
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Expressjs",
          color: "green-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/IsabellaAbuor/Error-Logging-Application",
    },
    {
      name: "RF Secure Coded Communication System",
      description:
        "Using the AES (Advanced Encryption Standard) method, this project was designed to maintain utmost secrecy when transmitting data over RF from one device to another. The project was successfully with the use of Arduino as a microcontroller and programmed using c++",
      tags: [
        {
          name: "AES 256",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "C/C++",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/IsabellaAbuor/RF-secure-Coded-Communication-System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };