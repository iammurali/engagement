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

export function MandalaBg({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      <circle cx="200" cy="200" r="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 200 + 20 * Math.cos(rad)
        const y1 = 200 + 20 * Math.sin(rad)
        const x2 = 200 + 180 * Math.cos(rad)
        const y2 = 200 + 180 * Math.sin(rad)
        return (
          <line
            key={angle}
            x1={x1} y1={y1}
            x2={x2} y2={y2}
            stroke="currentColor"
            strokeWidth="0.4"
            strokeOpacity="0.2"
          />
        )
      })}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 200 + 120 * Math.cos(rad)
        const cy = 200 + 120 * Math.sin(rad)
        return (
          <g key={`petal-${angle}`}>
            <ellipse
              cx={cx} cy={cy}
              rx="14" ry="22"
              transform={`rotate(${angle + 90} ${cx} ${cy})`}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              fill="none"
            />
          </g>
        )
      })}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 200 + 70 * Math.cos(rad)
        const cy = 200 + 70 * Math.sin(rad)
        return (
          <ellipse
            key={`inner-petal-${angle}`}
            cx={cx} cy={cy}
            rx="8" ry="14"
            transform={`rotate(${angle + 90} ${cx} ${cy})`}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            fill="none"
          />
        )
      })}
    </svg>
  )
}

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
