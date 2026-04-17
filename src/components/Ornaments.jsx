export function DiamondDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-40 h-4 ${className}`}
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="85" y2="8" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <rect x="94" y="3" width="10" height="10" transform="rotate(45 99 8)" stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.8" />
      <line x1="115" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
    </svg>
  )
}

export function LotusOrnament({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-10 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M40 36 C40 36 22 28 20 18 C18 10 28 8 34 14 C36 16 38 18 40 20 C42 18 44 16 46 14 C52 8 62 10 60 18 C58 28 40 36 40 36Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.6"
      />
      <path
        d="M40 36 C40 36 28 24 28 16 C28 10 34 8 38 12 C39 13 39.5 14 40 16 C40.5 14 41 13 42 12 C46 8 52 10 52 16 C52 24 40 36 40 36Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.9"
      />
      <path
        d="M40 36 C40 36 34 26 34 20 C34 15 37 12 40 14 C43 12 46 15 46 20 C46 26 40 36 40 36Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <line x1="40" y1="36" x2="40" y2="38" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="25" y1="38" x2="55" y2="38" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  )
}

// Rangoli petal path pointing upward from center (200,200).
// Pointed at both ends, widest at midpoint — each petal is rotated via SVG transform.
// function petalPath(innerR, outerR, halfW) {
//   const h = outerR - innerR
//   const base = 200 - innerR
//   const tip  = 200 - outerR
//   return (
//     `M 200 ${base} ` +
//     `C ${200 + halfW} ${base - h * 0.18} ${200 + halfW} ${tip + h * 0.18} 200 ${tip} ` +
//     `C ${200 - halfW} ${tip + h * 0.18} ${200 - halfW} ${base - h * 0.18} 200 ${base} Z`
//   )
// }

// function petalRing(count, innerR, outerR, halfW, colors, offsetDeg = 0) {
//   const d = petalPath(innerR, outerR, halfW)
//   return Array.from({ length: count }, (_, i) => (
//     <path
//       key={i}
//       d={d}
//       fill={colors[i % colors.length]}
//       stroke="white"
//       strokeWidth="1"
//       strokeOpacity="0.65"
//       transform={`rotate(${(i * 360) / count + offsetDeg} 200 200)`}
//     />
//   ))
// }


export function MandalaBg({ className = '', style = {} }) {
  const cx = 200;
  const cy = 200;

  // Rich, authentic traditional Indian wedding colors
  const colors = [
    "#800000", // Deep Maroon
    "#B22222", // Fire Brick (Rich Red)
    "#FFD700", // Gold (for accents and warmth)
    "#DAA520", // Goldenrod
    "#A52A2A", // Brown
    "#8B4513", // Saddle Brown
  ];

  const ring = (count, r1, r2, offset = 0, stroke = false) =>
    [...Array(count)].map((_, i) => {
      const angle = (i * 360) / count + offset;
      const rad = (angle * Math.PI) / 180;
      // Cycle through the wedding colors
      const color = colors[i % colors.length];

      const x1 = cx + r1 * Math.cos(rad);
      const y1 = cy + r1 * Math.sin(rad);

      const x2 = cx + r2 * Math.cos(rad);
      const y2 = cy + r2 * Math.sin(rad);

      return (
        <line
          key={`${r1}-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={stroke ? "#FFD700" : color} // Gold stroke for outlines, or wedding color
          strokeWidth={stroke ? 1.5 : 1} // Slightly thicker gold stroke
          opacity="0.9" // Increased opacity for richer colors
        />
      );
    });

  const dots = (count, radius) =>
    [...Array(count)].map((_, i) => {
      const angle = (i * 360) / count;
      const rad = (angle * Math.PI) / 180;

      const x = cx + radius * Math.cos(rad);
      const y = cy + radius * Math.sin(rad);

      return (
        <circle key={i} cx={x} cy={y} r="3" fill="#FFD700"> {/* Gold dots */}
          <animate
            attributeName="opacity"
            values="0.6;1;0.6" // Slightly higher base opacity
            dur={`${3 + (i % 3)}s`} // Slower animation
            repeatCount="indefinite"
          />
        </circle>
      );
    });

  return (
    <svg viewBox="0 0 400 400" className={className} style={{...style, backgroundColor: '#FFF8DC'}}> {/* Light cream background */}
      {/* 🌀 very slow, majestic rotation */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="120s" // Much slower rotation
          repeatCount="indefinite"
        />

        {/* 🌟 OUTER STRUCTURE - Lines */}
        {ring(32, 110, 180)}
        {ring(32, 110, 180, 5.625, true)} {/* Gold outline */}

        {/* 🌼 MID LAYER - Lines */}
        {ring(24, 75, 130)}
        {ring(24, 75, 130, 7.5, true)}

        {/* 🌺 INNER FLOWER - Lines */}
        {ring(16, 45, 90)}
        {ring(16, 45, 90, 11.25, true)}

        {/* ✨ dots - Increased count and more rings */}
        {dots(32, 190)}
        {dots(24, 150)}
        {dots(16, 110)}
        {dots(12, 70)}
      </g>

      {/* 🪔 prominent gold center with slow pulse */}
      <circle cx="200" cy="200" r="18" fill="#FFD700">
        <animate attributeName="r" values="17;19;17" dur="4s" repeatCount="indefinite" />
      </circle>

      <circle cx="200" cy="200" r="8" fill="#FFF8DC" /> {/* Cream inner circle */}
    </svg>
  );
}

// export function MandalaBg({ className = '', style = {} }) {
//   return (
//     <svg
//       viewBox="0 0 400 400"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       style={style}
//       aria-hidden="true"
//     >
//       {/* Ring A – outermost 12 petals */}
//       {petalRing(12, 128, 174, 22, ['#E91E8C','#FF6200','#FFD700','#FF4500','#8B00FF','#00BFA5'])}
//       {/* Ring A′ – 12 slim petals offset 15° */}
//       {petalRing(12, 132, 168, 10, ['#FFD700','#E91E8C','#00BFA5','#FF6200','#FF4500','#8B00FF'], 15)}

//       {/* Separator: dot ring + circle at r=122 */}
//       {dotRing(24, 122, 3.5, ['#FFD700','#FF6200','#E91E8C','#8B00FF','#00BFA5','#FF4500'])}
//       <circle cx="200" cy="200" r="122" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />

//       {/* Ring B – 12 petals offset 15° */}
//       {petalRing(12, 88, 126, 19, ['#FF6200','#FFD700','#E91E8C','#8B00FF','#00BFA5','#FF4500'], 15)}
//       {/* Ring B′ – 12 slim accent petals */}
//       {petalRing(12, 92, 120, 8, ['#8B00FF','#E91E8C','#FF6200','#00BFA5','#FFD700','#FF4500'])}

//       {/* Separator at r=82 */}
//       {dotRing(16, 82, 3, ['#E91E8C','#FFD700','#8B00FF','#FF6200','#00BFA5','#FF4500'])}
//       <circle cx="200" cy="200" r="82" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />

//       {/* Ring C – 8 petals */}
//       {petalRing(8, 50, 86, 18, ['#FFD700','#E91E8C','#8B00FF','#00BFA5','#FF6200','#FF4500','#FFD700','#E91E8C'])}
//       {/* Ring C′ – 8 slim accent petals offset 22.5° */}
//       {petalRing(8, 54, 80, 8, ['#E91E8C','#8B00FF','#FFD700','#FF6200','#00BFA5','#FF4500','#E91E8C','#8B00FF'], 22.5)}

//       {/* Separator at r=44 */}
//       {dotRing(12, 44, 2.5, ['#8B00FF','#FFD700','#E91E8C','#FF6200','#00BFA5','#FF4500'])}
//       <circle cx="200" cy="200" r="44" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />

//       {/* Ring D – innermost 8 petals offset 22.5° */}
//       {petalRing(8, 18, 48, 13, ['#8B00FF','#FF6200','#E91E8C','#FFD700','#00BFA5','#FF4500','#8B00FF','#FF6200'], 22.5)}
//       {/* Ring D′ – 8 slim petals */}
//       {petalRing(8, 22, 42, 6, ['#FFD700','#E91E8C','#FF6200','#8B00FF','#FF4500','#00BFA5','#FFD700','#E91E8C'])}

//       {/* Center circles */}
//       <circle cx="200" cy="200" r="18" fill="#E91E8C" />
//       <circle cx="200" cy="200" r="12" fill="#FFD700" />
//       <circle cx="200" cy="200" r="7"  fill="#FF6200" />
//       <circle cx="200" cy="200" r="3"  fill="white"   />

//       {/* Outer dot border */}
//       {dotRing(24, 183, 4, ['#E91E8C','#FF6200','#FFD700','#FF4500','#8B00FF','#00BFA5'])}
//     </svg>
//   )
// }

export function FloralDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 300 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-64 h-5 ${className}`}
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="110" y2="10" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
      <path d="M130 10 C130 6 126 4 124 6 C122 8 124 12 128 10 C132 8 134 12 132 14 C130 16 126 14 130 10Z"
        stroke="currentColor" strokeWidth="0.7" fill="none" strokeOpacity="0.7" />
      <path d="M150 10 C150 4 144 2 142 6 C140 10 144 14 148 10 C152 6 156 10 154 14 C152 18 146 16 150 10Z"
        stroke="currentColor" strokeWidth="0.7" fill="none" strokeOpacity="0.9" />
      <path d="M170 10 C170 6 166 4 164 6 C162 8 164 12 168 10 C172 8 174 12 172 14 C170 16 166 14 170 10Z"
        stroke="currentColor" strokeWidth="0.7" fill="none" strokeOpacity="0.7" />
      <line x1="190" y1="10" x2="300" y2="10" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
    </svg>
  )
}

export function ToranPattern({ className = '' }) {
  // A string of hanging marigold/mango leaf shapes
  return (
    <svg
      viewBox="0 0 1000 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 0 Q50 40 100 0 Q150 40 200 0 Q250 40 300 0 Q350 40 400 0 Q450 40 500 0 Q550 40 600 0 Q650 40 700 0 Q750 40 800 0 Q850 40 900 0 Q950 40 1000 0"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeOpacity="0.8"
      />
      {/* Dangling marigolds */}
      {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x) => (
        <g key={x}>
          <line x1={x} y1="20" x2={x} y2="40" stroke="var(--color-primary)" strokeWidth="1.5" />
          <circle cx={x} cy="45" r="5" fill="currentColor" />
          <circle cx={x} cy="55" r="3" fill="var(--color-primary)" />
        </g>
      ))}
      <rect x="0" y="0" width="1000" height="4" fill="var(--color-primary)" />
    </svg>
  )
}

export function Sunflower({ className = '' }) {
  // A stylized sunflower with stem and leaves
  return (
    <svg 
      viewBox="0 0 100 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M50 80 Q45 140 50 200" stroke="#4A7C59" strokeWidth="3" fill="none"/>
      
      {/* Leaves */}
      <path d="M49 130 C20 140 10 110 15 100 C20 115 35 120 48 130" stroke="#4A7C59" strokeWidth="2.5" fill="#4A7C59" fillOpacity="0.4"/>
      <path d="M49 160 C80 150 90 180 85 190 C80 175 65 170 51 160" stroke="#4A7C59" strokeWidth="2.5" fill="#4A7C59" fillOpacity="0.4"/>
      
      {/* Petals */}
      <g stroke="var(--color-accent)" strokeWidth="1.5" fill="var(--color-accent)" fillOpacity="0.8">
        {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map(angle => (
          <ellipse 
            key={angle} 
            cx="50" cy="20" 
            rx="5" ry="22" 
            transform={`rotate(${angle} 50 50)`} 
          />
        ))}
      </g>
      
      {/* Center Seed Disk */}
      <circle cx="50" cy="50" r="16" fill="var(--color-text-dark)" opacity="0.9" />
      
      {/* Subtle inner detail on seed disk */}
      <circle cx="50" cy="50" r="12" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.5" />
    </svg>
  )
}
