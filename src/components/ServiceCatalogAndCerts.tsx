"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  Sparkles, 
  Terminal, 
  Server, 
  ExternalLink, 
  Radio, 
  Zap 
} from "lucide-react";
import { GcpIcon, AwsIcon } from "@/components/Icons";

export default function ServiceCatalogAndCerts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...PROFILE.skillCategories.map((c) => c.category)];

  const filteredCategories = selectedCategory === "All"
    ? PROFILE.skillCategories
    : PROFILE.skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-800/80">
      {/* ================= SECTION 1: VERIFIED CERTIFICATIONS ================= */}
      <div id="certifications" className="mb-20">
        <div className="flex flex-col gap-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3 py-1 text-xs font-mono text-indigo-300 w-fit">
            <Award className="h-3.5 w-3.5" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & Accreditations
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Industry credentials validating production expertise in Google Cloud architecture, cloud-native deployments, and modern LLM developer workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certificate 1: Google Cloud ACE */}
          <div className="relative rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-950/30 via-[#0B1222] to-slate-900/90 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-950/60 text-blue-400 shadow-md shadow-blue-500/20">
                  <GcpIcon className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Google Cloud Certified
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Associate Cloud Engineer (ACE)
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 border-y border-slate-800/80 py-2.5">
              <span>Issuer: Google Cloud</span>
              <span>•</span>
              <span>Valid: Nov 2026 – Nov 2029</span>
            </div>

            <div className="mt-4">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "GKE Cluster Deployment",
                  "VPC & Subnet Peering",
                  "IAM & Workload Identity",
                  "Cloud Operations & Monitoring",
                  "Cloud Storage & BigQuery",
                  "Artifact Registry",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-blue-500/20 bg-blue-950/30 px-2.5 py-1 text-[11px] font-mono text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate 2: Claude Certified Developer */}
          <div className="relative rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-[#0B1222] to-slate-900/90 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/40 bg-amber-950/60 text-amber-400 shadow-md shadow-amber-500/20">
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Anthropic Certified
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Claude Certified Developer – Foundations
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 border-y border-slate-800/80 py-2.5">
              <span>Issuer: Anthropic</span>
              <span>•</span>
              <span>Valid: Sep 2026 – Sep 2027</span>
            </div>

            <div className="mt-4">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "LLM Application Architecture",
                  "Structured Prompt Engineering",
                  "Agentic Tool Use & APIs",
                  "Safety & Evaluation Pipelines",
                  "Retrieval Augmented Generation (RAG)"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-amber-500/20 bg-amber-950/30 px-2.5 py-1 text-[11px] font-mono text-amber-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: SERVICE CATALOG (SKILLS MATRIX) ================= */}
      <div>
        <div className="flex flex-col gap-4 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300 w-fit">
            <Layers className="h-3.5 w-3.5" />
            <span>CLOUD SERVICE CATALOG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Infrastructure & Technology Matrix
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Structured inventory of core tools, frameworks, databases, and DevOps practices used across development and production environments.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-slate-800 bg-[#0B1222]/80 p-5 shadow-lg backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">{category.category}</h3>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                    {category.skills.length} services
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{category.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-mono transition-all ${
                        skill.highlight
                          ? "border-cyan-500/40 bg-cyan-950/30 text-cyan-200 font-semibold"
                          : "border-slate-800 bg-slate-900/80 text-slate-300"
                      }`}
                    >
                      {skill.highlight && <Zap className="h-3 w-3 text-cyan-400 shrink-0" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
