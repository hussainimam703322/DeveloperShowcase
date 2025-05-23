import { Project, BlogPost } from "@shared/schema";

// Sample projects data (used only when API call fails)
export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "TaskMaster Pro",
    description: "A collaborative task management platform with real-time updates, custom workflows, and integrated calendar.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/taskmaster",
    codeUrl: "https://github.com/example/taskmaster",
    tags: ["react", "typescript", "firebase"],
    featured: true
  },
  {
    id: 2,
    title: "WeatherWise",
    description: "Advanced weather forecasting application with interactive maps, historical data analysis, and personalized alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/weatherwise",
    codeUrl: "https://github.com/example/weatherwise",
    tags: ["react", "node"],
    featured: true
  },
  {
    id: 3,
    title: "ShopStream",
    description: "A modern e-commerce platform with live inventory updates, integrated payment processing, and AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/shopstream",
    codeUrl: "https://github.com/example/shopstream",
    tags: ["nextjs", "node", "mongodb"],
    featured: true
  },
  {
    id: 4,
    title: "CodeMentor",
    description: "Interactive coding platform with live code execution, guided tutorials, and personalized learning paths for web development.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/codementor",
    codeUrl: "https://github.com/example/codementor",
    tags: ["react", "typescript", "aws"],
    featured: true
  },
  {
    id: 5,
    title: "FitTrack",
    description: "Comprehensive fitness tracking application with customizable workout plans, progress analytics, and nutrition monitoring.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/fittrack",
    codeUrl: "https://github.com/example/fittrack",
    tags: ["react", "graphql", "express"],
    featured: true
  },
  {
    id: 6,
    title: "MetricsMaster",
    description: "Comprehensive analytics dashboard with customizable widgets, real-time data visualization, and automated reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/metricsmaster",
    codeUrl: "https://github.com/example/metricsmaster",
    tags: ["node", "typescript", "d3js"],
    featured: true
  }
];

// Sample blog posts data (used only when API call fails)
export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large-scale React applications using TypeScript to improve code quality and developer experience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Tutorial",
    publishDate: new Date("2023-06-15")
  },
  {
    id: 2,
    title: "Why Server Components Will Change Frontend Development",
    excerpt: "An exploration of React Server Components and how they're poised to transform the way we think about frontend architecture.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Opinion",
    publishDate: new Date("2023-05-28")
  },
  {
    id: 3,
    title: "Optimizing Performance in Modern Web Applications",
    excerpt: "A comprehensive guide to performance optimization techniques for JavaScript applications, from code splitting to caching strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Guide",
    publishDate: new Date("2023-04-12")
  }
];

// Developer information
export const developerInfo = {
  name: "Imam Hussain",
  title: "Java Full Stack Developer",
  bio: "I build modern web applications with Java, Spring Boot and React. Passionate about creating scalable architectures and intuitive user experiences with a focus on security and performance.",
  skills: ["Java", "Spring Boot", "React.js", "Spring Security", "PostgreSQL", "MySQL", "Microservices", "RESTful APIs", "Postman", "Git"],
  education: {
    university: "Sathyabama Institute of Science and Technology",
    location: "Chennai, India",
    degree: "B.Tech - Computer science and engineering",
    gpa: "CGPA: 8.91",
    period: "July. 2020 - May 2024"
  },
  
  image: "/images/profile.jpg",
  location: "Chennai, India",
  email: "hussainimam78621@gmail.com",
  availability: "Mon-Fri, 9:00 AM - 5:00 PM IST",
  socialLinks: {
    github: "https://github.com/hussainimam703322",
    linkedin: "https://www.linkedin.com/in/imam-hussain-b27086221/",
    twitter: "https://twitter.com/"
  }
};

// Technical Skills
export const technicalSkills = [
  { category: "Programming Languages", skills: ["Core Java", "Python"] },
  { category: "Front-end Technologies", skills: ["HTML", "CSS", "JavaScript", "React JS"] },
  { category: "Back-end Technologies", skills: ["Spring Boot", "Spring Security", "RESTful API", "Microservices"] },
  { category: "Testing & Automation Tools", skills: ["Selenium", "TestNG", "Cucumber", "JMeter", "Postman", "JUnit", "Robot Framework"] },
  { category: "Version Control & CI/CD", skills: ["Git", "GitHub", "Jenkins"] },
  { category: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Experience with IDEs", skills: ["VsCode", "IntelliJ IDEA", "Eclipse", "Pycharm"] }
];

// Projects data (updated with your real projects)
export const projectsData = [
  {
    id: 1,
    title: "ATM Management System",
    description: "A full-stack ATM simulation using React JS for the frontend and Spring Boot with RESTful APIs for backend operations. Implemented Spring Security for secure authentication and role-based access control, ensuring user data privacy. Integrated Microservices architecture for handling transactions, account management, and authentication as independent services.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "#",
    codeUrl: "https://github.com/hussainimam703322",
    tags: ["Spring Boot", "React.js", "Microservices", "Spring Security"],
    featured: true
  },
  {
    id: 2,
    title: "Expense Manager",
    description: "Built an interactive expense tracking dashboard using React JS, HTML, CSS, and JavaScript, ensuring an intuitive UI/UX. Developed a robust backend with Spring Boot and RESTful APIs, allowing users to manage budgets, track expenditures, and generate reports. Integrated Microservices architecture for modular expense categorization, authentication, and report generation, enhancing scalability.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "#",
    codeUrl: "https://github.com/hussainimam703322",
    tags: ["React.js", "Spring Boot", "RESTful API", "Microservices"],
    featured: true
  },
  {
    id: 3,
    title: "Moralizer",
    description: "Created a web application using React JS for the UI and Spring Boot for backend processing of article summaries. Implemented RESTful APIs to extract, summarize, and display article content while ensuring secure API interaction.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "#",
    codeUrl: "https://github.com/hussainimam703322",
    tags: ["React.js", "Spring Boot", "RESTful API", "Content Processing"],
    featured: true
  }
];
