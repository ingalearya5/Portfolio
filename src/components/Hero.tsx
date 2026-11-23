"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Layers, 
  FileCode, 
  Cloud 
} from "lucide-react";
import { GcpIcon, AwsIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-x-clip pt-6 pb-16 md:pt-10 md:pb-24">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Column: Core Value Proposition */}
        <div className="flex-1 max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>CLOUD & PLATFORM ENGINEERING</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">GCP ACE CERTIFIED</span>
          </div>

          {/* Name (primary identity) */}
          <p className="font-mono text-sm text-cyan-400 mb-2">&gt; whoami</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            {PROFILE.name.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {PROFILE.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
            Cloud, DevOps &amp; Platform Engineer
          </h2>

          {/* Headline */}
          <p className="mt-5 text-lg sm:text-xl font-medium text-slate-300 leading-snug">
            Engineering{" "}
            <span className="text-cyan-300">resilient cloud platforms</span>{" "}
            &amp; automated infrastructure.
          </p>

          {/* Subtitle / Bio */}
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            I design and automate production cloud environments using{" "}
            <span className="text-cyan-300 font-medium">Terraform</span>, orchestrate workloads with{" "}
            <span className="text-sky-300 font-medium">Kubernetes (GKE/ECS)</span>, and ship zero-friction{" "}
            <span className="text-indigo-300 font-medium">CI/CD pipelines</span> backed by proactive SLO observability.
          </p>

          {/* Cloud Platform Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300">
              <GcpIcon className="h-3.5 w-3.5 text-blue-400" />
              <span>Google Cloud (GKE, BigQuery, IAM)</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300">
              <AwsIcon className="h-3.5 w-3.5 text-amber-400" />
              <span>AWS (ECS, Lambda, CloudWatch)</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300">
              <FileCode className="h-3.5 w-3.5 text-purple-400" />
              <span>Terraform (IaC)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:brightness-110 transition-all group"
            >
              <span>Explore Architecture Blueprints</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#workloads"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all"
            >
              <Server className="h-4 w-4 text-slate-400" />
              <span>Production Workloads</span>
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
            >
              <span>{PROFILE.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Live Telemetry Dashboard Widget */}
        <div className="w-full lg:w-[480px]">
          <div className="relative rounded-2xl border border-slate-800 bg-[#0B1222]/90 p-5 shadow-2xl backdrop-blur-xl">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="hidden sm:inline font-mono text-xs text-slate-400 ml-2">control-plane.arya.io</span>
              </div>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <Activity className="h-3 w-3 animate-pulse" /> LIVE TELEMETRY
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {/* Card 1: IaC */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono">IaC Automation</span>
                  <FileCode className="h-3.5 w-3.5 text-purple-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">49</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 inline" />
                  <span>Resources via Terraform</span>
                </div>
              </div>

              {/* Card 2: Compute */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono">Orchestration</span>
                  <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold font-mono text-white">GKE & ECS</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 inline" />
                  <span>Private Pools & Tasks</span>
                </div>
              </div>

              {/* Card 3: Security */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono">Security Posture</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                </div>
                <div className="text-xl font-bold font-mono text-emerald-400">Keyless</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 inline" />
                  <span>Workload Identity IAM</span>
                </div>
              </div>

              {/* Card 4: Observability */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono">SLO Observability</span>
                  <Activity className="h-3.5 w-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold font-mono text-white">99.9%</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 inline" />
                  <span>Burn-rate alerts enabled</span>
                </div>
              </div>
            </div>

            {/* Simulated Live Console Log */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-black/60 p-3 font-mono text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <Terminal className="h-3 w-3" />
                <span>k8s cluster state: synced</span>
              </div>
              <p className="text-slate-500">&gt; terraform: 0 drift detected (GCP us-central1)</p>
              <p className="text-slate-500">&gt; ecs service: health check 200 OK (AWS ap-south-1)</p>
              <p className="text-emerald-400/90">&gt; candidate verification: GCP ACE credential verified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom KPI Metrics Strip */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {PROFILE.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-sm hover:border-slate-700 transition-all"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
              {metric.value}
            </div>
            <div className="mt-1 text-xs font-semibold text-white tracking-wide uppercase">
              {metric.label}
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
