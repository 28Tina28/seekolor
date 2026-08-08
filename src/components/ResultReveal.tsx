import { useEffect, useState } from 'react';
import { AnalysisResult } from '../types';

interface ResultRevealProps {
  result: AnalysisResult;
  onComplete: () => void;
}

type RevealStep = 'dark' | 'color-appear' | 'color-blend' | 'building' | 'complete';

export default function ResultReveal({ result, onComplete }: ResultRevealProps) {
  const [step, setStep] = useState<RevealStep>('dark');
  const [showContent, setShowContent] = useState(false);
  const p = result.matchedPersonality;

  useEffect(() => {
    const t1 = setTimeout(() => setStep('color-appear'), 500);
    const t2 = setTimeout(() => setStep('color-blend'), 2000);
    const t3 = setTimeout(() => setStep('building'), 3500);
    const t4 = setTimeout(() => {
      setStep('complete');
      setShowContent(true);
    }, 5000);
    const t5 = setTimeout(() => onComplete(), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* Dark screen */}
      {step === 'dark' && (
        <div className="absolute inset-0 bg-black animate-pulse" />
      )}

      {/* Color appears */}
      {step !== 'dark' && (
        <div
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out`}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${p.primaryColor}80 0%, transparent 70%)`,
            opacity: step === 'color-appear' || step === 'color-blend' ? 0.8 : 0.4,
            transform: `scale(${step === 'color-appear' ? 0.3 : 1.5})`,
          }}
        />
      )}

      {/* Color blend */}
      {(step === 'color-blend' || step === 'building' || step === 'complete') && (
        <div
          className="absolute inset-0 transition-all duration-[3000ms] ease-out"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, ${p.primaryColor}60 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, ${p.secondaryColor}60 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, ${p.accentColor}40 0%, transparent 60%)
            `,
            opacity: 0.9,
          }}
        />
      )}

      {/* Building outline */}
      {(step === 'building' || step === 'complete') && (
        <div
          className="absolute inset-0 transition-all duration-[2000ms] ease-out flex items-center justify-center"
          style={{ opacity: step === 'building' ? 0.6 : 1 }}
        >
          {/* Architectural building frame */}
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30" />
            <div className="absolute left-0 bottom-0 w-1 h-full bg-white/20" />
            <div className="absolute right-0 bottom-0 w-1 h-full bg-white/20" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
            {/* Window/door opening */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-32 md:w-24 md:h-40"
              style={{
                background: `linear-gradient(to top, ${p.primaryColor}80, ${p.secondaryColor}40)`,
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
              }}
            />
            {/* Arch */}
            <div
              className="absolute top-[15%] left-1/2 -translate-x-1/2 w-32 h-20 md:w-40 md:h-24 rounded-t-full"
              style={{
                border: `1px solid ${p.accentColor}60`,
                borderBottom: 'none',
              }}
            />
            {/* Window frames */}
            <div className="absolute top-[30%] left-[15%] w-12 h-16 md:w-16 md:h-20 border border-white/10" />
            <div className="absolute top-[30%] right-[15%] w-12 h-16 md:w-16 md:h-20 border border-white/10" />
          </div>
        </div>
      )}

      {/* Final reveal content */}
      {showContent && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 animate-[fadeIn_1.5s_ease-out]"
          style={{ background: `radial-gradient(ellipse at center, ${p.primaryColor}30 0%, transparent 70%, black 100%)` }}
        >
          <div className="text-center max-w-md">
            <p className="text-[10px] tracking-[0.3em] text-white/30 mb-4">YOUR COLOR PERSONALITY</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-3">
              {p.name}
            </h2>
            <p className="text-sm font-light text-white/50 leading-relaxed mb-8 max-w-xs mx-auto">
              {p.description}
            </p>

            {/* Color stripe */}
            <div className="flex h-1 w-48 mx-auto mb-6">
              {p.palette.map((color, i) => (
                <div key={i} className="flex-1" style={{ backgroundColor: color }} />
              ))}
            </div>

            <p className="text-[10px] tracking-[0.3em] text-white/20 animate-pulse">
              正在进入你的色彩空间...
            </p>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
