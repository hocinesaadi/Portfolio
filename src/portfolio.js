/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hocine Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hocine Saadi Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hi all, I'm Hocine👋",
  logo_name :"Hocine Saadi",
  nickname: "hocine_saadi",
  subTitle:
    "A passionate Software engineer 🔥, having experience in full stack development, data science and cloud computing .",
  resumeLink:
    "mailto:hocine.saadi.mi@gmail.com",
    githubProfile:"https://github.com/hocinesaadi"
  
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "",
  // linkedin: "",
  // gmail: "",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/hocinesaadi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hocine-saadi-467119141/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:hocine.saadi.mi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
 
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and CNN projects",
        
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
    
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "ion-logo-java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
    
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Deploying deep learning models on cloud ",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        
        
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
       
      ],
    },
    /*{
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        
      ],
      softwareSkills: [
       
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
    
      ],
    },*/
  ],
};


// Education Page

const degrees = {
  degrees: [
    {
      title: "bouira university",
      subtitle: " Master's degree Computer Science ",
      logo_path: "univ_boui-removebg-preview.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        
      ],
      website_link: "https://www.univ-bouira.dz/fr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data analytics",
      subtitle: "- google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VB77KC64ZUPK",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning Algorithms in Python from two Machine Learning & Data Science experts",
      subtitle: "- Deep Learning",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a20a3838-ae8c-4547-92d1-fee9e4c0d282/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/W6GNHC2WPB4W",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "-AWS Cloud",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/JE5R8XE3GRRD",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
   
   
  ],
};



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "aws.png",
};



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pic.JPG",
    description:
      "I am available on almost every social media. You can message me. I can help you with ML, AI, React, Data , Cloud .",
  },
 
  
};
const projects = {
  data: [
    {
      id: "0",
      name: "Brain Tumor segmentation ",
      url: "https://github.com/hocinesaadi/brain_tumor_segmentation_Unet",
      description: "The goal was to implement a U-Net to perform image segmentation of MRI scans of the brain, using TensorFlow and Keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-web",
      url: "",
      description:
        "A React .",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
       
      ],
    },
  
  
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/hocinesaadi/hocineda.github.io",
      description:
        "A simple command line interface  app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
        
      ],
    },
    
 
    {
      id: "7",
      name: "Automate-Excel-Python",
      url: "https://github.com/hocinesaadi/Automate-Excel-Python-",
      description:
        "automate Excel  With OpenPyXl",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      
      ],
    },
    {
      id: "8",
      name: "Data Analytics Projects",
      url: "https://github.com/hocinesaadi/Data-Analyst-Project",
      description:
        "",
      languages: [
    
      ],
    },
    
    {
      id: "11",
      name: "multimedia-project      ",
      url: "https://github.com/hocinesaadi/multimedia-project",
      description: "A simple static website related to multimedia service.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    

  ]
};


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  projects,
  contactPageData,
};
