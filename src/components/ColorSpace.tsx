import { useState, useRef, useCallback } from 'react';
import { AnalysisResult } from '../types';
import { hexToRgb } from '../utils/algorithm';

interface ColorSpaceProps {
  result: AnalysisResult;
  onRestart: () => void;
}

export default function ColorSpace({ result, onRestart }: ColorSpaceProps) {
  const [wallHue, setWallHue] = useState(0);
  const [lightIntensity, setLightIntensity] = useState(50);
  const [showShareCard, setShowShareCard] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  const p = result.matchedPersonality;

  const wallColor = `hsl(${(p.primaryColor.match(/#([0-9a-f]{6})/i)?.[1] ? 
    parseInt(p.primaryColor.slice(1,3), 16) : 200) + wallHue}, 30%, ${40 + lightIntensity * 0.15}%)`;

  const accentRgb = hexToRgb(p.accentColor);
  const lightColor = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${lightIntensity / 200})`;

  const handleShare = useCallback(() => {
    setShowShareCard(true);
    setTimeout(() => {
      setShowShareCard(false);
    }, 3000);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-y-auto overflow-x-hidden">
      <div className="min-h-full flex flex-col">
        {/* Hero building space */}
        <div
          className="relative h-[50vh] md:h-[60vh] flex items-end justify-center overflow-hidden"
          style={{ background: p.buildingSpace }}
        >
          {/* Adjustable light overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 30%, ${lightColor}, transparent 60%)`,
            }}
          />
          {/* Building silhouette */}
          <div className="relative z-10 w-full h-full flex flex-col justify-end items-center pb-8 md:pb-12">
            <div className="text-center mb-8">
              <p className="text-[10px] tracking-[0.3em] text-white/30 mb-2">YOUR COLOR SPACE</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white/90">{p.name}</h2>
              <p className="text-xs font-light text-white/40 mt-1 tracking-[0.15em]">{p.mood}</p>
            </div>

            {/* Abstract building */}
            <svg viewBox="0 0 200 180" className="w-48 md:w-56 h-auto opacity-80">
              <rect x="30" y="40" width="140" height="130" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <rect x="50" y="60" width="30" height="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              <rect x="120" y="60" width="30" height="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              <rect x="80" y="50" width="40" height="70" fill={p.primaryColor + '40'} stroke={p.accentColor + '60'} strokeWidth="0.5" rx="2" />
              <rect x="60" y="130" width="80" height="50" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="100" y1="40" x2="100" y2="10" stroke={p.accentColor + '60'} strokeWidth="0.5" />
              <polygon points="70,10 130,10 100,0" fill={p.accentColor + '30'} stroke={p.accentColor + '60'} strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* Color Card section */}
        <div className="px-4 md:px-8 -mt-8 relative z-20">
          <div className="max-w-3xl mx-auto">
            {/* Color card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm p-6 md:p-8 mb-4">
              {/* Collision color card */}
              <div className="flex h-32 md:h-40 mb-6 rounded-sm overflow-hidden">
                <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: p.primaryColor }}>
                  <span className="text-[10px] tracking-[0.2em] text-white/40">{p.primaryColor}</span>
                </div>
                <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: p.secondaryColor }}>
                  <span className="text-[10px] tracking-[0.2em] text-white/60">{p.secondaryColor}</span>
                </div>
              </div>

              {/* Palette */}
              <div className="flex gap-2 mb-6">
                {p.palette.map((color, i) => (
                  <div
                    key={i}
                    className="flex-1 h-6 rounded-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>

              {/* Personality info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/30 mb-2">材质</p>
                  <div className="flex flex-wrap gap-2">
                    {p.materials.map((m, i) => (
                      <span key={i} className="text-xs text-white/50 px-3 py-1 bg-white/5 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/30 mb-2">关键词</p>
                  <div className="flex flex-wrap gap-2">
                    {p.keywords.map((k, i) => (
                      <span key={i} className="text-xs text-white/50 px-3 py-1 bg-white/5 rounded-full">{k}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs font-light text-white/40 leading-relaxed">{p.description}</p>
            </div>

            {/* Interactive controls */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm p-6 md:p-8 mb-4">
              <p className="text-[10px] tracking-[0.2em] text-white/30 mb-4">空间调整</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-white/30 mb-2">
                    <span>墙面色调</span>
                    <span>{wallHue > 0 ? `+${wallHue}°` : `${wallHue}°`}</span>
                  </div>
                  <input
                    type="range"
                    min="-30"
                    max="30"
                    value={wallHue}
                    onChange={(e) => setWallHue(Number(e.target.value))}
                    className="w-full h-0.5 bg-white/10 appearance-none cursor-pointer accent-white/50"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs text-white/30 mb-2">
                    <span>光线强度</span>
                    <span>{lightIntensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={lightIntensity}
                    onChange={(e) => setLightIntensity(Number(e.target.value))}
                    className="w-full h-0.5 bg-white/10 appearance-none cursor-pointer accent-white/50"
                  />
                </div>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm p-6 md:p-8 mb-4">
              <p className="text-[10px] tracking-[0.2em] text-white/30 mb-4">颜色逻辑</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/5 p-3 rounded-sm">
                  <p className="text-white/20 text-[10px] mb-1">色相</p>
                  <p className="text-white/60">{Math.round(result.dominantHue)}°</p>
                </div>
                <div className="bg-white/5 p-3 rounded-sm">
                  <p className="text-white/20 text-[10px] mb-1">饱和度</p>
                  <p className="text-white/60">{Math.round(result.avgSaturation)}%</p>
                </div>
                <div className="bg-white/5 p-3 rounded-sm">
                  <p className="text-white/20 text-[10px] mb-1">明度</p>
                  <p className="text-white/60">{Math.round(result.avgBrightness)}%</p>
                </div>
                <div className="bg-white/5 p-3 rounded-sm">
                  <p className="text-white/20 text-[10px] mb-1">冷暖</p>
                  <p className="text-white/60">{result.warmthScore > 0 ? '偏暖' : '偏冷'} ({Math.round(result.warmthScore)})</p>
                </div>
                <div className="bg-white/5 p-3 rounded-sm">
                  <p className="text-white/20 text-[10px] mb-1">偏好的风格</p>
                  <p className="text-white/60 text-[10px]">{result.preferredStyle}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-sm">
                  <p className="text-white/20 text-[10px] mb-1">偏好的材质</p>
                  <p className="text-white/60 text-[10px]">{result.preferredMaterial}</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pb-8">
              <button
                onClick={handleShare}
                className="flex-1 py-3 text-xs tracking-[0.15em] text-white/60 border border-white/20 rounded-full
                  hover:bg-white/5 hover:text-white/80 hover:border-white/40 transition-all duration-500"
              >
                保存分享卡
              </button>
              <button
                onClick={onRestart}
                className="flex-1 py-3 text-xs tracking-[0.15em] text-white/30 border border-white/10 rounded-full
                  hover:bg-white/5 hover:text-white/50 hover:border-white/20 transition-all duration-500"
              >
                重新探索
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Share card overlay */}
      {showShareCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div
            ref={shareRef}
            className="w-[350px] max-w-full bg-gradient-to-b from-black to-gray-900 border border-white/10 rounded-sm overflow-hidden shadow-2xl"
            style={{ aspectRatio: '9/16' }}
          >
            <div className="h-full flex flex-col">
              {/* Color area */}
              <div className="flex-1 flex flex-col items-center justify-center p-8" style={{ background: `linear-gradient(180deg, ${p.primaryColor}99 0%, ${p.primaryColor} 50%, ${p.secondaryColor} 100%)` }}>
                <p className="text-[8px] tracking-[0.4em] text-white/30 mb-4">COLOR AI</p>
                <h2 className="text-3xl md:text-3xl font-light tracking-wider text-white text-center">{p.name}</h2>
                <p className="text-xs font-light text-white/40 mt-2 text-center">{p.mood}</p>
                <div className="flex h-0.5 w-24 mt-4">
                  {p.palette.slice(0, 3).map((c, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
              {/* Info area */}
              <div className="p-6 bg-black/80">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {p.keywords.slice(0, 4).map((k, i) => (
                    <span key={i} className="text-[8px] tracking-[0.15em] text-white/40 px-2 py-0.5 bg-white/5 rounded-full">{k}</span>
                  ))}
                </div>
                <p className="text-[9px] text-white/30 font-light leading-relaxed">{p.description}</p>
                <p className="text-[8px] text-white/10 mt-4 text-center tracking-[0.2em]">
                  color-ai.vercel.app
                </p>
              </div>
            </div>
          </div>
          <p className="absolute bottom-8 text-[10px] tracking-[0.2em] text-white/30">
            截图保存即可分享
          </p>
        </div>
      )}
    </div>
  );
}
