// Fixed animated backdrop: drifting glow orbs, a slowly moving grid,
// rising particles and light streaks. Pure CSS transforms, so it stays smooth.

const orbs = [
  { size: 520, color: 'rgba(124, 58, 237, 0.55)', top: '-8%', left: '-6%', delay: '0s', dur: '28s' },
  { size: 600, color: 'rgba(14, 165, 233, 0.40)', top: '30%', left: '70%', delay: '-6s', dur: '32s' },
  { size: 460, color: 'rgba(45, 212, 191, 0.28)', top: '70%', left: '10%', delay: '-12s', dur: '26s' },
  { size: 420, color: 'rgba(236, 72, 153, 0.22)', top: '85%', left: '65%', delay: '-18s', dur: '30s' },
  { size: 380, color: 'rgba(99, 102, 241, 0.35)', top: '45%', left: '35%', delay: '-9s', dur: '34s' },
];

// Fixed pseudo-random layout so particles don't jump between renders.
const particles = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 1 + ((i * 7) % 3),
  delay: `-${(i * 1.7) % 18}s`,
  dur: `${14 + ((i * 5) % 12)}s`,
  color: ['#c4b5fd', '#7dd3fc', '#5eead4'][i % 3],
}));

const streaks = [
  { top: '18%', delay: '0s', dur: '7s' },
  { top: '42%', delay: '-2.5s', dur: '9s' },
  { top: '66%', delay: '-5s', dur: '8s' },
  { top: '84%', delay: '-1s', dur: '10s' },
];

export default function Background() {
  return (
    <div aria-hidden className="bg-fx">
      {orbs.map((o, i) => (
        <span
          key={i}
          className="bg-orb"
          style={{ width: o.size, height: o.size, top: o.top, left: o.left, background: `radial-gradient(circle, ${o.color}, transparent 65%)`, animationDelay: o.delay, animationDuration: o.dur }}
        />
      ))}
      <div className="bg-grid" />
      {streaks.map((s, i) => (
        <span key={i} className="bg-streak" style={{ top: s.top, animationDelay: s.delay, animationDuration: s.dur }} />
      ))}
      {particles.map((p, i) => (
        <span
          key={i}
          className="bg-particle"
          style={{ left: p.left, width: p.size, height: p.size, background: p.color, boxShadow: `0 0 8px ${p.color}`, animationDelay: p.delay, animationDuration: p.dur }}
        />
      ))}
      <div className="bg-vignette" />
    </div>
  );
}
