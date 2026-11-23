export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: 'internship' | 'fulltime' | 'contract';
  description: string[];
  skills: string[];
  impactMetric?: string;
}

export interface ArchitectureNode {
  id: string;
  name: string;
  type: 'storage' | 'compute' | 'database' | 'security' | 'monitoring' | 'network';
  description: string;
  details: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'cloud-iac' | 'serverless-migration' | 'fullstack-ai';
  highlights: string[];
  technologies: string[];
  architecture?: {
    nodes: ArchitectureNode[];
    flow: string[];
  };
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: 'advanced' | 'proficient' | 'familiar'; highlight?: boolean }[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  badgeUrl?: string;
  verificationUrl?: string;
  skills: string[];
}

export const PROFILE = {
  name: "Arya Ingale",
  title: "Cloud & Platform Engineer | DevOps",
  subtitle: "Specializing in Infrastructure as Code (Terraform), Kubernetes (GKE/EKS), Serverless Architectures, and Automated GitOps CI/CD Pipelines.",
  location: "Mumbai, India",
  region: "ap-south-1 (Mumbai)",
  email: "aryaamol21@gmail.com",
  phone: "+91 9820172107",
  socials: {
    github: "https://github.com/ingalearya5",
    linkedin: "https://linkedin.com/in/ingalearya5",
  },
  availability: {
    status: "Open to Opportunities",
    openToRoles: ["DevOps Engineer", "Cloud Engineer", "Platform Engineer", "Site Reliability Engineer"],
  },
  metrics: [
    { label: "Terraform Resources Provisioned", value: "49+", detail: "Zero manual steps via automated apply" },
    { label: "Cloud Platforms", value: "GCP & AWS", detail: "GKE, ECS, EKS, Lambda, BigQuery" },
    { label: "Security & Observability", value: "100% Code", detail: "Workload Identity, DLP, SLO Burn-rates" },
    { label: "CGPA", value: "8.4 / 10", detail: "D. J. Sanghvi College of Engineering" },
  ],
  education: {
    institution: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
    location: "Mumbai, India",
    degree: "Bachelor of Technology in Information Technology",
    cgpa: "8.4 / 10",
    period: "Aug 2022 – May 2026",
  },
  experiences: [
    {
      id: "quantiphi",
      role: "Framework Engineer Intern",
      company: "Quantiphi",
      period: "Jul 2026 – Present",
      type: "internship",
      skills: ["Google Cloud (GCP)", "Terraform", "FastAPI", "React", "Runbooks", "Load Testing", "Spec-Driven Dev"],
      impactMetric: "Zero-drift IaC runbooks & validated load capacity",
      description: [
        "Practiced spec-driven development, committing specifications ahead of implementation and tracing each spec directly to its code and commits.",
        "Fixed bugs and improved reliability across Python FastAPI services and React interfaces at the application layer.",
        "Documented Terraform-managed GCP infrastructure through production runbooks, architecture diagrams, and operations guides, validating changes with plan reviews and load testing."
      ]
    },
    {
      id: "cimpress",
      role: "Software Engineer Intern",
      company: "Cimpress",
      period: "Jan 2026 – Jun 2026",
      type: "internship",
      skills: ["AWS", "Amazon ECS", "Amazon EKS", "AWS Lambda", "CI/CD", "Docker", "CloudWatch", "Cloud Armor"],
      impactMetric: "Migrated EKS to ECS, cutting operational maintenance",
      description: [
        "Migrated multiple Node.js microservices from Amazon EKS to ECS, re-architecting container deployments to simplify infrastructure and reduce operational overhead.",
        "Independently built and shipped a Python AWS Lambda service on a serverless architecture, owning the project end-to-end from development to production.",
        "Authored the complete CI/CD pipeline with automated deployments, and implemented CloudWatch logging and Cloud Armor protection for the service."
      ]
    },
    {
      id: "riverroute",
      role: "Web Development Intern",
      company: "Riverroute Creative Group",
      period: "Jun 2025 – Aug 2025",
      type: "internship",
      skills: ["PHP", "CodeIgniter", "MySQL", "MVC", "HTML5/CSS3", "Bootstrap", "React", "SEO Tuning"],
      impactMetric: "Delivered responsive web apps with end-to-end SEO optimization",
      description: [
        "Developed and deployed personalized doctor websites end-to-end using PHP (CodeIgniter 3 & 4) with MVC architecture and MySQL, delivering responsive, cross-browser interfaces.",
        "Implemented SEO optimization across client websites to significantly improve search engine visibility, page performance, and organic discoverability."
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: "retail-data-platform",
      title: "Cloud-Native Retail Data Platform",
      tagline: "Enterprise GCP Data Lakehouse provisioned via Terraform with GKE, Workload Identity & SLO Alerting",
      category: "cloud-iac",
      featured: true,
      technologies: ["GCP", "Terraform", "GKE", "Helm", "FastAPI", "BigQuery", "Cloud DLP", "Cloud Monitoring", "Python", "Docker"],
      metrics: [
        { label: "IaC Resources", value: "49" },
        { label: "Manual Steps", value: "0" },
        { label: "Credentials", value: "Keyless (Workload Identity)" },
        { label: "Observability", value: "Burn-Rate SLO Alerts" }
      ],
      highlights: [
        "Architected an end-to-end GCP data platform with Terraform, provisioning 49 resources (private GKE cluster, custom VPC, Cloud NAT, Artifact Registry, BigQuery) in a single automated apply with zero manual steps.",
        "Built a Python FastAPI service ingesting CSV data from Cloud Storage into BigQuery, transforming records via SQL into an analytics-ready star schema, packaged with Helm and deployed to private GKE.",
        "Enforced security and observability as code using Workload Identity (eliminating service account JSON keys), least-privilege IAM policies, automated Cloud DLP PII data scanning, and Cloud Monitoring SLOs with burn-rate alerts."
      ],
      architecture: {
        flow: [
          "1. CSV files uploaded to secured Google Cloud Storage buckets",
          "2. Event triggers FastAPI ingestion microservice deployed via Helm on Private GKE",
          "3. Cloud DLP scans incoming data stream in-flight for PII masking",
          "4. Data loaded and transformed via SQL into star-schema analytical tables in BigQuery",
          "5. Cloud Monitoring tracks latency & ingestion SLOs with multi-window burn-rate alerts"
        ],
        nodes: [
          {
            id: "storage",
            name: "Cloud Storage (GCS)",
            type: "storage",
            description: "Encrypted raw data bucket with lifecycle management",
            details: ["Zero public access", "KMS envelope encryption", "Automatic archiving"],
            badge: "Ingestion"
          },
          {
            id: "gke",
            name: "Private GKE Node Pool",
            type: "compute",
            description: "FastAPI containerized workers orchestrated via Helm",
            details: ["No external IPs on worker nodes", "Cloud NAT egress", "Horizontal Pod Autoscaler (HPA)"],
            badge: "Compute"
          },
          {
            id: "security",
            name: "Workload Identity & DLP",
            type: "security",
            description: "Zero static service account keys & in-flight PII redaction",
            details: ["Kubernetes Service Account mapped to GCP IAM", "Automated DLP inspection templates", "Least-privilege bindings"],
            badge: "Security"
          },
          {
            id: "bigquery",
            name: "BigQuery Star Schema",
            type: "database",
            description: "High-performance analytical warehouse with partition pruning",
            details: ["Fact & dimension star schema", "Automated SQL transformations", "Optimized query clustering"],
            badge: "Analytics"
          },
          {
            id: "monitoring",
            name: "Cloud Monitoring SLOs",
            type: "monitoring",
            description: "Observability as code with error budget burn-rate alerts",
            details: ["99.9% ingestion success objective", "Multi-window burn rate calculation", "Automated incident routing"],
            badge: "Observability"
          }
        ]
      }
    },
    {
      id: "microservices-migration",
      title: "Microservices Re-Architecture & Serverless",
      tagline: "EKS-to-ECS Migration & End-to-End Serverless Python Microservice on AWS",
      category: "serverless-migration",
      featured: true,
      technologies: ["AWS", "Amazon ECS", "Amazon EKS", "AWS Lambda", "CI/CD", "Docker", "CloudWatch", "Cloud Armor", "Python", "Node.js"],
      metrics: [
        { label: "Deployment", value: "Automated CI/CD" },
        { label: "Architecture", value: "ECS & Serverless Lambda" },
        { label: "Protection", value: "Cloud Armor + CloudWatch" }
      ],
      highlights: [
        "Migrated multiple Node.js microservices from Amazon EKS to ECS, re-architecting container deployments to simplify infrastructure and eliminate unnecessary Kubernetes operational overhead.",
        "Independently built, tested, and shipped a Python AWS Lambda service on a serverless architecture, managing the full lifecycle from requirements to production deployment.",
        "Authored the complete CI/CD pipeline with automated validation and deployment steps, integrating CloudWatch structured logging and Cloud Armor protection."
      ]
    },
    {
      id: "ai-notes-platform",
      title: "AI-Powered Note Taking SaaS Platform",
      tagline: "Full-stack real-time platform with Gemini API, LangChain semantic search, and PDF Q&A",
      category: "fullstack-ai",
      featured: false,
      technologies: ["Next.js", "LangChain", "Gemini API", "Clerk Auth", "Convex DB", "TypeScript", "Tailwind CSS"],
      metrics: [
        { label: "AI Engine", value: "Gemini API" },
        { label: "Vector Search", value: "LangChain" },
        { label: "Auth & DB", value: "Clerk + Convex" }
      ],
      highlights: [
        "Built a full-stack SaaS platform with Next.js, Clerk authentication, and Convex DB for scalable, real-time user data management.",
        "Integrated LangChain and Gemini API to power semantic vector search, AI-driven PDF note-taking, and automated Q&A.",
        "Engineered a rich live editor supporting autosave, markdown rendering, and PDF export."
      ]
    }
  ] as ProjectItem[],
  skillCategories: [
    {
      category: "Cloud Platforms",
      description: "Production infrastructure on GCP & AWS",
      skills: [
        { name: "Google Cloud (GCP)", level: "advanced", highlight: true },
        { name: "Amazon Web Services (AWS)", level: "advanced", highlight: true },
        { name: "Private GKE", level: "advanced", highlight: true },
        { name: "Amazon ECS & EKS", level: "advanced", highlight: true },
        { name: "AWS Lambda (Serverless)", level: "advanced" },
        { name: "BigQuery", level: "advanced" },
        { name: "Cloud Storage & S3", level: "advanced" },
        { name: "Cloud Armor & VPCs", level: "proficient" },
        { name: "API Gateway", level: "proficient" },
      ]
    },
    {
      category: "Orchestration, IaC & DevOps",
      description: "Automated provisioning and container lifecycle",
      skills: [
        { name: "Terraform", level: "advanced", highlight: true },
        { name: "Kubernetes (K8s)", level: "advanced", highlight: true },
        { name: "Docker", level: "advanced", highlight: true },
        { name: "Helm Charts", level: "advanced", highlight: true },
        { name: "GitLab CI/CD", level: "advanced" },
        { name: "GitHub Actions", level: "advanced" },
        { name: "Linux / Bash", level: "advanced" },
        { name: "Git & GitOps", level: "advanced" },
      ]
    },
    {
      category: "Observability & Security",
      description: "Metrics, SLOs, and zero-trust identity",
      skills: [
        { name: "Workload Identity (Keyless IAM)", level: "advanced", highlight: true },
        { name: "Cloud Monitoring & Alerting", level: "advanced", highlight: true },
        { name: "SLOs & Burn-Rate Alerting", level: "advanced", highlight: true },
        { name: "CloudWatch Logging", level: "advanced" },
        { name: "Cloud DLP (PII Scans)", level: "proficient" },
        { name: "Least-Privilege IAM", level: "advanced" },
        { name: "Load Testing", level: "proficient" },
      ]
    },
    {
      category: "Languages & Frameworks",
      description: "Software engineering and service development",
      skills: [
        { name: "Python", level: "advanced", highlight: true },
        { name: "FastAPI", level: "advanced", highlight: true },
        { name: "Node.js & Express", level: "advanced" },
        { name: "TypeScript & JavaScript", level: "advanced" },
        { name: "React.js & Next.js", level: "advanced" },
        { name: "SQL", level: "advanced" },
        { name: "PHP", level: "proficient" },
        { name: "Java", level: "proficient" },
      ]
    },
    {
      category: "Databases & Storage",
      description: "Relational, analytical, and vector stores",
      skills: [
        { name: "BigQuery", level: "advanced" },
        { name: "MySQL / Cloud SQL", level: "advanced" },
        { name: "MongoDB", level: "proficient" },
        { name: "DynamoDB", level: "proficient" },
        { name: "PineconeDB (Vector)", level: "proficient" },
        { name: "Convex DB", level: "proficient" },
      ]
    },
    {
      category: "AI & Platform Tooling",
      description: "GenAI integrations and developer tooling",
      skills: [
        { name: "Gemini API", level: "advanced", highlight: true },
        { name: "LangChain", level: "advanced" },
        { name: "Claude API", level: "advanced" },
        { name: "HuggingFace", level: "proficient" },
        { name: "GitHub Copilot", level: "advanced" },
        { name: "Prompt Engineering", level: "advanced" },
      ]
    }
  ] as SkillCategory[],
  certifications: [
    {
      id: "gcp-ace",
      name: "Google Cloud Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud",
      issueDate: "Nov 2026",
      expiryDate: "Nov 2029",
      skills: ["GCP Architecture", "Compute & GKE", "VPC & Security", "IAM & Billing", "Cloud Operations"]
    },
    {
      id: "claude-developer",
      name: "Claude Certified Developer – Foundations",
      issuer: "Anthropic",
      issueDate: "Sep 2026",
      expiryDate: "Sep 2027",
      skills: ["LLM Applications", "Prompt Engineering", "Tool Use", "Evaluation"]
    }
  ] as CertificationItem[]
};
