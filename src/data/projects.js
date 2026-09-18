export const projects = [
  {
    id: "pg-sphere",
    title: "PGSphere — PG Management System",
    date: "Jun 2026",
    shortDesc: "Multi-tenant PG management system with tenant isolation, room allocation, and student management.",
    description: "PGSphere is designed for property owners and managers to digitally operate Paying Guest accommodations. It centralizes tenant records, automates workflows, and provides a secure role-based access system.",
    problem: "PG owners often struggle to manage multiple tenants, track payments, and handle complaints efficiently using disjointed digital or paper-based systems.",
    solution: "Developed a multi-tenant platform with role-based workflows for PG admins and students to streamline operations.",
    features: [
      "Multi-tenant PG management with tenant isolation",
      "Room allocation and student management",
      "Secure JWT authentication",
      "Role-based workflows for admins and students",
      "QR payments integration",
      "Rent tracking and complaint management",
      "Notices and dashboards for streamlined operations"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
    architecture: {
      client: "React.js Dashboards",
      api: "Express.js REST API",
      server: "Node.js Application Server",
      auth: "JWT Authentication",
      database: "Relational MySQL Database"
    },
    challenges: "Designing a relational database schema that efficiently handles multi-tenancy without compromising query performance or data isolation.",
    learnings: "Mastered advanced SQL joins, indexing strategies, and implementing robust role-based middleware for API protection.",
    github: "https://github.com/vishaljha/pg-sphere",
    live: "https://pg-sphere.demo"
  },
  {
    id: "v-mart",
    title: "V Mart — E-Commerce Grocery Website",
    date: "May 2026",
    shortDesc: "Responsive full-stack grocery e-commerce platform with 10+ categories and secure authentication.",
    description: "V Mart is a comprehensive grocery e-commerce solution built to handle modern online shopping requirements. It provides a seamless user experience from product discovery to secure checkout.",
    problem: "Local grocery stores need a digital presence with dynamic pricing and real-time cart management to provide a smooth online shopping experience.",
    solution: "Developed a custom, high-performance full-stack application that handles complex state management on the frontend and secure data processing on the backend.",
    features: [
      "Responsive UI with 10+ product categories",
      "Secure JWT authentication",
      "Dynamic cart with real-time pricing",
      "Coupon functionality and checkout flow",
      "Third-party API integration",
      "Admin dashboard for inventory and order tracking",
      "Sales analytics with optimized performance"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "REST APIs"],
    architecture: {
      client: "React.js Context/State",
      api: "RESTful Endpoints via Express.js",
      server: "Node.js Environment",
      auth: "JWT Validation",
      database: "MongoDB & MySQL Hybrid"
    },
    challenges: "Managing state synchronization between the cart and checkout process while ensuring real-time stock validation.",
    learnings: "Deepened understanding of hybrid database architectures and implementing secure payment processing flows.",
    github: "https://github.com/vishaljha/v-mart",
    live: "https://v-mart.demo"
  },
  {
    id: "talent-scope",
    title: "Talent Scope — AI-Powered Interview Preparation Platform",
    date: "Mar 2026",
    shortDesc: "AI interview platform with role-specific questions, Web Speech API voice responses, and ATS resume checking.",
    description: "Talent Scope bridges the gap between candidates and interview preparation by providing personalized, AI-driven mock interviews and resume parsing capabilities.",
    problem: "Candidates lack accessible tools to practice role-specific interview questions with realistic, conversational AI feedback.",
    solution: "Built a platform that provides an ATS-style checking mechanism and an interactive AI avatar for personalized mock interviews.",
    features: [
      "AI interview platform with role-specific questions",
      "Web Speech API voice responses and AI avatar",
      "ATS resume checker with PDF parsing",
      "Job matching and personalized AI question generation",
      "Razorpay payments integration",
      "Credit-based access and secure JWT authentication",
      "Automated PDF performance reports"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs", "JWT", "Razorpay"],
    architecture: {
      client: "React.js Interface",
      api: "Express.js API Gateway",
      server: "Node.js Core",
      auth: "JWT & Firebase Auth",
      database: "MongoDB Document Store"
    },
    challenges: "Integrating Web Speech API and processing AI responses in real-time without blocking the user interface.",
    learnings: "Gained experience in payment gateway integration (Razorpay), PDF parsing, and handling real-time audio streams in the browser.",
    github: "https://github.com/vishaljha/talent-scope",
    live: "https://talent-scope.demo"
  }
];
