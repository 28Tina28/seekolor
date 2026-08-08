import { useState, useCallback, useEffect, useRef } from 'react';
import { questions } from '../data/questions';
import { ColorData } from '../types';

interface TestProps {
  onComplete: (choices: ColorData[]) => void;
}

export default function Test({ onComplete }: TestProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<ColorData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = questions.length;
  const question = questions[currentIdx];
  const progress = ((currentIdx) / total) * 100;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [currentIdx]);

  const handleSelect = useCallback((choiceId: string, colorData: ColorData) => {
    if (transitioning) return;
    setSelectedId(choiceId);
    setTransitioning(true);
    setTimeout(() => {
      const newChoices = [...selectedChoices, colorData];
      if (currentIdx + 1 >= total) {
        onComplete(newChoices);
      } else {
        setSelectedChoices(newChoices);
        setCurrentIdx(currentIdx + 1);
        setSelectedId(null);
        setTransitioning(false);
      }
    }, 400);
  }, [currentIdx, selectedChoices, onComplete, transitioning]);

  if (!question) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 bg-black overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Progress bar */}
        <div className="sticky top-0 z-40 px-4 pt-4 pb-2 bg-gradient-to-b from-black/90 to-transparent">
          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-[0.2em] text-white/40 w-14 shrink-0">
              {currentIdx + 1} / {total}
            </span>
            <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div
                className="h-full bg-white/50 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex flex-col px-4 md:px-8 pb-4">
          <div className="max-w-lg mx-auto w-full flex-1 flex flex-col justify-center gap-4 md:gap-6">
            {/* Prompt */}
            <div className="text-center">
              <p className="text-xs tracking-[0.2em] text-white/25 mb-2">
                凭直觉选择最吸引你的空间
              </p>
              <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/85 leading-relaxed">
                {question.prompt}
              </h2>
            </div>

            {/* 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto w-full">
              {question.choices.map((choice) => {
                const isSelected = selectedId === choice.id;
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelect(choice.id, choice.colorData)}
                    className={`
                      relative group cursor-pointer overflow-hidden rounded-sm
                      transition-all duration-400 ease-out
                      ${isSelected ? 'scale-[0.97] opacity-0' : 'hover:scale-[1.03] hover:shadow-lg hover:shadow-white/5'}
                      ${transitioning && !isSelected ? 'opacity-20 scale-95' : 'opacity-100'}
                    `}
                    style={{ aspectRatio: '4 / 5' }}
                    disabled={transitioning}
                  >
                    {/* Gradient background */}
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: choice.gradient }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Description */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="block text-xs md:text-sm font-light text-white/70 leading-snug text-left drop-shadow-sm">
                        {choice.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
