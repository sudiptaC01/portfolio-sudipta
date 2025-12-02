import { FaReact, FaJs, FaHtml5, FaCss3, FaDocker, FaMicrosoft, FaCloud, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiTerraform, SiKubernetes, SiMysql, SiRedis } from 'react-icons/si';
import { GrCube } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";


export const resumeData = {
    name: "Sudipta Chakraborty",
    title: "Azure Cloud Developer | Cloud Architect | Generative AI Developer",
    location: "Hyderabad, India",
    email: "sudipta89chakraborty@gmail.com",
    phone: "+91 9960465324",
    linkedin: "https://linkedin.com/in/chakrabortysudipta",
    summary: "Azure Cloud Developer with 14 years building enterprise cloud-native applications across Microsoft, Siemens, IBM. Expert in designing and implementing scalable Azure cloud solutions, leading feature delivery across full-stack applications, and delivering 1M+ annual cost optimization through infrastructure modernization. Specialized in cloud development patterns, generative AI integration, and DevOps automation.",
    skills: [
        { name: "C# .NET Core", icon: SiDotnet, level: 95 },
        { name: "Azure PaaS", icon: VscAzure, level: 95 },
        { name: "Azure DevOps", icon: VscAzureDevops, level: 90 },
        { name: "Microservices", icon: GrCube, level: 90 },
        { name: "Azure SQL", icon: DiMsqlServer, level: 85 },
        { name: "Generative AI", icon: FaBrain, level: 85 },
        { name: "React", icon: FaReact, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 }           
    ],
    experience: [
        {
            id: 1,
            role: "Staff Software Engineer (Azure Full Stack)",
            company: "Newmark",
            period: "June 2025 – Present",
            description: "Building end-to-end Commercial Real Estate analytics platform. Developed Client Dashboard processing $500M+ property portfolio data. Implemented generative AI for lease abstract extraction.",
            tech: ["C# .NET Core", "React", "Azure Foundry","Azure Function App", "Azure Blob and Queue Storage", "Azure SQL", "Azure DevOps", "Azure Databricks"]
        },
        {
            id: 2,
            role: "Senior Technical Advisor",
            company: "Microsoft",
            period: "April 2022 – June 2025",
            description: "Drove technical excellence in cloud development. Pioneered Generative AI developer training for 425+ engineers. Built automation tools reducing manual effort by 40%.",
            tech: ["Azure PaaS", "Generative AI using GPT-4o", "Azure Open AI", "Semantic Kernel", "C#", ".NET Core"]
        },
        {
            id: 3,
            role: "Cloud Engineer – Azure PaaS",
            company: "Microsoft",
            period: "Nov 2019 – April 2022",
            description: "Support for complex cloud-native solutions on Azure. Diagnosed and fixed production issues maintaining 99.99% uptime.",
            tech: ["APIM", "Azure Storage", "Azure Functions", "Azure Service Bus", "Azure Redis Cache", "ARM"]
        },
        {
            id: 4,
            role: "Senior Advisory Consultant",
            company: "IBM",
            period: "June 2019 – Nov 2019",
            description: "Architected enterprise-scale CI/CD infrastructure for big data modernization. Built deployment automation reducing manual release effort by 70%.",
            tech: ["Azure DevOps", "Terraform", "Docker"]
        },
        {
            id: 5,
            role: "Software Engineer",
            company: "Siemens",
            period: "Oct 2017 – June 2019",
            description: "Core platform engineer building Mind Sphere Industrial IoT platform. Built Fleet Manager microservice backend handling real-time telemetry.",
            tech: ["C# .NET", "IoT", "Azure", "React", "Azure SQL", "Web API", "Terraform"]
        },
        {
            id: 6,
            role: "Process Automation Developer",
            company: "Infosys",
            period: "Jan 2017 – Oct 2017",
            description: "Delivered enterprise process automation solutions for Fortune 500 telecom client, automating 15+ business workflows and reducing operational overhead by 30%. Built monitoring and alerting system for 24/7 bot operations, achieving 99.5% uptime SLA.",
            tech: ["RPA Platform", "C# .NET", "Business Process Automation"]
        },
        {
            id: 7,
            role: "Senior Developer/Technology Analyst",
            company: "Infosys",
            period: "Feb 2012 – Jan 2017",
            description: "Led mission-critical full-stack application and integration development for European energy sector clients, with 6 months onsite in Germany. Built energy trading platforms processing $1B+ daily transactions. Developed Energy Economics Platform integrating 10+ external data sources for 200+ trading desk users. Created responsive web dashboards and SPAs using ASP.NET, C#, Web API.",
            tech: ["C# .NET", "Azure App Services", "Azure Service Bus", "Azure SQL", "Web API", "HTML5/JavaScript"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Commercial Real Estate Analytics Platform",
            description: "End-to-end Commercial Real Estate analytics platform delivering $2M+ annual revenue impact. Features real-time data consolidation and AI-driven lease abstraction.",
            tags: ["React", ".NET Core", "Azure AI Foundry", "Azure SQL","Azure Function App","Azure Storage"],
            link: "#"
        },
        {
            id: 2,
            title: "Generative AI Automation Suite",
            description: "Intelligent case categorization and automated troubleshooting workflows using Azure Open AI, reducing manual effort by 40%.",
            tags: ["Azure OpenAI", "C#", "Semantic Kernel","GPT-4o"],
            link: "#"
        },
        {
            id: 3,
            title: "MindSphere IIoT Platform",
            description: "Industrial IoT platform serving 100+ manufacturing enterprises. Ingests 10M+ events/day with 99.99% uptime.",
            tags: ["IoT", "Azure", "Microservices", "React"],
            link: "#"
        },
        {
            id: 4,
            title: "Energy Trading Platform",
            description: "Solution For Energy Economics Integration Platform processing $1M+ daily energy transactions with sub-second latency.",
            tags: ["ETRM", "Energy Economics", "Azure Integration Services", "C# .NET"],
            link: "#"
        }
    ],
    education: [
        {
            degree: "B.Tech in Computer Science and Engineering",
            school: "West Bengal University of Technology",
            period: "2007 – 2011",
            grade: "CGPA: 8.37 / 10.0"
        }
    ],
    social: {
        linkedin: "https://linkedin.com/in/chakrabortysudipta",
        email: "mailto:sudipta89chakraborty@gmail.com"
    },
    credentials: {
        innovationAwards: [
            {
                title: "Microsoft Global Hackathon 2023",
                subtitle: "Award Winner",
                description: "Led team of 6 developers",
                impact: "Demonstrated innovation in product development",
                year: "2023",
                category: "Innovation"
            },
            {
                title: "Microsoft Global Hackathon 2021",
                subtitle: "Award Winner",
                description: "Led team of 5 developers",
                impact: "Recognized for technical excellence",
                year: "2021",
                category: "Innovation"
            },
            {
                title: "Infosys Global Hackathon 2015",
                subtitle: "Winner, Pune DC",
                description: "Innovation in enterprise solutions",
                impact: "Pioneered automation solutions",
                year: "2015",
                category: "Innovation"
            }
        ],
        excellenceAwards: [
            {
                title: "Architect of Excellence (ACE) 2022",
                subtitle: "Best Leadership Team",
                description: "Recognized for technical leadership",
                impact: "Led high-performing development teams",
                year: "2022",
                category: "Leadership"
            },
            {
                title: "Architect of Excellence (ACE) 2021",
                subtitle: "Best Team & Star Achiever",
                description: "FY21 H1 Outstanding Performance",
                impact: "Delivered exceptional technical solutions",
                year: "2021",
                category: "Excellence"
            }
        ],
        microsoftCertifications: [
            {
                name: "Azure AI Fundamentals",
                code: "AI-900",
                year: "2020",
                impact: "Validated expertise in AI & Machine Learning"
            },
            {
                name: "MCSA: Web Applications",
                code: "MCSA",
                year: "2016",
                impact: "Certified full-stack web development expertise"
            },
            {
                name: "Developing Azure and Web Services",
                code: "Exam 487",
                year: "2014",
                impact: "Mastered cloud service development"
            },
            {
                name: "Developing ASP.NET MVC Applications",
                code: "Exam 486",
                year: "2014",
                impact: "Expert in enterprise web frameworks"
            },
            {
                name: "Programming in C#",
                code: "Exam 483",
                year: "2013",
                impact: "Core .NET development proficiency"
            },
            {
                name: "HTML5 with JavaScript and CSS3",
                code: "Exam 480",
                year: "2012",
                impact: "Modern web development foundations"
            }
        ],
        professionalCertifications: [
            {
                name: "SAFe 4 Agilist",
                issuer: "Scaled Agile",
                year: "2019",
                impact: "Certified in enterprise agile methodologies"
            }
        ],
        leadershipImpact: [
            {
                metric: "425+",
                label: "Engineers Trained",
                description: "Generative AI & Cloud Development"
            },
            {
                metric: "3x",
                label: "Hackathon Winner",
                description: "Innovation & Product Development"
            },
            {
                metric: "Multiple",
                label: "SME Recognitions",
                description: "Technical Excellence & Mentorship"
            }
        ]
    }
};
