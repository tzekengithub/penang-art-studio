"use client";

import { motion } from "framer-motion";
import { MapPin, Send, Mail } from "lucide-react";
import MascotSVG from "@/components/MascotSVG";
import WorkshopCard from "@/components/WorkshopCard";
import { workshops } from "@/data/workshops";

// Gallery placeholder tiles: [bg color, height px]
const galleryTiles: [string, number][] = [
  ["#E05C3A", 220],
  ["#F2DDD0", 160],
  ["#C04A2A", 280],
  ["#FDEEE6", 180],
  ["#8C6A58", 240],
  ["#F07D5E", 150],
  ["#E05C3A", 190],
  ["#F2DDD0", 260],
  ["#C04A2A", 170],
  ["#FDEEE6", 200],
  ["#8C6A58", 140],
  ["#F07D5E", 210],
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden" style={{ background: "#FFF8F2" }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(255,248,242,0.88)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-2">
          <MascotSVG size={32} />
          <span
            className="text-sm font-bold tracking-wide text-[#2C2018]"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            ODD LOOKER
          </span>
        </div>
        <a
          href="#workshops"
          className="text-xs px-4 py-2 rounded-full bg-[#E05C3A] text-[#FFF8F2] font-semibold tracking-wide transition-opacity hover:opacity-80"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          BOOK NOW
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        className="grain relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FFF8F2 0%, #FDEEE6 60%, #F2DDD0 100%)" }}
      >
        {/* BG blobs */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "#E05C3A", filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "#C04A2A", filter: "blur(100px)" }}
        />

        {/* Mascot */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
          className="relative z-10 mb-6"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <MascotSVG size={180} />
          </motion.div>
        </motion.div>

        {/* Location label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 text-xs uppercase tracking-[0.3em] text-[#E05C3A] mb-3"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          George Town, Penang
        </motion.p>

        {/* Studio name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="relative z-10 italic leading-tight text-[#2C2018] mb-4"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
          }}
        >
          Odd Looker<br />Studio
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-10 text-lg text-[#8C6A58] mb-10 max-w-sm"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Make something beautiful today.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#workshops"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 inline-block px-8 py-4 rounded-full bg-[#E05C3A] text-[#FFF8F2] font-bold tracking-wider text-sm shadow-lg hover:bg-[#C04A2A] transition-colors"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          BROWSE WORKSHOPS
        </motion.a>
      </section>

      {/* ── WORKSHOPS GRID ── */}
      <section id="workshops" className="px-6 py-20 max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#E05C3A] mb-3"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          What we offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="italic text-4xl md:text-5xl text-[#2C2018] mb-12"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          Our Workshops
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workshops.map((w, i) => (
            <WorkshopCard key={w.id} workshop={w} index={i} />
          ))}
        </div>
      </section>

      {/* ── SCHEDULE STRIP ── */}
      <section className="py-14 px-6" style={{ background: "#E05C3A" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#FFF8F2]">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] opacity-70 mb-2"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              Schedule
            </p>
            <p
              className="italic text-3xl md:text-4xl leading-snug"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Every Fri · Sat · Sun · Mon
            </p>
          </div>
          <div className="text-center md:text-right">
            <p
              className="text-xs uppercase tracking-[0.25em] opacity-70 mb-1"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              Booking
            </p>
            <p className="text-lg opacity-90">By appointment only</p>
            <p
              className="text-sm mt-1 opacity-75"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              DM us to book your slot
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#E05C3A] mb-3"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          Studio Moments
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="italic text-4xl md:text-5xl text-[#2C2018] mb-10"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          Gallery
        </motion.h2>

        <div className="masonry-grid">
          {galleryTiles.map(([color, height], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: color, height }}
            >
              <div className="w-full h-full flex items-end p-3">
                <span
                  className="text-[10px] uppercase tracking-widest text-white opacity-40"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  Photo {i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mt-auto px-6 py-12" style={{ background: "#2C2018", color: "#FFF8F2" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <MascotSVG size={48} />
            <div>
              <p
                className="font-bold tracking-wider text-sm"
                style={{ fontFamily: "var(--font-space-mono), monospace" }}
              >
                ODD LOOKER STUDIO
              </p>
              <p className="text-[#8C6A58] text-xs mt-0.5 flex items-center gap-1">
                <MapPin size={10} />
                George Town, Penang, Malaysia
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[#8C6A58]"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              By appointment only — DM to book
            </p>
            <p
              className="italic text-[#F07D5E] text-lg"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Make something beautiful today.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full border border-[#8C6A58] text-[#8C6A58] hover:text-[#E05C3A] hover:border-[#E05C3A] transition-colors"
              aria-label="Instagram"
            >
              <Send size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-[#8C6A58] text-[#8C6A58] hover:text-[#E05C3A] hover:border-[#E05C3A] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#8C6A58]/30 text-center">
          <p
            className="text-[#8C6A58] text-xs"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            © 2025 Odd Looker Studio · George Town, Penang
          </p>
        </div>
      </footer>
    </main>
  );
}
