"use client";

import React, { useState } from "react";
import { PROFILE, ArchitectureNode } from "@/data/profile";
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  Activity, 
  FileCode, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  HardDrive, 
  Sparkles, 
  RefreshCw, 
  Lock, 
  Cpu, 
  Workflow, 
  Code2, 
  Check, 
  Copy 
} from "lucide-react";
import { GcpIcon, AwsIcon } from "@/components/Icons";

export default function ArchitectureBlueprints() {
  const [activeProject, setActiveProject] = useState<string>("ai-notes-platform");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("gke");
  const [migrationView, setMigrationView] = useState<"before" | "after">("after");
  const [codeTab, setCodeTab] = useState<"terraform" | "helm" | "slo">("terraform");
  const [copied, setCopied] = useState(false);

  const retailProject = PROFILE.projects.find((p) => p.id === "retail-data-platform");
  const selectedNode = retailProject?.architecture?.nodes.find((n) => n.id === selectedNodeId) || retailProject?.architecture?.nodes[1];

  const codeSnippets = {
    terraform: `# Terraform: Private GKE Cluster & Workload Identity
resource "google_container_cluster" "primary" {
  name     = "retail-gke-prod"
  location = "asia-south1-a"

  # Enforce Private Cluster (No public IPs on worker nodes)
  private_cluster_config {
    enable_private_nodes    = true
    enable_private_endpoint = false
    master_ipv4_cidr_block  = "172.16.0.0/28"
  }

  # Zero static service account keys: Workload Identity
  workload_identity_config {
    workload_pool = "\${var.project_id}.svc.id.goog"
  }

  network    = google_compute_network.custom_vpc.self_link
  subnetwork = google_compute_subnetwork.k8s_subnet.self_link
}`,
    helm: `# Helm: FastAPI Ingestion Worker Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: retail-fastapi-ingest
  namespace: data-platform
spec:
  replicas: 3
  template:
    metadata:
      annotations:
        iam.gke.io/gcp-service-account: "ingest-sa@\${GCP_PROJECT}.iam.gserviceaccount.com"
    spec:
      serviceAccountName: k8s-ingest-sa
      containers:
      - name: ingest-worker
        image: asia-south1-docker.pkg.dev/prod/retail/api:v1.2.0
        resources:
          limits: { cpu: "500m", memory: "512Mi" }
          requests: { cpu: "200m", memory: "256Mi" }`,
    slo: `# Cloud Monitoring SLO: Pipeline Ingestion Error Budget
serviceLevelObjective:
  displayName: "99.9% 14-day Ingestion Success Rate"
  goal: 0.999
  rollingPeriod: "1209600s" # 14 days
  serviceLevelIndicator:
    requestBased:
      goodTotalRatio:
        goodServiceFilter: 'metric.type="custom.googleapis.com/ingest/success"'
        totalServiceFilter: 'metric.type="custom.googleapis.com/ingest/total"'
alertPolicies:
  - name: "Fast Burn Rate (14.4x over 1h) - P1 Incident"
  - name: "Slow Burn Rate (6x over 6h) - Slack Notification"`
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case "storage": return <HardDrive className="h-5 w-5 text-amber-400" />;
      case "compute": return <Cpu className="h-5 w-5 text-cyan-400" />;
      case "security": return <Lock className="h-5 w-5 text-emerald-400" />;
      case "database": return <Database className="h-5 w-5 text-blue-400" />;
      case "monitoring": return <Activity className="h-5 w-5 text-purple-400" />;
      default: return <Server className="h-5 w-5 text-slate-400" />;
    }
  };

  return (
    <section id="architecture" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="flex flex-col gap-4 mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300 w-fit">
          <Workflow className="h-3.5 w-3.5" />
          <span>FEATURED PROJECTS & ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Projects & Architecture
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Deep dives into the full-stack, GenAI and cloud systems I have built, from RAG pipelines and web apps to the infrastructure that deploys them.
        </p>

        {/* Project Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveProject("ai-notes-platform")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeProject === "ai-notes-platform"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
            }`}
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Full-Stack AI SaaS (Next.js + Gemini)</span>
          </button>

          <button
            onClick={() => setActiveProject("retail-data-platform")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeProject === "retail-data-platform"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
            }`}
          >
            <GcpIcon className="h-4 w-4" />
            <span>GCP Retail Data Platform (Terraform + GKE)</span>
          </button>

          <button
            onClick={() => setActiveProject("microservices-migration")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeProject === "microservices-migration"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
            }`}
          >
            <AwsIcon className="h-4 w-4" />
            <span>AWS Microservices Re-Architecture (EKS → ECS)</span>
          </button>

        </div>
      </div>

      {/* VIEW 1: GCP Retail Data Platform (Flagship Interactive Diagram) */}
      {activeProject === "retail-data-platform" && retailProject && (
        <div className="space-y-8">
          {/* Top Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {retailProject.metrics?.map((m) => (
              <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                <div className="text-xs font-mono text-slate-400">{m.label}</div>
                <div className="text-xl font-bold font-mono text-white mt-1">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Interactive Topology Board */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B1222] p-5 sm:p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800/80 gap-2">
              <div>
                <span className="text-xs font-mono text-cyan-400">PIPELINE TOPOLOGY</span>
                <h3 className="text-lg font-bold text-white">Click any node to inspect infrastructure parameters</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                GCP region: asia-south1
              </span>
            </div>

            {/* Interconnected Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-6">
              {retailProject.architecture?.nodes.map((node, index) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`relative flex flex-col items-start p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/15"
                        : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="p-2 rounded-lg bg-slate-800/80">
                        {getNodeIcon(node.type)}
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {node.badge}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-white mb-1 line-clamp-1">{node.name}</span>
                    <span className="text-[11px] text-slate-400 line-clamp-2">{node.description}</span>
                    
                    {index < 4 && (
                      <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                        →
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Node Deep Dive Inspector */}
            {selectedNode && (
              <div className="rounded-xl border border-cyan-500/30 bg-slate-900/80 p-5 mt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    {getNodeIcon(selectedNode.type)}
                    <div>
                      <h4 className="text-base font-bold text-white">{selectedNode.name}</h4>
                      <p className="text-xs text-slate-400">{selectedNode.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-500/30">
                    Inspecting node: {selectedNode.id}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Configured Production Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedNode.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-black/40 px-3 py-2 rounded-lg border border-slate-800/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Infrastructure Snippet Tabs */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B1222] p-5 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-xs text-slate-300">CODEBASE MANIFESTS</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="flex max-w-full overflow-x-auto bg-slate-900 rounded-lg p-1 border border-slate-800 [&>button]:shrink-0 [&>button]:whitespace-nowrap">
                  <button
                    onClick={() => setCodeTab("terraform")}
                    className={`px-3 py-1 text-xs font-mono rounded ${codeTab === "terraform" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                  >
                    terraform/main.tf
                  </button>
                  <button
                    onClick={() => setCodeTab("helm")}
                    className={`px-3 py-1 text-xs font-mono rounded ${codeTab === "helm" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                  >
                    helm/deployment.yaml
                  </button>
                  <button
                    onClick={() => setCodeTab("slo")}
                    className={`px-3 py-1 text-xs font-mono rounded ${codeTab === "slo" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                  >
                    monitoring/slo.yaml
                  </button>
                </div>
                <button
                  onClick={() => copyCode(codeSnippets[codeTab])}
                  className="flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto rounded-xl bg-black/80 p-4 border border-slate-800">
              <pre className="font-mono text-xs text-slate-200 leading-relaxed">
                <code>{codeSnippets[codeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: AWS Microservices Re-Architecture (Cimpress Before & After) */}
      {activeProject === "microservices-migration" && (
        <div className="space-y-6">
          {/* Architecture comparison header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400">AWS RE-ARCHITECTURE & DEPLOYMENT</span>
              <h3 className="text-xl font-bold text-white">Amazon EKS to ECS Migration + Serverless Lambda</h3>
              <p className="text-xs text-slate-400 mt-1">
                Eliminating cluster maintenance overhead while preserving microservices isolation and reliability.
              </p>
            </div>

            {/* Before / After toggle */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setMigrationView("before")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  migrationView === "before" ? "bg-rose-500/20 text-rose-300 border border-rose-500/40" : "text-slate-400 hover:text-white"
                }`}
              >
                Before: Multi-Node EKS
              </button>
              <button
                onClick={() => setMigrationView("after")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  migrationView === "after" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "text-slate-400 hover:text-white"
                }`}
              >
                After: ECS + Serverless Lambda
              </button>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before Card */}
            <div className={`rounded-2xl border p-6 transition-all ${
              migrationView === "before"
                ? "border-rose-500/50 bg-rose-950/10 shadow-lg shadow-rose-500/5"
                : "border-slate-800/80 bg-slate-900/30 opacity-70"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/50 px-2.5 py-1 rounded border border-rose-800/50">
                  LEGACY INFRASTRUCTURE (EKS)
                </span>
                <Server className="h-5 w-5 text-rose-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">High Operational Complexity</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Heavy maintenance required for Kubernetes control plane version upgrades and node group patching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Over-provisioned EC2 compute capacity running idle during off-peak periods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Complex ingress controller configs and manual deployment steps without unified CI/CD gates.</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className={`rounded-2xl border p-6 transition-all ${
              migrationView === "after"
                ? "border-emerald-500/50 bg-emerald-950/10 shadow-lg shadow-emerald-500/10"
                : "border-slate-800/80 bg-slate-900/30 opacity-70"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-800/50">
                  RE-ARCHITECTED (ECS + LAMBDA)
                </span>
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Streamlined & Serverless</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Containerized Node.js microservices migrated to Amazon ECS with automatic scaling and zero control-plane management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Independent Python AWS Lambda microservice built end-to-end for lightweight event processing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Complete automated CI/CD pipeline authored with CloudWatch structured logging and Cloud Armor protection.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: AI-Powered Note Taking Platform */}
      {activeProject === "ai-notes-platform" && (
        <div className="rounded-2xl border border-slate-800 bg-[#0B1222] p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <span className="text-xs font-mono text-purple-400">FULL-STACK AI INTEGRATION</span>
              <h3 className="text-xl font-bold text-white">AI-Powered Note Taking SaaS Platform</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Next.js + Gemini + Convex
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="text-xs font-mono text-cyan-400 mb-1">FRONTEND & AUTH</div>
              <div className="font-semibold text-white text-sm mb-1">Next.js & Clerk</div>
              <p className="text-xs text-slate-400">
                Responsive App Router architecture with secure JWT-based multi-tenant authentication and live markdown editor.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="text-xs font-mono text-indigo-400 mb-1">REAL-TIME DATA</div>
              <div className="font-semibold text-white text-sm mb-1">Convex DB</div>
              <p className="text-xs text-slate-400">
                Reactive, real-time sync database ensuring document state persists seamlessly with autosave and PDF export.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="text-xs font-mono text-amber-400 mb-1">LLM ORCHESTRATION</div>
              <div className="font-semibold text-white text-sm mb-1">LangChain & Gemini API</div>
              <p className="text-xs text-slate-400">
                Semantic vector search over uploaded PDF notes with contextual question answering and summarization.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
