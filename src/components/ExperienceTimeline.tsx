"use client";

import React, { useState } from "react";
import { PROFILE, ExperienceItem } from "@/data/profile";
import { 
  Briefcase, 
  Calendar, 
  GitCommit, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Activity, 
  ArrowUpRight 
} from "lucide-react";

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string>("quantiphi");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  const getStatusBadge = (exp: ExperienceItem) => {
    if (exp.id === "quantiphi") {
      return (
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          ACTIVE WORKLOAD
        </span>
      );
    }
    return (
      <span className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 text-[11px] font-mono text-slate-300">
        RELEASE SHIPPED
      </span>
    );
  };

  return (
    <section id="workloads" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="flex flex-col gap-4 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300 w-fit">
          <GitCommit className="h-3.5 w-3.5" />
          <span>PRODUCTION CHANGELOG</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Production Workloads & Experience
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Proven track record in engineering spec-driven cloud infrastructure, container migrations, serverless automation, and full CI/CD deployment pipelines.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-8">
        {PROFILE.experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/40 bg-[#0B1222] text-cyan-400 shadow-md shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:scale-110 transition-all">
                <Briefcase className="h-3.5 w-3.5" />
              </div>

              {/* Main Workload Card */}
              <div className="rounded-2xl border border-slate-800 bg-[#0B1222]/90 p-5 sm:p-6 backdrop-blur-md hover:border-slate-700 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-cyan-400 font-semibold text-base sm:text-lg">
                        @ {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="capitalize">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {getStatusBadge(exp)}
                  </div>
                </div>

                {/* Key Impact Metric Box */}
                {exp.impactMetric && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-2 text-xs font-mono text-cyan-300">
                    <Activity className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span><strong className="text-white">Impact:</strong> {exp.impactMetric}</span>
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technical Stack Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expandable Engineering Context / Runbook */}
                <div className="mt-4 pt-3 border-t border-slate-800/40">
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    <span>{isExpanded ? "Hide Engineering Runbook" : "View Engineering Runbook"}</span>
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 rounded-xl border border-slate-800/90 bg-black/60 p-4 font-mono text-xs text-slate-300 space-y-2.5">
                      <div className="text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
                        Engineering Runbook & Practices:
                      </div>
                      {exp.id === "quantiphi" && (
                        <div className="space-y-1.5 text-slate-300">
                          <p>• <strong>Spec-Driven Development:</strong> Specifications authored and reviewed in git before writing application or IaC code, maintaining 100% traceability.</p>
                          <p>• <strong>Terraform Plan Validation:</strong> Structured review processes to catch unintended resource destruction and drift before staging execution.</p>
                          <p>• <strong>Reliability & Load Testing:</strong> Python FastAPI endpoints benchmarked and stress-tested to ensure resilience under peak request volumes.</p>
                        </div>
                      )}
                      {exp.id === "cimpress" && (
                        <div className="space-y-1.5 text-slate-300">
                          <p>• <strong>Microservices Decoupling:</strong> Migrated complex Kubernetes stateful workloads to containerized ECS tasks, reducing cluster maintenance toil.</p>
                          <p>• <strong>Serverless Architecture:</strong> Built event-driven Python Lambda handling asynchronous processing with auto-scaling to zero.</p>
                          <p>• <strong>Zero-Trust & Observability:</strong> Protected edge endpoints with Cloud Armor and instrumented CloudWatch structured logs for instant root-cause analysis.</p>
                        </div>
                      )}
                      {exp.id === "riverroute" && (
                        <div className="space-y-1.5 text-slate-300">
                          <p>• <strong>Cross-Browser Architecture:</strong> Full MVC PHP implementation ensuring zero browser discrepancies across desktop and mobile.</p>
                          <p>• <strong>Performance & SEO:</strong> Optimized schema markups, asset bundling, and SQL queries to maximize search engine discoverability and Core Web Vitals.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
