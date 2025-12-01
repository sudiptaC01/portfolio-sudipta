import { FaReact, FaJs, FaHtml5, FaCss3, FaDocker, FaMicrosoft, FaCloud, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiTerraform, SiKubernetes, SiMysql, SiRedis } from 'react-icons/si';

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
        { name: "Azure PaaS", icon: FaMicrosoft, level: 95 },
        { name: "React", icon: FaReact, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "Generative AI", icon: FaBrain, level: 85 },
        { name: "Azure DevOps", icon: FaCloud, level: 90 },
        { name: "Microservices", icon: FaCloud, level: 90 },
        { name: "SQL / Cosmos DB", icon: SiMysql, level: 85 },
    ],
    experience: [
        {
            id: 1,
            role: "Staff Software Engineer (Full Stack)",
            company: "Newmark",
            period: "June 2025 – Present",
            description: "Building end-to-end Commercial Real Estate analytics platform. Developed Client Dashboard processing $500M+ property portfolio data. Implemented generative AI for lease abstract extraction.",
            tech: ["C# .NET Core", "React", "Azure Open AI", "Azure SQL"]
        },
        {
            id: 2,
            role: "Senior Technical Advisory",
            company: "Microsoft",
            period: "April 2022 – June 2025",
            description: "Drove technical excellence in cloud development. Pioneered Generative AI developer training for 425+ engineers. Built automation tools reducing manual effort by 40%.",
            tech: ["Azure PaaS", "Generative AI", "C#", "React"]
        },
        {
            id: 3,
            role: "Cloud Engineer – Azure PaaS",
            company: "Microsoft",
            period: "Nov 2019 – April 2022",
            description: "Full-stack application developer for complex cloud-native solutions. Diagnosed and fixed production issues maintaining 99.99% uptime.",
            tech: ["Azure Functions", "Service Bus", "Redis", "Terraform"]
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
            tech: ["C# .NET", "IoT", "Azure", "React"]
        },
        {
            id: 6,
            role: "Senior Developer/Technology Analyst",
            company: "Infosys",
            period: "Feb 2012 – Jan 2017",
            description: "Led mission-critical full-stack application and integration development for European energy sector clients, with 6 months onsite in Germany. Built energy trading platforms processing $1B+ daily transactions. Developed Energy Economics Platform integrating 10+ external data sources for 200+ trading desk users. Created responsive web dashboards and SPAs using ASP.NET, C#, Web API.",
            tech: ["C# .NET", "Azure Service Bus", "Azure SQL", "ASP.NET", "Web API", "HTML5/JavaScript", "D3.js"]
        },
        {
            id: 7,
            role: "Process Automation Developer",
            company: "Infosys",
            period: "Jan 2017 – Oct 2017",
            description: "Delivered enterprise process automation solutions for Fortune 500 telecom client, automating 15+ business workflows and reducing operational overhead by 30%. Built monitoring and alerting system for 24/7 bot operations, achieving 99.5% uptime SLA.",
            tech: ["RPA Platform", "Azure Cloud", "C# .NET", "Business Process Automation"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "CRE Analytics Platform",
            description: "End-to-end Commercial Real Estate analytics platform delivering $2M+ annual revenue impact. Features real-time data consolidation and AI-driven lease abstraction.",
            tags: ["React", ".NET Core", "Azure OpenAI", "Azure SQL"],
            link: "#"
        },
        {
            id: 2,
            title: "Gen AI Automation Suite",
            description: "Intelligent case categorization and automated troubleshooting workflows using Azure Open AI, reducing manual effort by 40%.",
            tags: ["Azure OpenAI", "C#", "Semantic Kernel"],
            link: "#"
        },
        {
            id: 3,
            title: "Mind Sphere IoT",
            description: "Industrial IoT platform serving 100+ manufacturing enterprises. Ingests 10M+ events/day with 99.99% uptime.",
            tags: ["IoT", "Azure", "Microservices", "React"],
            link: "#"
        },
        {
            id: 4,
            title: "Energy Trading Platform",
            description: "Structured Pricing Tool backend processing $1B+ daily energy transactions with sub-second latency.",
            tags: ["FinTech", ".NET", "Azure Service Bus"],
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
    }
};
