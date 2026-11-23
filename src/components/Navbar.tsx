"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { 
  Terminal, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Radio, 
  MapPin, 
  ShieldCheck 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface NavbarProps {
  onToggleTerminal?: () => void;
}

export default function Navbar({ onToggleTerminal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Architecture", href: "#architecture" },
    { name: "Workloads", href: "#workloads" },
    { name: "Certifications", href: "#certifications" },
    { name: "Service Catalog", href: "#skills" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080C14]/85 backdrop-blur-md">
      {/* Top telemetry ribbon */}
      <div className="border-b border-slate-800/50 bg-[#0B1120]/90 px-4 py-1 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 font-medium">HEALTHY</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1 font-mono text-slate-300">
              <MapPin className="h-3 w-3 text-cyan-400" />
              <span>REGION: {PROFILE.region}</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <ShieldCheck className="h-3 w-3 text-indigo-400" />
              <span>GCP ACE & Claude Certified</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="hidden sm:inline text-slate-400">STATUS:</span>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-300 border border-emerald-500/20">
              {PROFILE.availability.status}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Terminal Prompt */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 shadow-sm shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:bg-cyan-900/50 transition-all">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {PROFILE.name}
              </span>
              <span className="hidden sm:inline rounded bg-cyan-500/10 px-1.5 py-0.2 text-[10px] font-mono text-cyan-400 border border-cyan-500/20">
                ops-ctl
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
              cluster: production-v1
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-1 font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all text-xs"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* CLI Drawer trigger */}
          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              title="Open arya-ctl terminal"
              className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 font-mono text-xs text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
            >
              <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">arya-ctl</span>
            </button>
          )}

          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-1 border-l border-slate-800 pl-2">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send Email"
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href={`mailto:${PROFILE.email}?subject=Interview%20Inquiry%20-%20Arya%20Ingale`}
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm shadow-cyan-500/20 hover:brightness-110 transition-all"
          >
            <FileText className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Connect</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-[#0B1120] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                &gt; {link.name}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-slate-800 pt-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-400"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
