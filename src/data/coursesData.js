import { Target, BookOpen, Clock, Palette, Code, Cloud, Database, Cpu } from 'lucide-react';

export const coursesData = {
    spm: {
        id: 'spm',
        title: "Software Project Management",
        icon: Target,
        color: "indigo",
        hours: 60,
        modules: 10,
        description: "Master the art of managing software projects from initiation to closure",
        curriculum: [
            {
                module: 1,
                title: "Introduction to Software Project Management",
                hours: 6,
                topics: ["Project fundamentals", "PM roles & responsibilities", "SDLC overview", "Module Exam"]
            },
            {
                module: 2,
                title: "Project Initiation & Planning",
                hours: 10,
                topics: ["Project charter", "Requirements engineering", "Scope management", "Scheduling", "Module Exam"]
            },
            {
                module: 3,
                title: "Agile Project Management",
                hours: 12,
                topics: ["Agile principles", "Scrum framework", "Kanban method", "Agile estimation", "Module Exam"]
            },
            {
                module: 4,
                title: "Risk & Quality Management",
                hours: 8,
                topics: ["Risk identification", "Quality assurance", "Testing strategies", "Module Exam"]
            },
            {
                module: 5,
                title: "Team Management & Communication",
                hours: 6,
                topics: ["Team development", "Communication planning", "Leadership skills", "Module Exam"]
            },
            {
                module: 6,
                title: "Cost & Resource Management",
                hours: 6,
                topics: ["Cost estimation", "Resource allocation", "Earned Value Management", "Module Exam"]
            },
            {
                module: 7,
                title: "Project Monitoring & Control",
                hours: 4,
                topics: ["Progress tracking", "Change management", "Performance metrics", "Module Exam"]
            },
            {
                module: 8,
                title: "Project Tools & Technologies",
                hours: 4,
                topics: ["Jira, Trello, MS Project", "Version control", "Collaboration tools", "Module Exam"]
            },
            {
                module: 9,
                title: "Project Closure & Lessons Learned",
                hours: 2,
                topics: ["Closure checklist", "Post-implementation review", "Documentation", "Module Exam"]
            },
            {
                module: 10,
                title: "Case Studies & Practical Exercises",
                hours: 2,
                topics: ["Real-world cases", "Best practices", "Group discussions", "Module Exam"]
            }
        ]
    },
    webdesign: {
        id: 'webdesign',
        title: "Web Design",
        icon: BookOpen,
        color: "pink",
        hours: 60,
        modules: 10,
        description: "Create beautiful, responsive, and user-friendly websites",
        curriculum: [
            {
                module: 1,
                title: "Introduction to Web Design",
                hours: 4,
                topics: ["Web design principles", "Design thinking", "Current trends", "Career paths", "Module Exam"]
            },
            {
                module: 2,
                title: "HTML5 Fundamentals",
                hours: 8,
                topics: ["HTML structure", "Semantic HTML", "Forms & inputs", "HTML5 APIs", "Module Exam"]
            },
            {
                module: 3,
                title: "CSS3 & Styling",
                hours: 10,
                topics: ["CSS selectors", "Box model", "Flexbox", "Grid layout", "Animations", "Module Exam"]
            },
            {
                module: 4,
                title: "Responsive Web Design",
                hours: 6,
                topics: ["Mobile-first design", "Media queries", "Responsive images", "Breakpoints", "Module Exam"]
            },
            {
                module: 5,
                title: "UI/UX Design Principles",
                hours: 8,
                topics: ["User research", "Wireframing", "Prototyping", "Usability testing", "Accessibility", "Module Exam"]
            },
            {
                module: 6,
                title: "JavaScript for Designers",
                hours: 8,
                topics: ["JavaScript basics", "DOM manipulation", "Events", "Form validation", "Animations", "Module Exam"]
            },
            {
                module: 7,
                title: "CSS Frameworks",
                hours: 6,
                topics: ["Bootstrap 5", "Tailwind CSS", "Custom themes", "Component libraries", "Module Exam"]
            },
            {
                module: 8,
                title: "Design Tools & Workflow",
                hours: 4,
                topics: ["Figma", "Adobe XD", "Design systems", "Version control for designers", "Module Exam"]
            },
            {
                module: 9,
                title: "Web Performance & SEO",
                hours: 4,
                topics: ["Page speed optimization", "SEO basics", "Meta tags", "Analytics", "Module Exam"]
            },
            {
                module: 10,
                title: "Portfolio Project",
                hours: 2,
                topics: ["Project planning", "Final portfolio website", "Deployment", "Presentation"]
            }
        ]
    },
    ecommerce: {
        id: 'ecommerce',
        title: "E-commerce",
        icon: Clock,
        color: "green",
        hours: 60,
        modules: 10,
        description: "Build and manage successful online stores and marketplaces",
        curriculum: [
            {
                module: 1,
                title: "Introduction to E-commerce",
                hours: 6,
                topics: ["E-commerce overview", "Business models", "Market analysis", "Legal considerations", "Module Exam"]
            },
            {
                module: 2,
                title: "E-commerce Platforms",
                hours: 8,
                topics: ["Shopify", "WooCommerce", "Magento", "Custom solutions", "Platform comparison", "Module Exam"]
            },
            {
                module: 3,
                title: "Product Management",
                hours: 6,
                topics: ["Catalog management", "Product photography", "Descriptions", "Inventory systems", "Module Exam"]
            },
            {
                module: 4,
                title: "Payment Systems & Security",
                hours: 8,
                topics: ["Payment gateways", "SSL certificates", "PCI compliance", "Fraud prevention", "Module Exam"]
            },
            {
                module: 5,
                title: "Shopping Cart & Checkout",
                hours: 6,
                topics: ["Cart functionality", "Checkout optimization", "Abandoned cart recovery", "Guest checkout", "Module Exam"]
            },
            {
                module: 6,
                title: "Digital Marketing for E-commerce",
                hours: 8,
                topics: ["SEO for e-commerce", "Google Ads", "Social media marketing", "Email campaigns", "Module Exam"]
            },
            {
                module: 7,
                title: "Customer Experience & Support",
                hours: 6,
                topics: ["Customer service", "Returns & refunds", "Reviews management", "Chatbots", "Module Exam"]
            },
            {
                module: 8,
                title: "Analytics & Optimization",
                hours: 6,
                topics: ["Google Analytics", "Conversion rate optimization", "A/B testing", "KPIs", "Module Exam"]
            },
            {
                module: 9,
                title: "Shipping & Logistics",
                hours: 4,
                topics: ["Shipping options", "Order fulfillment", "International shipping", "Tracking systems", "Module Exam"]
            },
            {
                module: 10,
                title: "E-commerce Project",
                hours: 2,
                topics: ["Store setup", "Product launch", "Marketing plan", "Final presentation"]
            }
        ]
    },
    phpmysql: {
        id: 'phpmysql',
        title: "PHP & MySQL",
        icon: Target,
        color: "purple",
        hours: 60,
        modules: 10,
        description: "Develop dynamic web applications with PHP and MySQL databases",
        curriculum: [
            {
                module: 1,
                title: "Introduction to PHP",
                hours: 6,
                topics: ["PHP basics", "Syntax", "Variables & data types", "Operators", "Development environment"]
            },
            {
                module: 2,
                title: "PHP Control Structures",
                hours: 6,
                topics: ["If statements", "Loops", "Switch statements", "Functions", "Include & require"]
            },
            {
                module: 3,
                title: "Arrays & String Manipulation",
                hours: 6,
                topics: ["Array types", "Array functions", "String functions", "Regular expressions"]
            },
            {
                module: 4,
                title: "Forms & User Input",
                hours: 6,
                topics: ["Form handling", "GET & POST", "Input validation", "File uploads", "Security"]
            },
            {
                module: 5,
                title: "MySQL Database Fundamentals",
                hours: 8,
                topics: ["Database design", "SQL basics", "CRUD operations", "Joins", "Normalization"]
            },
            {
                module: 6,
                title: "PHP & MySQL Integration",
                hours: 8,
                topics: ["MySQLi", "PDO", "Prepared statements", "Error handling", "Transactions"]
            },
            {
                module: 7,
                title: "Sessions & Cookies",
                hours: 4,
                topics: ["Session management", "Cookie handling", "User authentication", "Login systems"]
            },
            {
                module: 8,
                title: "Object-Oriented PHP",
                hours: 8,
                topics: ["Classes & objects", "Inheritance", "Interfaces", "Namespaces", "MVC pattern"]
            },
            {
                module: 9,
                title: "Advanced Topics",
                hours: 6,
                topics: ["API development", "JSON", "AJAX", "Security best practices", "Error logging"]
            },
            {
                module: 10,
                title: "Final Web Application Project",
                hours: 2,
                topics: ["Project planning", "Full-stack development", "Testing", "Deployment"]
            }
        ]
    },
    uxui: {
        id: 'uxui',
        title: "UX/UI Design",
        icon: Palette,
        color: "blue",
        hours: 60,
        modules: 10,
        description: "Design intuitive, user-centered digital products with strong UX research and modern UI practices",
        curriculum: [
            {
                module: 1,
                title: "Introduction to UX/UI Design",
                hours: 4,
                topics: [
                    "UX vs UI",
                    "Design thinking process",
                    "User-centered design",
                    "UX/UI career paths"
                ]
            },
            {
                module: 2,
                title: "User Research & Analysis",
                hours: 6,
                topics: [
                    "User personas",
                    "User interviews",
                    "Surveys",
                    "Empathy maps",
                    "User journey mapping"
                ]
            },
            {
                module: 3,
                title: "Information Architecture",
                hours: 6,
                topics: [
                    "Content structure",
                    "Sitemaps",
                    "User flows",
                    "Navigation design",
                    "Card sorting"
                ]
            },
            {
                module: 4,
                title: "Wireframing & Low-Fidelity Design",
                hours: 6,
                topics: [
                    "Wireframe principles",
                    "Low-fidelity mockups",
                    "Layout patterns",
                    "UX annotations"
                ]
            },
            {
                module: 5,
                title: "UI Design Fundamentals",
                hours: 8,
                topics: [
                    "Color theory",
                    "Typography",
                    "Spacing & grids",
                    "Visual hierarchy",
                    "Design consistency"
                ]
            },
            {
                module: 6,
                title: "Design Tools",
                hours: 8,
                topics: [
                    "Figma basics",
                    "Components & variants",
                    "Auto layout",
                    "Design systems",
                    "Collaboration workflow"
                ]
            },
            {
                module: 7,
                title: "Prototyping & Interaction Design",
                hours: 6,
                topics: [
                    "Interactive prototypes",
                    "Micro-interactions",
                    "Transitions & animations",
                    "Usability testing"
                ]
            },
            {
                module: 8,
                title: "Accessibility & Usability",
                hours: 6,
                topics: [
                    "WCAG guidelines",
                    "Color contrast",
                    "Keyboard navigation",
                    "Inclusive design",
                    "Usability heuristics"
                ]
            },
            {
                module: 9,
                title: "UX/UI for Web & Mobile",
                hours: 6,
                topics: [
                    "Responsive design",
                    "Mobile UX patterns",
                    "Design handoff to developers",
                    "UX documentation"
                ]
            },
            {
                module: 10,
                title: "UX/UI Portfolio Project",
                hours: 4,
                topics: [
                    "Case study creation",
                    "End-to-end UX process",
                    "UI mockups",
                    "Portfolio presentation"
                ]
            }
        ]
    },
    mobileapp: {
        id: 'mobileapp',
        title: "Mobile App Development (React Native)",
        icon: Target, // you can replace with another icon if you want
        color: "teal",
        hours: 60,
        modules: 10,
        description: "Build cross-platform mobile applications using React Native",
        curriculum: [
            {
                module: 1,
                title: "Introduction to Mobile Development",
                hours: 4,
                topics: ["Mobile platforms overview", "React Native introduction", "Project setup"]
            },
            {
                module: 2,
                title: "React Native Basics",
                hours: 6,
                topics: ["Components", "JSX", "Props & State", "Styling basics"]
            },
            {
                module: 3,
                title: "Navigation & Routing",
                hours: 6,
                topics: ["React Navigation", "Stack & Tab navigation", "Passing params"]
            },
            {
                module: 4,
                title: "Working with APIs",
                hours: 8,
                topics: ["Fetch API", "Axios", "Handling JSON", "Error handling"]
            },
            {
                module: 5,
                title: "State Management",
                hours: 6,
                topics: ["Context API", "Redux basics", "Managing global state"]
            },
            {
                module: 6,
                title: "Styling & UI Components",
                hours: 8,
                topics: ["Flexbox layout", "Custom components", "Using UI libraries"]
            },
            {
                module: 7,
                title: "Device Features",
                hours: 6,
                topics: ["Camera & media", "GPS & location", "Push notifications"]
            },
            {
                module: 8,
                title: "Testing & Debugging",
                hours: 6,
                topics: ["Debugging tools", "Unit testing", "Integration testing"]
            },
            {
                module: 9,
                title: "App Deployment",
                hours: 6,
                topics: ["Building APK/IPA", "App Store & Play Store submission", "CI/CD basics"]
            },
            {
                module: 10,
                title: "Final Project",
                hours: 4,
                topics: ["Plan & build an app", "User testing", "Presentation & demo"]
            }
        ]
    },
    reactjs: {
        id: 'reactjs',
        title: "React.js with Ant Design",
        icon: Code, // you can import Code from lucide-react
        color: "orange",
        hours: 60,
        modules: 10,
        description: "Build modern web applications using React.js and Ant Design components",
        curriculum: [
            {
                module: 1,
                title: "Introduction to React.js",
                hours: 6,
                topics: ["React overview", "JSX syntax", "Components & props", "Project setup"]
            },
            {
                module: 2,
                title: "State & Lifecycle",
                hours: 6,
                topics: ["useState hook", "useEffect hook", "Functional components", "Class components overview"]
            },
            {
                module: 3,
                title: "Event Handling & Forms",
                hours: 6,
                topics: ["Handling events", "Controlled components", "Form validation", "Form layout with Ant Design"]
            },
            {
                module: 4,
                title: "Routing & Navigation",
                hours: 6,
                topics: ["React Router", "Nested routes", "Dynamic routing", "Navigation best practices"]
            },
            {
                module: 5,
                title: "Ant Design Components",
                hours: 8,
                topics: ["Buttons, Layouts, Grids", "Forms & Inputs", "Tables & Pagination", "Menus & Modals"]
            },
            {
                module: 6,
                title: "State Management",
                hours: 6,
                topics: ["Context API", "Redux basics", "Using Redux Toolkit", "Connecting state to Ant Design components"]
            },
            {
                module: 7,
                title: "API Integration",
                hours: 6,
                topics: ["Fetching data", "Axios", "Error handling", "Displaying data in Ant Design tables"]
            },
            {
                module: 8,
                title: "Styling & Theming",
                hours: 6,
                topics: ["CSS modules", "Styled-components", "Customizing Ant Design themes", "Responsive design"]
            },
            {
                module: 9,
                title: "Testing & Debugging",
                hours: 6,
                topics: ["React Developer Tools", "Unit testing with Jest", "Component testing with React Testing Library"]
            },
            {
                module: 10,
                title: "Final Project",
                hours: 4,
                topics: ["Build a full React app", "Integrate Ant Design UI", "Deploy to Vercel/Netlify"]
            }
        ]
    },
    aws: {
        id: 'aws',
        title: "AWS Cloud with Ant Design",
        icon: Cloud, // import Cloud from lucide-react
        color: "slate",
        hours: 60,
        modules: 10,
        description: "Learn to deploy and manage cloud applications on AWS using Ant Design for UI",
        curriculum: [
            {
                module: 1,
                title: "Introduction to Cloud Computing",
                hours: 4,
                topics: ["Cloud concepts", "AWS overview", "Cloud service models", "Account setup"]
            },
            {
                module: 2,
                title: "AWS Compute Services",
                hours: 6,
                topics: ["EC2 instances", "Lambda functions", "Elastic Beanstalk", "Autoscaling"]
            },
            {
                module: 3,
                title: "AWS Storage & Databases",
                hours: 6,
                topics: ["S3 buckets", "EBS & EFS", "RDS & DynamoDB", "Storage best practices"]
            },
            {
                module: 4,
                title: "Networking & Security",
                hours: 6,
                topics: ["VPC", "Subnets & routing", "Security groups", "IAM roles & policies"]
            },
            {
                module: 5,
                title: "AWS Monitoring & Management",
                hours: 6,
                topics: ["CloudWatch", "CloudTrail", "Logging", "Alerts & notifications"]
            },
            {
                module: 6,
                title: "Serverless Applications",
                hours: 6,
                topics: ["API Gateway", "Lambda", "DynamoDB integration", "Serverless architecture"]
            },
            {
                module: 7,
                title: "CI/CD on AWS",
                hours: 6,
                topics: ["CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline"]
            },
            {
                module: 8,
                title: "Deploying Web Applications",
                hours: 8,
                topics: ["React/Ant Design frontend", "Hosting on S3 & CloudFront", "Domain setup", "SSL/TLS"]
            },
            {
                module: 9,
                title: "AWS Best Practices",
                hours: 6,
                topics: ["Cost optimization", "Security practices", "High availability", "Scalability"]
            },
            {
                module: 10,
                title: "Final Cloud Project",
                hours: 6,
                topics: ["Deploy full-stack app", "Integrate Ant Design UI", "Testing & monitoring", "Presentation"]
            }
        ]
    },
    python: {
        id: 'python',
        title: "Python",
        icon: Code, // import Code from lucide-react
        color: "tangerine",
        hours: 60,
        modules: 10,
        description: "Learn Python programming and build applications",
        curriculum: [
            {
                module: 1,
                title: "Introduction to Python",
                hours: 4,
                topics: ["Python overview", "Installing Python", "IDE setup", "First program", "Module Exam"]
            },
            {
                module: 2,
                title: "Python Basics",
                hours: 6,
                topics: ["Variables & data types", "Operators", "Input/output", "Basic syntax", "Module Exam"]
            },
            {
                module: 3,
                title: "Control Structures",
                hours: 6,
                topics: ["If statements", "Loops", "Break & continue", "Comprehensions", "Module Exam"]
            },
            {
                module: 4,
                title: "Functions & Modules",
                hours: 6,
                topics: ["Defining functions", "Parameters & return", "Modules & packages", "Importing libraries"]
            },
            {
                module: 5,
                title: "Data Structures",
                hours: 6,
                topics: ["Lists, Tuples, Sets, Dictionaries", "Operations", "Iteration", "Use cases"]
            },
            {
                module: 6,
                title: "Object-Oriented Python",
                hours: 6,
                topics: ["Classes & objects", "Inheritance", "Methods & attributes", "Encapsulation"]
            },
            {
                module: 7,
                title: "Working with Files & Exceptions",
                hours: 6,
                topics: ["Reading/writing files", "Exception handling", "Context managers"]
            },
            {
                module: 8,
                title: "Python Libraries",
                hours: 8,
                topics: ["Requests", "Pandas basics", "NumPy basics", "Matplotlib introduction"]
            },
            {
                module: 9,
                title: "Web Applications with Ant Design",
                hours: 8,
                topics: ["Frontend integration", "Using Ant Design components", "Forms & tables", "Styling & theming"]
            },
            {
                module: 10,
                title: "Final Python Project",
                hours: 4,
                topics: ["Plan & build a project", "Integrate Ant Design UI", "Testing & presentation"]
            }
        ]
    },
    nodejs: {
        id: 'nodejs',
        title: "Node.js & Express.js with MongoDB",
        icon: Code, // import Code from lucide-react
        color: "ruby",
        hours: 60,
        modules: 10,
        description: "Build backend applications with Node.js, Express.js, and MongoDB using Ant Design for UI",
        curriculum: [
            {
                module: 1,
                title: "Introduction to Node.js",
                hours: 4,
                topics: ["Node.js overview", "Installation & setup", "REPL & NPM basics", "First Node app"]
            },
            {
                module: 2,
                title: "JavaScript Fundamentals",
                hours: 6,
                topics: ["Variables & data types", "Functions & scope", "ES6 features", "Modules"]
            },
            {
                module: 3,
                title: "Express.js Basics",
                hours: 6,
                topics: ["Creating server", "Routing", "Middleware", "Request & response handling"]
            },
            {
                module: 4,
                title: "Working with MongoDB",
                hours: 6,
                topics: ["MongoDB setup", "CRUD operations", "Collections & documents", "Indexes"]
            },
            {
                module: 5,
                title: "RESTful APIs",
                hours: 8,
                topics: ["Designing APIs", "Endpoints & methods", "Express routes", "Error handling"]
            },
            {
                module: 6,
                title: "Authentication & Authorization",
                hours: 6,
                topics: ["JWT authentication", "User registration & login", "Role-based access"]
            },
            {
                module: 7,
                title: "Integrating Ant Design Frontend",
                hours: 6,
                topics: ["Connecting frontend with backend", "Forms & tables", "Styling & theming"]
            },
            {
                module: 8,
                title: "Testing & Debugging",
                hours: 6,
                topics: ["Unit tests with Jest", "Integration testing", "Debugging tools", "Error logging"]
            },
            {
                module: 9,
                title: "Deployment & CI/CD",
                hours: 6,
                topics: ["Deploying to Heroku/Vercel", "Environment variables", "CI/CD basics"]
            },
            {
                module: 10,
                title: "Final Project",
                hours: 6,
                topics: ["Build a full-stack app", "Integrate MongoDB & Express API", "Presentation & demo"]
            }
        ]
    },
    mongodb: {
    id: 'mongodb',
    title: "MongoDB Fundamentals",
    icon: Database, // import Database from lucide-react
    color: "mustard", // reference your global green color
    hours: 50,
    modules: 10,
    description: "Learn to build and manage databases using MongoDB for modern applications",
    curriculum: [
        {
            module: 1,
            title: "Introduction to MongoDB",
            hours: 4,
            topics: [
                "What is MongoDB?",
                "NoSQL vs SQL",
                "Installation & setup",
                "MongoDB Atlas overview"
            ]
        },
        {
            module: 2,
            title: "MongoDB Basics",
            hours: 6,
            topics: [
                "Databases & collections",
                "Documents & BSON format",
                "CRUD operations basics",
                "Indexes introduction"
            ]
        },
        {
            module: 3,
            title: "Data Modeling",
            hours: 6,
            topics: [
                "Schema design",
                "Embedded vs referenced documents",
                "Relationships in MongoDB",
                "Normalization & denormalization"
            ]
        },
        {
            module: 4,
            title: "Advanced CRUD Operations",
            hours: 6,
            topics: [
                "Query operators",
                "Projections",
                "Sorting & filtering",
                "Aggregation basics"
            ]
        },
        {
            module: 5,
            title: "Aggregation Framework",
            hours: 6,
            topics: [
                "Pipeline stages",
                "Group, Match, Project",
                "Lookup & unwind",
                "Practical aggregation examples"
            ]
        },
        {
            module: 6,
            title: "Indexes & Performance",
            hours: 6,
            topics: [
                "Creating indexes",
                "Compound indexes",
                "Query optimization",
                "Performance best practices"
            ]
        },
        {
            module: 7,
            title: "Replication & Sharding",
            hours: 6,
            topics: [
                "Replica sets overview",
                "Sharding basics",
                "High availability",
                "Scaling MongoDB"
            ]
        },
        {
            module: 8,
            title: "Security & Backup",
            hours: 4,
            topics: [
                "User roles & permissions",
                "Authentication methods",
                "Encryption at rest",
                "Backup & restore"
            ]
        },
        {
            module: 9,
            title: "Integrating MongoDB with Node.js",
            hours: 4,
            topics: [
                "MongoDB driver for Node.js",
                "Mongoose basics",
                "Connecting and querying",
                "Error handling"
            ]
        },
        {
            module: 10,
            title: "Final Project",
            hours: 4,
            topics: [
                "Design a database for a real-world app",
                "Implement CRUD operations",
                "Use aggregation & indexing",
                "Presentation & demo"
            ]
        }
    ]
},
ml: {
    id: 'ml',
    title: "Machine Learning (ML) Fundamentals",
    icon: Cpu, // import Cpu from lucide-react
    color: "blue", // reference your global blue color palette
    hours: 60,
    modules: 10,
    description: "Learn the fundamentals of Machine Learning (ML), including supervised and unsupervised learning, model evaluation, and real-world applications.",
    curriculum: [
        {
            module: 1,
            title: "Introduction to Machine Learning",
            hours: 4,
            topics: [
                "What is Machine Learning?",
                "History and applications",
                "Types of ML: Supervised, Unsupervised, Reinforcement",
                "ML workflow overview"
            ]
        },
        {
            module: 2,
            title: "Python for ML",
            hours: 6,
            topics: [
                "Python basics for data science",
                "NumPy & Pandas",
                "Data manipulation and cleaning",
                "Visualization with Matplotlib & Seaborn"
            ]
        },
        {
            module: 3,
            title: "Supervised Learning",
            hours: 6,
            topics: [
                "Linear regression",
                "Logistic regression",
                "Decision trees",
                "Evaluation metrics: accuracy, precision, recall"
            ]
        },
        {
            module: 4,
            title: "Unsupervised Learning",
            hours: 6,
            topics: [
                "Clustering: K-Means, Hierarchical",
                "Dimensionality reduction: PCA",
                "Association rules",
                "Applications of unsupervised learning"
            ]
        },
        {
            module: 5,
            title: "Feature Engineering & Preprocessing",
            hours: 6,
            topics: [
                "Handling missing data",
                "Encoding categorical variables",
                "Scaling & normalization",
                "Feature selection techniques"
            ]
        },
        {
            module: 6,
            title: "Model Evaluation & Tuning",
            hours: 6,
            topics: [
                "Train/Test split & Cross-validation",
                "Hyperparameter tuning",
                "Overfitting & underfitting",
                "Model selection strategies"
            ]
        },
        {
            module: 7,
            title: "Advanced ML Algorithms",
            hours: 6,
            topics: [
                "Random Forests",
                "Support Vector Machines",
                "Gradient Boosting",
                "Introduction to Neural Networks"
            ]
        },
        {
            module: 8,
            title: "Deep Learning Basics",
            hours: 6,
            topics: [
                "Introduction to deep learning",
                "Perceptrons and activation functions",
                "Feedforward Neural Networks",
                "Frameworks: TensorFlow / PyTorch overview"
            ]
        },
        {
            module: 9,
            title: "Practical ML Projects",
            hours: 6,
            topics: [
                "Predictive modeling project",
                "Image classification project",
                "Natural language processing project",
                "Deploying ML models"
            ]
        },
        {
            module: 10,
            title: "Final Project",
            hours: 4,
            topics: [
                "Build an end-to-end ML solution",
                "Collect and preprocess data",
                "Train, evaluate, and optimize models",
                "Presentation & demo"
            ]
        }
    ]
}


};