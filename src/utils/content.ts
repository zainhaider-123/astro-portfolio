import type {
  aboutMe as AboutMeType,
  experience,
  navLink,
  project,
  techStack,
} from "./types";

export const navLinks: navLink[] = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contact", href: "#" },
];

export const featuredProjects: project[] = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    image: "/project.webp",
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    image: "/project.webp",
  },
];

export const aboutMe: AboutMeType = {
  intro:
    "I am a full stack developer with experience in building web applications using JavaScript, React, Node.js, and other technologies. I am passionate about creating high-quality software that solves real-world problems. I am always eager to learn new technologies and improve my skills.",

  featured: [
    "I am always open to new opportunities and collaborations. If you are interested in working together, please feel free to reach out to me. I would love to hear from you!. I am always open to new opportunities and collaborations. If you are interested in working together, please feel free to reach out to me.",
    "I am always open to new opportunities and collaborations. If you are interested in working together, please feel free to reach out to me. I would love to hear from you!. I am always open to new opportunities and collaborations. If you are interested in working together, please feel free to reach out to me. I would love to hear from you!",
    "I am always open to new opportunities and collaborations. If you are interested in working together, please feel free to reach out to me. I would love to hear from you!. I am always open to new opportunities and collaborations. If you are interested in working together, please feel free to reach out to me. I would love to hear from you!",
  ],

  techStack: {
    featured: [
      {
        name: "TypeScript",
        logo: "typescript",
        color: "#3a7cc7",
      },
      {
        name: "Node.js",
        logo: "nodejs",
        color: "#3c873a",
      },
      {
        name: "Python",
        logo: "python",
        color: "#3776AB",
      },
      {
        name: "React",
        logo: "react",
        color: "#61dafb",
      },
      {
        name: "Tailwind",
        logo: "tailwindcss",
        color: "#1baec4",
      },
      {
        name: "MongoDB",
        logo: "mongodb",
        color: "#47a248",
      },
      {
        name: "Git",
        logo: "git",
        color: "#f1502f",
      },
    ],
    other: [
      {
        name: "React",
        logo: "react",
      },
      {
        name: "Next.js",
        logo: "nextjs",
      },
      {
        name: "Astro",
        logo: "astro",
      },
      {
        name: "Svelte",
        logo: "svelte",
      },
      {
        name: "Tailwind CSS",
        logo: "tailwindcss",
      },
      {
        name: "Node.js",
        logo: "nodejs",
      },
      {
        name: "Express",
        logo: "express",
      },
      {
        name: "REST APIs",
        logo: "restapi",
      },
      {
        name: "Django",
        logo: "django",
      },
      {
        name: "FastAPI",
        logo: "fastapi",
      },
      {
        name: "PostgreSQL",
        logo: "postgresql",
      },
      {
        name: "MongoDB",
        logo: "mongodb",
      },
      {
        name: "Redis",
        logo: "redis",
      },
      {
        name: "Git",
        logo: "git",
      },
      {
        name: "Docker",
        logo: "docker",
      },
      {
        name: "Vercel",
        logo: "vercel",
      }
    ]
  },

  experience: [
    {
      title: "Software Engineer",
      company: "Tech Company",
      duration: "Jan 2020 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Frontend Developer",
      company: "Web Agency",
      duration: "Jun 2018 - Dec 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

  ],

  education: [
    {
      title: "NED University of Engineering and Technology",
      degree: "Bachelor's in Computer Science",
      duration: "2014 - 2018",
      content: [
        "I hold a Bachelor's degree in Computer Science from NED University of Engineering and Technology. During my studies, I gained a solid foundation in computer science principles, algorithms, data structures, and software development. I also completed several projects that allowed me to apply my knowledge and develop practical skills."
      ]
    }
  ],

  sections: [
    {
      heading: "hobbies",
      content: [
        "When I'm not coding, I spend time playing competitive and story-driven games. I enjoy tactical shooters like Valorant and Counter-Strike, which I like for their strategic gameplay and teamwork.",
        "I'm also a big fan of AAA titles, especially Souls-like games such as Dark Souls, Elden Ring, and Sekiro: Shadows Die Twice. I enjoy the challenge, level design, and deep gameplay systems these games offer.",
        "Gaming is something that naturally connects with my interest in technology, problem-solving, and interactive systems."
      ]
    }
  ]
}

export const myExperience: experience[] = aboutMe.experience
export const aboutMeFeatured: string[] = aboutMe.featured
export const mySkill: techStack[] = aboutMe.techStack.featured
export const intro: string = aboutMe.intro