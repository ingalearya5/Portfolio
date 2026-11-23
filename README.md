# Arya Ingale — Cloud & Platform Engineer Portfolio

A modern, high-performance **Cloud & Platform Engineering portfolio** styled after cloud observability control planes (Datadog, Grafana, and GCP Console). Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

[![System Status](https://img.shields.io/badge/System_Status-100%25_Operational-06B6D4?style=flat-square&logo=google-cloud)](https://github.com/ingalearya5)
[![Certifications](https://img.shields.io/badge/GCP_ACE_%26_Claude-Certified-3B82F6?style=flat-square)](https://github.com/ingalearya5)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel_Ready-000000?style=flat-square&logo=vercel)](https://vercel.com)

---

## 🌟 Key Features

* **Control Plane Telemetry Ribbon:** Live node health status, region indicator (`ap-south-1`), availability badge, and verified certifications.
* **Hero & KPI Observability Board:** Real-time simulated telemetry console, Terraform plan status, and key infrastructure metrics (49+ IaC resources, zero manual service account keys).
* **Interactive Architecture Blueprints:**
  * **GCP Retail Data Platform:** Clickable topology graph (`Cloud Storage` $\to$ `Private GKE` $\to$ `Workload Identity & DLP` $\to$ `BigQuery Star Schema` $\to$ `Cloud Monitoring SLOs`) with an interactive node inspector and tabbed codebase manifests (`terraform/main.tf`, `helm/deployment.yaml`, `monitoring/slo.yaml`).
  * **AWS Microservices Migration (Cimpress):** Interactive *Before & After* comparative toggle showcasing the migration from Amazon EKS to Amazon ECS + serverless AWS Lambda.
  * **AI-Powered Note Taking SaaS:** Full-stack architecture overview with Next.js, Clerk, Convex DB, LangChain, and Gemini API.
* **Production Workloads (Changelog):** Quantiphi, Cimpress, and Riverroute internships with impact summaries and expandable **Engineering Runbooks**.
* **Cloud Service Catalog & Verified Certifications:** Official verification badges for **Google Cloud Associate Cloud Engineer (ACE)** and **Claude Certified Developer**, with a categorized, searchable technology matrix.
* **Interactive Terminal Drawer (`arya-ctl`):** Slide-up CLI with command history and built-in commands (`help`, `skills`, `certs`, `exp`, `projects`, `terraform plan`, `curl /contact`).

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16 (App Router) with Static HTML Export
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS 4 with custom dark obsidian theme & engineering grid patterns
* **Icons:** Lucide React & Custom Cloud SVGs (GCP, AWS, GitHub, LinkedIn)
* **Animation:** Framer Motion

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ingalearya5/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build production static export:**
   ```bash
   npm run build
   ```
   Generates optimized static HTML in the `out/` folder.

---

## 🌐 1-Click Manual Deployment to Vercel

This project is configured with zero-config static export (`output: "export"`), making it deployable on **Vercel** in under 60 seconds:

1. **Commit and push to your GitHub account:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete devops portfolio website"
   git branch -M main
   git remote add origin https://github.com/ingalearya5/portfolio.git
   git push -u origin main
   ```

2. **Import into Vercel:**
   * Go to [vercel.com](https://vercel.com) and log in.
   * Click **Add New...** $\to$ **Project**.
   * Import your `portfolio` repository.
   * Vercel will automatically detect **Next.js**. Leave all default settings as they are.
   * Click **Deploy**.

3. **Done!** Your portfolio is live with free global CDN and HTTPS at `https://your-project.vercel.app`.

---

## 💻 `arya-ctl` CLI Commands

Click the `>_ arya-ctl` floating button on the site or use the button in the navigation bar to run:

| Command | Action |
|---|---|
| `help` | Lists all available terminal commands |
| `arya-ctl get skills` | Outputs grouped cloud & software engineering stack |
| `arya-ctl get certs` | Displays Google Cloud ACE & Claude certification details |
| `arya-ctl get exp` | Summarizes Quantiphi, Cimpress, and Riverroute internships |
| `arya-ctl get projects` | Lists featured architecture projects |
| `terraform plan` | Outputs simulated candidate hiring plan |
| `curl /contact` | Displays email, phone, LinkedIn, and GitHub links |
| `clear` | Resets terminal session |
| `exit` | Closes terminal drawer |

---

## 📬 Contact & Connect

* **Arya Ingale** — Cloud & Platform Engineer
* **Email:** [aryaamol21@gmail.com](mailto:aryaamol21@gmail.com)
* **LinkedIn:** [linkedin.com/in/ingalearya5](https://linkedin.com/in/ingalearya5)
* **GitHub:** [github.com/ingalearya5](https://github.com/ingalearya5)
