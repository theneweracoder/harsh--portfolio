export const bio = [
  "Hello! I'm Vinay Somawat, an experienced Frontend Software Engineer with a proven ability to upgrade applications, optimize performance, and deliver innovative solutions.",
  "I am passionate about using my technical skills to drive impactful contributions in challenging projects.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Angular, RxJS, NGRX/NGXS",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, Tailwind",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Debugging, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Nano Blogging Website",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Python", "JavaScript", "Heroku"],
     }
    // {
    //   projectName: "Find Your Bank",
    //   image: "images/findyourbank.png",
    //   summary:
    //     "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
    //   preview: "https://clever-fermi-0d5d76.netlify.app",
    //   techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    // },
    // {
    //   projectName: "Web Portfolio",
    //   image: "images/portfolio.png",
    //   summary:
    //     "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
    //   preview: "https://github.com/vinaysomawat/Travographer-Portal",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
    // {
    //   projectName: "Resume Builder",
    //   image: "images/resume-builder.png",
    //   summary:
    //     "Browser based editor to build and download Resumes in a customizable templates.",
    //   preview: "https://vinaysomawat.github.io/Resume-Builder",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  cloudProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Carnegie Mellon University",
    duration: "Oct 2022 - Present",
    subtitle: "Cloud Computing Research Intern",
    details: ["Developed a multithreaded Load Generation plan using Apache JMeter (Groovy) and Wrk for microservices in a leader-follower cluster, profiling performance to benchmark RPS, latency, and error rates.","Managed cloud infrastructure testing for Java, Go, Python, Rust and C++ frameworks across two instance families in a Kubernetes cluster, benchmarking performance metrics for over 500+ users.", "Utilized Python3, Flask, JSON, and the OpenAI API (LLM) to automate batch processing of 200+ code files using a data pipeline in DVC, reducing 10 hours of manual work and achieving 80% efficiency.", "Automated bash scripting within a Linux VM (Ubuntu) to streamline deployment and testing processes by 50%.", "Migrated from Azure ML Studio Classic to the new Azure ML Studio, rebuilding models in an AKS cluster, improving accessibility by 30%."],
    tags: ["Kubernetes", "Docker", "AWS EC2", "AWS RDS", "Apache Jmeter", "Python", "DVC (Data Version Control)", "OpenAI GPT-4o-preview", "Bash Scripting", "Azure ML Studio"],
    icon: "cloud",
  },
  {
    title: "Standard Chartered Bank",
    duration: "July 2021 - Apr 2023",
    subtitle: "Full Stack Software Engineer",
    details: [
      "Optimized transactional services, reducing average database (Postgres) load and latency by 10%, and improved Java Database Connection (JDBC) code to accelerate execution time by 2x.",
      "Refactored client-server code, utilizing Apache Log4j for bug fixing, EJB/Java EE (MVC) in backend, and DAO with Hibernate for data access, while migrating the frontend from JSP (JavaServer Pages) to React.js.",
      "Implemented unit tests (JUnit) with SonarQube and integration tests using Jenkins pipeline for code reviews, ensuring code quality >80% throughout the Software Development Life Cycle (SDLC)."
    ],
    tags: [
      "React.js",
      "HTML",
      "Java (EJB)",
      "Hibernate",
      "TypeScript",
      "Internal Bootstrap",
      "Jenkins",
      "Sonarqube",
      "Control-M",
      "Bash Scripting",
      "JIRA"
    ],
    icon: "finance",
  },
  {
    title: "Navriti Technologies",
    duration: "Sep 2020 - Mar 2021",
    subtitle: "Frontend Intern",
    details: [

    ],
    tags: ["Java", "IonicJS", "Bootstrap3", "ExpressJS", "Figma", "cURL"],
    icon: "qrcode",
  }
];

export const education = [
  {
    title: "M.S in Information Systems",
    duration: "2023 - Present",
    subtitle: "Carnegie Mellon University, Pittsburgh",
    details: [],
    tags: [
      "Object Oriented Programming in Java",
      "Cloud Computing",
      "Relational Database Management System",
      "Devops (CI/CD)",
      "Web Application Development",
      "NoSQL Databases",
      "Blockchain Fundamentals",
      "Digital Transformation",
    ],
    icon: "graduation-cap",
  },
  {
    title: "B.Tech. in Engineering",
    duration: "2017-2021",
    subtitle: "National Institute of Technology, Tiruchirappalli",
    details: [],
    tags: ["Data Analytics", "Introduction to C/C++", "Product Development Strategies"],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/theneweracoder",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/somawatvinay/",
      },
    ],
  },
  // {
  //   label: "Resources",
  //   data: [
  //     {
  //       text: "Enable Dark/Light Mode",
  //       func: "enableDarkMode()",
  //     },
  //     {
  //       text: "Print this page",
  //       func: "window.print()",
  //     },
  //     {
  //       text: "Clone this page",
  //       link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //     },
  //   ],
  // },
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/hv301099/",
      },
      {
        text: "Email",
        link: "mailto:hv@andrew.cmu.edu"
      },
      {
        text: "Resume",
        link: "https://drive.google.com/file/d/10sgH00YP9okiIAVuQjj8OiobIiwJsgFB/view?usp=sharing"
      }
      // {
      //   text: "Twitter",
      //   link: "https://twitter.com/thesigmakid",
      // },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
      // {
      //   text: "Github/vinaysomawat.github.io",
      //   link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      // },
    ],
  }
  // {
  //   label: "copyright-text",
  //   data: [
  //     "Made with &hearts; by Vinay Somawat.",
  //     "&copy; No Copyrights. Feel free to use this template.",
  //   ],
  // },
];
