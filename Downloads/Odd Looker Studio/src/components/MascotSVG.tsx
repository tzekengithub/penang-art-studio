"use client";

interface MascotSVGProps {
  size?: number;
  className?: string;
}

export default function MascotSVG({ size = 200, className = "" }: MascotSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body blob */}
      <path
        d="M100 22 C132 16, 168 38, 174 70 C181 102, 170 135, 154 154 C136 175, 113 188, 92 184 C68 180, 46 164, 34 142 C20 117, 20 85, 32 60 C44 35, 68 28, 100 22Z"
        fill="#E05C3A"
      />
      {/* Belly patch */}
      <ellipse cx="100" cy="130" rx="28" ry="32" fill="#F07D5E" opacity="0.45" />
      {/* Left eye white */}
      <ellipse cx="78" cy="90" rx="18" ry="20" fill="#FFF8F2" />
      {/* Right eye white */}
      <ellipse cx="122" cy="90" rx="18" ry="20" fill="#FFF8F2" />
      {/* Left pupil */}
      <circle cx="80" cy="93" r="10" fill="#2C2018" />
      {/* Right pupil */}
      <circle cx="124" cy="93" r="10" fill="#2C2018" />
      {/* Left eye shine */}
      <circle cx="85" cy="87" r="3.5" fill="#FFF8F2" />
      {/* Right eye shine */}
      <circle cx="129" cy="87" r="3.5" fill="#FFF8F2" />
      {/* Smile */}
      <path
        d="M86 123 Q100 138 114 123"
        stroke="#2C2018"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left antenna */}
      <line x1="74" y1="29" x2="58" y2="6" stroke="#C04A2A" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="57" cy="5" r="5.5" fill="#C04A2A" />
      {/* Right antenna */}
      <line x1="126" y1="29" x2="142" y2="6" stroke="#C04A2A" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="143" cy="5" r="5.5" fill="#C04A2A" />
      {/* Left arm holding brush */}
      <path
        d="M37 108 Q16 102, 14 122 Q12 140, 34 138"
        stroke="#E05C3A"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm */}
      <path
        d="M163 108 Q184 102, 186 122 Q188 140, 166 138"
        stroke="#E05C3A"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Paintbrush handle */}
      <line x1="172" y1="130" x2="193" y2="104" stroke="#8C6A58" strokeWidth="3" strokeLinecap="round" />
      {/* Brush bristles */}
      <ellipse cx="194" cy="102" rx="5" ry="7" fill="#F07D5E" transform="rotate(-40 194 102)" />
      {/* Paint drip */}
      <circle cx="196" cy="111" r="2.5" fill="#E05C3A" />
      {/* Feet */}
      <ellipse cx="82" cy="187" rx="14" ry="8" fill="#C04A2A" />
      <ellipse cx="118" cy="187" rx="14" ry="8" fill="#C04A2A" />
    </svg>
  );
}
