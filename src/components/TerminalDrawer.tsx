"use client";

import React, { useState, useEffect, useRef } from "react";
import { PROFILE } from "@/data/profile";
import { 
  Terminal as TerminalIcon, 
  X, 
  Minus, 
  Maximize2, 
  CornerDownLeft, 
  ChevronRight, 
  Radio 
} from "lucide-react";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();
    let output: React.ReactNode = null;

    if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (lower === "exit") {
      onClose();
      setInputVal("");
      return;
    } else if (lower === "help") {
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-semibold mb-1">Available Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <p><span className="text-emerald-400 font-mono">arya-ctl get skills</span> - Display full-stack, AI & cloud skills</p>
            <p><span className="text-emerald-400 font-mono">arya-ctl get certs</span> - Show Google Cloud ACE & Claude certs</p>
            <p><span className="text-emerald-400 font-mono">arya-ctl get exp</span> - View production workloads</p>
            <p><span className="text-emerald-400 font-mono">arya-ctl get projects</span> - List system architecture blueprints</p>
            <p><span className="text-emerald-400 font-mono">terraform plan</span> - Execute candidate hiring plan</p>
            <p><span className="text-emerald-400 font-mono">curl /contact</span> - View direct contact details</p>
            <p><span className="text-emerald-400 font-mono">clear</span> - Clear terminal session</p>
            <p><span className="text-emerald-400 font-mono">exit</span> - Close terminal drawer</p>
          </div>
        </div>
      );
    } else if (lower === "skills" || lower === "arya-ctl get skills" || lower === "get skills") {
      output = (
        <div className="space-y-2 text-xs">
          <p className="text-cyan-400 font-semibold">Full-Stack, AI & Cloud Technology Stack:</p>
          <div className="space-y-1 text-slate-300">
            <p>• <strong className="text-white">Cloud:</strong> GCP (GKE, BigQuery, IAM, Cloud Armor), AWS (ECS, EKS, Lambda, CloudWatch)</p>
            <p>• <strong className="text-white">IaC & Orchestration:</strong> Terraform (49+ resources), Kubernetes, Helm, Docker</p>
            <p>• <strong className="text-white">CI/CD & Observability:</strong> GitLab CI/CD, GitHub Actions, SLOs, Multi-Window Burn-Rate Alerts</p>
            <p>• <strong className="text-white">Software Dev:</strong> Python, FastAPI, Node.js, Next.js, SQL</p>
            <p>• <strong className="text-white">AI / LLM:</strong> Gemini API, LangChain, Claude, HuggingFace</p>
          </div>
        </div>
      );
    } else if (lower === "certs" || lower === "arya-ctl get certs" || lower === "get certs") {
      output = (
        <div className="space-y-2 text-xs">
          <p className="text-cyan-400 font-semibold">Active Industry Credentials:</p>
          <div className="space-y-1.5 text-slate-300">
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-blue-400 font-bold">[VERIFIED] Google Cloud Associate Cloud Engineer (ACE)</span>
              <p className="text-slate-400 text-[11px]">Valid: Nov 2026 – Nov 2029 | Focus: GKE, Workload Identity, Cloud NAT, BigQuery</p>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-amber-400 font-bold">[VERIFIED] Claude Certified Developer – Foundations</span>
              <p className="text-slate-400 text-[11px]">Valid: Sep 2026 – Sep 2027 | Issuer: Anthropic</p>
            </div>
          </div>
        </div>
      );
    } else if (lower === "exp" || lower === "arya-ctl get exp" || lower === "get exp") {
      output = (
        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="text-cyan-400 font-semibold mb-1">Production Workload History:</p>
          <p>1. <strong className="text-white">Quantiphi</strong> (Framework Engineer Intern, Jul 2026 – Present): Spec-driven dev, FastAPI, GCP Terraform runbooks & load tests.</p>
          <p>2. <strong className="text-white">Cimpress</strong> (Software Engineer Intern, Jan 2026 – Jun 2026): Amazon EKS to ECS migration, serverless Python Lambda, automated CI/CD.</p>
          <p>3. <strong className="text-white">Riverroute Creative Group</strong> (Web Dev Intern, Jun 2025 – Aug 2025): Full-stack MVC web apps, MySQL, SEO performance tuning.</p>
        </div>
      );
    } else if (lower === "projects" || lower === "arya-ctl get projects" || lower === "get projects") {
      output = (
        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="text-cyan-400 font-semibold mb-1">Featured Architecture Projects:</p>
          <p>• <strong className="text-white">Cloud-Native Retail Data Platform:</strong> 49 Terraform resources, Private GKE, Workload Identity, BigQuery star schema, SLO alerts.</p>
          <p>• <strong className="text-white">Cimpress Microservices Migration:</strong> Re-architected Node.js from EKS to ECS + serverless Python Lambda.</p>
          <p>• <strong className="text-white">AI Note Taking Platform:</strong> Next.js SaaS, Clerk auth, Convex DB, LangChain, Gemini API.</p>
        </div>
      );
    } else if (lower === "terraform plan" || lower === "tf plan") {
      output = (
        <div className="space-y-1 font-mono text-xs">
          <p className="text-slate-400">Refreshing Terraform state in-memory...</p>
          <p className="text-cyan-400 font-semibold mt-1">Terraform will perform the following actions:</p>
          <div className="rounded bg-black/60 p-3 border border-slate-800 text-slate-300 space-y-0.5">
            <p className="text-emerald-400 font-bold">+ resource &quot;candidate_placement&quot; &quot;arya_ingale&quot; &#123;</p>
            <p className="pl-4">+ candidate      = &quot;Arya Ingale&quot;</p>
            <p className="pl-4">+ target_roles   = [&quot;Full-Stack Engineer&quot;, &quot;AI/GenAI Engineer&quot;, &quot;Cloud/DevOps Engineer&quot;]</p>
            <p className="pl-4">+ primary_cloud  = [&quot;Google Cloud (ACE Certified)&quot;, &quot;AWS&quot;]</p>
            <p className="pl-4">+ orchestration  = [&quot;Terraform&quot;, &quot;Kubernetes (GKE/ECS)&quot;, &quot;Helm&quot;, &quot;Docker&quot;]</p>
            <p className="pl-4">+ education      = &quot;B.Tech in IT - CGPA: 8.4/10 (DJSCE)&quot;</p>
            <p className="pl-4">+ location       = &quot;Mumbai, India / Remote&quot;</p>
            <p className="pl-4">+ availability   = &quot;Open to Opportunities&quot;</p>
            <p className="text-emerald-400 font-bold">&#125;</p>
          </div>
          <p className="text-emerald-400 font-bold mt-1">
            Plan: 1 to hire, 0 to reject, 0 to delay.
          </p>
        </div>
      );
    } else if (lower.includes("contact") || lower.includes("curl")) {
      output = (
        <div className="space-y-1 text-xs font-mono text-slate-300">
          <p className="text-cyan-400 font-semibold">Contact Endpoints:</p>
          <p>• Email: <a href={`mailto:${PROFILE.email}`} className="text-cyan-300 underline">{PROFILE.email}</a></p>
          <p>• Phone: <span className="text-white">{PROFILE.phone}</span></p>
          <p>• LinkedIn: <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PROFILE.socials.linkedin}</a></p>
          <p>• GitHub: <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PROFILE.socials.github}</a></p>
        </div>
      );
    } else {
      output = (
        <p className="text-rose-400 text-xs font-mono">
          command not found: {cmd}. Type <span className="text-cyan-300 underline">help</span> for list of commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      if (commandList.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandList.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${isMaximized ? "h-[85vh]" : "h-[55vh] sm:h-96"}`}>
      <div className="mx-auto flex h-full max-w-5xl flex-col rounded-t-2xl border-t border-x border-cyan-500/30 bg-[#060A12]/95 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#0A101D] px-4 py-2.5 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
              <button onClick={() => setIsMaximized(false)} className="h-3 w-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors" />
              <button onClick={() => setIsMaximized(!isMaximized)} className="h-3 w-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors" />
            </div>
            <div className="flex items-center gap-1.5 ml-3 font-mono text-xs text-slate-300">
              <TerminalIcon className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-semibold text-white">arya-ctl</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 text-[11px]">ap-south-1</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              CONNECTED
            </span>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
              title={isMaximized ? "Restore size" : "Maximize terminal"}
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
              title="Close terminal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 font-mono text-xs text-slate-200 space-y-3 cursor-text"
        >
          {/* Welcome Banner */}
          <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-3 text-slate-400 space-y-1">
            <div className="text-cyan-400 font-semibold flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span>arya-ctl (Cloud Platform Control Plane CLI) v1.4.2</span>
            </div>
            <p>Target Cluster: <span className="text-slate-200">gke-prod-mumbai</span> | Region: <span className="text-slate-200">{PROFILE.region}</span></p>
            <p className="text-slate-500">
              Type <span className="text-cyan-300 font-semibold">help</span> to view commands, or try <span className="text-emerald-400 font-semibold">terraform plan</span>.
            </p>
          </div>

          {/* History */}
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <ChevronRight className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span className="font-semibold text-white">{item.command}</span>
              </div>
              <div className="pl-5">{item.output}</div>
            </div>
          ))}

          {/* Current Input */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 text-cyan-400 pt-1">
            <ChevronRight className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. 'help', 'terraform plan', 'skills')..."
              className="flex-1 min-w-0 bg-transparent text-white focus:outline-none font-mono text-base sm:text-xs placeholder:text-slate-600"
              autoFocus
            />
            <button type="submit" className="text-slate-500 hover:text-cyan-400">
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
