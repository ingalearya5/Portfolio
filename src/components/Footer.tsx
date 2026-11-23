"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { Mail, ShieldCheck, Terminal, GitCommit, Heart } from "lucide-react";

interface FooterProps {
  onToggleTerminal: () => void;
}

export default function Footer({ onToggleTerminal }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060A12] py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-white">{PROFILE.name}</span>
            <span className="text-slate-600">/</span>
            <span className="font-mono text-xs text-cyan-400">DevOps & Platform Engineering</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Automated with Terraform • Orchestrated on Kubernetes • Keyless Workload Identity
          </p>
        </div>

        {/* Telemetry pill & CLI shortcut */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTerminal}
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-mono text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
          >
            <Terminal className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>Open arya-ctl</span>
          </button>
          <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-xs font-mono text-slate-400">
            <GitCommit className="h-3.5 w-3.5 text-emerald-400" />
            <span>CI/CD: Passed</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
        <span>© {new Date().getFullYear()} Arya Ingale. All rights reserved.</span>
        <span>Google Cloud ACE & Claude Certified Developer</span>
      </div>
    </footer>
  );
}
