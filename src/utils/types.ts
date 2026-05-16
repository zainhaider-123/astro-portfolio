export interface navLink {
  name: string;
  href: string;
}

export interface skill {
  name: string;
  logo: string;
  color: string;
}

export interface experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface project {
  name: string;
  description: string;
  link: string;
  image: string;
}

export interface techStack {
  name: string;
  logo: string;
  color?: string;
}

export interface aboutMe {
  intro: string;
  featured: string[];
  techStack: {
    featured: techStack[];
    other: techStack[];
  };
  experience: experience[];
  education: {
    title: string;
    degree: string;
    duration: string;
    content: string[];
  }[];
  sections: {
    heading: string;
    content: string[];
  }[]
}