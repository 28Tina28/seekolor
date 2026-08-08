import { ColorData, ColorPersonality, AnalysisResult } from '../types';
import { personalities } from '../data/personalities';

function hueDistance(h1: number, h2: number): number {
  const d = Math.abs(h1 - h2);
  return Math.min(d, 360 - d);
}

function colorDistance(cd1: ColorData, cd2: ColorData): number {
  const hDist = hueDistance(cd1.hue, cd2.hue) / 180;
  const sDist = Math.abs(cd1.saturation - cd2.saturation) / 100;
  const bDist = Math.abs(cd1.brightness - cd2.brightness) / 100;
  const wDist = Math.abs(cd1.warmth - cd2.warmth) / 200;
  return hDist * 0.35 + sDist * 0.25 + bDist * 0.2 + wDist * 0.2;
}

function personalityToColorData(p: ColorPersonality): ColorData {
  const hex = p.primaryColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  const l = (max + min) / 2;
  const s = max === min ? 0 : (l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min));
  let h = 0;
  if (max !== min) {
    const d = max - min;
    if (max === r / 255) h = ((g / 255 - b / 255) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g / 255) h = ((b / 255 - r / 255) / d + 2) * 60;
    else h = ((r / 255 - g / 255) / d + 4) * 60;
  }
  const warmth = (r - b) / 2.55;
  return {
    hue: h, saturation: s * 100, brightness: l * 100,
    warmth: Math.max(-100, Math.min(100, warmth)),
    contrast: 20 + Math.abs(r - g) / 7 + Math.abs(g - b) / 7,
  };
}

export function analyzeChoices(choices: ColorData[]): AnalysisResult {
  const n = choices.length;
  if (n === 0) {
    const defaultP = personalities[0];
    return {
      dominantHue: 0, avgSaturation: 0, avgBrightness: 0,
      warmthScore: 0, contrastScore: 0,
      preferredStyle: '未知', preferredMaterial: '未知', preferredLight: '未知',
      matchedPersonality: defaultP, confidence: 0, choiceHistory: [],
    };
  }

  const sumHueSin = choices.reduce((s, c) => s + Math.sin(c.hue * Math.PI / 180), 0);
  const sumHueCos = choices.reduce((s, c) => s + Math.cos(c.hue * Math.PI / 180), 0);
  const dominantHue = (Math.atan2(sumHueSin, sumHueCos) * 180 / Math.PI + 360) % 360;
  const avgSaturation = choices.reduce((s, c) => s + c.saturation, 0) / n;
  const avgBrightness = choices.reduce((s, c) => s + c.brightness, 0) / n;
  const warmthScore = choices.reduce((s, c) => s + c.warmth, 0) / n;
  const contrastScore = choices.reduce((s, c) => s + c.contrast, 0) / n;

  const styleCounts: Record<string, number> = {};
  choices.forEach(c => {
    const style = c.spaceData?.style || '';
    styleCounts[style] = (styleCounts[style] || 0) + 1;
  });
  const preferredStyle = Object.entries(styleCounts)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  const materialCounts: Record<string, number> = {};
  choices.forEach(c => {
    const mat = c.spaceData?.material || '';
    materialCounts[mat] = (materialCounts[mat] || 0) + 1;
  });
  const preferredMaterial = Object.entries(materialCounts)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  const lightCounts: Record<string, number> = {};
  choices.forEach(c => {
    const light = c.spaceData?.light || '';
    lightCounts[light] = (lightCounts[light] || 0) + 1;
  });
  const preferredLight = Object.entries(lightCounts)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  const avgColorData: ColorData = {
    hue: dominantHue, saturation: avgSaturation,
    brightness: avgBrightness, warmth: warmthScore, contrast: contrastScore,
  };

  let bestPersonality: ColorPersonality = personalities[0];
  let bestDist = Infinity;
  for (const p of personalities) {
    const pColor = personalityToColorData(p);
    const dist = colorDistance(avgColorData, pColor);
    if (dist < bestDist) { bestDist = dist; bestPersonality = p; }
  }

  const confidence = Math.max(0, Math.min(100, (1 - bestDist) * 100));

  return {
    dominantHue, avgSaturation, avgBrightness, warmthScore, contrastScore,
    preferredStyle, preferredMaterial, preferredLight,
    matchedPersonality: bestPersonality, confidence, choiceHistory: choices,
  };
}

export function rgbFromHue(hue: number): string {
  const h = hue / 60;
  const x = 1 - Math.abs(h % 2 - 1);
  let r = 0, g = 0, b = 0;
  if (h < 1) { r = 1; g = x; }
  else if (h < 2) { r = x; g = 1; }
  else if (h < 3) { g = 1; b = x; }
  else if (h < 4) { g = x; b = 1; }
  else if (h < 5) { r = x; b = 1; }
  else { r = 1; b = x; }
  const toHex = (n: number) => Math.round(n * 180 + 75).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return `#${clamp(r).toString(16).padStart(2, '0')}${clamp(g).toString(16).padStart(2, '0')}${clamp(b).toString(16).padStart(2, '0')}`;
}
