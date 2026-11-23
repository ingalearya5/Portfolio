"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArchitectureBlueprints from "@/components/ArchitectureBlueprints";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ServiceCatalogAndCerts from "@/components/ServiceCatalogAndCerts";
import Footer from "@/components/Footer";
import TerminalDrawer from "@/components/TerminalDrawer";
import { Radio } from "lucide-react";

export default function ClientShell() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] bg-grid-pattern text-slate-100 relative">
      <Navbar onToggleTerminal={() => setTerminalOpen(!terminalOpen)} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <ArchitectureBlueprints />
        <ExperienceTimeline />
        <ServiceCatalogAndCerts />
      </main>

      <Footer onToggleTerminal={() => setTerminalOpen(!terminalOpen)} />

      {/* Floating CLI Toggle Pill */}
      {!terminalOpen && (
        <button
          onClick={() => setTerminalOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#0B1222]/90 px-4 py-2.5 font-mono text-xs font-semibold text-cyan-300 shadow-xl shadow-cyan-500/20 backdrop-blur-md hover:border-cyan-400 hover:bg-cyan-950/50 hover:scale-105 transition-all group"
        >
          <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>&gt;_ arya-ctl</span>
        </button>
      )}

      {/* Interactive Terminal Drawer */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
