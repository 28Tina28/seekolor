import { useState, useCallback } from 'react';
import { AppPhase, ColorData, AnalysisResult } from './types';
import Entrance from './components/Entrance';
import Test from './components/Test';
import ResultReveal from './components/ResultReveal';
import ColorSpace from './components/ColorSpace';
import { analyzeChoices } from './utils/algorithm';

export default function App() {
  const [phase, setPhase] = useState<AppPhase>('entrance');
  const [choices, setChoices] = useState<ColorData[]>([]);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleEnter = useCallback(() => {
    setPhase('test');
  }, []);

  const handleTestComplete = useCallback((allChoices: ColorData[]) => {
    setChoices(allChoices);
    const analysis = analyzeChoices(allChoices);
    setResult(analysis);
    setPhase('result-reveal');
  }, []);

  const handleRevealComplete = useCallback(() => {
    setPhase('color-space');
  }, []);

  const handleRestart = useCallback(() => {
    setChoices([]);
    setResult(null);
    setPhase('entrance');
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      <div className="noise-overlay" />
      {phase === 'entrance' && <Entrance onEnter={handleEnter} />}
      {phase === 'test' && (
        <Test onComplete={handleTestComplete} />
      )}
      {phase === 'result-reveal' && result && (
        <ResultReveal result={result} onComplete={handleRevealComplete} />
      )}
      {phase === 'color-space' && result && (
        <ColorSpace result={result} onRestart={handleRestart} />
      )}
    </div>
  );
}
