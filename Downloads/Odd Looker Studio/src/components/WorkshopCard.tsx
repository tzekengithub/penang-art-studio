"use client";

import { motion } from "framer-motion";
import { Workshop } from "@/data/workshops";
import { Clock } from "lucide-react";

interface WorkshopCardProps {
  workshop: Workshop;
  index: number;
}

export default function WorkshopCard({ workshop, index }: WorkshopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(44,32,24,0.14)" }}
      className="relative bg-[#FDEEE6] rounded-3xl p-6 border-l-4 border-[#E05C3A] overflow-hidden cursor-pointer group transition-shadow"
    >
      {/* Tag pill */}
      <span
        className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#E05C3A] bg-[#F2DDD0] px-3 py-1 rounded-full mb-4"
        style={{ fontFamily: "var(--font-space-mono), monospace" }}
      >
        {workshop.tag}
      </span>

      {/* Title */}
      <h3
        className="italic text-2xl text-[#2C2018] leading-tight mb-2"
        style={{ fontFamily: "var(--font-fraunces), serif" }}
      >
        {workshop.title}
      </h3>

      {/* Description */}
      <p className="text-[#8C6A58] text-sm leading-relaxed mb-6">
        {workshop.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className="text-lg font-bold text-[#E05C3A]"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          RM{workshop.price}
          <span className="text-xs text-[#8C6A58] font-normal ml-1">/pax</span>
        </span>
        <span
          className="flex items-center gap-1 text-[#8C6A58] text-xs"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          <Clock size={12} />
          {workshop.duration}
        </span>
      </div>

      {/* Decorative blob corner */}
      <div
        className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ background: "#E05C3A" }}
      />
    </motion.div>
  );
}
